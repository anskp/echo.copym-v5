import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ellipse from '../../../components/SVG/Ellipse.svg';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-background-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-x-hidden overflow-y-visible">
      <div className="w-full max-w-[1600px] mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Heading - Always at Top */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <div className="relative w-fit mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight tracking-base uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU</span>
            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide mt-3 sm:mt-4 whitespace-nowrap" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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

        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack */}
        <div className="flex flex-col lg:hidden items-center text-left space-y-8 sm:space-y-10 md:space-y-12 overflow-visible">
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide max-w-4xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
                <div 
                  className="rounded-[20px] sm:rounded-[24px] p-[2px] shadow-lg w-[130px] sm:w-[150px] md:w-[170px]"
                  style={{ 
                    background: 'linear-gradient(to right, rgba(239, 239, 239, 1), rgba(188, 196, 193, 1))'
                  }}
                >
                  <div 
                    className="rounded-[18px] sm:rounded-[22px] p-3 sm:p-4 h-full w-full"
                    style={{ 
                      backgroundColor: 'rgba(225, 225, 225, 0.9)'
                    }}
                  >
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      Cora AI is a AI technology designed by CopyM to make better investments
                    </p>
                  </div>
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
                <div 
                  className="rounded-[20px] sm:rounded-[24px] p-[2px] shadow-lg w-[130px] sm:w-[150px] md:w-[170px]"
                  style={{ 
                    background: 'linear-gradient(to right, rgba(239, 239, 239, 1), rgba(188, 196, 193, 1))'
                  }}
                >
                  <div 
                    className="rounded-[18px] sm:rounded-[22px] p-3 sm:p-4 h-full w-full"
                    style={{ 
                      backgroundColor: 'rgba(225, 225, 225, 0.9)'
                    }}
                  >
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      <span className="text-[#15a36e]">AI</span> <span className="text-black">that predicts trends, analyzes data, and guides</span> <span className="text-[#15a36e]">smarter investments</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - Horizontal Layout with Grid */}
        <div className="hidden lg:flex flex-col items-center">
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
                  <div 
                    className="rounded-[28px] p-[2px] shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80"
                    style={{ 
                      background: 'linear-gradient(to right, rgba(239, 239, 239, 1), rgba(188, 196, 193, 1))'
                    }}
                  >
                    <div 
                      className="rounded-[26px] p-2 sm:p-3 h-full w-full"
                      style={{ 
                        backgroundColor: 'rgba(225, 225, 225, 0.9)'
                      }}
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                        Cora AI is a AI technology designed by CopyM to make better investments
                      </p>
                    </div>
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
                  <div 
                    className="rounded-[28px] p-[2px] shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80"
                    style={{ 
                      background: 'linear-gradient(to right, rgba(239, 239, 239, 1), rgba(188, 196, 193, 1))'
                    }}
                  >
                    <div 
                      className="rounded-[26px] p-2 sm:p-3 h-full w-full"
                      style={{ 
                        backgroundColor: 'rgba(225, 225, 225, 0.9)'
                      }}
                    >
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                        <span className="text-[#15a36e]">AI</span> <span className="text-black">that predicts trends, analyzes data, and guides</span> <span className="text-[#15a36e]">smarter investments</span>
                      </p>
                    </div>
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