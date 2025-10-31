import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import frameAnim from '../../../components/lotties/frame001.json';
import { GiPlayButton } from 'react-icons/gi';
// Removed fluid blob background
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Background removed */}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-40">
        {/* AI-Powered Badge - Top of Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Tokenization Portal is Open
          </div>
        </div>

        <div className="text-center">
          {/* Main Title - Full Width with Homepage Font Styles */}
          <div className="mb-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-gray-900">TOKENIZE REAL-WORLD ASSETS</span>
            </h1>
          </div>

          {/* Description with Homepage Style */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed mb-12 max-w-4xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
          </p>

          {/* CTA Buttons with Homepage Style */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <button
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] shadow-lg"
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
              className="bg-transparent border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 min-w-[200px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              WATCH DEMO
            </button>
          </div>

          {/* Lottie animation between buttons and next section */}
          <div className="mt-8 sm:mt-12 lg:mt-[-120px] flex justify-center relative z-20">
            <Player
              autoplay
              loop
              src={frameAnim}
              className="w-[700px] h-[700px] sm:w-[800px] sm:h-[800px] lg:w-[900px] lg:h-[900px] max-w-full"
            />
          </div>

          {/* Additional UI Elements */}
          
        </div>
      </div>
    </section>
  );
}