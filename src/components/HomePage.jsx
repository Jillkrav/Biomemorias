import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
const bannerImage = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Fondo.jpg";
const overlayImage = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/text-overlay.svg";
const brandLogo = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Nuestra%20QUinta%20Costa.png";
const HomePage = () => {
    return (
        <div className="h-screen overflow-hidden bg-[#f5f5f0]">
            <Navbar />
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>
            {/* Banner Section */}
            <div className="relative w-full h-[100px] md:h-[240px]">
                {/* Banner Image */}
                <div
                    style={{
                        backgroundImage: `url(${bannerImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%'
                    }}
                    className="flex items-center justify-center relative"
                >

                    {/* Image Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                        <img 
                            src={overlayImage} 
                            alt="Overlay image" 
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="relative w-full bg-white">
                {/* Torn paper effect top (simulated with SVG or CSS, for now just a border) */}
                <div className="h-4 bg-[#f5f5f0] w-full transform -skew-y-1"></div>

                <div className="max-w-7xl mx-auto pl-4 pr-0 md:pr-0 pt-3 md:pt-3 pb-4">
                    <div className="grid md:grid-cols-12 gap-4 items-start">

                        {/* Left Column: Text */}
                        <div className="space-y-6 md:col-span-5 lg:col-span-5 xl:col-span-5">
                            <h3 className="text-5xl text-[#006b6e] tracking-wide border-l-4 border-[#006b6e] pl-4" style={{ fontFamily: "'Amatic', cursive", fontWeight: 'bold' }}>
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
                        <div className="flex justify-center md:justify-start md:col-span-7 lg:col-span-7 xl:col-span-7">
                            {/* Wrapper to anchor vignette to the photo block */}
                            <div className="relative block w-full md:-ml-4 lg:-ml-6 md:-mr-[calc(50vw-50%)] lg:-mr-[calc(50vw-50%)] xl:-mr-[calc(50vw-50%)]">
                                {/* Lateral Vignette Decoration */}
                                {/* Right visual block with background photo and logo overlay (no solid square) */}
                                <img
                                    src={brandLogo}
                                    alt="Nuestra Quinta Costa"
                                    className="relative z-10 block w-full md:w-[112%] h-auto mt-[-8px] md:mt-[30px] translate-x-[200px] md:mb-[-6px] -rotate-[1.1deg] scale-130"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
