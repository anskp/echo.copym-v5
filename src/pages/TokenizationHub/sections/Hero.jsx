import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tokenizationHero from '../../../components/images/tokenizationhero.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-[100vh] sm:h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={tokenizationHero}
          alt="Tokenization Hero background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-2 sm:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl w-full text-left"
        >
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-3 sm:mb-4 uppercase tracking-tight"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="text-white">TOKENIZATION </span>
            <span className="text-[#10b981]">HUB</span>
            <span className="text-white block mt-1">EMPOWERING ASSET OWNERSHIP</span>
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Learn how CopyM tokenizes real-world assets into digital securities, providing liquidity and global access to institutional-grade investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}