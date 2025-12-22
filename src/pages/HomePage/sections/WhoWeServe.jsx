import React from 'react';
import { motion } from 'framer-motion';
import assetsImage from '../../../components/images/assets.png';
import investorsImage from '../../../components/images/investors.png';
import partnersImage from '../../../components/images/partners.png';

const WhoWeServe = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
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
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            Built for the next generation of asset markets
          </p>
        </motion.div>

        {/* 3-Card Grid Layout */}
        {/* Keep all horizontal gaps (left/right gutter, between 2-right cards, and main column gap) equal */}
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-3 sm:gap-4 lg:gap-x-4 lg:gap-y-4">
          {/* Left Card - Large (tall + wide) - Asset Owners & Institutions */}
          <div className="lg:col-span-3 lg:row-span-2 bg-black px-3 sm:px-4 lg:px-4 py-4 sm:py-5 lg:py-6 border border-gray-800 flex flex-col">
            {/* Large Image - Dominant Visual */}
            <div className="mb-4 sm:mb-5 lg:mb-6 flex items-start justify-center min-h-[180px] sm:min-h-[220px] lg:min-h-[300px] -mt-2 sm:-mt-3 lg:-mt-4">
              <img
                src={assetsImage}
                alt="Asset Owners & Institutions"
                className="w-full h-full max-h-[300px] lg:max-h-[360px] object-contain"
              />
            </div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white mb-2 lg:mb-2.5 whitespace-nowrap"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              Asset Owners & Institutions
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm mb-3 lg:mb-3.5 whitespace-nowrap"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              Launch tokenized products with institutional-grade compliance.
            </motion.p>

            {/* Bullet Points */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-1.5 sm:space-y-2 mb-4 lg:mb-4"
            >
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Real estate, private credit, funds, commodities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  White-label portals for your investors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Ongoing reporting and secondary liquidity options
                </span>
              </li>
            </motion.ul>

            {/* Learn More Button */}
            <button className="inline-flex items-center gap-2 border border-white text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group w-fit" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Learn More
              <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 group-hover:translate-x-[2px] transition-transform"
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

          {/* Top-Right Card - Investors */}
          <div className="lg:col-span-4 lg:row-span-1 bg-black px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 border border-gray-800 flex flex-col lg:flex-row items-center gap-2 lg:gap-4 h-full overflow-hidden">
            {/* Content on Left */}
            <div className="flex-1 lg:max-w-[40%] flex flex-col justify-center">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white mb-1.5 lg:mb-1.5 whitespace-nowrap"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Investors
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm mb-2 lg:mb-2"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Access curated RWA opportunities worldwide.
              </motion.p>

              {/* Bullet Points */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-1 sm:space-y-1 mb-4 lg:mb-4"
              >
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Fractional tickets
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Zero-gas trades & instant settlement
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Portfolio dashboards and automated income reinvestment
                  </span>
                </li>
              </motion.ul>

              {/* Learn More Button */}
              <button className="inline-flex items-center gap-2 border border-white text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-black hover:bg-black/80 transition-all duration-300 group w-fit" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Learn More
                <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 group-hover:translate-x-[2px] transition-transform"
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
            <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end h-full min-h-[120px] lg:min-h-[140px] relative">
              <img
                src={investorsImage}
                alt="Investors"
                className="w-auto h-auto max-h-[140px] lg:max-h-[240px] object-contain transform scale-110 lg:scale-125"
                style={{
                  right: 0,
                  top: 0,
                }}
              />
            </div>
          </div>

          {/* Bottom-Right Card - Partners */}
          <div className="lg:col-span-4 lg:row-span-1 bg-black px-3 sm:px-4 lg:px-4 py-4 sm:py-5 lg:py-6 border border-gray-800 flex flex-col lg:flex-row items-center gap-3 lg:gap-4 h-full overflow-hidden">
            {/* Image on Left */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start min-h-[140px] lg:min-h-[160px] flex-shrink-0 ">
              <img
                src={partnersImage}
                alt="Partners"
                className="w-full h-full max-h-[200px] lg:max-h-[240px] object-contain transform scale-110 lg:scale-135 translate-y-3 lg:translate-y-8 lg:-translate-x-3"
              />
            </div>

            {/* Content on Right */}
            <div className="flex-1 lg:max-w-[50%] flex flex-col justify-center">
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl lg:text-xl font-bold text-white mb-2 lg:mb-2.5 whitespace-nowrap"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Partners
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/80 text-xs sm:text-sm md:text-sm lg:text-sm mb-3 lg:mb-3.5"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Connect custodians, oracles and ESG data to real assets on-chain.
              </motion.p>

              {/* Bullet Points */}
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-1.5 sm:space-y-2 mb-4 lg:mb-4"
              >
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Custody integrations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Compliance & data providers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3 mt-1 text-xs font-normal">•</span>
                  <span className="text-xs sm:text-sm text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Node operators and ecosystem partners
                  </span>
                </li>
              </motion.ul>

              {/* Learn More Button */}
              <button className="inline-flex items-center gap-2 border border-white text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-4 rounded-full bg-black hover:bg-black/90 transition-all duration-300 group w-fit" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Learn More
                <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 group-hover:translate-x-[2px] transition-transform"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
