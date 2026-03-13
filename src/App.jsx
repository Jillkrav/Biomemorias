import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ProblematicasPage from '@/components/ProblematicasPage';
import MiBarrioPage from '@/components/MiBarrioPage';
import TerritoryDetail from '@/components/TerritoryDetail';
import Mapa2Page from '@/components/Mapa2Page';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';
import JuguemosPage from '@/components/JuguemosPage';
import AdminLocalizaciones from '@/components/AdminLocalizaciones';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Nuestra Quinta Costa - Memorias Bioculturales</title>
        <meta name="description" content="Explora las memorias bioculturales de Valparaíso y la Quinta Costa." />
      </Helmet>
      <div className="min-h-screen bg-slate-950">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/map" element={<Mapa2Page />} />
            <Route path="/mapa2" element={<Mapa2Page />} />
            <Route path="/problematicas" element={<ProblematicasPage />} />
            <Route path="/mibarrio" element={<MiBarrioPage />} />
            <Route path="/mibarrio/:slug" element={<TerritoryDetail />} />
            <Route path="/juguemos" element={<JuguemosPage />} />
            <Route path="/_admin/localizaciones" element={<AdminLocalizaciones />} />
          </Routes>
        </ErrorBoundary>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;