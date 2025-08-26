import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
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
        className="relative w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
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
        
        {/* Additional shadow for depth */}
        <div 
          className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 w-full h-full bg-black opacity-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] -z-10"
          style={{
            transform: 'translateZ(-10px)'
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
        className="relative w-full h-full bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
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
        
        {/* Additional shadow for depth */}
        <div 
          className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 w-full h-full bg-black opacity-10 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] -z-10"
          style={{
            transform: 'translateZ(-10px)'
          }}
        ></div>
      </div>
    </div>
  );
};



export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-[80vh] sm:min-h-[65vh] lg:min-h-[70vh] max-h-[90vh] sm:max-h-[85vh] lg:max-h-[90vh] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-8 pb-4 sm:pb-6 lg:pb-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start h-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left lg:pt-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular">
              <span className="text-gray-900">UNLOCK </span>
              <span className="text-emerald-600">EXCLUSIVE</span>
              <br />
              <span className="text-gray-900">ASSETS, INVEST WITH </span>
              <br />
              <span className="text-emerald-600">CONFIDENCE</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Start Investing
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-2xl sm:rounded-3xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Dual Phone Mockups */}
          <div className="flex justify-center lg:justify-start lg:pt-16 lg:pl-2 mt-8 lg:mt-0">
            <div className="flex gap-2 sm:gap-4 md:gap-6 items-center">
              <HeroPhone3D />
              <HeroPhone3DWallet />
            </div>
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
              <X size={32} />
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
    </section>
  );
}