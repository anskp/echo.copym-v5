import React from "react";
import { ArrowRight, Star, QrCode, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// 3D Phone Component
const Phone3D = ({ image, rotation = "", additionalTransform = "", phoneColor = "blue" }) => {
  const colorStyles = {
    blue: {
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
      glowColor: 'via-blue-300'
    },
    green: {
      background: 'linear-gradient(135deg, #22c55e, #10b981, #22c55e)',
      glowColor: 'via-green-300'
    }
  };

  const currentColor = colorStyles[phoneColor];

  return (
    <div 
      className={`relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105 ${rotation}`}
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
        style={{
          background: currentColor.background,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: `rotateX(-15deg) rotateY(-25deg) rotateZ(15deg) ${additionalTransform}`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-white rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
            <img 
              src={image} 
              alt="App Interface"
              className="w-full h-full object-cover rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className={`absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent ${currentColor.glowColor} to-transparent opacity-40 blur-xl md:blur-2xl rounded-full`}
          style={{
            transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
            transformOrigin: 'center top'
          }}
        ></div>
        
        {/* Additional shadow for depth */}
        <div 
          className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
          style={{
            transform: 'translateZ(-10px)'
          }}
        ></div>
      </div>
    </div>
  );
};

// Store Download Button Component
const StoreDownloadButton = ({ store, rating, downloads, qrCode, logo, bgColor, textColor, position }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center ${position === 'left' ? 'mr-8 md:mr-12' : 'ml-8 md:ml-12'}`}
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* QR Code */}
      <div className="mb-4 p-3 bg-white rounded-2xl shadow-lg">
        <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center">
          <QrCode className="w-12 h-12 text-gray-400" />
        </div>
      </div>
      
      {/* Store Button */}
      <div className={`${bgColor} ${textColor} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
        <div className="flex items-center space-x-3">
          {/* Store Logo */}
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 bg-gray-800 rounded"></div>
          </div>
          
          {/* Store Info */}
          <div className="flex flex-col">
            <span className="text-xs opacity-80">Download on</span>
            <span className="font-semibold text-lg">{store}</span>
          </div>
          
          <Download className="w-5 h-5" />
        </div>
      </div>
      
      {/* Rating */}
      <div className="mt-3 flex items-center space-x-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
        <span className="text-sm text-gray-600 ml-1">{rating}.0</span>
      </div>
      
      {/* Downloads */}
      <span className="text-xs text-gray-500 mt-1">{downloads}</span>
    </motion.div>
  );
};

export default function AppPeekSection() {
  return (
    <section className="relative py-16 -mt-20 bg-gradient-to-r from-green-500 via-green-600 to-green-500 rounded-[50px] mx-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center p-4 mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 uppercase anton-regular"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-white">PEEK INTO OUR </span>
            <span className="text-black">WEB3 </span>
            <span className="text-white">INVESTMENT HUB</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl text-black/80 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience our platform's features through an immersive journey
          </motion.p>
        </div>

        {/* Main Content with Phones and Download Buttons */}
        <div className="flex justify-center items-center relative">
          {/* Left Download Button - Google Play Store */}
          <StoreDownloadButton 
            store="Google Play"
            rating={4}
            downloads="1M+ downloads"
            bgColor="bg-black"
            textColor="text-white"
            position="left"
          />
          
          {/* Dual 3D Phones - Compact layout */}
          <div className="flex justify-center items-center gap-3 md:gap-6 relative overflow-visible" style={{ perspective: '1000px' }}>
            {/* Left Device - Blue phone with forward tilt */}
            <div 
              className="relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Phone Container */}
              <div 
                className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'rotateX(8deg) rotateY(12deg) rotateZ(-8deg) translateY(50px) translateX(20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
                  <div className="w-full h-full bg-white rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
                    <img 
                      src="/assets/Images/devices/marketplace01.jpg" 
                      alt="App Interface"
                      className="w-full h-full object-cover rounded-[2.3rem]"
                    />
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 blur-xl md:blur-2xl rounded-full"
                  style={{
                    transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
                    transformOrigin: 'center top'
                  }}
                ></div>
                
                <div 
                  className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
                  style={{
                    transform: 'translateZ(-10px)'
                  }}
                ></div>
              </div>
            </div>

            {/* Right Device - Green phone with backward tilt */}
            <div 
              className="relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105"
              style={{ perspective: '1000px' }}
            >
              {/* 3D Phone Container - Green */}
              <div 
                className="relative w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #22c55e, #10b981, #22c55e)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                  transform: 'rotateX(-8deg) rotateY(-12deg) rotateZ(8deg) translateY(-20px) translateX(-20px)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
                  <div className="w-full h-full bg-white rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
                    <img 
                      src="/assets/Images/devices/marketplace02.jpg" 
                      alt="Wallet Interface"
                      className="w-full h-full object-cover rounded-[2.3rem]"
                    />
                  </div>
                </div>
                
                <div 
                  className="absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40 blur-xl md:blur-2xl rounded-full"
                  style={{
                    transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
                    transformOrigin: 'center top'
                  }}
                ></div>
                
                <div 
                  className="absolute top-4 left-4 w-full h-full bg-black opacity-10 rounded-[3rem] -z-10"
                  style={{
                    transform: 'translateZ(-10px)'
                  }}
                ></div>
              </div>
            </div>
          </div>
          
          {/* Right Download Button - Apple App Store */}
          <StoreDownloadButton 
            store="App Store"
            rating={5}
            downloads="500K+ downloads"
            bgColor="bg-black"
            textColor="text-white"
            position="right"
          />
        </div>
      </div>
    </section>
  );
}