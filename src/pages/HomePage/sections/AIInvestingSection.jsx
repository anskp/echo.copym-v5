import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ellipse from '../../../components/SVG/Ellipse.svg';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-background-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1452px] mx-auto px-4 sm:px-6 lg:px-14">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-8 sm:space-y-10 md:space-y-12">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6 tracking-base uppercase" style={{ fontFamily: 'Palanquin' }}>
              <span className="text-[#15a36e]"> CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide max-w-4xl mx-auto" style={{ fontFamily: 'Palanquin' }}>
              From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/CopymAI"
                className="inline-flex items-center justify-center px-[34px] py-[10px] text_font_family=Palanquin
                text_font_weight=font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white  rounded-full"
              >
                Explore Cora-AI
              </Link>
            </div>
            
            {/* Mobile Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto m-auto mt-[100px] items-center">
              <div className="relative z-20">
                <img 
                  src="/assets/Images/Ai-fon-view.png" 
                  alt="AI Investment Interface" 
                  className="w-full h-auto max-w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - Horizontal Layout with Grid */}
        <div className="hidden lg:flex flex-col items-center">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight mb-4 sm:mb-6 tracking-base uppercase" style={{ fontFamily: 'Palanquin' }}>
              <span className="text-[#15a36e]"> CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-normal leading-relaxed mb-8 sm:mb-12 tracking-wide max-w-4xl mx-auto" style={{ fontFamily: 'Palanquin' }}>
              From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/CopymAI"
                className="inline-flex items-center justify-center px-[34px] py-[10px] text_font_family=Palanquin
                text_font_weight=font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white  rounded-full"
              >
                Explore Cora-AI
              </Link>
            </div>
          </div>

          {/* AI Visualization with Grid */}
          <div className="relative w-full max-w-[990px] mt-[-90px] mx-auto">
            <div className="absolute inset-0 flex items-center justify-center z-0">
  <img 
    src={ellipse} 
    alt="Background Circle" 
    className="w-[400px] h-[400px] lg:w-[600px] lg:h-[600px]"
  />
</div>

            {/* Content Grid */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Center - Mobile Image */}
              <div className="relative flex justify-center items-center z-20">
                <img 
                  src="/assets/Images/Ai-fon-view.png" 
                  alt="AI Investment Interface" 
                  className="w-64 h-80 mt-20 sm:w-96 sm:h-[384px] lg:w-[500px] lg:h-[600px]"
                />
                
                {/* Left Text Container - positioned to left of phone, aligned with "Your Portfolio" title */}
                <div className="absolute left-[-200px] top-[130px] hidden lg:block">
                  <div className="bg-background-white bg-opacity-60 rounded-[28px] border-2 border-border-gray p-2 sm:p-3 shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80 ">
                    <p className="text-sm sm:text-base text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      Cora AI is a AI technology designed by CopyM to make better investments
                    </p>
                  </div>
                </div>

                {/* Right Text Container - positioned to bottom right of phone, aligned with "Upcoming Payouts" section */}
                <div className="absolute right-[-180px] bottom-[100px] hidden lg:block">
                  <div className="bg-background-white bg-opacity-60 rounded-[28px] border-2 border-border-gray p-2 sm:p-3 shadow-[0px_4px_4px_#888888ff] lg:mb-0 lg:w-80">
                    <p className="text-sm sm:text-base text-black font-medium leading-relaxed text-left" style={{ fontFamily: 'Palanquin' }}>
                      AI that predicts trends, analyzes data, and guides smarter investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}