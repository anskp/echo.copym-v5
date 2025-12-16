import React, { useState, useEffect, useRef } from 'react';
import { GiCrossedSwords } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isVideoOpen) {
        setVideoOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isVideoOpen]);

  // Trap focus in modal and prevent body scroll
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  return (
    <div className="relative overflow-hidden">
      {/* ====== BACKGROUND VIDEO ====== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
          aria-label="Background video showing investment opportunities"
        >
          <source src="/assets/videos/hero section video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ====== HERO CONTENT - CENTERED ====== */}
      <div className="relative z-10 w-full h-[100vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl w-full text-center">
          {/* ====== HEADLINE ====== */}
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-tight text-white mb-4 sm:mb-6 uppercase"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="block">
              UNLOCK EXCLUSIVE <span className="text-[#15a36e]">ASSETS,</span>
            </span>
            <span className="block mt-2 sm:mt-3">
              <span className="text-[#15a36e]">INVEST </span>WITH CONFIDENCE
            </span>
          </h1>

          {/* ====== DESCRIPTION ====== */}
          <p
            className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed mb-4 sm:mb-6 font-thin"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Secure, AI-enhanced marketplace powered by Crossmint and Fireblocks. Seamless<br />
            on-chain investment in real estate, commodities, carbon credits, and luxury assets.
          </p>

          {/* ====== FOR ASSET OWNERS ====== */}
          <p
            className="text-xs sm:text-sm md:text-base text-white mb-3 sm:mb-4 font-light"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="underline decoration-[#15a36e] decoration-2 underline-offset-4">FOR ASSET OWNERS</span> – launch compliant, fictionalized products in weeks, not months.
          </p>

          {/* ====== FOR INVESTORS ====== */}
          <p
            className="text-xs sm:text-sm md:text-base text-white mb-8 sm:mb-10 md:mb-12 font-light"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="underline decoration-[#15a36e] decoration-2 underline-offset-4">FOR INVESTORS</span> – access curated, yield-bearing RWA's with instant, gas-free settlement.
          </p>

          {/* ====== BUTTONS (SIDE BY SIDE) ====== */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              to="/marketplace"
              className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-md w-full sm:w-auto sm:min-w-[200px]"
              style={{ 
                fontFamily: 'Palanquin, sans-serif',
                background: 'linear-gradient(to right, #23BD83, #109261)'
              }}
            >
              START INVESTING
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <button
              onClick={() => setVideoOpen(true)}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto sm:min-w-[200px]"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              WATCH DEMO
            </button>
          </div>
        </div>
      </div>

      {/* ====== Risk Disclosure and Cookies Links - Bottom Right ====== */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 xl:right-12 z-20 flex items-center gap-3 sm:gap-4 md:gap-6">
        <Link
          to="/risk-disclosure"
          className="text-white/90 hover:text-white text-xs sm:text-sm md:text-base transition-colors duration-200"
          style={{ fontFamily: 'Palanquin, sans-serif' }}
        >
          Risk Disclosure
        </Link>
        <Link
          to="/cookies"
          className="text-white/90 hover:text-white text-xs sm:text-sm md:text-base transition-colors duration-200"
          style={{ fontFamily: 'Palanquin, sans-serif' }}
        >
          Cookies
        </Link>
      </div>

      {/* ====== VIDEO MODAL ====== */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
            onClick={() => setVideoOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
          >
            <motion.div
              ref={modalRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                ref={closeButtonRef}
                onClick={() => setVideoOpen(false)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded p-1 transition-all"
                aria-label="Close video modal"
              >
                <GiCrossedSwords size={32} />
              </button>
              <h2 id="video-modal-title" className="sr-only">How It Works Video</h2>
              <video
                src="/assets/videos/how-it-works.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-lg shadow-lg"
                onError={(e) => {
                  console.error('Video failed to load:', e);
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
