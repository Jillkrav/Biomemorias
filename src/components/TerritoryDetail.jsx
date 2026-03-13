import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';


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
  if (!str) return '';
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
  thumbs: []
};

const GITHUB_REPO = 'Jillkrav/Biomemorias';
const GITHUB_BRANCH = 'main';
const GITHUB_API_BASE = `https://api.github.com/repos/${GITHUB_REPO}/contents/src/assets/Cerros`;

export default function TerritoryDetail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const territory = TERRITORIES.find(t => slugify(t.name) === slug);

  const [markers, setMarkers] = useState([]);
  const [isLoadingMarkers, setIsLoadingMarkers] = useState(false);
  const [zones, setZones] = useState([]);
  const [openProblemas, setOpenProblemas] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState(null); 
  const [currentSubPath, setCurrentSubPath] = useState([]);
  
  // Estado para todos los assets del cerro actual
  const [allAssets, setAllAssets] = useState([]);
  const [isLoadingAssets, setIsLoadingAssets] = useState(false);

  // Función recursiva para obtener archivos de GitHub
  const fetchGitHubDirectory = useCallback(async (path) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${path}`);
      const data = await response.json();
      
      if (!Array.isArray(data)) return [];

      let files = [];
      for (const item of data) {
        if (item.type === 'dir') {
          const subFiles = await fetchGitHubDirectory(item.path);
          files = [...files, ...subFiles];
        } else {
          files.push({
            path: item.path,
            src: item.download_url,
            fileName: item.name
          });
        }
      }
      return files;
    } catch (error) {
      console.error(`Error fetching directory ${path}:`, error);
      return [];
    }
  }, []);

  // Cargar assets cuando cambia el territorio
  useEffect(() => {
    if (!territory) return;

    const loadAssets = async () => {
      setIsLoadingAssets(true);
      try {
        // Listamos el directorio raíz de cerros para encontrar la carpeta correcta
        const response = await fetch(GITHUB_API_BASE);
        const cerros = await response.json();
        
        if (!Array.isArray(cerros)) {
          throw new Error("GitHub API did not return an array of folders");
        }

        // Buscamos una carpeta que contenga el nombre del cerro (ignorando mayúsculas/minúsculas)
        const targetName = territory.name.toLowerCase();
        const targetCerro = cerros.find(c => {
          const folderName = c.name.toLowerCase();
          return folderName.includes(targetName) || targetName.includes(folderName);
        });
        
        if (targetCerro) {
          const files = await fetchGitHubDirectory(targetCerro.path);
          setAllAssets(files);
        } else {
          setAllAssets([]);
        }
      } catch (error) {
        console.error("Error loading cerro assets from GitHub:", error);
        setAllAssets([]);
      } finally {
        setIsLoadingAssets(false);
      }
    };

    loadAssets();
  }, [slug, territory, fetchGitHubDirectory]);

  // Lógica para media (exposición)
  const media = useMemo(() => {
    if (!slug || allAssets.length === 0) return DEFAULT_MEDIA;

    const expoImages = allAssets.filter(asset => 
      asset.path.toLowerCase().includes('/fotos/exposicion/') && 
      asset.fileName.match(/\.(jpg|jpeg|png|webp|gif)$/i)
    ).map(a => a.src);

    if (expoImages.length === 0) return DEFAULT_MEDIA;

    return {
      hero: { src: expoImages[0], alt: `Vista de ${slug}` },
      thumbs: expoImages.slice(1).map((src, idx) => ({
        src,
        alt: `Imagen ${idx + 2} de ${slug}`
      }))
    };
  }, [slug, allAssets]);

  // Lógica para agrupar archivos por carpeta (Fotos, Audio, etc.)
  const folderGroups = useMemo(() => {
    if (!slug || !selectedFolder || allAssets.length === 0) return {};
    
    const grouped = {};
    const lowerFolder = selectedFolder.toLowerCase();

    allAssets.forEach(asset => {
      // Path from API is like: "src/assets/Cerros/Cerro esperanza/Fotos/Subfolder/file.jpg"
      const parts = asset.path.split('/');
      
      // La categoría (Fotos, Audio, etc.) está después de la carpeta del cerro
      // Buscamos el índice donde está "Cerros" y sumamos 2 para llegar a la categoría
      const cerrosIdx = parts.findIndex(p => p.toLowerCase() === 'cerros');
      if (cerrosIdx === -1 || parts.length <= cerrosIdx + 2) return;
      
      const category = parts[cerrosIdx + 2];
      
      if (!category || category.toLowerCase() !== lowerFolder) return;

      // Todo lo que esté después de la categoría y antes del nombre del archivo es una subcarpeta
      const subPathParts = parts.slice(cerrosIdx + 3, -1);
      const subFolder = subPathParts.length > 0 ? subPathParts.join(' / ') : 'Principal';

      if (!grouped[subFolder]) grouped[subFolder] = [];
      grouped[subFolder].push(asset);
    });

    return grouped;
  }, [slug, selectedFolder, allAssets]);

  // Obtener el contenido del nivel actual basado en currentSubPath
  const currentView = useMemo(() => {
    if (!selectedFolder) return { folders: [], files: [] };
    
    const pathKey = currentSubPath.length > 0 ? currentSubPath.join(' / ') : 'Principal';
    
    // Si estamos en la raíz (Principal), queremos mostrar las otras subcarpetas como "carpetas"
    if (currentSubPath.length === 0) {
      const allSubFolders = Object.keys(folderGroups).filter(k => k !== 'Principal');
      const rootFiles = folderGroups['Principal'] || [];
      return {
        folders: allSubFolders.map(name => name.split(' / ')[0]).filter((v, i, a) => a.indexOf(v) === i),
        files: rootFiles
      };
    }

    // Si estamos dentro de una subcarpeta
    const currentPrefix = currentSubPath.join(' / ');
    const folders = [];
    const files = folderGroups[currentPrefix] || [];

    // Buscar subcarpetas que empiecen con el prefijo actual
    Object.keys(folderGroups).forEach(key => {
      if (key.startsWith(currentPrefix + ' / ')) {
        const remaining = key.replace(currentPrefix + ' / ', '');
        const nextLevel = remaining.split(' / ')[0];
        if (!folders.includes(nextLevel)) folders.push(nextLevel);
      }
    });

    return { folders, files };
  }, [folderGroups, currentSubPath, selectedFolder]);

  const hasContent = Object.keys(folderGroups).length > 0;

  // Resetear subPath al cambiar de carpeta principal
  useEffect(() => {
    setCurrentSubPath([]);
  }, [selectedFolder]);

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

  const remainingPhotosCount = media.thumbs.length > 2 ? media.thumbs.length - 2 : 0;

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
                <a href={mapHref} className="px-4 py-2 bg-[#2a9d8f] text-white rounded-lg hover:bg-[#005f73] transition shadow-md font-semibold">Ver en mapa</a>
                <Link to="/mibarrio" className="px-4 py-2 bg-white border border-[#E9C46A] text-[#005f73] rounded-lg hover:border-[#2a9d8f] transition font-semibold">Volver</Link>
              </div>
            </div>
            
            <div className="md:w-80 flex flex-col gap-4">
              {/* Botones de carpetas */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'Audio', icon: '🎵', label: 'Audios' },
                  { id: 'Documentos', icon: '📄', label: 'Docs' },
                  { id: 'Fotos', icon: '📸', label: 'Fotos' },
                  { id: 'Videos', icon: '🎥', label: 'Videos' }
                ].map(btn => (
                  <button
                    key={btn.id}
                    onClick={() => setSelectedFolder(btn.id)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      selectedFolder === btn.id 
                        ? 'bg-[#E9C46A] border-[#005f73] text-[#005f73] shadow-inner' 
                        : 'bg-white border-[#E9C46A] text-gray-700 hover:bg-[#F4E9DC]'
                    }`}
                  >
                    <span className="text-xl mb-1">{btn.icon}</span>
                    <span className="text-xs font-bold uppercase tracking-wider">{btn.label}</span>
                  </button>
                ))}
              </div>

              {/* Galería Exposicion */}
              <div className="flex flex-col gap-3">
                <div className="rounded-xl overflow-hidden border border-[#E9C46A] shadow-sm bg-gray-100">
                  <img 
                    src={media.hero.src}
                    alt={media.hero.alt}
                    className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {media.thumbs.slice(0, 2).map((thumb, idx) => (
                    <div key={idx} className="rounded-lg overflow-hidden border border-[#E9C46A] relative group bg-gray-100">
                      <img 
                        src={thumb.src}
                        alt={thumb.alt}
                        className="w-full h-24 object-cover group-hover:scale-110 transition duration-300"
                      />
                      {idx === 1 && remainingPhotosCount > 0 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                          <span className="text-white font-bold text-lg">+{remainingPhotosCount}</span>
                        </div>
                      )}
                    </div>
                  ))}
                  {media.thumbs.length === 0 && (
                    <div className="col-span-2 rounded-lg bg-gray-100 h-24 flex items-center justify-center border border-dashed border-gray-300">
                      <span className="text-gray-400 text-xs italic">Sin más fotos de exposición</span>
                    </div>
                  )}
                  {media.thumbs.length === 1 && (
                     <div className="rounded-lg bg-gray-100 h-24 border border-dashed border-gray-300"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Contenido de Carpeta */}
        {selectedFolder && (
          <div 
            className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFolder(null)}
          >
            <div 
              className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E9C46A] overflow-hidden flex flex-col max-h-[85vh]"
              onClick={e => e.stopPropagation()}
            >
              <div className="px-8 py-5 bg-[#E9C46A] text-[#005f73] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">
                    {selectedFolder === 'Audio' ? '🎵' : selectedFolder === 'Documentos' ? '📄' : selectedFolder === 'Fotos' ? '📸' : '🎥'}
                  </span>
                  <h2 className="text-xl font-bold uppercase tracking-tight">
                    {selectedFolder} - {territory.name}
                  </h2>
                </div>
                <button 
                  onClick={() => setSelectedFolder(null)}
                  className="p-2 hover:bg-white/20 rounded-full transition text-[#005f73]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="p-8 overflow-y-auto flex-1 bg-[#F4E9DC]/30">
                {!hasContent ? (
                  <div className="text-center py-20">
                    <div className="text-5xl mb-4 opacity-20">📂</div>
                    <p className="text-gray-500 font-medium">Aún no hay archivos en la carpeta {selectedFolder.toLowerCase()}.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Breadcrumbs / Navegación superior */}
                    <div className="flex items-center gap-2 text-sm font-bold text-[#005f73] bg-white/50 p-2 rounded-lg border border-[#E9C46A]/20">
                      <button 
                        onClick={() => setCurrentSubPath([])}
                        className="hover:underline opacity-70 hover:opacity-100"
                      >
                        {selectedFolder.toUpperCase()}
                      </button>
                      {currentSubPath.map((part, i) => (
                        <React.Fragment key={i}>
                          <span>/</span>
                          <button 
                            onClick={() => setCurrentSubPath(currentSubPath.slice(0, i + 1))}
                            className="hover:underline opacity-70 hover:opacity-100"
                          >
                            {part.toUpperCase()}
                          </button>
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {/* Mostrar Carpetas */}
                      {currentView.folders.map((folderName) => (
                        <button
                          key={folderName}
                          onClick={() => setCurrentSubPath([...currentSubPath, folderName])}
                          className="bg-white p-4 rounded-2xl border border-[#E9C46A]/50 shadow-sm hover:shadow-md hover:border-[#005f73] transition-all flex items-center gap-4 group text-left"
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#E9C46A]/30 flex items-center justify-center shrink-0 text-2xl group-hover:scale-110 transition-transform">
                            📁
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-[#005f73] truncate">
                              {folderName}
                            </p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">
                              Carpeta
                            </p>
                          </div>
                        </button>
                      ))}

                      {/* Mostrar Archivos */}
                      {currentView.files.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="bg-white p-4 rounded-2xl border border-[#E9C46A]/50 shadow-sm hover:shadow-md transition-all flex items-center gap-4 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-[#F4E9DC] flex items-center justify-center shrink-0 text-xl group-hover:rotate-12 transition-transform">
                            {selectedFolder === 'Audio' ? '🎵' : selectedFolder === 'Documentos' ? '📄' : selectedFolder === 'Fotos' ? '🖼️' : '🎬'}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-bold text-[#005f73] truncate" title={item.fileName}>
                              {item.fileName}
                            </p>
                            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mt-1">
                              {item.fileName.split('.').pop()}
                            </p>
                          </div>
                          <a 
                            href={item.src} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-lg bg-[#2a9d8f] text-white text-[10px] font-bold hover:bg-[#005f73] transition-colors"
                          >
                            ABRIR
                          </a>
                        </div>
                      ))}
                    </div>

                    {currentView.folders.length === 0 && currentView.files.length === 0 && (
                       <div className="text-center py-10 opacity-40 italic text-sm">
                         Esta carpeta está vacía
                       </div>
                    )}
                  </div>
                )}
              </div>
              
              <div className="px-8 py-4 border-t border-gray-100 flex justify-end bg-gray-50">
                <button 
                  onClick={() => setSelectedFolder(null)}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl font-bold hover:bg-gray-300 transition-colors"
                >
                  CERRAR
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
