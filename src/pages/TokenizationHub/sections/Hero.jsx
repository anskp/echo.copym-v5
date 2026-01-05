import React from 'react';
import { Link } from 'react-router-dom';
import tokenizationHero from '../../../components/images/tokenizationhero.png';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${tokenizationHero})` }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full py-8 sm:py-12 lg:py-16">

        <div className="max-w-xl">
          <div className="mb-3 sm:mb-4 lg:mb-5 text-left">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white uppercase" style={{ fontFamily: 'Palanquin, sans-serif', letterSpacing: '0.025em' }}>
              <span className="block mb-1 sm:mb-2">EXPLORE THE POSSIBILITIES OF</span>
              <span className="text-[#15a36e] block">CROSSCHAIN INTELLIGENCE</span>
            </h1>
          </div>

          {/* Description - Left Aligned */}
          <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-left font-normal text-white/90 leading-relaxed mb-5 sm:mb-6 lg:mb-8 max-w-md" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            <span className="block mb-2 sm:mb-3">Our AI Agent has shown 23% better accuracy in predicting asset appreciation vs top market tools.</span>
            <span className="block">Experience the future of finance with CORA, the unified RWA tokenization AI platform.</span>
          </p>

          {/* CTA Buttons - Left Aligned */}


        </div>
      </div>
    </section>
  );
}