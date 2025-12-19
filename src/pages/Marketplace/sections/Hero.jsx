import React from 'react';
import { GiPlayButton } from 'react-icons/gi';
// Removed LavaLamp background
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen w-full overflow-hidden">
      {/* Video Background REPLACED */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black"></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-[1]"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-center items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* AI-Powered Badge - Top of Content */}

        <div className="text-center w-full">
          {/* Main Title - Full Width with Homepage Font Styles */}
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight px-2 uppercase dm-sans" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-white drop-shadow-lg">EXPLORE TOKENIZED REAL-WORLD ASSETS</span>
            </h1>
          </div>

          {/* Description with Homepage Style */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-4xl mx-auto drop-shadow-md px-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Secure, AI-enhanced marketplace powered by Crossmint and Fireblocks. Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets.
          </p>

          {/* CTA Buttons with Homepage Style */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center items-center px-4">
            <Link
              to="/marketplace"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto min-w-[180px] sm:min-w-[200px] shadow-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              START INVESTING
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            <button
              className="bg-transparent border-2 border-emerald-500 text-emerald-500 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 w-full sm:w-auto min-w-[180px] sm:min-w-[200px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              WATCH DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}