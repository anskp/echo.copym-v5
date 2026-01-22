import React from 'react';
import { motion } from 'framer-motion';
import privacyaiHero from '../../../components/images/privacyaihero.png';

export default function HeroNew() {
  return (
    <section className="relative overflow-hidden min-h-[500px] h-[70vh] sm:h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <img
          src={privacyaiHero}
          alt="Privacy AI Hero background"
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Hero Content - Left aligned */}
      <div className="relative z-10 w-full h-full flex items-start justify-start pt-32 sm:pt-40 md:pt-48 lg:pt-60 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl w-full text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 uppercase tracking-tight">
            <span className="text-[#10b981] block">PRIVACY AI</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed">
            Privacy AI is CopyM's intelligent privacy layer. It protects sensitive asset, user and transaction data while enabling compliant tokenization on public and hybrid blockchains.
          </p>
        </motion.div>
      </div>
    </section>
  );
}