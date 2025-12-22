import React from 'react';
import copymflows from '../../../components/Videos/copymflows.mp4';

export default function NetworkShowcase() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div className="bg-black rounded-md overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
            style={{ maxHeight: '520px' }}
          >
            <source src={copymflows} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

