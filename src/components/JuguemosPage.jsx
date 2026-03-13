import React from 'react';
import Navbar from './Navbar';
import HeroCarousel from './HeroCarousel';
const bgTexture = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/colaboradores-bg.jpg";
const btn1 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Juguemos/1.png";
const btn2 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Juguemos/2.png";
const btn3 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Juguemos/3.png";
const btn4 = "https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Juguemos/4.png";

const JuguemosPage = () => {
  return (
    <div className="min-h-screen bg-[#efe4d4]">
      <Navbar />
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');`}</style>

      {/* Hero banner */}
      <HeroCarousel title="Valora y cuida el legado natural y cultural de Valparaíso" />

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
