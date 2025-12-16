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
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:grid-rows-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Left Card - Large (tall + wide) - Asset Owners & Institutions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:row-span-2 bg-black p-6 sm:p-8 lg:p-10 border border-gray-800 min-h-[400px]"
          >
            {/* Large Image - Dominant Visual */}
            <div className="mb-6 sm:mb-8 h-48 sm:h-64 lg:h-[300px] flex items-center justify-center">
              <img
                src={assetsImage}
                alt="Asset Owners & Institutions"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Asset Owners & Institutions
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Launch tokenized products with institutional-grade compliance.
            </p>

            {/* Bullet Points */}
            <ul className="space-y-2 sm:space-y-3 mb-6">
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
            className="lg:col-span-4 lg:row-span-1 bg-black px-6 sm:px-10 py-8 sm:py-10 border border-gray-800 min-h-[260px]"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 h-full">
              {/* Content on Left */}
              <div className="flex-1 lg:max-w-[48%]">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Investors
                </h3>

                {/* Description */}
                <p className="text-white/80 text-base sm:text-lg mb-4 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Access curated RWA opportunities worldwide.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 sm:space-y-3 mb-6 text-base sm:text-lg">
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
              <div className="w-full lg:w-1/2 h-48 sm:h-56 lg:h-72 flex items-center justify-center lg:justify-end lg:pl-16 lg:ml-auto">
                <img
                  src={investorsImage}
                  alt="Investors"
                  className="w-full h-full max-w-[560px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Bottom-Right Card - Partners */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:row-span-1 bg-black p-6 sm:p-8 border border-gray-800 min-h-[200px]"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 h-full">
              {/* Image on Left */}
              <div className="w-full lg:w-1/2 h-40 sm:h-48 lg:h-52 flex items-center justify-center lg:justify-start">
                <img
                  src={partnersImage}
                  alt="Partners"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content on Right */}
              <div className="flex-1 lg:max-w-[50%]">
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Partners
                </h3>

                {/* Description */}
                <p className="text-white/80 text-sm sm:text-base mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Connect custodians, oracles and ESG data to real assets on-chain.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2 sm:space-y-3 mb-4">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
