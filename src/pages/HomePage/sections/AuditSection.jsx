import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import rotatingCircles from '../../../components/lotties/Rotatingcircles.json';

export default function AuditSection() {
  return (
    <section className="relative w-full overflow-visible">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      
      <div className="relative z-10 py-8 sm:py-12 md:py-16 lg:py-20 pb-12 sm:pb-16 md:pb-24 lg:pb-32">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-gray-900">SECURE & </span>
              <span className="text-emerald-600">AUDITED</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our smart contracts have been audited by the world's most trusted security firms and integrated with leading blockchain networks, ensuring maximum protection and seamless interoperability.
          </p>
        </div>

          {/* Lottie Animation */}
          <div className="flex justify-center items-center py-4 sm:py-6 md:py-8 lg:py-12 w-full overflow-visible px-4">
            <div className="w-full h-auto flex items-center justify-center overflow-visible" style={{ 
              transform: 'scale(1.5) sm:scale(1.4) md:scale(1.3) lg:scale(1.2) translateY(-8%) sm:translateY(-10%) md:translateY(-12%) lg:translateY(-12%)',
              transformOrigin: 'center center'
            }}>
              <Player
                autoplay
                loop
                src={rotatingCircles}
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: '100%',
                  minHeight: '400px',
                  objectFit: 'contain'
                }}
                className="w-full h-auto min-h-[400px]"
              />
            </div>
          </div>

        {/* Legend */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          </div>
        </div>
      </div>
    </section>
  );
}