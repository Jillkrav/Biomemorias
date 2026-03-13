import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

import cerroEsperanzaHero from '@/assets/Cerros/Cerro esperanza/Cerro Esperanza.jpg';
import cerroEsperanzaAlt1 from '@/assets/Cerros/Cerro esperanza/D_NQ_NP_2X_994969-MLC89050195320_082025-F-terreno-cerro-esperanza-valparaiso.jpg';
import cerroMariposaHero from '@/assets/Cerros/Cerro mariposa/maripo00.jpg';
import cerroMariposaAlt1 from '@/assets/Cerros/Cerro mariposa/winebox.jpg';

const TERRITORIES = [
  { id: 1, name: 'Esperanza', icon: '🌅', description: 'Sector de esperanza y renovación costera' },
  { id: 2, name: 'Polanco', icon: '⚓', description: 'Zona portuaria tradicional' },
  { id: 3, name: 'Barrio Puerto', icon: '🏘️', description: 'Corazón histórico del puerto' },
  { id: 4, name: 'Jiménez', icon: '🛍️', description: 'Comercial y vibrante' },
  { id: 5, name: 'Forestal', icon: '🌲', description: 'Área verde y bosques' },
  { id: 6, name: 'Mariposa', icon: '🦋', description: 'Sector de transformación natural' },
  { id: 7, name: 'Rodelillo', icon: '⛰️', description: 'Zona elevada con vistas panorámicas' },
  { id: 8, name: 'San Roque', icon: '⛪', description: 'Comunidad tradicional' },
  { id: 9, name: 'Con-Con', icon: '🏖️', description: 'Balneario costero' },
  { id: 10, name: 'Laguna Verde', icon: '🌊', description: 'Reserva natural y acuática' },
  { id: 11, name: 'Placilla', icon: '🏡', description: 'Sector residencial' },
  { id: 12, name: 'Playa Ancha', icon: '🏖️', description: 'Extensa zona costera' },
  { id: 13, name: 'Las Cañas', icon: '🎋', description: 'Zona de cañaverales' },
  { id: 14, name: 'Cordillera', icon: '🏔️', description: 'Sector de altura y vistas' }
];

function slugify(str) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const DEFAULT_MEDIA = {
  hero: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
    alt: 'Vista del territorio'
  },
  thumbs: [
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&h=150&fit=crop',
      alt: 'Naturaleza'
    },
    {
      src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=150&fit=crop',
      alt: 'Paisaje'
    }
  ]
};

const TERRITORY_MEDIA_BY_SLUG = {
  [slugify('Esperanza')]: {
    hero: { src: cerroEsperanzaHero, alt: 'Cerro Esperanza' },
    thumbs: [
      { src: cerroEsperanzaAlt1, alt: 'Cerro Esperanza' },
      { src: cerroEsperanzaHero, alt: 'Cerro Esperanza' }
    ]
  },
  [slugify('Mariposa')]: {
    hero: { src: cerroMariposaHero, alt: 'Cerro Mariposa' },
    thumbs: [
      { src: cerroMariposaAlt1, alt: 'Cerro Mariposa' },
      { src: cerroMariposaHero, alt: 'Cerro Mariposa' }
    ]
  }
};

export default function TerritoryDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const territory = TERRITORIES.find(t => slugify(t.name) === slug);

  const [markers, setMarkers] = useState([]);
  const [isLoadingMarkers, setIsLoadingMarkers] = useState(false);
  const [zones, setZones] = useState([]);
  const [openProblemas, setOpenProblemas] = useState(false);

  if (!territory) {
    return (
      <div className="min-h-screen bg-[#F4E9DC]">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-[#005f73] mb-4">Territorio no encontrado</h1>
          <Link to="/mibarrio" className="text-[#2a9d8f] underline">Volver a Mi Barrio</Link>
        </div>
      </div>
    );
  }

  useEffect(() => {
    try {
      const raw = localStorage.getItem('mapa2_zonas');
      if (!raw) {
        setZones([]);
        return;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) {
        setZones([]);
        return;
      }

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
          return { ...z, id_zona, lat, lng, radius };
        })
        .filter(Boolean);

      setZones(normalized);
    } catch (e) {
      setZones([]);
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        setIsLoadingMarkers(true);
        const resp = await fetch('/api/marcadores');
        if (!resp.ok) throw new Error(`HTTP_${resp.status}`);
        const data = await resp.json();
        if (!mounted) return;
        setMarkers(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!mounted) return;
        setMarkers([]);
      } finally {
        if (!mounted) return;
        setIsLoadingMarkers(false);
      }
    };
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const zoneForTerritory = useMemo(() => {
    const id = Number(territory.id);
    if (!Number.isFinite(id)) return null;
    return zones.find((z) => Number(z?.id_zona ?? z?.id) === id) || null;
  }, [zones, territory.id]);

  const markersWithCoords = useMemo(() => {
    const list = [];
    for (const m of markers) {
      if (!m || typeof m !== 'object') continue;
      const coordStr = m.coordenadas;
      if (typeof coordStr !== 'string' || !coordStr.includes(',')) continue;
      const parts = coordStr.split(',');
      if (parts.length !== 2) continue;
      const lat = Number(parts[0]);
      const lng = Number(parts[1]);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue;
      list.push({ ...m, lat, lng });
    }
    return list;
  }, [markers]);

  const haversineMeters = (lat1, lon1, lat2, lon2) => {
    const R = 6371000;
    const toRad = (x) => (x * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const markersInTerritory = useMemo(() => {
    if (!zoneForTerritory) return [];
    const radius = typeof zoneForTerritory.radius === 'number' ? zoneForTerritory.radius : 300;
    const centerLat = Number(zoneForTerritory.lat);
    const centerLng = Number(zoneForTerritory.lng);
    if (!Number.isFinite(centerLat) || !Number.isFinite(centerLng)) return [];

    const list = [];
    for (const m of markersWithCoords) {
      const d = haversineMeters(m.lat, m.lng, centerLat, centerLng);
      if (d <= radius) list.push(m);
    }
    return list;
  }, [markersWithCoords, zoneForTerritory]);

  const mapHref = `/mapa2?zonaId=${encodeURIComponent(String(territory.id))}`;

  const media = useMemo(() => {
    if (!slug) return DEFAULT_MEDIA;
    return TERRITORY_MEDIA_BY_SLUG[slug] || DEFAULT_MEDIA;
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#F4E9DC]">
      <Navbar />
      <div className="relative w-full h-[220px] bg-gradient-to-r from-[#005f73] to-[#2a9d8f] flex items-center">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <span className="text-4xl">{territory.icon}</span>
            {territory.name}
          </h1>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl border border-[#E9C46A] p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#005f73] mb-4">{territory.name}</h2>
              <p className="text-[#8e6646] mb-6 leading-relaxed">{territory.description}</p>
              <p className="text-gray-600 mb-6">
                Este territorio forma parte de la Quinta Costa de Valparaíso. 
                Aquí podrás encontrar información sobre sus características, 
                problemáticas y riquezas bioculturales.
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#005f73] mb-3">Problemáticas</h3>
                {!zoneForTerritory ? (
                  <div className="rounded-xl border border-[#E9C46A] bg-[#F4E9DC]/40 p-4 text-sm text-gray-700">
                    No hay un sector definido para este territorio todavía. Crea una zona en el mapa para ver problemáticas por sector.
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setOpenProblemas(true)}
                    className="w-full text-left bg-white border border-[#E9C46A] rounded-xl p-4 hover:border-[#2a9d8f] transition focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-semibold text-[#005f73]">{territory.name}</div>
                        <div className="text-sm text-gray-600 mt-1">Problemáticas registradas dentro del sector.</div>
                      </div>
                      <div className="shrink-0 px-3 py-1 rounded-full border border-[#E9C46A] bg-[#F4E9DC] text-[#005f73] text-sm font-semibold">
                        {isLoadingMarkers ? '...' : markersInTerritory.length}
                      </div>
                    </div>
                  </button>
                )}
              </div>

              {openProblemas && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/50"
                  onClick={() => setOpenProblemas(false)}
                >
                  <div
                    className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E9C46A] overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <div className="px-6 py-4 bg-[#E9C46A] text-[#005f73] flex items-center justify-between gap-4">
                      <h2 className="text-lg md:text-xl font-bold">{territory.name} - Problemáticas</h2>
                      <button
                        type="button"
                        onClick={() => setOpenProblemas(false)}
                        className="px-3 py-1 rounded-lg border border-[#005f73]/30 hover:bg-white/40 transition text-sm font-semibold"
                      >
                        Cerrar
                      </button>
                    </div>

                    <div className="p-6 max-h-[70vh] overflow-auto">
                      {!zoneForTerritory ? (
                        <p className="text-gray-700">No hay sector definido.</p>
                      ) : isLoadingMarkers ? (
                        <p className="text-gray-700">Cargando problemáticas...</p>
                      ) : markersInTerritory.length === 0 ? (
                        <p className="text-gray-700">No hay problemáticas registradas en este sector.</p>
                      ) : (
                        <div className="space-y-3">
                          {markersInTerritory.map((m, idx) => (
                            <div
                              key={String((m && m.id_marcador != null) ? m.id_marcador : idx)}
                              className="p-4 rounded-xl border border-[#E9C46A] bg-[#F4E9DC]/40 flex items-start justify-between gap-4"
                            >
                              <div className="min-w-0">
                                <p className="font-semibold text-[#005f73] truncate">
                                  {(m && m.nombre) ? String(m.nombre) : 'Sin título'}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  const id = Number(m && m.id_marcador);
                                  if (!Number.isFinite(id)) return;
                                  setOpenProblemas(false);
                                  navigate(`/map?markerId=${encodeURIComponent(String(id))}`);
                                }}
                                className="shrink-0 px-4 py-2 rounded-lg bg-[#2a9d8f] text-white font-semibold hover:bg-[#005f73] transition"
                              >
                                Ver en mapa
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <a href={mapHref} className="px-4 py-2 bg-[#2a9d8f] text-white rounded-lg hover:bg-[#005f73] transition">Ver en mapa</a>
                <Link to="/mibarrio" className="px-4 py-2 bg-white border border-[#E9C46A] text-[#005f73] rounded-lg hover:border-[#2a9d8f] transition">Volver</Link>
              </div>
            </div>
            <div className="md:w-80 flex flex-col gap-3">
              <div className="rounded-xl overflow-hidden border border-[#E9C46A]">
                <img 
                  src={media.hero.src}
                  alt={media.hero.alt}
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg overflow-hidden border border-[#E9C46A]">
                  <img 
                    src={media.thumbs[0]?.src}
                    alt={media.thumbs[0]?.alt}
                    className="w-full h-24 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden border border-[#E9C46A]">
                  <img 
                    src={media.thumbs[1]?.src}
                    alt={media.thumbs[1]?.alt}
                    className="w-full h-24 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
