import React from 'react';
import HomeCards from '../../../components/HomeCards';

export default function CurvedSectionDivider() {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular leading-tight">
              <span className="text-gray-900">Own. Earn. </span>
              <span className="text-emerald-600">Explore. Trade.</span>
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <HomeCards />
        </div>
      </div>
    </section>
  );
}