import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const ICON_FILES = import.meta.glob('../assets/Iconos mapa/*.jpg', { eager: true, import: 'default' });

const CATEGORIAS = [
  'Seguridad, violencia y crimen',
  'Infraestructura urbana y conectividad',
  'Vivienda, suelo y ordenamiento territorial',
  'Servicios básicos y redes',
  'Medio ambiente, riesgos y sanidad',
  'Salud y bienestar',
  'Espacios comunitarios, cultura y educación',
  'Patrimonio, identidad y memoria territorial'
];

const TERRITORIES = [
  { id: 1, name: 'Esperanza' },
  { id: 2, name: 'Polanco' },
  { id: 3, name: 'Barrio Puerto' },
  { id: 4, name: 'Jiménez' },
  { id: 5, name: 'Forestal' },
  { id: 6, name: 'Mariposa' },
  { id: 7, name: 'Rodelillo' },
  { id: 8, name: 'San Roque' },
  { id: 9, name: 'Con-Con' },
  { id: 10, name: 'Laguna Verde' },
  { id: 11, name: 'Placilla' },
  { id: 12, name: 'Playa Ancha' },
  { id: 13, name: 'Las Cañas' },
  { id: 14, name: 'Cordillera' }
];

const Mapa2Page = () => {
  const location = useLocation();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const zonesLayerRef = useRef(null);
  const leafletMarkersByIdRef = useRef(new Map());
  const didAutoFocusMarkerRef = useRef(null);
  const tempMarkerRef = useRef(null);
  const tempZoneCircleRef = useRef(null);
  const showZoneFormRef = useRef(false);

  const [markers, setMarkers] = useState([]);
  const [zones, setZones] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingMarker, setEditingMarker] = useState(null);
  const [pending, setPending] = useState(null);
  const [showZoneForm, setShowZoneForm] = useState(false);
  const [pendingZone, setPendingZone] = useState(null);
  const [zonaId, setZonaId] = useState('');
  const [zonaArea, setZonaArea] = useState('');
  const [zonaNombre, setZonaNombre] = useState('');
  const [zonaCentro, setZonaCentro] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [categoria, setCategoria] = useState(CATEGORIAS[0]);
  const [iconFile, setIconFile] = useState(null);
  const [isTemporal, setIsTemporal] = useState(true);
  const [duracionCantidad, setDuracionCantidad] = useState('24');
  const [duracionUnidad, setDuracionUnidad] = useState('h');
  const [loading, setLoading] = useState(false);

  const formatRemaining = (expiraEn) => {
    if (typeof expiraEn !== 'number') return null;
    const diff = expiraEn - Date.now();
    if (!Number.isFinite(diff) || diff <= 0) return 'Expirado';
    const totalMinutes = Math.floor(diff / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const focusZonaId = useMemo(() => {
    try {
      const params = new URLSearchParams(location.search);
      const raw = params.get('zonaId');
      if (raw == null || raw === '') return null;
      const n = Number(raw);
      return Number.isFinite(n) ? n : null;
    } catch (e) {
      return null;
    }
  }, [location.search]);

  const focusMarkerId = useMemo(() => {
    try {
      const params = new URLSearchParams(location.search);
      const raw = params.get('markerId');
      if (raw == null || raw === '') return null;
      const n = Number(raw);
      return Number.isFinite(n) ? n : null;
    } catch (e) {
      return null;
    }
  }, [location.search]);

  const territoryNameById = useMemo(() => {
    const m = new Map();
    for (const t of TERRITORIES) m.set(Number(t.id), t.name);
    return m;
  }, []);

  const activeZones = useMemo(() => {
    if (!Array.isArray(zones) || !zones.length) return [];
    return zones
      .map((z) => {
        const id = Number(z?.id_zona ?? z?.id);
        if (!Number.isFinite(id)) return null;
        const territoryName = territoryNameById.get(id);
        if (!territoryName) return null;
        return { ...z, id_zona: id, territoryName };
      })
      .filter(Boolean);
  }, [zones, territoryNameById]);

  const focusZoneOnMap = (z) => {
    if (!mapInstanceRef.current) return;
    const la = Number(z?.lat);
    const ln = Number(z?.lng);
    if (!Number.isFinite(la) || !Number.isFinite(ln)) return;
    try {
      mapInstanceRef.current.setView([la, ln], 14, { animate: true });
    } catch (e) {
    }
  };

  useEffect(() => {
    showZoneFormRef.current = showZoneForm;
  }, [showZoneForm]);

  const cancelZone = () => {
    setShowZoneForm(false);
    setPendingZone(null);
    setZonaId('');
    setZonaArea('');
    setZonaNombre('');
    setZonaCentro('');
    if (tempZoneCircleRef.current && mapInstanceRef.current) {
      try {
        mapInstanceRef.current.removeLayer(tempZoneCircleRef.current);
      } catch (e) {
      }
      tempZoneCircleRef.current = null;
    }
  };

  const submitZone = (e) => {
    e.preventDefault();
    if (!pendingZone) return;
    const idParsed = Number(zonaId);
    const areaParsed = Number(zonaArea);
    const nombreParsed = zonaNombre.toString().trim();
    if (!Number.isFinite(idParsed)) return;
    if (!Number.isFinite(areaParsed)) return;
    if (!nombreParsed) return;

    const exists = zones.some((z) => Number(z.id_zona ?? z.id) === idParsed);
    if (exists) {
      alert('id_zona duplicado. Usa otro.');
      return;
    }

    const zoneToSave = {
      id_zona: idParsed,
      area: areaParsed,
      nombre_Zona: nombreParsed,
      centro: zonaCentro,
      lat: pendingZone.lat,
      lng: pendingZone.lng,
      radius: pendingZone.radius
    };

    setZones((prev) => [...prev, zoneToSave]);
    cancelZone();
  };

  const beginEdit = (m) => {
    setEditingMarker(m);
    setShowForm(true);
    setPending({ lat: m.lat, lng: m.lng });
    setNombre(m.nombre || '');
    setDescripcion(m.descripcion || '');
    setCategoria(m.categoria || CATEGORIAS[0]);
    setIconFile(m.icono || (iconOptions.length ? iconOptions[0].file : null));

    const temporal = typeof m.expira_en === 'number';
    setIsTemporal(temporal);

    if (typeof m.expira_en === 'number') {
      const diff = m.expira_en - Date.now();
      const hrs = Math.max(1, Math.ceil(diff / (60 * 60 * 1000)));
      setDuracionCantidad(String(hrs));
      setDuracionUnidad('h');
    } else {
      setDuracionCantidad('24');
      setDuracionUnidad('h');
    }
  };

  const deleteMarker = async (id) => {
    try {
      const resp = await fetch(`/api/marcadores/${id}`, { method: 'DELETE' });
      if (!resp.ok && resp.status !== 204) {
        let body = '';
        try {
          body = await resp.text();
        } catch (e) {
        }
        console.error('DELETE /api/marcadores/:id failed', resp.status, body);
        return;
      }
      setMarkers((prev) => prev.filter((x) => x.id !== id));
      if (mapInstanceRef.current) mapInstanceRef.current.closePopup();
    } catch (e) {
      console.error('DELETE /api/marcadores/:id error', e);
    }
  };

  const iconOptions = useMemo(() => {
    return Object.entries(ICON_FILES)
      .map(([p, url]) => ({
        file: String(p).split(/[\\/]/).pop(),
        url
      }))
      .filter((x) => x.file && x.url)
      .sort((a, b) => String(a.file).localeCompare(String(b.file)));
  }, []);

  const iconUrlByFile = useMemo(() => {
    const m = {};
    for (const opt of iconOptions) m[opt.file] = opt.url;
    return m;
  }, [iconOptions]);

  useEffect(() => {
    if (!iconFile && iconOptions.length) {
      setIconFile(iconOptions[0].file);
    }
  }, [iconFile, iconOptions]);

  const buildMarkerIcon = (file, isTemp) => {
    const url = file ? iconUrlByFile[file] : null;
    if (url) {
      return L.icon({
        iconUrl: url,
        className: 'icono-mapa-2',
        iconSize: [42, 42],
        iconAnchor: [21, 42],
        popupAnchor: [0, -42]
      });
    }

    const iconHtml = `
      <div style="
        background: linear-gradient(135deg, ${isTemp ? '#e9c46a' : '#2a9d8f'} 0%, ${isTemp ? '#2a9d8f' : '#006b6e'} 100%);
        width: 40px;
        height: 40px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #ffffff;
        box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        font-size: 18px;
      ">
        <span style="transform: rotate(45deg);">📍</span>
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: isTemp ? 'custom-temp-pin' : 'custom-pin',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40]
    });
  };

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    const map = L.map(mapRef.current, {
      center: [-33.0472, -71.6127],
      zoom: 12,
      zoomControl: false
    });

    mapInstanceRef.current = map;

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    const ml = L.layerGroup().addTo(map);
    markersLayerRef.current = ml;

    map.createPane('zonesPane');
    map.getPane('zonesPane').style.zIndex = 350;
    const zl = L.layerGroup([], { pane: 'zonesPane' }).addTo(map);
    zonesLayerRef.current = zl;

    try {
      const raw = localStorage.getItem('mapa2_zonas');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const normalized = parsed
            .map((z) => {
              if (!z || typeof z !== 'object') return null;
              const lat = Number(z.lat);
              const lng = Number(z.lng);
              if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
              const idZonaRaw = (z.id_zona ?? z.id);
              const id_zona = Number(idZonaRaw);
              if (!Number.isFinite(id_zona)) return null;
              const radius = Number.isFinite(Number(z.radius)) ? Number(z.radius) : 300;
              const areaVal = z.area ?? z.Area;
              const area = areaVal === '' || areaVal == null ? null : Number(areaVal);
              const nombre_zona = (z.nombre_Zona ?? z.nombre_zona ?? z.nombreZona ?? z.name ?? '').toString();
              const centro = (z.centro ?? z.cordenadas_centro ?? z.coordenadas_centro ?? z.coordenadasCentro);
              const centroStr = (typeof centro === 'string' && centro.includes(',')) ? centro : `${lat.toFixed(6)},${lng.toFixed(6)}`;
              return {
                ...z,
                id_zona,
                area: Number.isFinite(area) ? area : null,
                nombre_Zona: nombre_zona,
                centro: centroStr,
                lat,
                lng,
                radius
              };
            })
            .filter(Boolean);
          setZones(normalized);
        }
      }
    } catch (e) {
    }

    map.on('click', (e) => {
      if (e.originalEvent && e.originalEvent.altKey && e.originalEvent.shiftKey) {
        if (showZoneFormRef.current) return;
        setZones((prev) => {
          if (!prev.length) return prev;

          const click = e.latlng;
          let best = null;
          for (const z of prev) {
            const radius = typeof z.radius === 'number' ? z.radius : 300;
            const d = map.distance(click, L.latLng(z.lat, z.lng));
            if (d <= radius) {
              if (!best || d < best.d) best = { id_zona: z.id_zona ?? z.id, d };
            }
          }

          if (!best) return prev;
          return prev.filter((z) => (z.id_zona ?? z.id) !== best.id_zona);
        });
        return;
      }

      if (e.originalEvent && e.originalEvent.altKey) {
        if (showZoneFormRef.current) return;
        const radius = 300;
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        const centerStr = `${lat.toFixed(6)},${lng.toFixed(6)}`;
        const areaDefault = Math.round(Math.PI * radius * radius);
        setPendingZone({ lat, lng, radius });
        setZonaCentro(centerStr);
        setZonaId('');
        setZonaArea(String(areaDefault));
        setZonaNombre('');
        setShowZoneForm(true);

        if (tempZoneCircleRef.current) {
          try {
            map.removeLayer(tempZoneCircleRef.current);
          } catch (err) {
          }
          tempZoneCircleRef.current = null;
        }
        const tempCircle = L.circle([lat, lng], {
          radius,
          color: '#38BDF8',
          weight: 2,
          opacity: 0.65,
          fillColor: '#38BDF8',
          fillOpacity: 0.20,
          interactive: false,
          pane: 'zonesPane'
        });
        tempCircle.addTo(zonesLayerRef.current);
        tempZoneCircleRef.current = tempCircle;
        return;
      }

      if (tempMarkerRef.current) {
        map.removeLayer(tempMarkerRef.current);
        tempMarkerRef.current = null;
      }

      setEditingMarker(null);

      const defaultFile = iconOptions.length ? iconOptions[0].file : null;
      setIconFile(defaultFile);
      setCategoria(CATEGORIAS[0]);
      setIsTemporal(true);
      setDuracionCantidad('24');
      setDuracionUnidad('h');
      const icon = buildMarkerIcon(defaultFile, true);

      const mk = L.marker([e.latlng.lat, e.latlng.lng], { icon });
      mk.addTo(map);
      tempMarkerRef.current = mk;

      setPending({ lat: e.latlng.lat, lng: e.latlng.lng });
      setNombre('');
      setDescripcion('');
      setShowForm(true);
    });

    loadMarkers();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markersLayerRef.current = null;
      zonesLayerRef.current = null;
      tempMarkerRef.current = null;
      tempZoneCircleRef.current = null;
    };
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('mapa2_zonas', JSON.stringify(zones));
    } catch (e) {
    }
  }, [zones]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (focusZonaId == null) return;
    if (!Array.isArray(zones) || !zones.length) return;

    const z = zones.find((x) => Number(x?.id_zona ?? x?.id) === Number(focusZonaId));
    if (!z || !Number.isFinite(Number(z.lat)) || !Number.isFinite(Number(z.lng))) return;

    try {
      mapInstanceRef.current.setView([Number(z.lat), Number(z.lng)], 14, { animate: true });
    } catch (e) {
    }
  }, [focusZonaId, zones]);

  useEffect(() => {
    if (!zonesLayerRef.current) return;
    zonesLayerRef.current.clearLayers();

    zones.forEach((z) => {
      const c = L.circle([z.lat, z.lng], {
        radius: typeof z.radius === 'number' ? z.radius : 300,
        color: '#38BDF8',
        weight: 2,
        opacity: 0.45,
        fillColor: '#38BDF8',
        fillOpacity: 0.18,
        interactive: false,
        pane: 'zonesPane'
      });
      c.addTo(zonesLayerRef.current);
    });
  }, [zones]);

  // Polling to keep markers in sync periodically ("real-time" refresh)
  useEffect(() => {
    const id = setInterval(() => {
      loadMarkers();
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!markersLayerRef.current) return;
    markersLayerRef.current.clearLayers();

    const mapById = new Map();

    markers.forEach((m) => {
      const icon = buildMarkerIcon(m.icono, false);

      const leafletMarker = L.marker([m.lat, m.lng], { icon });

      const remaining = formatRemaining(m.expira_en);
      const remainingLine = remaining ? `<div style="margin-top:8px;font-size:12px;color:#8e6646">Tiempo restante: ${escapeHtml(remaining)}</div>` : '';
      const categoriaLine = m.categoria ? `<div style="margin-top:8px;font-size:12px;color:#0b6d6d;font-weight:600">Categoría: ${escapeHtml(m.categoria)}</div>` : '';

      const popup = `
        <div style="
          background: #ffffff;
          border: 2px solid #e5ce8c;
          border-radius: 14px;
          padding: 14px;
          min-width: 220px;
          box-shadow: 0 8px 18px rgba(0,0,0,0.12);
        ">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
            <div style="background:#2a9d8f;width:34px;height:34px;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;">
              <span>📍</span>
            </div>
            <h3 style="margin:0;font-size:16px;color:#006b6e">${escapeHtml(m.nombre)}</h3>
          </div>
          <p style="margin:0;color:#6b7280;font-size:14px;line-height:1.5">${escapeHtml(m.descripcion || '')}</p>
          <div style="margin-top:10px;font-size:12px;color:#8e6646">${m.lat.toFixed(2)}, ${m.lng.toFixed(2)}</div>
          ${typeof m.expira_en === 'number' ? `<div style="margin-top:6px;font-size:12px;color:#8e6646">Expira: ${escapeHtml(new Date(m.expira_en).toLocaleString())}</div>` : ''}
          ${remainingLine}
          ${categoriaLine}
          <div style="margin-top:12px;display:flex;gap:8px;">
            <button data-action="edit" data-id="${m.id}" style="flex:1;padding:8px 10px;border-radius:10px;border:1px solid #e5ce8c;background:#fff;color:#006b6e;font-weight:600;cursor:pointer;">Editar</button>
            <button data-action="delete" data-id="${m.id}" style="flex:1;padding:8px 10px;border-radius:10px;border:1px solid #fca5a5;background:#ef4444;color:#fff;font-weight:700;cursor:pointer;">Eliminar</button>
          </div>
        </div>
      `;
      leafletMarker.bindPopup(popup);

      leafletMarker.on('popupopen', (ev) => {
        const el = ev.popup && ev.popup.getElement ? ev.popup.getElement() : null;
        if (!el) return;

        L.DomEvent.disableClickPropagation(el);
        L.DomEvent.disableScrollPropagation(el);

        const editBtn = el.querySelector('button[data-action="edit"]');
        const delBtn = el.querySelector('button[data-action="delete"]');
        if (editBtn) {
          editBtn.onclick = (evt) => {
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            beginEdit(m);
            if (mapInstanceRef.current) mapInstanceRef.current.closePopup();
          };
        }
        if (delBtn) {
          delBtn.onclick = (evt) => {
            if (evt) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            deleteMarker(m.id);
          };
        }
      });

      mapById.set(m.id, leafletMarker);
      leafletMarker.addTo(markersLayerRef.current);
    });

    leafletMarkersByIdRef.current = mapById;
  }, [markers]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;
    if (focusMarkerId == null) return;

    if (didAutoFocusMarkerRef.current !== focusMarkerId) {
      didAutoFocusMarkerRef.current = null;
    }

    if (didAutoFocusMarkerRef.current === focusMarkerId) return;

    const mk = leafletMarkersByIdRef.current.get(focusMarkerId);
    if (!mk) return;

    try {
      const ll = mk.getLatLng();
      mapInstanceRef.current.setView([ll.lat, ll.lng], 16, { animate: true });
      mk.openPopup();
      didAutoFocusMarkerRef.current = focusMarkerId;
    } catch (e) {
    }
  }, [focusMarkerId, markers]);

  const loadMarkers = async () => {
    try {
      const resp = await fetch('/api/marcadores');
      if (!resp.ok) return;
      const data = await resp.json();
      const parsed = data
        .map((r) => {
          if (!r.coordenadas || typeof r.coordenadas !== 'string') return null;
          const parts = r.coordenadas.split(',');
          if (parts.length !== 2) return null;
          const la = Number(parts[0]);
          const ln = Number(parts[1]);
          if (Number.isNaN(la) || Number.isNaN(ln)) return null;
          return {
            id: r.id_marcador,
            nombre: r.nombre,
            descripcion: r.descripcion,
            lat: la,
            lng: ln,
            icono: r.icono || null,
            expira_en: typeof r.expira_en === 'number' ? r.expira_en : null,
            categoria: r.categoria || null
          };
        })
        .filter(Boolean);
      setMarkers(parsed);
    } catch (e) {
    }
  };

  const submitMarker = async (e) => {
    e.preventDefault();
    if (!pending || !nombre.trim()) return;
    setLoading(true);
    try {
      const MAX_HOURS = 24 * 365;
      let qty = Number(duracionCantidad);
      if (!Number.isFinite(qty) || qty <= 0) qty = 24;

      let hours = 24;
      if (duracionUnidad === 'm') hours = qty / 60;
      else if (duracionUnidad === 'd') hours = qty * 24;
      else hours = qty;

      if (!Number.isFinite(hours) || hours <= 0) hours = 24;
      if (hours > MAX_HOURS) hours = MAX_HOURS;

      const expiraEnLocal = isTemporal ? (Date.now() + Math.round(hours * 60 * 60 * 1000)) : null;

      const chosenIconRaw = iconFile || (iconOptions.length ? iconOptions[0].file : null);
      const chosenIcon = chosenIconRaw ? String(chosenIconRaw).trim() : null;

      const isEdit = Boolean(editingMarker && editingMarker.id);
      const url = isEdit ? `/api/marcadores/${editingMarker.id}` : '/api/marcadores';
      const method = isEdit ? 'PUT' : 'POST';
      const body = isEdit
        ? { nombre: nombre.trim(), descripcion, icono: chosenIcon, duracionHoras: hours, temporal: isTemporal, categoria }
        : { nombre: nombre.trim(), descripcion, lat: pending.lat, lng: pending.lng, icono: chosenIcon, duracionHoras: hours, temporal: isTemporal, categoria };

      const resp = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!resp.ok) {
        let errBody = '';
        try {
          errBody = await resp.text();
        } catch (e) {
        }
        console.error(`${method} ${url} failed`, resp.status, errBody);
        setLoading(false);
        return;
      }

      let payload = null;
      try {
        payload = await resp.json();
      } catch (err) {
      }

      // Optimistic UI: add marker immediately with rounded coords
      const la = pending.lat;
      const ln = pending.lng;

      if (isEdit) {
        setMarkers((prev) =>
          prev.map((x) =>
            x.id === editingMarker.id
              ? {
                  ...x,
                  nombre: nombre.trim(),
                  descripcion,
                  categoria,
                  icono: chosenIcon,
                  expira_en: (payload && typeof payload.expira_en === 'number') ? payload.expira_en : expiraEnLocal
                }
              : x
          )
        );
      } else {
        const newId = payload && payload.id_marcador ? payload.id_marcador : Date.now();
        setMarkers((prev) => [
          ...prev,
          {
            id: newId,
            nombre: nombre.trim(),
            descripcion,
            lat: la,
            lng: ln,
            icono: chosenIcon,
            expira_en: (payload && typeof payload.expira_en === 'number') ? payload.expira_en : expiraEnLocal,
            categoria
          }
        ]);
      }

      setShowForm(false);
      setEditingMarker(null);
      setPending(null);
      setNombre('');
      setDescripcion('');
      setCategoria(CATEGORIAS[0]);
      setIconFile(iconOptions.length ? iconOptions[0].file : null);
      setIsTemporal(true);
      setDuracionCantidad('24');
      setDuracionUnidad('h');
      if (tempMarkerRef.current && mapInstanceRef.current) {
        mapInstanceRef.current.removeLayer(tempMarkerRef.current);
        tempMarkerRef.current = null;
      }
      await loadMarkers();
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };

  const cancelMarker = () => {
    setShowForm(false);
    setEditingMarker(null);
    setPending(null);
    setNombre('');
    setDescripcion('');
    setCategoria(CATEGORIAS[0]);
    setIconFile(iconOptions.length ? iconOptions[0].file : null);
    setIsTemporal(true);
    setDuracionCantidad('24');
    setDuracionUnidad('h');
    if (tempMarkerRef.current && mapInstanceRef.current) {
      mapInstanceRef.current.removeLayer(tempMarkerRef.current);
      tempMarkerRef.current = null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F4E9DC]">
      <Navbar />


      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative lg:col-span-2">
            <div className="space-y-4">
              <div ref={mapRef} className="w-full h-[70vh] rounded-2xl overflow-hidden border-4 border-white shadow-xl" />

              <div className="bg-white border-2 border-[#e5ce8c] rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[#e5ce8c] text-[#0b6d6d] px-4 py-3 font-bold">Zonas activas</div>
                <div className="p-4">
                  {activeZones.length ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {activeZones.map((z) => {
                        const displayName = (z.nombre_Zona && String(z.nombre_Zona).trim()) ? String(z.nombre_Zona).trim() : z.territoryName;
                        return (
                          <button
                            key={String(z.id_zona)}
                            type="button"
                            onClick={() => focusZoneOnMap(z)}
                            className="text-left w-full p-4 rounded-xl border border-[#e5ce8c] hover:border-[#2a9d8f] hover:bg-[#F4E9DC]/40 transition"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <div className="font-bold text-[#006b6e]">{displayName}</div>
                                <div className="text-xs text-[#8e6646]">Territorio: {z.territoryName}</div>
                              </div>
                              <div className="text-xs text-[#0b6d6d] font-semibold">ID: {z.id_zona}</div>
                            </div>
                            <div className="mt-2 text-xs text-slate-600">Centro: {Number(z.lat).toFixed(2)}, {Number(z.lng).toFixed(2)}</div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-sm text-[#0b6d6d]">
                      No hay zonas activas vinculadas a territorios todavía.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white border-2 border-[#e5ce8c] rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-[#e5ce8c] text-[#0b6d6d] px-4 py-3 font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {showForm ? (editingMarker ? 'Editar marcador' : 'Nuevo marcador') : 'Panel de marcadores'}
                </div>
                {showForm ? (
                  <form onSubmit={submitMarker} className="p-4 space-y-3">
                    <div>
                      <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Nombre</label>
                      <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]" placeholder="Ej: Mirador Las Rosas" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Descripción</label>
                      <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]" rows={3} placeholder="Detalle del lugar" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Categoría</label>
                      <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                      >
                        {CATEGORIAS.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0b6d6d] mb-2">Ícono</label>
                      <div className="grid grid-cols-5 gap-2">
                        {iconOptions.map((opt) => (
                          <button
                            key={opt.file}
                            type="button"
                            onClick={() => {
                              setIconFile(opt.file);
                              if (tempMarkerRef.current) {
                                tempMarkerRef.current.setIcon(buildMarkerIcon(opt.file, true));
                              }
                            }}
                            className={`rounded-lg border bg-white p-1 flex items-center justify-center ${iconFile === opt.file ? 'border-[#2a9d8f] ring-2 ring-[#2a9d8f]/40' : 'border-[#e5ce8c]'}`}
                            title={opt.file}
                          >
                            <img src={opt.url} alt={opt.file} className="w-10 h-10 object-contain rounded-full border-2 border-white shadow" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        id="marker-temporal"
                        type="checkbox"
                        checked={isTemporal}
                        onChange={(e) => setIsTemporal(e.target.checked)}
                        className="h-4 w-4"
                      />
                      <label htmlFor="marker-temporal" className="text-sm font-semibold text-[#0b6d6d]">Marcador temporal</label>
                    </div>

                    {isTemporal ? (
                    <div>
                      <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Duración</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          min={1}
                          value={duracionCantidad}
                          onChange={(e) => setDuracionCantidad(e.target.value)}
                          className="w-1/2 px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                        />
                        <select
                          value={duracionUnidad}
                          onChange={(e) => setDuracionUnidad(e.target.value)}
                          className="w-1/2 px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                        >
                          <option value="m">Minutos</option>
                          <option value="h">Horas</option>
                          <option value="d">Días</option>
                        </select>
                      </div>
                      <div className="mt-1 text-xs text-[#8e6646]">Por defecto 24 horas. Máximo 1 año.</div>
                    </div>
                    ) : null}
                    <div className="text-xs text-[#8e6646]">Coordenadas: {pending ? `${pending.lat.toFixed(2)}, ${pending.lng.toFixed(2)}` : '-'}</div>
                    <div className="flex gap-2 pt-2">
                      <button type="button" onClick={cancelMarker} className="flex-1 px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-[#8e6646] hover:bg-[#fff7e1]">Cancelar</button>
                      <button type="submit" disabled={loading || !nombre.trim()} className="flex-1 px-3 py-2 rounded-lg bg-[#2a9d8f] text-white font-semibold hover:bg-[#1f7d72] disabled:opacity-60">Guardar</button>
                    </div>
                  </form>
                ) : (
                  <div className="p-5 text-sm text-[#0b6d6d]">
                    <p className="mb-2">Haz clic en el mapa para crear un nuevo marcador.</p>
                    <p className="mb-2">Mantén presionada la tecla <b>Alt</b> y haz clic para crear una <b>zona</b> (se abrirá un menú antes de guardarla).</p>
                    <p className="mb-2">Mantén presionadas las teclas <b>Shift</b> + <b>Alt</b> y haz clic sobre una zona para <b>quitar solo esa zona</b>.</p>
                    <p className="text-[#8e6646]">Las coordenadas se muestran con 2 decimales en la interfaz, pero se guardan con precisión.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {showZoneForm ? (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-lg rounded-2xl bg-white border-2 border-[#e5ce8c] shadow-2xl overflow-hidden">
              <div className="bg-[#e5ce8c] text-[#0b6d6d] px-4 py-3 font-bold">Nueva zona</div>
              <form onSubmit={submitZone} className="p-4 space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">id_zona (Number)</label>
                  <input
                    type="number"
                    value={zonaId}
                    onChange={(e) => setZonaId(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                    placeholder="Ej: 101"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Area (Number)</label>
                  <input
                    type="number"
                    value={zonaArea}
                    onChange={(e) => setZonaArea(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                    placeholder="Ej: 280000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">nombre_Zona (varchar)</label>
                  <input
                    value={zonaNombre}
                    onChange={(e) => setZonaNombre(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                    placeholder="Ej: Zona 1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0b6d6d] mb-1">Cordenadas del centro (varchar)</label>
                  <input
                    value={zonaCentro}
                    readOnly
                    className="w-full px-3 py-2 rounded-lg border border-[#e5ce8c] bg-slate-50 text-slate-900 focus:outline-none"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={cancelZone} className="flex-1 px-3 py-2 rounded-lg border border-[#e5ce8c] bg-white text-[#8e6646] hover:bg-[#fff7e1]">Cancelar</button>
                  <button
                    type="submit"
                    disabled={!zonaId || !zonaArea || !zonaNombre.trim()}
                    className="flex-1 px-3 py-2 rounded-lg bg-[#2a9d8f] text-white font-semibold hover:bg-[#1f7d72] disabled:opacity-60"
                  >
                    Guardar zona
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </main>

      <style>{`
        .leaflet-container { background: #faf6ee !important; }
        .leaflet-marker-icon.leaflet-marker-icon.icono-mapa-2 {
          border-radius: 9999px !important;
          border: 3px solid rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 10px 18px rgba(0,0,0,0.18) !important;
          background: rgba(255,255,255,0.2) !important;
        }
        .leaflet-marker-icon.leaflet-marker-icon.icono-mapa-2:hover {
          box-shadow: 0 12px 22px rgba(0,0,0,0.24) !important;
        }
        .leaflet-control-zoom { border: 2px solid #ffffff !important; border-radius: 12px !important; overflow: hidden !important; box-shadow: 0 4px 6px rgba(0,0,0,0.1) !important; }
        .leaflet-control-zoom a { background: #ffffff !important; color: #006b6e !important; border-bottom: 1px solid #e5ce8c !important; }
        .leaflet-control-zoom a:hover { background: #fff7e1 !important; color: #2a9d8f !important; }
      `}</style>
    </div>
  );
};

export default Mapa2Page;

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
