import React, { useEffect, useRef, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './pages/HomePage/sections/Hero';

import Footer from './components/Footer';
import { Box } from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import { animate } from 'animejs';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutUs = lazy(() => import('./pages/aboutus/aboutus'));
const Marketplace = lazy(() => import('./pages/Marketplace/Marketplace'));
const TokenizationHub = lazy(() => import('./pages/TokenizationHub/TokenizationHub'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Launchkit = lazy(() => import('./pages/Launchkit/Launchkit'));
const AccessPage = lazy(() => import('./pages/AccessPage/AccessPage'));
const ZeroGas = lazy(() => import('./pages/Zerogas/Zerogas'));
const PrivacyAi = lazy(() => import('./pages/PrivacyAi'));

// Simple loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
  </div>
);



function App() {
  const location = useLocation();
  const appRef = useRef(null);

  // Check if we're on the marketplace page (has its own header)
  const isMarketplacePage = location.pathname === "/marketplace";

  // Initial page load animation
  useEffect(() => {
    if (appRef.current) {
      animate('.bg-background', {
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuad'
      });
    }
  }, []);

  // Animation for navbar
  useEffect(() => {
    animate('nav', {
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <Box
      ref={appRef}
      className={`min-h-screen relative text-text-primary overflow-x-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <CustomCursor />
      <ScrollToTop />
      <Header />
      <main className="relative z-20 overflow-x-hidden pt-14 sm:pt-16 md:pt-18 lg:pt-20">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />

            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/tokenization" element={<TokenizationHub />} />
            <Route path="/launchkit" element={<Launchkit />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/access" element={<AccessPage />} />
            <Route path="/zerogas" element={<ZeroGas />} />
            <Route path="/privacy-ai" element={<PrivacyAi />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Box>
  );
}

export default App;