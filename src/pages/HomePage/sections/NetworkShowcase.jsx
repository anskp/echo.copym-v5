import React from 'react';
import copym3dVideo from '../../../components/Videos/copym3d.mp4';

export default function NetworkShowcase() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-md overflow-hidden shadow-2xl">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
            style={{ maxHeight: '520px' }}
          >
            <source src={copym3dVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

