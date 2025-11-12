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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              TOKENIZE REAL-WORLD ASSETS
            </h1>
          </div>

          {/* Description - Desktop Optimized */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed mb-10 lg:mb-12 max-w-5xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
          </p>

          {/* CTA Buttons - Desktop Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-5 rounded-full font-bold text-lg lg:text-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 min-w-[220px] lg:min-w-[260px] shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              START INVESTING
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
            <button
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg lg:text-xl hover:bg-white hover:text-emerald-600 transition-all duration-300 min-w-[220px] lg:min-w-[260px] shadow-xl hover:shadow-2xl transform hover:scale-105"
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