import React from 'react';
import { GiPlayButton } from 'react-icons/gi';
// Removed fluid blob background
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/Images/tokenization.png)' }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Positioned on top of video */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12 lg:py-16">

        <div className="mb-4 sm:mb-6 lg:mb-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white uppercase px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            TOKENIZE REAL-WORLD ASSETS
          </h1>
        </div>

        {/* Description - Desktop Optimized */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center font-normal text-white/90 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-5xl mx-auto px-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
        </p>

        {/* CTA Buttons - Desktop Optimized */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4">
          <button
            className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
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
          </button>
          <button
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            WATCH DEMO
          </button>
        </div>

      </div>
    </section>
  );
}