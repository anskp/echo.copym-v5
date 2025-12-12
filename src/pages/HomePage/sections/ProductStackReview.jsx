import React from 'react';
import { motion } from 'framer-motion';

const lineGray = '#c1c7ca';
const lineGreen = '#15a36e';

const steps = [
  {
    title: 'Marketplace',
    description: 'Trade and discover unique digital assets in our secure marketplace.',
    icon: (
      <div className="w-14 h-14 rounded-full bg-[#15a36e] flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white">
          <path
            fill="currentColor"
            d="M24 6 6 18v12l18 12 18-12V18L24 6Zm0 4.5 12 8v10l-12 8-12-8v-10l12-8Z"
          />
        </svg>
      </div>
    ),
  },
  {
    title: 'Tokenization',
    description: 'Create and manage digital tokens with advanced blockchain technology.',
    icon: (
      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center border-2 border-[#15a36e] shadow-lg">
        <span className="text-white text-lg font-bold">$</span>
      </div>
    ),
  },
  {
    title: 'Other',
    description: 'Additional services and tools to enhance your tokenization experience.',
    icon: (
      <div className="w-12 h-12 rounded-full bg-[#15a36e] flex items-center justify-center shadow-lg">
        <svg viewBox="0 0 48 48" className="w-7 h-7 text-white">
          <circle cx="24" cy="24" r="8" fill="currentColor" />
        </svg>
      </div>
    ),
  },
];

const ProductStackReview = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-[#15a36e]">PRODUCT </span>
            <span className="text-black">STACK REVIEW</span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 bg-black mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg md:text-xl text-black max-w-3xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            One platform. Multiple products. Full lifecycle tokenization.
          </p>
        </motion.div>

        {/* Step layout */}
        <div className="relative w-full min-h-[420px] lg:min-h-[460px]">
          {/* Connector lines (desktop) */}
          <div className="hidden lg:block">
            <div className="absolute left-[140px] top-[170px] h-[4px] w-[240px]" style={{ background: `linear-gradient(90deg, ${lineGray}, ${lineGreen})` }} />
            <div className="absolute left-[380px] top-[170px] w-[4px] h-[120px]" style={{ background: lineGray }} />
            <div className="absolute left-[380px] top-[290px] h-[4px] w-[260px]" style={{ background: `linear-gradient(90deg, ${lineGray}, ${lineGreen})` }} />
            <div className="absolute left-[640px] top-[290px] w-[4px] h-[120px]" style={{ background: lineGray }} />
            <div className="absolute left-[640px] top-[410px] h-[4px] w-[320px]" style={{ background: `linear-gradient(90deg, ${lineGray}, ${lineGreen})` }} />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-12 lg:gap-0 lg:block">
            {/* Marketplace */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative lg:absolute lg:left-[80px] lg:top-[120px] flex items-start gap-4"
            >
              <div className="hidden lg:block">{steps[0].icon}</div>
              <div className="lg:ml-4">
                <div className="lg:hidden mb-3">{steps[0].icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#15a36e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[0].title}
                </h3>
                <p className="text-sm sm:text-base text-black/80 max-w-xs leading-relaxed mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[0].description}
                </p>
              </div>
            </motion.div>

            {/* Tokenization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative lg:absolute lg:left-[400px] lg:top-[270px] flex items-start gap-4"
            >
              <div className="hidden lg:block">{steps[1].icon}</div>
              <div className="lg:ml-4">
                <div className="lg:hidden mb-3">{steps[1].icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#15a36e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[1].title}
                </h3>
                <p className="text-sm sm:text-base text-black/80 max-w-xs leading-relaxed mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[1].description}
                </p>
              </div>
            </motion.div>

            {/* Other */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative lg:absolute lg:left-[700px] lg:top-[410px] flex items-start gap-4"
            >
              <div className="hidden lg:block">{steps[2].icon}</div>
              <div className="lg:ml-4">
                <div className="lg:hidden mb-3">{steps[2].icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#15a36e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[2].title}
                </h3>
                <p className="text-sm sm:text-base text-black/80 max-w-xs leading-relaxed mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {steps[2].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStackReview;


