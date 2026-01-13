import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import assetOwnersAnimation from '../../../components/lotties/forassetsowners.json';
import investorsAnimation from '../../../components/lotties/forinvestors.json';

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="relative w-fit">
              <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-black leading-tight">HOW IT </span>
                <span className="text-[#15a36e] leading-tight font-bold">WORKS</span>
              </h2>
              <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.8px' }}></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed tracking-wide mt-3 sm:mt-5" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              How Copym works - for issuers and investors
            </p>
          </motion.div>
        </div>

        {/* Vertical Stack of Workflow Boards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            <div className="w-full">
              <Lottie
                animationData={assetOwnersAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            <div className="w-full">
              <Lottie
                animationData={investorsAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12 sm:mt-16 md:mt-20"
        >
          <button className="inline-flex items-center justify-center px-[38px] py-[12px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-[#15a36e] bg-[#15a36e] text-white rounded-full shadow-lg" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            Whitepaper
          </button>
        </motion.div>
      </div>
    </section >
  );
};

export default HowItWorksSection;
