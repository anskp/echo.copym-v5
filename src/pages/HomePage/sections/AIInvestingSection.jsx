import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ellipse from '../../../components/SVG/Ellipse.svg';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-background-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden overflow-y-visible">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-8 sm:space-y-10 md:space-y-12 overflow-visible">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 tracking-base uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]"> CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide max-w-4xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/CopymAI"
                className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Explore Cora-AI
              </Link>
            </div>
            
            {/* Mobile Image with Text Containers */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto m-auto mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] items-center overflow-visible">
              <div className="relative z-20">
                <img 
                  src="/assets/Images/Ai-fon-view.png" 
                  alt="AI Investment Interface" 
                  className="w-full h-auto max-w-full"
                />
                
                {/* Left Text Container - Mobile: positioned to the left */}
                <motion.div 
                  className="absolute left-0 sm:-left-4 md:-left-8 top-16 sm:top-20 md:top-24 lg:hidden z-30"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-white bg-opacity-95 rounded-[20px] sm:rounded-[24px] border-2 border-gray-200 p-3 sm:p-4 shadow-lg w-[130px] sm:w-[150px] md:w-[170px]">
                    <p className="text-[10px] sm:text-xs md:text-sm text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      Cora AI is a AI technology designed by CopyM to make better investments
                    </p>
                  </div>
                </motion.div>

                {/* Right Text Container - Mobile: positioned to the right */}
                <motion.div 
                  className="absolute right-0 sm:-right-4 md:-right-8 bottom-12 sm:bottom-16 md:bottom-20 lg:hidden z-30"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="bg-white bg-opacity-95 rounded-[20px] sm:rounded-[24px] border-2 border-gray-200 p-3 sm:p-4 shadow-lg w-[130px] sm:w-[150px] md:w-[170px]">
                    <p className="text-[10px] sm:text-xs md:text-sm text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      AI that predicts trends, analyzes data, and guides smarter investments.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - Horizontal Layout with Grid */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 tracking-base uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]"> CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU </span>
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide max-w-4xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/CopymAI"
                className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Explore Cora-AI
              </Link>
            </div>
          </div>

          {/* AI Visualization with Grid */}
          <div className="relative w-full max-w-[1500px] mt-[-90px] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <img 
                src={ellipse} 
                alt="Background Circle" 
                className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"
              />
            </div>

            {/* Content Grid */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Center - Mobile Image */}
              <div className="relative flex justify-center items-center z-20">
                <img 
                  src="/assets/Images/Ai-fon-view.png" 
                  alt="AI Investment Interface" 
                  className="w-64 h-80 mt-20 sm:w-96 sm:h-[384px] lg:w-[450px] lg:h-[540px] xl:w-[500px] xl:h-[600px]"
                />
                
                {/* Left Text Container - positioned to left of phone, aligned with "Your Portfolio" title */}
                <motion.div 
                  className="absolute left-[-200px] top-[130px] hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8, x: -30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="bg-background-white bg-opacity-60 rounded-[28px] border-2 border-border-gray p-2 sm:p-3 shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80 ">
                    <p className="text-sm sm:text-base text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      Cora AI is a AI technology designed by CopyM to make better investments
                    </p>
                  </div>
                </motion.div>

                {/* Right Text Container - positioned to bottom right of phone, aligned with "Upcoming Payouts" section */}
                <motion.div 
                  className="absolute right-[-180px] bottom-[100px] hidden lg:block"
                  initial={{ opacity: 0, scale: 0.8, x: 30 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                >
                  <div className="bg-background-white bg-opacity-60 rounded-[28px] border-2 border-border-gray p-2 sm:p-3 shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80">
                    <p className="text-sm sm:text-base text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      AI that predicts trends, analyzes data, and guides smarter investments.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}