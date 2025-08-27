import React from 'react';
import { motion } from 'framer-motion';
import RWARoadmap from "./sections/RWARoadmap";
import InvestorRoadmap from "./sections/InvestorRoadmap";

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-blue-100">
      {/* Background Pattern - Same as HomePage */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative py-20 lg:py-32 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
              <span className="text-gray-900">DISCOVER THE </span>
              <span className="text-emerald-600">RWA ECOSYSTEM</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover the complete journey for both issuers and investors in the RWA tokenization ecosystem. 
              Choose your path and explore the future of decentralized finance.
            </p>
          </motion.div>

          {/* Side by Side Content Area */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">
            {/* Issuer Roadmap */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:pr-8 xl:pr-12"
            >
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10z"/>
                  </svg>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-gray-900 uppercase anton-regular">
                    Issuer Journey
                  </h2>
                </div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Asset tokenization process for issuers looking to tokenize real-world assets
                </p>
              </div>
              <RWARoadmap />
            </motion.div>

            {/* Investor Roadmap */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:pl-8 xl:pl-12"
            >
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 mr-3 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                  </svg>
                  <h2 className="text-3xl lg:text-4xl font-black tracking-tight leading-tight text-gray-900 uppercase anton-regular">
                    Investor Journey
                  </h2>
                </div>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Investment and trading process for investors looking to access RWA tokens
                </p>
              </div>
              <InvestorRoadmap />
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button 
              className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}