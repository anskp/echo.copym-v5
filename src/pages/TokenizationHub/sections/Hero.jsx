// src/pages/TokenizationHub/sections/Hero.jsx

import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const playerRef = useRef(null);

  const handleComplete = () => {
    if (playerRef.current) {
      playerRef.current.pause();
    }
  };

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
          <path d="M100 100C200 200 300 50 400 150C500 250 600 100 700 200C800 300 900 150 1000 250" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
          <path d="M0 300C100 400 200 250 300 350C400 450 500 300 600 400C700 500 800 350 900 450" stroke="currentColor" strokeWidth="2" fill="none" className="text-black" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start -mt-6">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Tokenization Portal is Open
            </div>

            <h1 className="brand-title mb-6 text-[#255f99] bg-clip-text">
              Tokenize Real-World{' '}
              <span className="relative text-[#15a36e] bg-clip-text">Assets</span>
            </h1>
            
            <p className="brand-description mb-8 max-w-lg mx-auto lg:mx-0">
              Transform physical assets into digital tokens with enterprise-grade security, compliance, and liquidity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-gradient">
                Start Tokenizing
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-gradient-secondary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="flex items-start justify-center -mt-32 md:-mt-0 overflow-hidden">
            <Player
              ref={playerRef}
              autoplay
              loop={false}
              keepLastFrame={true}
              src="/assets/lottie/crypto animation-2/crypto animation-2.json"
              style={{ height: '500px', width: '500px' }}
              onEvent={(event) => {
                if (event === 'complete') {
                  handleComplete();
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};