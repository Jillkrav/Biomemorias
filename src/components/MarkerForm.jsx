import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, FileText, Navigation, Sparkles, X, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Checkbox } from '@/components/ui/checkbox';

// Import icon images
const icon1 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(1).jpg";
const icon2 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(2).jpg";
const icon3 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(3).jpg";
const icon4 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(4).jpg";
const icon5 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(5).jpg";
const icon6 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(6).jpg";
const icon7 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(7).jpg";
const icon8 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(8).jpg";
const icon9 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(9).jpg";
const icon10 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/icono%20(10).jpg";

// Array de iconos disponibles para los marcadores
const icons = [
    icon1, icon2, icon3, icon4, icon5,
    icon6, icon7, icon8, icon9, icon10
];

const MarkerForm = ({ onSubmit, onCancel, initialData, editingMarker, tempIcon, onIconChange }) => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        icon: icon1,
        hasExpiration: false,
        expirationDate: '',
        expirationTime: ''
    });
    const { toast } = useToast();

    // Efecto para inicializar el formulario cuando se edita un marcador o se selecciona una ubicación
    useEffect(() => {
        if (editingMarker) {
            // Pre-llenar el formulario al editar
            const expirationDate = editingMarker.expirationTimestamp
                ? new Date(editingMarker.expirationTimestamp).toISOString().split('T')[0]
                : '';
            const expirationTime = editingMarker.expirationTimestamp
                ? new Date(editingMarker.expirationTimestamp).toTimeString().slice(0, 5)
                : '';

            setFormData({
                name: editingMarker.name,
                description: editingMarker.description,
                latitude: editingMarker.latitude,
                longitude: editingMarker.longitude,
                icon: editingMarker.icon,
                hasExpiration: !!editingMarker.expirationTimestamp,
                expirationDate,
                expirationTime
            });
        } else if (initialData) {
            setFormData(prev => ({
                ...prev,
                latitude: initialData.latitude,
                longitude: initialData.longitude
            }));
        }
    }, [initialData, editingMarker]);

    // Sincronizar el icono temporal con el estado del formulario solo si no es el icono de "ojo"
    useEffect(() => {
        if (tempIcon && tempIcon !== '👁️') {
            setFormData(prev => ({
                ...prev,
                icon: tempIcon
            }));
        }
    }, [tempIcon]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.latitude || !formData.longitude) {
            toast({
                variant: "destructive",
                title: "Información Faltante",
                description: "Por favor completa todos los campos requeridos.",
            });
            return;
        }

        const lat = parseFloat(formData.latitude);
        const lng = parseFloat(formData.longitude);

        if (isNaN(lat) || isNaN(lng)) {
            toast({
                variant: "destructive",
                title: "Coordenadas Inválidas",
                description: "La latitud y longitud deben ser números válidos.",
            });
            return;
        }

        // Validar expiración si está habilitada
        if (formData.hasExpiration && (!formData.expirationDate || !formData.expirationTime)) {
            toast({
                variant: "destructive",
                title: "Fecha de Expiración Incompleta",
                description: "Por favor completa la fecha y hora de expiración.",
            });
            return;
        }

        let expirationTimestamp = null;
        if (formData.hasExpiration) {
            const expirationDateTime = new Date(`${formData.expirationDate}T${formData.expirationTime}`);
            if (expirationDateTime <= new Date()) {
                toast({
                    variant: "destructive",
                    title: "Fecha Inválida",
                    description: "La fecha de expiración debe ser en el futuro.",
                });
                return;
            }
            expirationTimestamp = expirationDateTime.getTime();
        }

        onSubmit({
            name: formData.name,
            description: formData.description,
            latitude: lat,
            longitude: lng,
            icon: formData.icon,
            expirationTimestamp
        });
    };

    const handleIconClick = (icon) => {
        setFormData({ ...formData, icon });
        if (onIconChange) {
            onIconChange(icon);
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg shadow-md shadow-emerald-500/20">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-emerald-900">
                        {editingMarker ? 'Editar Marcador' : 'Agregar Nuevo Marcador'}
                    </h2>
                </div>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={onCancel}
                    className="text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                    <X className="w-5 h-5" />
                </Button>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name" className="text-emerald-900 font-medium flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-emerald-500" />
                        Nombre del Lugar
                    </Label>
                    <Input
                        id="name"
                        placeholder="ej., Puerto de Valparaíso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description" className="text-emerald-900 font-medium flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-500" />
                        Descripción
                    </Label>
                    <Textarea
                        id="description"
                        placeholder="Cuéntanos sobre este lugar..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400 min-h-[100px]"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="latitude" className="text-emerald-900 font-medium flex items-center gap-2">
                            <Navigation className="w-4 h-4 text-emerald-500" />
                            Latitud
                        </Label>
                        <Input
                            id="latitude"
                            placeholder="-33.0472"
                            value={formData.latitude}
                            onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
                            className="bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="longitude" className="text-emerald-900 font-medium flex items-center gap-2">
                            <Navigation className="w-4 h-4 text-emerald-500" />
                            Longitud
                        </Label>
                        <Input
                            id="longitude"
                            placeholder="-71.6127"
                            value={formData.longitude}
                            onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
                            className="bg-white border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500/20 text-emerald-900 placeholder:text-slate-400"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label className="text-emerald-900 font-medium">Selecciona un Ícono</Label>
                    <div className="grid grid-cols-5 gap-2 p-2 bg-emerald-50/50 rounded-lg border border-emerald-100">
                        {icons.map((icon, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleIconClick(icon)}
                                className={`p-1 rounded-md transition-all hover:scale-110 ${formData.icon === icon
                                    ? 'bg-white shadow-md shadow-emerald-500/10 scale-110 ring-2 ring-emerald-400'
                                    : 'hover:bg-white/50'
                                    }`}
                            >
                                <img
                                    src={icon}
                                    alt={`Icono ${index + 1}`}
                                    className="w-full h-12 object-cover rounded"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Expiration Section - Improved Design */}
                <div className="space-y-3 p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200 shadow-sm">
                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="hasExpiration"
                            checked={formData.hasExpiration}
                            onCheckedChange={(checked) => setFormData({ ...formData, hasExpiration: checked })}
                            className="border-amber-400 data-[state=checked]:bg-amber-500"
                        />
                        <Label
                            htmlFor="hasExpiration"
                            className="text-emerald-900 font-semibold flex items-center gap-2 cursor-pointer"
                        >
                            <Clock className="w-5 h-5 text-amber-600" />
                            Marcador Temporal (Opcional)
                        </Label>
                    </div>

                    {formData.hasExpiration && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-3 pt-2"
                        >
                            <div className="space-y-2">
                                <Label htmlFor="expirationDate" className="text-sm font-semibold text-emerald-900 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-amber-600" />
                                    Fecha de Expiración
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="expirationDate"
                                        type="date"
                                        value={formData.expirationDate}
                                        onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                                        className="bg-white border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 text-emerald-900 font-medium pl-3 pr-3 py-2.5 rounded-lg shadow-sm"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="expirationTime" className="text-sm font-semibold text-emerald-900 flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-amber-600" />
                                    Hora de Expiración
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="expirationTime"
                                        type="time"
                                        value={formData.expirationTime}
                                        onChange={(e) => setFormData({ ...formData, expirationTime: e.target.value })}
                                        className="bg-white border-2 border-amber-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30 text-emerald-900 font-medium pl-3 pr-3 py-2.5 rounded-lg shadow-sm"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {formData.hasExpiration && (
                        <div className="flex items-start gap-2 p-3 bg-amber-100/60 border border-amber-300 rounded-lg mt-3">
                            <span className="text-lg">⏰</span>
                            <p className="text-xs text-amber-800 font-medium leading-relaxed">
                                Este marcador se eliminará automáticamente en la fecha y hora especificada.
                            </p>
                        </div>
                    )}
                </div>

                <div className="flex gap-3 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onCancel}
                        className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-600 hover:to-cyan-700 text-white shadow-lg shadow-emerald-500/20 border-0"
                    >
                        {editingMarker ? 'Actualizar Marcador' : 'Agregar Marcador'}
                    </Button>
                </div>
            </div>
        </motion.form>
    );
};

export default MarkerForm;