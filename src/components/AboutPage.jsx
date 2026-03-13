import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import colaboradoresBg from '@/assets/colaboradores-bg.jpg';
import felipeImg from '@/assets/About/Felipe Vergara.jpg';
import ghislaineImg from '@/assets/About/Ghislaine Barría González.png';
import marioImg from '@/assets/About/Mario Recabal Marambio.png';
 

const AboutPage = () => {
    const collaborators = [
        {
            id: 1,
            name: "Felipe Vergara",
            role: "Desarrollador y Coordinador",
            description: "Desarrollador y coordinador principal de la infraestructura tecnológica y el desarrollo de la aplicación OlAapp",
            image: felipeImg,
        },
        {
            id: 2,
            name: "Ghislaine Barría González",
            role: "Investigación",
            description: "Profesional en Bibliotecología con doble titulación de maestría: una en Bibliotecología e Información y otra en Educación, con especialización en Gestión y Liderazgo. Responsable de la dirección del proyecto y del desarrollo de contenidos para la aplicación OlAapp"
,
            image: ghislaineImg,
        },
        {
            id: 3,
            name: "Mario Recabal Marambio",
            role: "Colaborador",
            description: "Autor y Diseñador Gráfico Publicitario con Maestría en Comunicación y Periodismo. Responsable de la creación de piezas gráficas, así como de la edición y apoyo en la generación de contenidos para la aplicación OlAapp.",
            image: marioImg,
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % collaborators.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + collaborators.length) % collaborators.length);
    };

    return (
        <div
            className="relative min-h-screen bg-[#efe4d4]"
            style={{
                backgroundImage: `linear-gradient(rgba(239,228,212,0.35), rgba(239,228,212,0.35)), url(${colaboradoresBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="relative z-10">
                <Navbar />
                <div className="max-w-5xl mx-auto px-4 pt-16 pb-8 flex flex-col items-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#009b9f] mb-6">Colaboran</h1>
                    <div className="relative w-full max-w-2xl">
                        <div className="flex flex-col items-center min-h-[500px]">
                            <div
                                style={{ width: '240px', height: '240px' }}
                                className="mb-6 shadow-lg overflow-hidden"
                            >
                                <img
                                    src={collaborators[currentIndex].image}
                                    alt={collaborators[currentIndex].name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center px-6">
                                <h2 className="text-2xl font-bold text-black mb-3">{collaborators[currentIndex].name}</h2>
                                <p className="text-slate-700 italic text-xl leading-relaxed">"{collaborators[currentIndex].description}"</p>
                            </div>
                        </div>
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009b9f] transition-colors p-2"
                        >
                            <ChevronLeft size={80} strokeWidth={1} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009b9f] transition-colors p-2"
                        >
                            <ChevronRight size={80} strokeWidth={1} />
                        </button>
                        <div className="flex justify-center gap-3 mt-6">
                            {collaborators.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`w-4 h-4 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#e5ce8c]' : 'bg-[#009b9f]'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
