import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import forAssetsOwnersAnimation from '../../../components/lotties/forassetsowners.json';
import forInvestorsAnimation from '../../../components/lotties/forinvestors.json';

const HowItWorksSection = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-12 md:mb-16"
        >
          <div className="relative w-fit">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-black">HOW IT </span>
              <span className="text-[#15a36e]">WORKS</span>
            </h2>
            <div className="absolute bottom-0 left-0 h-px bg-black" style={{ width: 'calc(100% + 12px)' }}></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-black" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How Copym works - for issuers and investors
          </p>
        </motion.div>

        {/* Two Workflows Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Asset Owners Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              For Asset Owners
            </h3>
            
            {/* Lottie Animation */}
            <div className="w-full flex justify-center items-center">
              <Lottie
                animationData={forAssetsOwnersAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Investors Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              For Investors
            </h3>
            
            {/* Lottie Animation */}
            <div className="w-full flex justify-center items-center">
              <Lottie
                animationData={forInvestorsAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
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
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
        >
          <button className="bg-[#15a36e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#15a36e]/90 transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            See workflow details
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

