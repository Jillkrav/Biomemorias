import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import { motion } from 'framer-motion';

import { getConvexHull, calculateDistance, findClusters } from '../utils/clustering';

const InteractiveMap = ({ markers, onMapClick, onCancelMarker, tempIcon = '📍', onUpdateTempIcon, focusZoneName }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const tempMarkerRef = useRef(null);
  const drawnPolygonsRef = useRef(null); // FeatureGroup for yellow polygons
  const zoneLayersRef = useRef([]); // [{ id, name, layer, vertices: [[lat,lng],...]}]
  const zoneNamesRef = useRef(new Set());
  const [loadingZones, setLoadingZones] = useState(false);

  // Valparaíso Region Bounds (Approximate)
  const valparaisoBounds = [
    [-33.9, -72.0], // Southwest
    [-32.0, -70.0]  // Northeast
  ];

  // Function to create temp marker icon HTML
  const createTempIconHtml = (icon) => {
    // Check if icon is an image URL or emoji
    const isImage = typeof icon === 'string' && (icon.startsWith('/') || icon.startsWith('http') || icon.includes('assets'));

    return `
      <div style="
        background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #ffffff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        animation: pulse 1.5s ease-in-out infinite;
        overflow: hidden;
      ">
        ${isImage
        ? `<img src="${icon}" style="
              width: 22px;
              height: 22px;
              object-fit: cover;
              border-radius: 50%;
              transform: rotate(45deg);
            " />`
        : `<span style="
              transform: rotate(45deg);
              font-size: 20px;
              filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
            ">${icon}</span>`
      }
      </div>
    `;
  };

  useEffect(() => {
    console.log('🗺️ InteractiveMap: Initialization useEffect triggered');
    if (mapInstanceRef.current || !mapRef.current) {
      console.log('🗺️ InteractiveMap: Map already initialized or ref not ready, skipping');
      return;
    }

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [-33.0472, -71.6127], // Valparaíso centro
      zoom: 9,
      minZoom: 8,
      maxBounds: [
        [-34.5, -72.5], // Extended bounds to allow some panning
        [-31.5, -69.5]
      ],
      maxBoundsViscosity: 1.0,
      zoomControl: false // We'll add it manually to position it better if needed
    });

    mapInstanceRef.current = map;

    // Add Zoom Control
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map);

    // Add Tile Layer - CartoDB Voyager (Light, friendly, good for general audiences)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Highlight Valparaíso Region Boundary
    L.rectangle(valparaisoBounds, {
      color: '#059669', // Emerald 600
      weight: 3,
      fillColor: '#34d399', // Emerald 400
      fillOpacity: 0.1,
      dashArray: '10, 10',
      lineCap: 'round'
    }).addTo(map);

    // Right-click event listener
    map.on('contextmenu', (e) => {
      // Remove previous temporary marker if exists
      if (tempMarkerRef.current) {
        map.removeLayer(tempMarkerRef.current);
      }

      // Create temporary marker with pin icon (amber/yellow color to indicate it's temporary)
      const tempIconHtml = createTempIconHtml('📍');

      const tempIconDiv = L.divIcon({
        html: tempIconHtml,
        className: 'temp-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
      });

      const tempMarker = L.marker([e.latlng.lat, e.latlng.lng], {
        icon: tempIconDiv
      });

      tempMarker.addTo(map);
      tempMarkerRef.current = tempMarker;

      // Call the onMapClick callback
      if (onMapClick) {
        onMapClick(e.latlng);
      }

      // Extend: increment count if inside a yellow polygon
      try {
        const hitZones = zoneLayersRef.current.filter((z) => pointInPolygon([e.latlng.lat, e.latlng.lng], z.vertices));
        if (hitZones.length === 1) {
          const zone = hitZones[0];
          fetch(`/api/localizaciones/${zone.id}/incrementar`, {
            method: 'PUT'
          }).catch((err) => console.error('Increment error:', err));
        }
      } catch (err) {
        console.error('Inside-check error:', err);
      }
    });

    // Initialize markers layer
    const markersLayer = L.layerGroup().addTo(map);
    markersLayerRef.current = markersLayer;

    // Initialize feature group for drawn yellow polygons
    const drawn = new L.FeatureGroup();
    drawn.addTo(map);
    drawnPolygonsRef.current = drawn;

    // Add draw control (polygon only)
    const drawControl = new L.Control.Draw({
      position: 'topright',
      edit: {
        featureGroup: drawn,
        edit: false,
        remove: false
      },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: false,
          shapeOptions: {
            color: '#FFFF00',
            weight: 1,
            opacity: 0.3,
            fillColor: 'rgba(255, 255, 0, 0.15)',
            fillOpacity: 0.15
          }
        },
        marker: false,
        polyline: false,
        rectangle: false,
        circle: false,
        circlemarker: false
      }
    });
    map.addControl(drawControl);

    // Handle polygon creation
    map.on(L.Draw.Event.CREATED, async (event) => {
      const layer = event.layer;
      if (!(layer instanceof L.Polygon)) return;

      const latlngsNested = layer.getLatLngs();
      const latlngs = Array.isArray(latlngsNested[0]) ? latlngsNested[0] : latlngsNested; // outer ring
      const vertices = latlngs.map((p) => [Number(p.lat), Number(p.lng)]);

      const name = await promptUniqueName(zoneNamesRef.current);
      if (!name) {
        return; // canceled
      }

      const centroid = computeCentroid(vertices);
      const coordStr = `${centroid[0].toFixed(2)},${centroid[1].toFixed(2)}`;

      try {
        const resp = await fetch('/api/localizaciones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nombre_localizacion: name, coordenadas: coordStr, vertices })
        });
        if (!resp.ok) {
          if (resp.status === 409) {
            alert('Nombre duplicado. Intenta con otro.');
          } else {
            alert('Error guardando la zona.');
          }
          return;
        }
        const record = await resp.json();

        // Style and add layer to feature group
        layer.setStyle({ color: '#FFFF00', weight: 1, opacity: 0.3, fillColor: 'rgba(255, 255, 0, 0.15)', fillOpacity: 0.15 });
        drawn.addLayer(layer);

        // Add name label at centroid
        const label = L.marker([centroid[0], centroid[1]], {
          icon: L.divIcon({
            className: 'zone-label',
            html: `<div style="color: rgba(0,0,0,0.4); font-size: 13px; font-weight: 600; background: rgba(255,255,255,0.0); padding: 2px 4px; border-radius: 4px;">${escapeHtml(record.Nombre_localizacion)}</div>`
          }),
          interactive: false
        }).addTo(map);

        // Track layer metadata
        zoneLayersRef.current.push({ id: record.ID_localizacion, name: record.Nombre_localizacion, layer, vertices });
        zoneNamesRef.current.add(record.Nombre_localizacion);

      } catch (err) {
        console.error('Error al guardar zona:', err);
        alert('Error de red guardando la zona.');
      }
    });

    // Load existing zones from backend
    (async () => {
      setLoadingZones(true);
      try {
        const resp = await fetch('/api/localizaciones');
        if (resp.ok) {
          const data = await resp.json();
          data.forEach((z) => {
            try {
              const verts = z.Vertices ? JSON.parse(z.Vertices) : null;
              if (!verts || !Array.isArray(verts) || verts.length < 3) return;

              const polygon = L.polygon(verts, {
                color: '#FFFF00',
                weight: 1,
                opacity: 0.3,
                fillColor: 'rgba(255, 255, 0, 0.15)',
                fillOpacity: 0.15
              }).addTo(drawn);

              // label using Coordenadas center if present
              let centerLatLng = null;
              if (z.Coordenadas && typeof z.Coordenadas === 'string' && z.Coordenadas.includes(',')) {
                const [latS, lngS] = z.Coordenadas.split(',');
                const la = Number(latS);
                const ln = Number(lngS);
                if (!Number.isNaN(la) && !Number.isNaN(ln)) centerLatLng = [la, ln];
              }
              const centroid = centerLatLng || computeCentroid(verts);
              L.marker([centroid[0], centroid[1]], {
                icon: L.divIcon({
                  className: 'zone-label',
                  html: `<div style="color: rgba(0,0,0,0.4); font-size: 13px; font-weight: 600; background: rgba(255,255,255,0.0); padding: 2px 4px; border-radius: 4px;">${escapeHtml(z.Nombre_localizacion)}</div>`
                }),
                interactive: false
              }).addTo(map);

              zoneLayersRef.current.push({ id: z.ID_localizacion, name: z.Nombre_localizacion, layer: polygon, vertices: verts });
              zoneNamesRef.current.add(z.Nombre_localizacion);
            } catch (e) {
              console.warn('Skip malformed zone:', e);
            }
          });
        }
      } catch (e) {
        console.error('Error cargando zonas:', e);
      } finally {
        setLoadingZones(false);
      }
    })();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []); // Empty dependency array ensures this runs only once

  // Update markers when the prop changes
  useEffect(() => {
    console.log('🔍 InteractiveMap: Markers useEffect triggered', { markersCount: markers.length });
    if (!markersLayerRef.current) {
      console.log('🔍 InteractiveMap: markersLayerRef not ready, skipping');
      return;
    }

    console.log('🧹 InteractiveMap: Clearing markers layer');
    markersLayerRef.current.clearLayers();

    // Draw Convex Hull Polygon for clusters
    const clusters = findClusters(markers, 0.4); // 5km max distance

    clusters.forEach(clusterMarkers => {
      if (clusterMarkers.length >= 3) {
        try {
          const hullMarkers = getConvexHull(clusterMarkers);
          const hullLatLngs = hullMarkers.map(m => [m.latitude, m.longitude]);

          L.polygon(hullLatLngs, {
            color: '#3b82f6', // Blue 500
            weight: 3,
            fillColor: '#60a5fa', // Blue 400
            fillOpacity: 0.2,
            lineCap: 'round',
            lineJoin: 'round',
            dashArray: '5, 10'
          }).addTo(markersLayerRef.current);

          // Add interactive invisible lines for distance tooltips
          for (let i = 0; i < hullLatLngs.length; i++) {
            const p1 = hullLatLngs[i];
            const p2 = hullLatLngs[(i + 1) % hullLatLngs.length]; // Wrap around to first point
            const dist = calculateDistance(p1[0], p1[1], p2[0], p2[1]);

            // Create an invisible thicker line for easier hovering
            L.polyline([p1, p2], {
              color: 'transparent',
              weight: 20, // Thicker for easier hover
              opacity: 0
            })
              .bindTooltip(`${dist.toFixed(2)} km`, {
                sticky: true,
                direction: 'center',
                className: 'custom-distance-tooltip',
                opacity: 1
              })
              .addTo(markersLayerRef.current);
          }
        } catch (error) {
          console.error("Error calculating convex hull for cluster:", error);
        }
      }
    });

    markers.forEach((marker) => {
      // Check if marker.icon is an image URL or emoji
      const isImage = typeof marker.icon === 'string' && (marker.icon.startsWith('/') || marker.icon.startsWith('http') || marker.icon.includes('assets'));

      const iconHtml = `
        <div style="
          background: linear-gradient(135deg, #34d399 0%, #06b6d4 100%);
          width: 40px;
          height: 40px;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          border: 3px solid #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        ">
          ${isImage
          ? `<img src="${marker.icon}" style="
                width: 22px;
                height: 22px;
                object-fit: cover;
                border-radius: 50%;
                transform: rotate(45deg);
              " />`
          : `<span style="
                transform: rotate(45deg);
                font-size: 20px;
                filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
              ">${marker.icon || '📍'}</span>`
        }
        </div>
      `;

      const customIcon = L.divIcon({
        html: iconHtml,
        className: 'custom-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });

      const leafletMarker = L.marker([marker.latitude, marker.longitude], {
        icon: customIcon
      });

      // Create popup content with image or emoji
      const iconDisplay = isImage
        ? `<img src="${marker.icon}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px;" />`
        : `<span style="font-size: 32px;">${marker.icon || '📍'}</span>`;

      const popupContent = `
        <div style="
          background: #ffffff;
          border: 2px solid #34d399;
          border-radius: 12px;
          padding: 16px;
          min-width: 200px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          position: relative;
        ">
          <button 
            onclick="this.closest('.leaflet-popup').querySelector('.leaflet-popup-close-button').click()"
            style="
              position: absolute;
              top: 8px;
              right: 8px;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
              border: 2px solid #ffffff;
              color: white;
              font-size: 16px;
              font-weight: bold;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.2s ease;
              padding: 0;
              line-height: 1;
            "
            onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 4px 8px rgba(0, 0, 0, 0.3)';"
            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 2px 4px rgba(0, 0, 0, 0.2)';"
          >×</button>
          <div style="
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 12px;
            padding-right: 24px;
          ">
            ${iconDisplay}
            <h3 style="
              margin: 0;
              font-size: 18px;
              font-weight: bold;
              color: #059669;
            ">${marker.name}</h3>
          </div>
          <p style="
            margin: 0;
            color: #475569;
            font-size: 14px;
            line-height: 1.5;
          ">${marker.description}</p>
          <div style="
            margin-top: 12px;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            gap: 8px;
            font-size: 12px;
            color: #64748b;
          ">
            <span>📍 ${marker.latitude.toFixed(2)}, ${marker.longitude.toFixed(2)}</span>
          </div>
        </div>
      `;

      leafletMarker.bindPopup(popupContent, {
        maxWidth: 300,
        className: 'custom-popup',
        closeButton: true // Enable default close button (hidden via CSS) to allow custom X button to work
      });

      leafletMarker.addTo(markersLayerRef.current);
    });
  }, [markers]);

  // Remove temporary marker when a permanent marker is added
  useEffect(() => {
    if (markers.length > 0 && tempMarkerRef.current && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(tempMarkerRef.current);
      tempMarkerRef.current = null;
    }
  }, [markers]);

  // Remove temporary marker when cancel is triggered
  useEffect(() => {
    if (onCancelMarker) {
      // Expose the cancel function that can access current refs
      onCancelMarker.current = () => {
        if (tempMarkerRef.current && mapInstanceRef.current) {
          mapInstanceRef.current.removeLayer(tempMarkerRef.current);
          tempMarkerRef.current = null;
        }
      };
    }
  }, [onCancelMarker]);

  // Focus map on a zone by name
  useEffect(() => {
    if (!focusZoneName || !mapInstanceRef.current) return;
    const normalize = (s) => s.toString().normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
    const target = normalize(focusZoneName);
    const match = zoneLayersRef.current.find(z => normalize(z.name) === target);
    if (match) {
      const layer = match.layer;
      try {
        if (layer && layer.getBounds) {
          mapInstanceRef.current.fitBounds(layer.getBounds(), { padding: [20, 20] });
        } else if (match.vertices && Array.isArray(match.vertices)) {
          const centroid = computeCentroid(match.vertices);
          mapInstanceRef.current.setView([centroid[0], centroid[1]], 12);
        }
      } catch (e) {
        // ignore focusing errors
      }
    }
  }, [focusZoneName]);

  // Update temporary marker icon when tempIcon changes
  useEffect(() => {
    if (tempMarkerRef.current && mapInstanceRef.current && tempIcon) {
      const newIconHtml = createTempIconHtml(tempIcon);
      const newIcon = L.divIcon({
        html: newIconHtml,
        className: 'temp-marker',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
      });
      tempMarkerRef.current.setIcon(newIcon);
    }
  }, [tempIcon]);

  // Expose function to update temp icon
  useEffect(() => {
    if (onUpdateTempIcon) {
      onUpdateTempIcon.current = (icon) => {
        if (tempMarkerRef.current && mapInstanceRef.current) {
          const newIconHtml = createTempIconHtml(icon);
          const newIcon = L.divIcon({
            html: newIconHtml,
            className: 'temp-marker',
            iconSize: [40, 40],
            iconAnchor: [20, 40]
          });
          tempMarkerRef.current.setIcon(newIcon);
        }
      };
    }
  }, [onUpdateTempIcon]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[600px] rounded-2xl overflow-hidden border-4 border-white shadow-xl"
    >
      <div ref={mapRef} className="w-full h-full z-10" />
      <div className="absolute top-3 left-3 z-20 flex gap-2">
        <button
          onClick={() => window.open('/api/localizaciones/export', '_blank')}
          className="px-3 py-1 rounded-md bg-white/90 text-[#006b6e] border border-[#e5ce8c] shadow hover:bg-white"
          title="Exportar CSV"
        >
          Exportar CSV
        </button>
      </div>
      <style>{`
        .leaflet-container {
          background: #f0fdf4 !important; /* Light green background */
          font-family: 'DM Sans', sans-serif !important;
        }
        .leaflet-popup-content-wrapper {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-tip {
          background: #34d399 !important;
        }
        .custom-marker, .temp-marker {
          background: transparent !important;
          border: none !important;
        }
        .leaflet-control-zoom {
          border: 2px solid #ffffff !important;
          border-radius: 12px !important;
          overflow: hidden !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
          margin-bottom: 20px !important;
          margin-right: 20px !important;
        }
        .leaflet-control-zoom a {
          background: #ffffff !important;
          color: #059669 !important;
          border: none !important;
          border-bottom: 1px solid #e2e8f0 !important;
          font-size: 18px !important;
          font-weight: bold !important;
          transition: all 0.2s ease !important;
        }
        .leaflet-control-zoom a:hover {
          background: #ecfdf5 !important;
          color: #047857 !important;
        }
        .leaflet-control-zoom a:last-child {
          border-bottom: none !important;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(-45deg);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1) rotate(-45deg);
          }
        }
        .custom-distance-tooltip {
          background: rgba(255, 255, 255, 0.95) !important;
          border: 1px solid #3b82f6 !important;
          border-radius: 12px !important;
          color: #2563eb !important;
          font-weight: bold !important;
          font-size: 12px !important;
          padding: 4px 8px !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1) !important;
        }
        .leaflet-popup-close-button {
          display: none !important;
        }
        .zone-label { pointer-events: none; }
      `}</style>
    </motion.div>
  );
};

export default InteractiveMap;

// Helpers
function computeCentroid(vertices) {
  // Simple average; vertices: [[lat,lng], ...]
  const n = vertices.length;
  const sum = vertices.reduce((acc, [la, ln]) => [acc[0] + la, acc[1] + ln], [0, 0]);
  return [sum[0] / n, sum[1] / n];
}

async function promptUniqueName(existingSet) {
  // loop prompt until valid or canceled
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const name = window.prompt('¿Nombre de esta zona?');
    if (name == null) return null; // canceled
    const trimmed = name.trim();
    if (!trimmed) {
      alert('El nombre no puede estar vacío.');
      continue;
    }
    if (existingSet.has(trimmed)) {
      alert('Ya existe una zona con ese nombre.');
      continue;
    }
    return trimmed;
  }
}

function pointInPolygon(point, vs) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu//Research/Short_Notes/pnpoly.html
  const x = point[1];
  const y = point[0];
  let inside = false;
  for (let i = 0, j = vs.length - 1; i < vs.length; j = i++) {
    const xi = vs[i][1], yi = vs[i][0];
    const xj = vs[j][1], yj = vs[j][0];
    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi + 0.0) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
