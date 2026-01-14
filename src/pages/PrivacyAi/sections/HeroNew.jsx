import React from 'react';
import { motion } from 'framer-motion';
import privacyaiHero from '../../../components/images/privacyaihero.png';

export default function HeroNew() {
  return (
    <div className="relative overflow-hidden min-h-screen w-full bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src={privacyaiHero}
          alt="Privacy AI Hero"
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
        />

      </div>

      {/* Hero Content - Left aligned */}
      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl lg:max-w-2xl w-full text-left"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-20 uppercase tracking-tight"

          >

            <span className="text-[#10b981] block">PRIVACY AI</span>
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-lg leading-relaxed"

          >
            It protects sensiPrivacy AI is CopyM’s intelligent privacy layer.It protects sensitive asset, user and transaction data while enabling compliant tokenization on public and hybrid blockchains.tive asset, user and transaction data while enabling compliant tokenization on public and hybrid blockchains.
          </p>
        </motion.div>
      </div>
    </div>
  );
}