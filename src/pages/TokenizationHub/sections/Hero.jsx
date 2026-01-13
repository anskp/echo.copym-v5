import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import tokenizationHero from '../../../components/images/tokenizationhero.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={tokenizationHero}
          alt="Tokenization Hero background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl w-full text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 uppercase tracking-tight">
            <span className="text-white block mb-1">TOKENIZATION </span>
            <span className="text-[#10b981] block">HUB</span>
            <span className="text-white block mt-1">EMPOWERING ASSET OWNERSHIP</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed">
            Learn how CopyM tokenizes real-world assets into digital securities, providing liquidity and global access to institutional-grade investments.
          </p>
        </motion.div>
      </div>
    </section>
  );
}