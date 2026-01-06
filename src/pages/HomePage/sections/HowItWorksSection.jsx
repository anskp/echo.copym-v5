import React from 'react';
import { motion } from 'framer-motion';

const WorkflowBoard = ({ title, steps, isAssetOwners }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[#15a36e] text-xl font-bold mb-2 ml-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
        {title}
      </h3>
      <div className="bg-black rounded-[30px] sm:rounded-[40px] p-4 sm:p-8 aspect-auto lg:aspect-[1.8/1] min-h-[450px] sm:min-h-[400px] relative flex items-center justify-between border border-gray-800 shadow-2xl overflow-hidden">
        {/* Background glow or subtle lines could go here */}

        <div className="flex-1 h-full relative flex flex-col sm:flex-row items-center justify-between px-2 sm:px-8 py-8 sm:py-0">
          {/* Left Column */}
          <div className="flex flex-col gap-6 sm:gap-10 z-10 items-center">
            <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg w-40 text-center flex items-center justify-center min-h-[50px]">
              {steps[0]}
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-6">
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                <path d="M10 0V38M10 38L5 33M10 38L15 33" stroke="#15a36e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="bg-[#333333] text-white px-6 py-3 rounded-[20px] text-sm font-bold shadow-lg w-40 text-center flex items-center justify-center min-h-[60px]">
              {steps[1]}
            </div>
          </div>

          {/* Middle Column (Green Pill) */}
          <div className="z-10 absolute left-1/2 -translate-x-1/2 flex items-center">
            <div className="bg-[#15a36e] text-white px-8 py-5 rounded-[30px] text-sm md:text-base font-bold shadow-xl w-48 text-center flex items-center justify-center min-h-[70px]">
              {steps[2]}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 z-10">
            <div className="bg-[#333333] text-white px-6 py-3 rounded-[20px] text-sm font-bold shadow-lg w-40 text-center flex items-center justify-center min-h-[60px]">
              {steps[3]}
            </div>
            {/* Arrow */}
            <div className="flex justify-center -my-6">
              <svg width="20" height="40" viewBox="0 0 20 40" fill="none">
                <path d="M10 0V38M10 38L5 33M10 38L15 33" stroke="#15a36e" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold shadow-lg w-40 text-center flex items-center justify-center min-h-[50px]">
              {steps[4]}
            </div>
          </div>

          {/* Dotted Connections - SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* Curve Left */}
            <path
              d="M170 140 Q 230 140, 230 140"
              stroke="white"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              fill="none"
              className="opacity-30"
            />
            {/* These lines are hard to place exactly with relative values, using a more robust approach below */}
          </svg>

          {/* Desktop connection lines (Simplified as CSS borders or SVG) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full relative">
              {/* Left Connection */}
              <div className="absolute left-[25%] top-[55%] w-[25%] h-px border-t border-dashed border-white opacity-40"></div>
              {/* Right Connection */}
              <div className="absolute right-[25%] top-[45%] w-[25%] h-px border-t border-dashed border-white opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const assetOwnerSteps = [
    "Onboard & verify",
    "Tokenize & structure",
    "List on marketplace / launchpool",
    "Distribute to investors",
    "Monitor & report"
  ];

  const investorSteps = [
    "Discover curated RWA's",
    "Complete KYC once",
    "Complete KYC once",
    "Earn yield or income",
    "Trade on the secondary market"
  ];

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
          >
            <WorkflowBoard title="For Asset Owners" steps={assetOwnerSteps} isAssetOwners={true} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <WorkflowBoard title="For Investors" steps={investorSteps} isAssetOwners={false} />
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
            See workflow details
          </button>
        </motion.div>
      </div>
    </section >
  );
};

export default HowItWorksSection;
