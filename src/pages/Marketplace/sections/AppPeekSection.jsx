import React from "react";
import { ArrowRight, Star, QrCode, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Silk from "../../../components/Silk";

// 3D Phone Component
const Phone3D = ({ image, rotation = "", additionalTransform = "", phoneColor = "blue" }) => {
  const colorStyles = {
    blue: {
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
      glowColor: 'via-blue-300'
    },
    emerald: {
      background: 'linear-gradient(135deg, #10b981, #059669, #10b981)',
      glowColor: 'via-emerald-300'
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
        className="relative w-full h-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
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
  const getStoreIcon = () => {
    if (store === "Google Play") {
      return <img src="/assets/Images/android.png" alt="Android" className="w-4 h-4" />;
    } else if (store === "App Store") {
      return <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-4 h-4" />;
    }
    return <div className="w-4 h-4 bg-gray-800 rounded"></div>;
  };

  return (
    <motion.div 
      className={`flex flex-col items-center ${position === 'left' ? 'mr-2 md:mr-4' : 'ml-2 md:ml-4'}`}
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* QR Code */}
      <div className="mb-1 p-1 bg-white rounded-md shadow-sm">
        <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
          <QrCode className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      {/* Store Button */}
      <div className={`${bgColor} ${textColor} rounded-md p-1.5 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
        <div className="flex items-center space-x-1.5">
          {/* Store Logo */}
          <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
            {getStoreIcon()}
          </div>
          
          {/* Store Info */}
          <div className="flex flex-col">
            <span className="text-xs opacity-80">Download on</span>
            <span className="font-semibold text-xs">{store}</span>
          </div>
          
          <Download className="w-2.5 h-2.5" />
        </div>
      </div>
      
      {/* Rating */}
      <div className="mt-1 flex items-center space-x-1">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`w-2.5 h-2.5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-1">{rating}.0</span>
      </div>
      
      {/* Downloads */}
      <span className="text-xs text-gray-500">{downloads}</span>
    </motion.div>
  );
};

export default function AppPeekSection() {
  return (
    <section className="relative">
      {/* Main Content with Curved Background - HomePage Style */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-8 sm:pt-12 lg:pt-16 pb-0 overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 opacity-15">
          <Silk
            speed={2}
            scale={1.5}
            color="#ffffff"
            noiseIntensity={0.8}
            rotation={0.1}
          />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular"
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
          <div className="flex flex-col lg:flex-row justify-center items-center relative mb-8 gap-6 lg:gap-8">
            {/* Download Buttons - Top on mobile, left/right on desktop */}
            <div className="flex lg:hidden justify-end items-center space-x-6 order-1 lg:order-none px-4">
              {/* Google Play Store Button */}
              <StoreDownloadButton 
                store="Google Play"
                rating={4}
                downloads="1M+ downloads"
                bgColor="bg-black"
                textColor="text-white"
                position="left"
              />
              
              {/* Apple App Store Button */}
              <StoreDownloadButton 
                store="App Store"
                rating={5}
                downloads="500K+ downloads"
                bgColor="bg-black"
                textColor="text-white"
                position="right"
              />
            </div>
            
                         {/* Single Phone - Centered layout */}
             <div className="flex justify-center items-center relative overflow-visible order-2 lg:order-none">
               {/* Single Device - Blue phone */}
               <div 
                 className="relative w-[180px] h-[380px] md:w-[240px] md:h-[500px] transition-all duration-700 hover:scale-105"
               >
                                                   {/* Phone Container */}
                  <div 
                    className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[2rem] md:rounded-[3rem] p-1 md:p-2 shadow-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #1f2937, #111827, #000000)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                  <div className="w-full h-full bg-black rounded-[1.5rem] md:rounded-[2.5rem] p-1">
                    <div className="w-full h-full bg-black rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden">
                      <img 
                        src="/assets/Images/devices/marketplace01.jpg" 
                        alt="App Interface"
                        className="w-full h-full object-cover rounded-[2.3rem]"
                      />
                    </div>
                  </div>
                  
                                     <div 
                     className="absolute -bottom-8 md:-bottom-16 left-1/2 w-32 md:w-60 h-8 md:h-16 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-40 blur-xl md:blur-2xl rounded-full"
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
            
            {/* Desktop Download Buttons - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex flex-col items-end space-y-3 order-3 lg:order-none">
              {/* Google Play Store Button */}
              <StoreDownloadButton 
                store="Google Play"
                rating={4}
                downloads="1M+ downloads"
                bgColor="bg-black"
                textColor="text-white"
                position="right"
              />
              
              {/* Apple App Store Button */}
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
        </div>
      </div>
    </section>
  );
}