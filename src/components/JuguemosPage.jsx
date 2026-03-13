import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bgTexture from '@/assets/colaboradores-bg.jpg';
import btn1 from '@/assets/Juguemos/1.png';
import btn2 from '@/assets/Juguemos/2.png';
import btn3 from '@/assets/Juguemos/3.png';
import btn4 from '@/assets/Juguemos/4.png';
// Load all carousel images from the Carrusel folder
const bannerModules = import.meta.glob('@/assets/Carrusel/*', { eager: true, as: 'url' });
const banners = Object.entries(bannerModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url);

const JuguemosPage = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % banners.length);
  const prev = () => setIndex((i) => (i - 1 + banners.length) % banners.length);

  useEffect(() => {
    if (banners.length > 1) {
      const id = setInterval(next, 5000);
      return () => clearInterval(id);
    }
    return;
  }, []);

  return (
    <div className="min-h-screen bg-[#efe4d4]">
      <Navbar />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>

      {/* Hero banner */}
      <section className="relative w-full h-[220px] md:h-[300px] overflow-hidden">
        {/* Slides */}
        {banners.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: i === index ? 'scale(1.02)' : 'scale(1.0)'
            }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 z-10 pointer-events-none" />
        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <h2
            className="text-white text-2xl md:text-4xl" 
            style={{ fontFamily: 'Pacifico, cursive' }}
          >
            Valora y cuida el legado natural y cultural de Valparaíso
          </h2>
          <button aria-label="Anterior" onClick={prev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 z-30 hover:scale-110 transition-transform">
            <ChevronLeft size={40} className="drop-shadow" />
          </button>
          <button aria-label="Siguiente" onClick={next} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 z-30 hover:scale-110 transition-transform">
            <ChevronRight size={40} className="drop-shadow" />
          </button>
        </div>
      </section>

      {/* Main section with texture */}
      <section
        className="relative"
        style={{
          backgroundImage: `linear-gradient(rgba(239,228,212,0.22), rgba(239,228,212,0.22)), url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <h1
            className="text-center text-[#009b9f] mb-10 md:mb-14"
            style={{ fontFamily: 'Pacifico, cursive', fontSize: '44px' }}
          >
            Juguemos
          </h1>

          {/* Buttons row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 place-items-center">
            {[{src: btn1, alt: 'Explora las palabras de la costa'}, {src: btn2, alt: 'Aventura en tu barrio'}, {src: btn3, alt: 'Grandes misterios'}, {src: btn4, alt: 'Encuentra los tesoros'}].map((b, i) => (
              <div key={i} className="group">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="w-[160px] md:w-[200px] select-none cursor-pointer transition-transform duration-200 group-hover:scale-105 group-hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] group-hover:-rotate-1"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuguemosPage;
