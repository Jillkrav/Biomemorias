import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import { AlertCircle, Building, Home, Droplet, Flame, Heart, Users, Landmark } from 'lucide-react';

const ProblematicasPage = () => {
    const navigate = useNavigate();
    const [markers, setMarkers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(null);
    const [selectedCategoriaTitulo, setSelectedCategoriaTitulo] = useState(null);
    const [zones, setZones] = useState([]);
    const [selectedSectorId, setSelectedSectorId] = useState(null);
    const [selectedSectorTitle, setSelectedSectorTitle] = useState(null);

    const territories = [
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

    const territoryNameById = useMemo(() => {
        const m = new Map();
        for (const t of territories) m.set(Number(t.id), t.name);
        return m;
    }, [territories]);

    const categorias = [
        {
            id: 'seguridad',
            titulo: 'Seguridad, violencia y crimen',
            icono: AlertCircle,
            color: 'red'
        },
        {
            id: 'infraestructura',
            titulo: 'Infraestructura urbana y conectividad',
            icono: Building,
            color: 'orange'
        },
        {
            id: 'vivienda',
            titulo: 'Vivienda, suelo y ordenamiento territorial',
            icono: Home,
            color: 'amber'
        },
        {
            id: 'servicios',
            titulo: 'Servicios básicos y redes',
            icono: Droplet,
            color: 'blue'
        },
        {
            id: 'medio-ambiente',
            titulo: 'Medio ambiente, riesgos y sanidad',
            icono: Flame,
            color: 'green'
        },
        {
            id: 'salud',
            titulo: 'Salud y bienestar',
            icono: Heart,
            color: 'pink'
        },
        {
            id: 'comunitarios',
            titulo: 'Espacios comunitarios, cultura y educación',
            icono: Users,
            color: 'purple'
        },
        {
            id: 'patrimonio',
            titulo: 'Patrimonio, identidad y memoria territorial',
            icono: Landmark,
            color: 'indigo'
        }
    ];

    useEffect(() => {
        let mounted = true;

        const load = async () => {
            try {
                setIsLoading(true);
                setLoadError(null);
                const resp = await fetch('/api/marcadores');
                if (!resp.ok) {
                    throw new Error(`HTTP_${resp.status}`);
                }
                const data = await resp.json();
                if (!mounted) return;
                setMarkers(Array.isArray(data) ? data : []);
            } catch (e) {
                if (!mounted) return;
                setLoadError(e);
                setMarkers([]);
            } finally {
                if (!mounted) return;
                setIsLoading(false);
            }
        };

        load();

        return () => {
            mounted = false;
        };
    }, []);

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
                    return {
                        ...z,
                        id_zona,
                        lat,
                        lng,
                        radius
                    };
                })
                .filter(Boolean);

            setZones(normalized);
        } catch (e) {
            setZones([]);
        }
    }, []);

    const countsByCategoria = useMemo(() => {
        const map = new Map();
        for (const m of markers) {
            const raw = m && m.categoria != null ? String(m.categoria).trim() : '';
            const key = raw ? raw : 'Sin categoría';
            map.set(key, (map.get(key) || 0) + 1);
        }
        return map;
    }, [markers]);

    const categoriasForCards = useMemo(() => {
        const base = categorias.map((c) => ({
            ...c,
            cantidad: countsByCategoria.get(c.titulo) || 0
        }));

        const sinCategoriaCount = countsByCategoria.get('Sin categoría') || 0;
        if (sinCategoriaCount > 0) {
            base.push({
                id: 'sin-categoria',
                titulo: 'Sin categoría',
                icono: AlertCircle,
                color: 'blue',
                cantidad: sinCategoriaCount
            });
        }

        return base;
    }, [categorias, countsByCategoria]);

    const total = markers.length;

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

    const sectoresForCards = useMemo(() => {
        const buckets = new Map();
        const sinSectorId = 'sin-sector';

        for (const m of markersWithCoords) {
            let best = null;
            for (const z of zones) {
                const d = haversineMeters(m.lat, m.lng, Number(z.lat), Number(z.lng));
                const radius = typeof z.radius === 'number' ? z.radius : 300;
                if (d <= radius) {
                    if (!best || d < best.d) best = { id_zona: z.id_zona, d };
                }
            }

            const sectorId = best ? Number(best.id_zona) : sinSectorId;
            const key = String(sectorId);
            if (!buckets.has(key)) buckets.set(key, []);
            buckets.get(key).push(m);
        }

        const cards = [];
        for (const [key, list] of buckets.entries()) {
            const isSinSector = key === String(sinSectorId);
            const id = isSinSector ? sinSectorId : Number(key);
            const title = isSinSector ? 'Sin sector' : (territoryNameById.get(Number(key)) || `Sector ${key}`);
            cards.push({ id, titulo: title, cantidad: list.length, markers: list });
        }

        cards.sort((a, b) => {
            const aIsSin = String(a.id) === String(sinSectorId);
            const bIsSin = String(b.id) === String(sinSectorId);
            if (aIsSin && !bIsSin) return 1;
            if (!aIsSin && bIsSin) return -1;
            return b.cantidad - a.cantidad;
        });
        return cards;
    }, [markersWithCoords, zones, territoryNameById]);

    const sectoresWithProblemas = useMemo(() => sectoresForCards.filter((s) => s.cantidad > 0), [sectoresForCards]);

    const markersForSelectedSector = useMemo(() => {
        if (selectedSectorId == null) return [];
        const selectedKey = String(selectedSectorId);
        const item = sectoresForCards.find((s) => String(s.id) === selectedKey);
        return item ? item.markers : [];
    }, [selectedSectorId, sectoresForCards]);

    const markersForSelectedCategoria = useMemo(() => {
        if (!selectedCategoriaTitulo) return [];
        const list = [];
        for (const m of markers) {
            const raw = m && m.categoria != null ? String(m.categoria).trim() : '';
            const key = raw ? raw : 'Sin categoría';
            if (key === selectedCategoriaTitulo) list.push(m);
        }
        return list;
    }, [markers, selectedCategoriaTitulo]);

    const getColorClasses = (color) => {
        const colorMap = {
            red: {
                bg: 'bg-red-50',
                border: 'border-red-200',
                text: 'text-red-700',
                hover: 'hover:bg-red-100',
                icon: 'text-red-500'
            },
            orange: {
                bg: 'bg-orange-50',
                border: 'border-orange-200',
                text: 'text-orange-700',
                hover: 'hover:bg-orange-100',
                icon: 'text-orange-500'
            },
            amber: {
                bg: 'bg-amber-50',
                border: 'border-amber-200',
                text: 'text-amber-700',
                hover: 'hover:bg-amber-100',
                icon: 'text-amber-500'
            },
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                text: 'text-blue-700',
                hover: 'hover:bg-blue-100',
                icon: 'text-blue-500'
            },
            green: {
                bg: 'bg-green-50',
                border: 'border-green-200',
                text: 'text-green-700',
                hover: 'hover:bg-green-100',
                icon: 'text-green-500'
            },
            pink: {
                bg: 'bg-pink-50',
                border: 'border-pink-200',
                text: 'text-pink-700',
                hover: 'hover:bg-pink-100',
                icon: 'text-pink-500'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                text: 'text-purple-700',
                hover: 'hover:bg-purple-100',
                icon: 'text-purple-500'
            },
            indigo: {
                bg: 'bg-indigo-50',
                border: 'border-indigo-200',
                text: 'text-indigo-700',
                hover: 'hover:bg-indigo-100',
                icon: 'text-indigo-500'
            }
        };
        return colorMap[color] || colorMap.blue;
    };

    return (
        <div className="min-h-screen bg-[#f5f5f0]">
            <Navbar />
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>

            {/* Header Section */}
            <HeroCarousel title="Problemáticas Territoriales" />

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto">
                        Explora las principales problemáticas identificadas en el territorio de Quinta Costa, 
                        organizadas por categorías para facilitar su comprensión y análisis.
                    </p>
                </div>



                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-[#006b6e] mb-2 text-center">Problemáticas por sector</h2>
                    <p className="text-gray-700 text-center mb-6">
                        Basado en las zonas/sectores definidos en el mapa (radio alrededor del centro).
                    </p>

                    {!zones.length ? (
                        <div className="text-center text-gray-700">
                            No hay sectores definidos todavía. Crea zonas en el mapa para ver problemáticas por sector.
                        </div>
                    ) : !sectoresWithProblemas.length ? (
                        <div className="text-center text-gray-700">
                            No se encontraron problemáticas dentro de los sectores definidos.
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sectoresWithProblemas.map((s) => (
                                <button
                                    key={String(s.id)}
                                    type="button"
                                    onClick={() => {
                                        setSelectedSectorId(s.id);
                                        setSelectedSectorTitle(s.titulo);
                                    }}
                                    className="bg-white border border-[#e5ce8c] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition text-left focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]"
                                >
                                    <div className="px-6 py-5">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-lg font-semibold text-[#006b6e]">
                                                {s.titulo}
                                            </h3>
                                            <div className="shrink-0 px-3 py-1 rounded-full border border-[#e5ce8c] bg-[#f5f5f0] text-[#006b6e] text-sm font-semibold">
                                                {s.cantidad}
                                            </div>
                                        </div>
                                        <p className="mt-3 text-sm text-gray-700">
                                            Problemáticas registradas dentro del sector.
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {selectedSectorId != null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/50"
                        onClick={() => {
                            setSelectedSectorId(null);
                            setSelectedSectorTitle(null);
                        }}
                    >
                        <div
                            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#e5ce8c] overflow-hidden"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="px-6 py-4 bg-[#e5ce8c] text-[#0b6d6d] flex items-center justify-between gap-4">
                                <h2 className="text-lg md:text-xl font-bold">{selectedSectorTitle}</h2>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setSelectedSectorId(null);
                                        setSelectedSectorTitle(null);
                                    }}
                                    className="px-3 py-1 rounded-lg border border-[#0b6d6d]/30 hover:bg-white/40 transition text-sm font-semibold"
                                >
                                    Cerrar
                                </button>
                            </div>

                            <div className="p-6 max-h-[70vh] overflow-auto">
                                {markersForSelectedSector.length === 0 ? (
                                    <p className="text-gray-700">No hay problemáticas en este sector.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {markersForSelectedSector.map((m, idx) => (
                                            <div
                                                key={String((m && m.id_marcador != null) ? m.id_marcador : idx)}
                                                className="p-4 rounded-xl border border-[#e5ce8c] bg-[#f5f5f0] flex items-start justify-between gap-4"
                                            >
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-[#006b6e] truncate">
                                                        {(m && m.nombre) ? String(m.nombre) : 'Sin título'}
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const id = m && m.id_marcador;
                                                        if (!id) return;
                                                        setSelectedSectorId(null);
                                                        setSelectedSectorTitle(null);
                                                        navigate(`/map?markerId=${encodeURIComponent(String(id))}`);
                                                    }}
                                                    className="shrink-0 px-4 py-2 rounded-lg bg-[#2a9d8f] text-white font-semibold hover:bg-[#238579] transition"
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
                
                {/* Categories Grid */}
                <div className="mt-16 pt-12 border-t border-[#e5ce8c]">
                                    <div className="mb-8">
                    {isLoading ? (
                        <p className="text-gray-700 text-center">
                            Cargando problemáticas...
                        </p>
                    ) : loadError ? (
                        <p className="text-red-700 text-center">
                            No se pudieron cargar las problemáticas desde el mapa.
                        </p>
                    ) : (
                        <p className="text-gray-700 text-center">
                            Total de problemáticas: <span className="font-semibold">{total}</span>
                        </p>
                    )}
                </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoriasForCards.map((categoria) => {
                        const Icono = categoria.icono;
                        const colors = getColorClasses(categoria.color);
                        const clickable = !isLoading && !loadError && categoria.cantidad > 0;

                        return (
                            <button
                                key={categoria.id}
                                type="button"
                                onClick={() => {
                                    if (!clickable) return;
                                    setSelectedCategoriaTitulo(categoria.titulo);
                                }}
                                className={`${colors.bg} border ${colors.border} rounded-lg overflow-hidden transition-all duration-300 ${colors.hover} text-left ${clickable ? 'cursor-pointer' : 'cursor-default opacity-70'} ${clickable ? 'focus:outline-none focus:ring-2 focus:ring-[#2a9d8f]' : ''}`}
                            >
                                <div className="px-6 py-5">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <Icono className={`w-6 h-6 ${colors.icon}`} />
                                            <h3 className={`text-lg font-semibold ${colors.text}`}>
                                                {categoria.titulo}
                                            </h3>
                                        </div>
                                        <div className={`shrink-0 px-3 py-1 rounded-full border ${colors.border} bg-white/60 ${colors.text} text-sm font-semibold`}>
                                            {categoria.cantidad}
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-700">
                                        Problemáticas registradas en el mapa para esta categoría.
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
                </div>
                

                {selectedCategoriaTitulo && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/50"
                        onClick={() => setSelectedCategoriaTitulo(null)}
                    >
                        <div
                            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#e5ce8c] overflow-hidden"
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                        >
                            <div className="px-6 py-4 bg-[#e5ce8c] text-[#0b6d6d] flex items-center justify-between gap-4">
                                <h2 className="text-lg md:text-xl font-bold">
                                    {selectedCategoriaTitulo}
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setSelectedCategoriaTitulo(null)}
                                    className="px-3 py-1 rounded-lg border border-[#0b6d6d]/30 hover:bg-white/40 transition text-sm font-semibold"
                                >
                                    Cerrar
                                </button>
                            </div>
                            
                            <div className="p-6 max-h-[70vh] overflow-auto">
                                {markersForSelectedCategoria.length === 0 ? (
                                    <p className="text-gray-700">No hay problemáticas en esta categoría.</p>
                                ) : (
                                    <div className="space-y-3">
                                        {markersForSelectedCategoria.map((m, idx) => (
                                            <div
                                                key={String((m && m.id_marcador != null) ? m.id_marcador : idx)}
                                                className="p-4 rounded-xl border border-[#e5ce8c] bg-[#f5f5f0] flex items-start justify-between gap-4"
                                            >
                                                <div className="min-w-0">
                                                    <p className="font-semibold text-[#006b6e] truncate">
                                                        {(m && m.nombre) ? String(m.nombre) : 'Sin título'}
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const id = m && m.id_marcador;
                                                        if (!id) return;
                                                        setSelectedCategoriaTitulo(null);
                                                        navigate(`/map?markerId=${encodeURIComponent(String(id))}`);
                                                    }}
                                                    className="shrink-0 px-4 py-2 rounded-lg bg-[#2a9d8f] text-white font-semibold hover:bg-[#238579] transition"
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

                {/* Footer Info */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 text-sm">
                        Esta información se obtiene desde los marcadores del mapa interactivo.
                    </p>
                </div>
            </div>

            <footer className="bg-[#333] text-white py-8 text-center mt-16">
                <p>© 2025 Nuestra Quinta Costa</p>
            </footer>
        </div>
    );
};

export default ProblematicasPage;
