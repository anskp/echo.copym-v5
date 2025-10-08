import React, { useState } from 'react';
import { GiPlayButton, GiCrossedSwords } from 'react-icons/gi';
import { Link } from 'react-router-dom';

// Realistic iPhone Component for Hero - First Phone (Marketplace)
const HeroPhone3D = () => {
  return (
    <div 
      className="relative w-[140px] h-[280px] sm:w-[200px] sm:h-[400px] md:w-[240px] md:h-[480px] lg:w-[320px] lg:h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* iPhone Container */}
      <div 
        className="relative w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2"
        style={{
          transform: 'rotateX(8deg) rotateY(12deg) rotateZ(-8deg) translateY(50px) translateX(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* iPhone Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-0.5 sm:p-1 relative">
          <div className="w-full h-full bg-white rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-3 sm:h-4 md:h-5 lg:h-6 bg-black rounded-b-2xl sm:rounded-b-3xl z-10"></div>
            
            {/* iPhone Status Bar */}
            <div className="absolute top-1 sm:top-2 md:top-3 lg:top-4 left-0 right-0 flex justify-between items-center px-3 sm:px-4 md:px-5 lg:px-6 z-20">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-xs sm:text-sm font-semibold text-black">9:41</div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-4 sm:w-5 h-2 sm:h-2.5 bg-black rounded-full"></div>
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black rounded-full"></div>
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black rounded-full"></div>
              </div>
            </div>
            
            {/* Marketplace Image */}
            <img 
              src="/assets/Images/devices/marketplace01.jpg" 
              alt="Marketplace Interface"
              className="w-full h-full object-cover rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-1/2 w-32 sm:w-48 lg:w-60 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40 blur-2xl rounded-full"
          style={{
            transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
            transformOrigin: 'center top'
          }}
        ></div>
      </div>
    </div>
  );
};

// Realistic iPhone Component for Hero - Second Phone (Wallet)
const HeroPhone3DWallet = () => {
  return (
    <div 
      className="relative w-[140px] h-[280px] sm:w-[200px] sm:h-[400px] md:w-[240px] md:h-[480px] lg:w-[320px] lg:h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* iPhone Container */}
      <div 
        className="relative w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2"
        style={{
          transform: 'rotateX(-8deg) rotateY(-12deg) rotateZ(8deg) translateY(-50px) translateX(-20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* iPhone Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-0.5 sm:p-1 relative">
          <div className="w-full h-full bg-white rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem] overflow-hidden relative">
            {/* iPhone Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 md:w-24 lg:w-32 h-3 sm:h-4 md:h-5 lg:h-6 bg-black rounded-b-2xl sm:rounded-b-3xl z-10"></div>
            
            {/* iPhone Status Bar */}
            <div className="absolute top-1 sm:top-2 md:top-3 lg:top-4 left-0 right-0 flex justify-between items-center px-3 sm:px-4 md:px-5 lg:px-6 z-20">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-xs sm:text-sm font-semibold text-black">9:41</div>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-4 sm:w-5 h-2 sm:h-2.5 bg-black rounded-full"></div>
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black rounded-full"></div>
                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-black rounded-full"></div>
              </div>
            </div>
            
            {/* Wallet Image */}
            <img 
              src="/assets/Images/devices/marketplace02.jpg" 
              alt="Wallet Interface"
              className="w-full h-full object-cover rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-1/2 w-32 sm:w-48 lg:w-60 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-40 blur-2xl rounded-full"
          style={{
            transform: 'translateX(-50%) rotateX(90deg) translateZ(-20px)',
            transformOrigin: 'center top'
          }}
        ></div>
      </div>
    </div>
  );
};



export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative overflow-visible">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-left">
          {/* Multi-line Headline */}
          <div className="space-y-2 mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">UNLOCK</span>
              <br />
              <span className="text-emerald-500">EXCLUSIVE</span>
              <br />
              <span className="text-gray-900">ASSETS,</span>
              <br />
              <span className="text-gray-900">INVEST WITH</span>
              <br />
              <span className="text-emerald-500">CONFIDENCE</span>
            </h1>
          </div>

          {/* Description Text */}
          <p className="text-xl text-gray-900 leading-relaxed mb-8 max-w-4xl">
            Seamless on-chain investment in real estate,<br />
            commodities, carbon credits and luxury assets. 
            <br />
            No gas fees, no native token required.
          </p>

          {/* Call-to-Action Buttons - Stacked Vertically */}
          <div className="flex flex-col gap-4">
            <Link
              to="/marketplace"
              className="bg-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-600 transition-all duration-300 flex items-center justify-start gap-3 w-fit"
            >
              START INVESTING
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 w-fit"
            >
              WATCH DEMO
            </button>
          </div>
        </div>
      </div>



      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <GiCrossedSwords size={32} />
            </button>
            <video
              src="/assets/videos/how-it-works.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}