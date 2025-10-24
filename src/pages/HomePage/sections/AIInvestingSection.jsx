import React from 'react';
import { GiBrain } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function AIInvestingSection() {
  return (
    <section className="relative py-4 sm:py-6 lg:py-8 overflow-visible" style={{ backgroundColor: '#E5F2FE' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-4 flex-1">
            {/* Section Label */}
            
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-black leading-tight anton-regular">
                Cora-AI that Invests with you
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
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
           <div className="relative w-[28rem] sm:w-[32rem] lg:w-[36rem] xl:w-[40rem] h-auto">
             <img 
               src="/assets/Images/ai-logo.png" 
               alt="AI Logo" 
               className="w-full h-auto rounded-2xl object-contain scale-125"
               style={{
                 zIndex: 20
               }}
             />
             {/* Mobile Ads Overlay */}
             <img 
               src="/assets/Images/mobile-ads.png" 
               alt="Mobile Ads" 
               className="absolute right-0 w-1/2 h-auto rounded-2xl object-contain"
               style={{
                 zIndex: 30,
                 bottom: '-140px'
               }}
             />
           </div>
        </div>
      </div>
    </section>
  );
}