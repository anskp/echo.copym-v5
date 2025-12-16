import React from 'react';
import { motion } from 'framer-motion';
import assetsImage from '../../../components/images/assets.png';
import investorsImage from '../../../components/images/investors.png';
import partnersImage from '../../../components/images/partners.png';

const WhoWeServe = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative w-fit">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-black">WHO WE </span>
              <span className="text-[#15a36e]">SERVE</span>
            </h2>
            <div className="absolute bottom-0 left-0 h-px bg-black" style={{ width: 'calc(100% + 12px)' }}></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-black mt-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            Built for the next generation of asset markets
          </p>
        </motion.div>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Card - Large (tall + wide) - Asset Owners & Institutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:row-span-2 bg-black p-4 sm:p-6 lg:p-8 border border-gray-800 flex flex-col"
          >
            {/* Large Image - Dominant Visual */}
            <div className="mb-4 sm:mb-5 flex-1 flex items-center justify-center min-h-[150px] sm:min-h-[180px] lg:min-h-[220px]">
              <img
                src={assetsImage}
                alt="Asset Owners & Institutions"
                className="w-full h-full max-h-[220px] object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Asset Owners & Institutions
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Launch tokenized products with institutional-grade compliance.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-1.5 sm:space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Real estate, private credit, funds, commodities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  White-label portals for your investors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Ongoing reporting and secondary liquidity options
                </span>
              </li>
            </ul>

            {/* Learn More Button */}
            <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Learn More
              <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Top-Right Card - Investors */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:row-span-1 bg-black px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 border border-gray-800 flex flex-col lg:flex-row items-center gap-4 lg:gap-6 h-full"
          >
            {/* Content on Left */}
            <div className="flex-1 lg:max-w-[45%] flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Investors
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base sm:text-lg mb-3 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Access curated RWA opportunities worldwide.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5 sm:space-y-2 mb-4 text-base sm:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Fractional tickets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Zero-gas trades & instant settlement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Portfolio dashboards and automated income reinvestment
                    </span>
                  </li>
                </ul>

                {/* Learn More Button */}
                <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-3 px-6 rounded-full bg-black hover:bg-black/80 transition-all duration-300 group" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Learn More
                  <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              {/* Image on Right */}
              <div className="w-full lg:w-1/2 lg:flex-1 flex items-center justify-center lg:justify-end h-full min-h-[150px] lg:min-h-[180px]">
                <img
                  src={investorsImage}
                  alt="Investors"
                  className="w-full h-full max-h-[180px] object-contain"
                />
              </div>
          </motion.div>

          {/* Bottom-Right Card - Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:row-span-1 bg-black p-4 sm:p-6 lg:p-8 border border-gray-800 flex flex-col lg:flex-row items-center gap-4 lg:gap-6 h-full"
          >
            {/* Image on Left */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start min-h-[140px] lg:min-h-[160px] flex-shrink-0">
              <img
                src={partnersImage}
                alt="Partners"
                className="w-full h-full max-h-[160px] object-contain"
              />
            </div>

            {/* Content on Right */}
            <div className="flex-1 lg:max-w-[50%] flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Partners
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm sm:text-base mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Connect custodians, oracles and ESG data to real assets on-chain.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1.5 sm:space-y-2 mb-3">
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Custody integrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Compliance & data providers
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#15a36e] mr-3 mt-1 text-lg">•</span>
                    <span className="text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Node operators and ecosystem partners
                    </span>
                  </li>
                </ul>

                {/* Learn More Button */}
                <button className="inline-flex items-center gap-3 border border-white text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Learn More
                  <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
                    <svg
                      className="w-3.5 h-3.5 group-hover:translate-x-[2px] transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
