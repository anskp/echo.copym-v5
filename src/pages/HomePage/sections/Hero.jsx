import React, { useState } from 'react';
import { GiPlayButton, GiCrossedSwords } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import HomeCycle from '../../../components/SVG/HomeCycle.svg';

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center">
          {/* Main Headline - Single Line */}
          <div className="mb-8">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-gray-900">UNLOCK EXCLUSIVE ASSETS, INVEST WITH CONFIDENCE</span>
            </h1>
          </div>

          {/* Description Text */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-900 leading-relaxed mb-12 max-w-4xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Seamless on-chain investment in real estate, commodities, carbon credits and luxury assets. No gas fees, no native token required.
          </p>

          {/* Call-to-Action Buttons - Horizontal Layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              to="/marketplace"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px] shadow-lg"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              START INVESTING
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="bg-transparent border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 min-w-[200px]"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              WATCH DEMO
            </button>
          </div>
        </div>

        {/* HomeCycle SVG Section */}
        <div className="mt-20 mb-12">
          <div className="flex justify-center items-center">
            <img 
              src={HomeCycle} 
              alt="Innovation and Investment Cycle" 
              className="w-full max-w-4xl h-auto"
            />
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center">
          <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 uppercase tracking-wider" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            OWN. EARN. EXPLORE. TRADE.
          </p>
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