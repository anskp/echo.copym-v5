import React from 'react';
import { GiPlayButton } from 'react-icons/gi';
// Removed fluid blob background
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/Tokenization.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Positioned on top of video */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-16 sm:pb-20 lg:pb-24">
        <div className="text-center">
          {/* AI-Powered Badge - Top of Content */}
          <div className="mb-8 lg:mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/90 backdrop-blur-sm">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-gray-900">Tokenization Portal is Open</span>
            </div>
          </div>

          {/* Main Title - Desktop Optimized */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              TOKENIZE REAL-WORLD ASSETS
            </h1>
          </div>

          {/* Description - Desktop Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal text-white/90 leading-relaxed mb-10 lg:mb-12 max-w-5xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
          </p>

          {/* CTA Buttons - Desktop Optimized */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              className="bg-emerald-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              START INVESTING
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
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
              className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
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