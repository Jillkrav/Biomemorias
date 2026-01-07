import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MapPage from '@/components/MapPage';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import { Toaster } from '@/components/ui/toaster';
import ErrorBoundary from '@/components/ErrorBoundary';

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
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </ErrorBoundary>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;