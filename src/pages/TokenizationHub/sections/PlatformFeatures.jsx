import React from 'react';
import { motion } from 'framer-motion';
import GroupedImages from '/assets/copym/png/Grouped-images.png';

export default function PlatformFeatures() {
  return (
    <section className="relative bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-white">PLATFORM </span>
            <span className="text-[#15a36e]">FEATURES</span>
          </h2>
        </div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <img 
            src={GroupedImages} 
            alt="Platform Features"
            className="w-full max-w-4xl lg:max-w-5xl h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

