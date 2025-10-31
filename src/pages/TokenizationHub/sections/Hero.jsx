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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular">
            <span className="text-gray-900">TOKENIZE REAL-WORLD</span>
            <br />
            <span className="text-emerald-600">ASSETS</span>
          </h1>

          {/* Description with Homepage Style */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
            Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
          </p>

          {/* CTA Buttons with Homepage Style */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Start Tokenizing
            </button>

            <button className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              <GiPlayButton className="w-6 h-6" />
              Watch Demo
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