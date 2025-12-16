import React from 'react';
import { motion } from 'framer-motion';

const lineGray = '#c1c7ca';
const lineGreen = '#15a36e';

const steps = [
  {
    title: 'Marketplace',
    description: 'Trade and discover unique digital assets in our secure marketplace.',
    icon: (
      <div className="w-14 h-14 flex items-center justify-center">
        <img
          src="/assets/copym/png/Copym-05-1.png"
          alt="Marketplace"
          className="w-full h-full object-contain"
        />
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
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative w-fit">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]">PRODUCT </span>
              <span className="text-black">STACK REVIEW</span>
            </h2>
            <div className="absolute bottom-0 left-0 h-px bg-black" style={{ width: 'calc(100% + 12px)' }}></div>
          </div>
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
              className="relative lg:absolute lg:left-[80px] lg:top-[80px] flex items-start gap-4"
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
              className="relative lg:absolute lg:left-[400px] lg:top-[200px] flex items-start gap-4"
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
              className="relative lg:absolute lg:left-[650px] lg:top-[320px] flex items-start gap-4"
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


