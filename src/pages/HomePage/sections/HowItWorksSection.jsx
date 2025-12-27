import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import forAssetsOwnersAnimation from '../../../components/lotties/forassetsowners.json';
import forInvestorsAnimation from '../../../components/lotties/forinvestors.json';

// Register plugin
gsap.registerPlugin(ScrollToPlugin);

const HowItWorksSection = () => {
  const subSectionRefs = {
    assets: useRef(null),
    investors: useRef(null),
  };

  const scrollToSection = (key) => {
    const element = subSectionRefs[key]?.current;
    if (element) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: element,
          offsetY: 100, // adjust for sticky header
        },
        ease: 'power2.out'
      });
    }
  };
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="relative w-fit">
              <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <span className="text-black">HOW IT </span>
                <span className="text-[#15a36e]">WORKS</span>
              </h2>
              <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How Copym works - for issuers and investors
            </p>
          </motion.div>

          {/* Navigation Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-1 bg-[#f5f5f5] p-1 rounded-full w-fit self-start md:self-end border border-gray-200"
          >
            <button
              onClick={() => scrollToSection('assets')}
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 bg-white text-black shadow-sm border border-gray-100 hover:scale-[1.02]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              For Asset Owners
            </button>
            <button
              onClick={() => scrollToSection('investors')}
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 text-gray-500 hover:text-black hover:bg-white/50"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              For Investors
            </button>
          </motion.div>
        </div>

        {/* Container for stacked Lotties - same position */}
        {/* Vertical Stack of Workflow Boards */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {/* Asset Owners Workflow Board */}
          <motion.div
            ref={subSectionRefs.assets}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-black rounded-3xl p-6 sm:p-10 lg:p-14 w-full flex flex-col justify-center items-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-[#15a36e]/30 to-transparent"></div>
            <h3 className="text-white/50 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>Asset Owners Workflow</h3>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
              <Lottie
                animationData={forAssetsOwnersAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Investors Workflow Board */}
          <motion.div
            ref={subSectionRefs.investors}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-black rounded-3xl p-6 sm:p-10 lg:p-14 w-full flex flex-col justify-center items-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-right from-transparent via-[#15a36e]/30 to-transparent"></div>
            <h3 className="text-white/50 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>Investors Workflow</h3>
            <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto">
              <Lottie
                animationData={forInvestorsAnimation}
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
          className="flex justify-center mt-5 sm:mt-10 md:mt-12"
        >
          <button className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            See workflow details
          </button>
        </motion.div>
      </div>
    </section >
  );
};

export default HowItWorksSection;
