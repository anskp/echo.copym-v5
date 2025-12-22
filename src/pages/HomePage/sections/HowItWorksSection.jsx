import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import forAssetsOwnersAnimation from '../../../components/lotties/forassetsowners.json';
import forInvestorsAnimation from '../../../components/lotties/forinvestors.json';

const HowItWorksSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Second Lottie stays hidden until 40% scroll, then slides in from 40% to 100%
  const x = useTransform(scrollYProgress, [0, 0.4, 1], ['100%', '100%', '0%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0, 1]);
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
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
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How Copym works - for issuers and investors
          </p>
        </motion.div>

        {/* Container for stacked Lotties - same position */}
        <div ref={containerRef} className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          {/* Asset Owners Workflow - First (base layer) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10 w-full"
          >
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

          {/* Investors Workflow - Stacked on top, slides in from right on scroll */}
          <motion.div
            style={{ x, opacity }}
            className="absolute top-0 left-0 w-full bg-black rounded-2xl p-6 sm:p-8 lg:p-10"
          >
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
          <button className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            See workflow details
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

