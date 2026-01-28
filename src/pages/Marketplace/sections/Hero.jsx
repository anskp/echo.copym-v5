import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/Image'; // Import our AVIF-compatible Image component
import heroBg from '../../../components/images/marketplacehero.avif';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[500px] h-[60vh] sm:h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 [&>picture]:w-full [&>picture]:h-full [&>picture]:block">
        <Image
          src={heroBg}
          alt="Marketplace Background"
          className="w-full h-full object-cover object-right sm:object-right scale-110 sm:scale-100 translate-y-12 sm:translate-y-0"
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-4xl w-full text-left mt-12 sm:mt-0"
        >
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 uppercase tracking-tight"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="text-white block mb-1">MARKETPLACE </span>
            <span className="text-[#10b981] block">ECOSYSTEM</span>
            <span className="text-white block mt-1">TRANSPARENT & LIQUID</span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Our AI-driven marketplace connects asset owners, investors and infrastructure partners in one transparent ecosystem.
          </p>
        </motion.div>
      </div>
    </section>
  );
}