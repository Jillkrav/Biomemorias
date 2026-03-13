import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = ({ title }) => {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Carga dinámica de imágenes desde GitHub API
    const GITHUB_API_URL = 'https://api.github.com/repos/Jillkrav/Biomemorias/contents/src/assets/Carrusel';
    const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/Jillkrav/Biomemorias/main/src/assets/Carrusel/';

    const fetchImages = async () => {
      try {
        const response = await fetch(GITHUB_API_URL);
        const data = await response.json();
        
        if (Array.isArray(data)) {
          const imageUrls = data
            .filter(file => file.name.match(/\.(jpg|jpeg|png|svg|webp)$/i))
            .map(file => `${GITHUB_RAW_BASE}${encodeURIComponent(file.name)}`);
          setBanners(imageUrls);
        }
      } catch (error) {
        console.error("Error fetching carousel images from GitHub:", error);
      }
    };

    fetchImages();
  }, []);

  const next = () => setIndex((i) => (i + 1) % banners.length);
  const prev = () => setIndex((i) => (i - 1 + banners.length) % banners.length);

  useEffect(() => {
    if (banners.length > 1) {
      const id = setInterval(next, 5000);
      return () => clearInterval(id);
    }
  }, [banners.length]);

  if (banners.length === 0) return null;

  return (
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
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <h2
          className="text-white text-3xl md:text-7xl text-center" 
          style={{ fontFamily: 'Pacifico, cursive' }}
        >
          {title || "Valora y cuida el legado natural y cultural de Valparaíso"}
        </h2>
        {banners.length > 1 && (
          <>
            <button aria-label="Anterior" onClick={prev} className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/90 z-30 hover:scale-110 transition-transform">
              <ChevronLeft size={40} className="drop-shadow" />
            </button>
            <button aria-label="Siguiente" onClick={next} className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/90 z-30 hover:scale-110 transition-transform">
              <ChevronRight size={40} className="drop-shadow" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
