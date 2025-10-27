import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AifonviewSVG from '../../../components/SVG/aifonview.svg';

export default function AIInvestingSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:-mt-32 lg:pt-6 lg:pb-8 overflow-hidden bg-white lg:bg-[#E5F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-8 sm:space-y-10 md:space-y-12">
          {/* Main Headline */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black leading-tight px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              AI that Invests with you
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed max-w-2xl mx-auto px-4">
              From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-bold text-white transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-transparent text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-full"
            >
              See the Reveal
            </Link>
          </div>
          
          {/* Visual Element - SVG */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto flex justify-center items-center">
            <img 
              src={AifonviewSVG} 
              alt="AI Investment Interface" 
              className="w-full h-auto max-w-full"
            />
          </div>
        </div>

        {/* Desktop Layout (lg+) - Horizontal Layout */}
        <div className="hidden lg:flex flex-row items-center gap-8">
          {/* Left Side - Content */}
          <div className="text-left space-y-4 flex-1">
            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-3xl xl:text-4xl font-bold text-black leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Cora-AI that Invests with you
              </h2>
              <p className="text-lg text-black leading-relaxed max-w-2xl">
                From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-start">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-6 py-4 font-bold text-white transition-all duration-300 transform hover:scale-105"
                style={{
                  borderRadius: 57,
                  background: "linear-gradient(179.93deg, rgba(48,130,162,0.8) 0.13%, rgba(43,93,131,0.8) 76.14%)"
                }}
              >
                Explore Assets
              </Link>
            </div>
           </div>
           
           {/* Right Side - AI Logo */}
           <div className="relative w-full max-w-xl xl:max-w-2xl h-auto">
             <img 
               src="/assets/Images/ai-logo.png" 
               alt="AI Logo" 
               className="w-full h-auto rounded-2xl object-contain scale-125"
               style={{
                 zIndex: 20
               }}
             />
           </div>
        </div>
      </div>
    </section>
  );
}