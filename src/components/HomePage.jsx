import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-[#f5f5f0]">
            <Navbar />

            {/* Banner Section */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                {/* Blue Placeholder for Banner Image */}
                <div
                    style={{ backgroundColor: '#0066cc', width: '100%', height: '100%' }}
                    className="flex items-center justify-center relative"
                >
                    {/* REEMPLAZAR POR background-image: url(...) */}
                    <span className="text-white opacity-50 font-mono text-sm">Banner Image Placeholder</span>

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <h2 className="text-4xl md:text-6xl font-script text-white text-center drop-shadow-md" style={{ fontFamily: 'cursive' }}>
                            Conserva las prácticas ancestrales que respetan el equilibrio biocultural
                        </h2>
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="relative w-full bg-white">
                {/* Torn paper effect top (simulated with SVG or CSS, for now just a border) */}
                <div className="h-4 bg-[#f5f5f0] w-full transform -skew-y-1"></div>

                <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                    <div className="grid md:grid-cols-2 gap-12 items-start">

                        {/* Left Column: Text */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-[#006b6e] uppercase tracking-wide border-l-4 border-[#006b6e] pl-4">
                                Sobre Quinta Costa
                            </h3>
                            <p className="text-slate-700 leading-relaxed text-lg text-justify">
                                Las memorias bioculturales de Valparaíso son un legado vivo que
                                entrelaza la riqueza natural y la historia cultural del puerto. Estas
                                memorias reflejan cómo las comunidades han convivido con su entorno
                                marino, preservando tradiciones, conocimientos ancestrales y prácticas
                                sustentables que honran la biodiversidad local. Valparaíso no solo es
                                cuna de actividad portuaria, sino también un espacio donde la identidad
                                cultural se construye junto al respeto por el mar y sus especies.
                                Recuperar y difundir estas memorias fortalece el sentido de pertenencia
                                y promueve un futuro en armonía con la naturaleza y la cultura.
                            </p>
                        </div>

                        {/* Right Column: Logo/Image */}
                        <div className="flex justify-center md:justify-end">
                            {/* Blue Placeholder for Logo/Image */}
                            <div
                                style={{ backgroundColor: '#0066cc', width: '400px', height: '300px' }}
                                className="flex items-center justify-center"
                            >
                                {/* REEMPLAZAR POR background-image: url(...) */}
                                <span className="text-white opacity-50 font-mono text-sm text-center px-4">
                                    Logo/Image Placeholder<br />(Nuestra Quinta Costa Logo)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-[#333] text-white py-8 text-center">
                <p>© 2025 Nuestra Quinta Costa</p>
            </footer>
        </div>
    );
};

export default HomePage;
