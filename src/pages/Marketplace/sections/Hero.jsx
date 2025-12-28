import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../../../components/images/marketplacehero.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Marketplace Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/25"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 uppercase tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-white">THE COPYM </span>
            <span className="text-[#10b981]">MARKET PLACE</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light tracking-wide max-w-xl mx-auto">
            Start your journey to active real world assets
          </p>
        </motion.div>
      </div>
    </section>
  );
}