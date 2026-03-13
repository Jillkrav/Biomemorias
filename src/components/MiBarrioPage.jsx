import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
import { motion } from 'framer-motion';
import { ChevronDown, Waves, Mountain, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const MiBarrioPage = () => {
    // List of territories as specified
    const territories = [
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

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const [open, setOpen] = useState(false);
    const [locs, setLocs] = useState([]);
    const [loadingLocs, setLoadingLocs] = useState(false);
    const sortedTerritories = [...territories].sort((a, b) =>
        a.name.localeCompare(b.name, 'es', { sensitivity: 'base' })
    );
    const [query, setQuery] = useState('');
    const norm = (s) => s.toString().normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
    const locMapByName = useMemo(() => {
        const m = new Map();
        for (const z of locs) {
            const key = norm(z.Nombre_localizacion || '');
            if (key) m.set(key, z);
        }
        return m;
    }, [locs]);
    const filtered = sortedTerritories.filter(t => norm(t.name).includes(norm(query)));
    const slugify = (s) => norm(s).replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

    useEffect(() => {
        const load = async () => {
            try {
                setLoadingLocs(true);
                const res = await fetch('/api/localizaciones');
                if (!res.ok) throw new Error('HTTP ' + res.status);
                const data = await res.json();
                setLocs(Array.isArray(data) ? data : []);
            } catch (e) {
                // swallow error silently for public page
            } finally {
                setLoadingLocs(false);
            }
        };
        load();
    }, []);

    return (
        <div className="min-h-screen bg-[#F4E9DC]">
            <Navbar />
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>

            {/* Header Section */}
            <HeroCarousel title="Mi Barrio" />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#005f73] mb-4">
                        Territorios de Valparaíso
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Cada territorio tiene sus propias características, problemáticas y riquezas bioculturales. 
                        Descubre la diversidad de nuestra región costera.
                    </p>
                </div>

                {/* Territory Grid */}
                <div className="mb-6">
                    <div className="mb-3">
                        <label htmlFor="territory-search" className="sr-only">Buscar territorio</label>
                        <input
                            id="territory-search"
                            name="territorySearch"
                            type="search"
                            autoComplete="off"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar territorio..."
                            className="w-full px-4 py-2 rounded-lg border border-[#E9C46A] focus:outline-none focus:ring-2 focus:ring-[#2a9d8f] bg-white placeholder-slate-400"
                        />
                    </div>
                    <div className="bg-white border border-[#E9C46A] rounded-xl overflow-hidden">
                        <button
                            onClick={() => setOpen((o) => !o)}
                            aria-expanded={open}
                            className="w-full flex items-center justify-between px-4 py-3 text-[#005f73] hover:bg-[#F4E9DC]/60 transition"
                        >
                            <span className="font-semibold">Ver cerros y territorios</span>
                            <ChevronDown className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                        </button>
                        {open && (
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="p-3 border-t border-[#E9C46A] max-h-72 overflow-y-auto"
                            >
                                <ul className="space-y-0.5">
                                    {filtered.map((territory) => (
                                        <motion.li
                                            key={territory.id}
                                            variants={itemVariants}
                                        >
                                            <Link 
                                                to={`/mibarrio/${slugify(territory.name)}`} 
                                                className="flex items-center justify-between gap-3 text-[#005f73] text-sm px-2 py-1 rounded hover:bg-[#F4E9DC] transition"
                                            >
                                                <span>{territory.name}</span>

                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </div>
                </div>

            </div>

            {/* Footer */}
            <footer className="bg-[#333] text-white py-8 text-center mt-16">
                <p>© 2025 Nuestra Quinta Costa - Mi Barrio</p>
            </footer>
        </div>
    );
};

export default MiBarrioPage;
