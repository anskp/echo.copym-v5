import React, { useState } from 'react';
import { ArrowRight, Play, X, TrendingUp, Wallet, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Phone Component for Hero - First Phone (Marketplace)
const HeroPhone3D = () => {
  return (
    <div 
      className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] lg:w-[320px] lg:h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotateX(8deg) rotateY(12deg) rotateZ(-8deg) translateY(50px) translateX(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-0.5 sm:p-1">
          <div className="w-full h-full bg-white rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem] overflow-hidden">
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
          className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-1/2 w-32 sm:w-48 lg:w-60 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 blur-2xl rounded-full"
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

// 3D Phone Component for Hero - Second Phone (Wallet)
const HeroPhone3DWallet = () => {
  return (
    <div 
      className="relative w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] lg:w-[320px] lg:h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #22c55e, #10b981, #22c55e)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotateX(-8deg) rotateY(-12deg) rotateZ(8deg) translateY(-50px) translateX(-20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] p-0.5 sm:p-1">
          <div className="w-full h-full bg-white rounded-[1.3rem] sm:rounded-[1.8rem] lg:rounded-[2.3rem] overflow-hidden">
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
          className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-1/2 w-32 sm:w-48 lg:w-60 h-8 sm:h-12 lg:h-16 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40 blur-2xl rounded-full"
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

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="text-center">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen sm:min-h-[80vh] lg:min-h-[70vh] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(80vh-6rem)] lg:min-h-[calc(70vh-8rem)]">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 w-full">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6 uppercase anton-regular px-1 sm:px-2 md:px-0 break-words">
              <span className="text-gray-900">UNLOCK </span>
              <span className="text-green-600">EXCLUSIVE</span>
              <br className="hidden sm:block" />
              <span className="text-gray-900">ASSETS, INVEST WITH </span>
              <br className="hidden sm:block" />
              <span className="text-green-600">CONFIDENCE</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 px-1 sm:px-2 md:px-4 lg:px-0 break-words">
              Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-1 sm:px-2 md:px-4 lg:px-0 w-full">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base w-full sm:w-auto max-w-full overflow-hidden"
              >
                <span className="truncate">Start Investing</span>
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 py-3 sm:py-4 font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base w-full sm:w-auto max-w-full overflow-hidden"
              >
                <span className="truncate">Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Right Side - Dual Phone Mockups */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-2 mb-8 lg:mb-0 w-full">
            <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 items-center scale-40 sm:scale-50 md:scale-75 lg:scale-90 xl:scale-100 max-w-full">
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