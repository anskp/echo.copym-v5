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
      
      <div className="relative z-10 py-16 sm:py-20 lg:py-24 pb-24 sm:pb-32 lg:pb-40">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-gray-900">SECURE & </span>
              <span className="text-emerald-600">AUDITED</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our smart contracts have been audited by the world's most trusted security firms and integrated with leading blockchain networks, ensuring maximum protection and seamless interoperability.
          </p>
        </div>

          {/* Lottie Animation */}
          <div className="flex justify-center items-center py-4 sm:py-8 lg:py-12 w-full overflow-visible">
            <div className="w-full h-auto flex items-center justify-center overflow-visible" style={{ 
              transform: 'scale(1.2) translateY(-12%)',
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
                className="w-full h-auto"
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