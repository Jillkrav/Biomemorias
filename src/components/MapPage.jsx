import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Map, Plus, MapPin, Trash2, Clock, Edit2, MousePointerClick, ArrowLeft } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap.jsx';
import MarkerForm from '@/components/MarkerForm';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import icon1 from '@/assets/icono (1).jpg';
import { findClusters, getConvexHull } from '@/utils/clustering';

const MapPage = () => {
  const [markers, setMarkers] = useState([]);
  const [polygons, setPolygons] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [tempIcon, setTempIcon] = useState('👁️');
  const [editingMarker, setEditingMarker] = useState(null);
  const [clickCount, setClickCount] = useState(0);
  const cancelMarkerRef = useRef(null);
  const updateTempIconRef = useRef(null);
  const { toast } = useToast();
  const location = useLocation();
  const [focusZoneName, setFocusZoneName] = useState(null);

  useEffect(() => {
    loadMarkers();
    loadClickCount();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const t = params.get('territorio');
    setFocusZoneName(t);
  }, [location.search]);

  // Calculate polygons for clusters
  useEffect(() => {
    if (markers.length < 3) {
      setPolygons([]);
      return;
    }

    const clusters = findClusters(markers, 0.4); // 5km max distance
    const newPolygons = clusters.map(cluster => {
      const hull = getConvexHull(cluster);
      return hull.map(p => [p.latitude, p.longitude]);
    });

    setPolygons(newPolygons);
  }, [markers]);

  // Verificar marcadores expirados cada minuto
  useEffect(() => {
    const checkExpiredMarkers = () => {
      const now = Date.now();
      const expiredMarkers = markers.filter(marker =>
        marker.expirationTimestamp && marker.expirationTimestamp <= now
      );

      if (expiredMarkers.length > 0) {
        const newMarkers = markers.filter(marker =>
          !marker.expirationTimestamp || marker.expirationTimestamp > now
        );
        setMarkers(newMarkers);
        localStorage.setItem('mapMarkers', JSON.stringify(newMarkers));

        expiredMarkers.forEach(marker => {
          toast({
            title: "Marcador Expirado",
            description: `El marcador "${marker.name}" ha sido eliminado automÃ¡ticamente.`,
            className: "bg-amber-50 border-amber-200 text-amber-900",
          });
        });
      }
    };

    checkExpiredMarkers();
    const interval = setInterval(checkExpiredMarkers, 60000);
    return () => clearInterval(interval);
  }, [markers, toast]);

  const loadMarkers = () => {
    const savedMarkers = localStorage.getItem('mapMarkers');
    if (savedMarkers) {
      setMarkers(JSON.parse(savedMarkers));
    }
  };

  const loadClickCount = () => {
    const savedClicks = localStorage.getItem('mapClicks');
    if (savedClicks) {
      setClickCount(parseInt(savedClicks, 10));
    }
  };

  const addMarker = (markerData) => {
    let newMarkers;
    if (editingMarker) {
      newMarkers = markers.map(m => m.id === editingMarker.id ? { ...markerData, id: editingMarker.id } : m);
      toast({
        title: "¡Marcador Actualizado!",
        description: "El marcador ha sido actualizado exitosamente.",
        className: "bg-blue-50 border-blue-200 text-blue-900",
      });
    } else {
      newMarkers = [...markers, { ...markerData, id: Date.now() }];
      toast({
        title: "¡Marcador Agregado!",
        description: "Tu nueva ubicación ha sido guardada en el mapa.",
        className: "bg-emerald-50 border-emerald-200 text-emerald-900",
      });
    }
    setMarkers(newMarkers);
    localStorage.setItem('mapMarkers', JSON.stringify(newMarkers));
    setShowForm(false);
    setSelectedLocation(null);
    setEditingMarker(null);
  };

  const deleteMarker = (markerId) => {
    const newMarkers = markers.filter(marker => marker.id !== markerId);
    setMarkers(newMarkers);
    localStorage.setItem('mapMarkers', JSON.stringify(newMarkers));
    toast({
      title: "Marcador Eliminado",
      description: "El marcador ha sido eliminado del mapa.",
      className: "bg-red-50 border-red-200 text-red-900",
    });
  };

  const clearAllMarkers = () => {
    if (!window.confirm('¿Eliminar todos los marcadores?')) return;
    setMarkers([]);
    localStorage.removeItem('mapMarkers');
    toast({
      title: 'Marcadores limpiados',
      description: 'Se han eliminado todos los marcadores.',
      className: 'bg-red-50 border-red-200 text-red-900',
    });
  };

  const editMarker = (marker) => {
    setEditingMarker(marker);
    setSelectedLocation({ latitude: marker.latitude, longitude: marker.longitude });
    setTempIcon(marker.icon);
    setShowForm(true);
  };

  const handleMapClick = (latlng) => {
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);
    localStorage.setItem('mapClicks', newClickCount.toString());

    setSelectedLocation({ latitude: latlng.lat, longitude: latlng.lng });
    setTempIcon(icon1);
    setShowForm(true);
    toast({
      title: "Ubicación Seleccionada",
      description: "Completa el formulario para agregar un marcador en esta ubicación.",
      className: "bg-emerald-50 border-emerald-200 text-emerald-900",
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedLocation(null);
    setEditingMarker(null);
    setTempIcon('👁️');
    if (cancelMarkerRef.current) {
      cancelMarkerRef.current();
    }
  };

  const handleIconChange = (icon) => {
    setTempIcon(icon);
    if (updateTempIconRef.current) {
      updateTempIconRef.current(icon);
    }
  };

  const isImageIcon = (icon) => {
    return typeof icon === 'string' && (icon.startsWith('/') || icon.startsWith('http') || icon.includes('assets'));
  };

  const getTimeRemaining = (expirationTimestamp) => {
    if (!expirationTimestamp) return null;
    const now = Date.now();
    const diff = expirationTimestamp - now;
    if (diff <= 0) return 'Expirado';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <InteractiveMap
              markers={markers}
              onMapClick={handleMapClick}
              onCancelMarker={cancelMarkerRef}
              tempIcon={tempIcon}
              onUpdateTempIcon={updateTempIconRef}
              focusZoneName={focusZoneName}
            />

            <div className="bg-white rounded-xl p-6 border border-[#e5ce8c] shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-[#006b6e] uppercase tracking-wide flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#009b9f]" />
                  Marcadores Activos
                </h2>
                <button
                  onClick={clearAllMarkers}
                  className="px-3 py-1.5 bg-red-500 text-white rounded hover:bg-red-600 text-xs font-semibold"
                  title="Eliminar todos los marcadores"
                >
                  Limpiar todo
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {markers.map((marker) => (
                  <motion.div
                    key={marker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 rounded-lg bg-white border border-[#e5ce8c] hover:border-[#009b9f] transition-colors relative group"
                  >
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={() => editMarker(marker)}
                        className="p-1.5 bg-blue-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-600 shadow-md"
                        title="Editar marcador"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteMarker(marker.id)}
                        className="p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md"
                        title="Eliminar marcador"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      {isImageIcon(marker.icon) ? (
                        <img src={marker.icon} alt="Icono" className="w-8 h-8 object-cover rounded" />
                      ) : (
                        <span className="text-2xl">{marker.icon}</span>
                      )}
                      <h3 className="font-medium text-black pr-16">{marker.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600 line-clamp-2">{marker.description}</p>
                    {marker.expirationTimestamp && (
                      <div className="mt-2 flex items-center gap-1 text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
                        <Clock className="w-3 h-3" />
                        <span>Expira en: {getTimeRemaining(marker.expirationTimestamp)}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
                {markers.length === 0 && (
                  <p className="text-slate-500 col-span-2 text-center py-8">
                    No hay marcadores aún. ¡Haz clic en "Agregar Marcador" o clic derecho en el mapa para crear uno!
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24">
              {showForm ? (
                <div className="bg-white rounded-xl p-6 border border-[#e5ce8c] shadow-md">
                  <MarkerForm
                    onSubmit={addMarker}
                    onCancel={handleCancel}
                    initialData={selectedLocation}
                    editingMarker={editingMarker}
                    tempIcon={tempIcon}
                    onIconChange={handleIconChange}
                  />
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 text-center border border-[#e5ce8c] shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-[#006b6e] uppercase tracking-wide">Explora la Region</h3>
                  <p className="text-slate-700 mb-6">
                    Mapa Interactivo de Valparaiso.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-[#009b9f] text-white hover:bg-[#008387] border-0 w-full"
                    onClick={() => setShowForm(true)}
                  >
                    Comenzar a Mapear
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
