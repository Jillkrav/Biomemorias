import React, { useState } from 'react';
import Navbar from './Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const AboutPage = () => {
    const collaborators = [
        {
            id: 1,
            name: "Felipe Vergara Zárate",
            role: "Desarrollador y Coordinador",
            description: "Desarrollador y coordinador principal de la infraestructura tecnológica y el desarrollo de la aplicación OlAapp",
        },
        {
            id: 2,
            name: "Equipo BioMemorias",
            role: "Investigación",
            description: "Grupo multidisciplinario dedicado al rescate y preservación de las memorias bioculturales.",
        },
        {
            id: 3,
            name: "Colaborador 3",
            role: "Rol del colaborador",
            description: "Descripción breve del aporte del colaborador al proyecto.",
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
        <div className="min-h-screen bg-[#f5f5f0]">
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl font-bold text-[#009b9f] mb-8">Colaboran</h1>

                {/* Carousel Container */}
                <div className="relative w-full max-w-2xl">

                    {/* Main Content Area (Fixed Height) */}
                    <div className="flex flex-col items-center min-h-[400px]">

                        {/* Blue Placeholder for Person Image */}
                        <div
                            style={{ backgroundColor: '#0066cc', width: '200px', height: '200px' }}
                            className="mb-6 shadow-md"
                        >
                            {/* REEMPLAZAR POR background-image: url(...) */}
                            <div className="w-full h-full flex items-center justify-center text-white/50 font-mono text-xs p-2 text-center">
                                Image Placeholder<br />(200x200)
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="text-center px-8">
                            <h2 className="text-xl font-bold text-black mb-2">
                                {collaborators[currentIndex].name}
                            </h2>
                            <p className="text-slate-700 italic text-lg leading-relaxed">
                                "{collaborators[currentIndex].description}"
                            </p>
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009b9f] transition-colors p-2"
                    >
                        <ChevronLeft size={60} strokeWidth={1} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#009b9f] transition-colors p-2"
                    >
                        <ChevronRight size={60} strokeWidth={1} />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {collaborators.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-4 h-4 rounded-full transition-colors ${idx === currentIndex
                                    ? "bg-[#e5ce8c]" // Active color (yellowish)
                                    : "bg-[#009b9f]" // Inactive color (teal)
                                    }`}
                            />
                        ))}
                    </div>

                </div>
            </div>

            {/* Background Texture (Optional simulation based on image) */}
            <div
                className="fixed inset-0 pointer-events-none -z-10 opacity-10"
                style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")', // Generic paper texture
                    backgroundSize: 'cover'
                }}
            ></div>
        </div>
    );
};

export default AboutPage;
