import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ellipse from '../../../components/SVG/Ellipse.svg';
import aiVdo from '../../../components/Videos/ai-vdo.mp4';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-background-white pt-2 sm:pt-3 md:pt-4 lg:pt-6 pb-6 sm:pb-8 md:pb-10 lg:pb-40 overflow-x-hidden overflow-y-visible">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Heading - Always at Top */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <div className="relative w-fit mx-auto mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
          </p>

        </div>

        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack */}
        <div className="flex flex-col lg:hidden items-center text-left space-y-8 sm:space-y-10 md:space-y-12 overflow-visible">
          {/* Mobile Image with Text Containers */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-md h-auto m-auto mt-6 sm:mt-8 md:mt-10 lg:mt-[100px] items-center overflow-visible">
            <div className="relative z-20">
              <div className="relative overflow-hidden flex justify-center items-center translate-y-4 sm:translate-y-6">
                <img
                  src="/assets/Images/cora-ai.png"
                  alt="AI Investment Interface"
                  className="w-full h-auto max-w-[220px] sm:max-w-[260px] md:max-w-[300px] object-contain"
                />
              </div>

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
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      <span className="text-[#15a36e] font-semibold">Cora AI</span>
                      <span className="text-black"> is an AI technology designed by CopyM to make better investments</span>
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
                    <p className="text-[10px] sm:text-xs md:text-sm font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
          <div className="relative w-full max-w-[1500px] mt-2 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center z-0 translate-y-24">
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
                {/* Image Wrapper for Bottom Cropping */}
                <div className="relative overflow-hidden flex items-center justify-center translate-y-12 lg:translate-y-16">
                  <img
                    src="/assets/Images/cora-ai.png"
                    alt="AI Investment Interface"
                    className="w-[240px] sm:w-[280px] lg:w-[350px] xl:w-[450px] object-contain z-15"
                  />
                </div>

                {/* Left Text Container - positioned to left of phone, aligned with "Your Portfolio" title */}
                <motion.div
                  className="absolute left-[-160px] top-[130px] hidden lg:block"
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
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-[#15a36e]">Cora AI</span> <span className="text-black">is a AI technology designed by CopyM to make better investments</span>
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
                      <p className="text-sm sm:text-base font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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