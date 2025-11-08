import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AifonviewSVG from '../../../components/SVG/aifonview.svg';


export default function AIInvestingSection() {
  return (
   <section className="w-full bg-background-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1452px] mx-auto px-4 sm:px-6 lg:px-14">
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
          
          {/* Visual Element - SVG */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto m-auto mt-[130px] items-center">
            <img 
              src={AifonviewSVG} 
              alt="AI Investment Interface" 
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

       
      </div>
    </section>
  );
}