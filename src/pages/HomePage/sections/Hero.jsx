import React, { useState } from 'react';
import { ArrowRight, Play, X, TrendingUp, Wallet, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// 3D Phone Component for Hero - First Phone (Marketplace)
const HeroPhone3D = () => {
  return (
    <div 
      className="relative w-[320px] h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 rounded-[3rem] p-2 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotateX(8deg) rotateY(12deg) rotateZ(-8deg) translateY(50px) translateX(20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
            {/* Marketplace Image */}
            <img 
              src="/assets/Images/devices/marketplace01.jpg" 
              alt="Marketplace Interface"
              className="w-full h-full object-cover rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className="absolute -bottom-16 left-1/2 w-60 h-16 bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 blur-2xl rounded-full"
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

// 3D Phone Component for Hero - Second Phone (Wallet)
const HeroPhone3DWallet = () => {
  return (
    <div 
      className="relative w-[320px] h-[650px] transition-all duration-700 hover:scale-105"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Phone Container */}
      <div 
        className="relative w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-green-500 rounded-[3rem] p-2 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #22c55e, #10b981, #22c55e)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
          transform: 'rotateX(-8deg) rotateY(-12deg) rotateZ(8deg) translateY(-50px) translateX(-20px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Phone Screen */}
        <div className="w-full h-full bg-black rounded-[2.5rem] p-1">
          <div className="w-full h-full bg-white rounded-[2.3rem] overflow-hidden">
            {/* Wallet Image */}
            <img 
              src="/assets/Images/devices/marketplace02.jpg" 
              alt="Wallet Interface"
              className="w-full h-full object-cover rounded-[2.3rem]"
            />
          </div>
        </div>
        
        {/* Phone Reflection/Glow Effect */}
        <div 
          className="absolute -bottom-16 left-1/2 w-60 h-16 bg-gradient-to-r from-transparent via-green-300 to-transparent opacity-40 blur-2xl rounded-full"
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
    <section className="relative min-h-[70vh] max-h-[90vh] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start h-full">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left lg:pt-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 uppercase anton-regular">
              <span className="text-gray-900">UNLOCK </span>
              <span className="text-green-600">EXCLUSIVE</span>
              <br />
              <span className="text-gray-900">ASSETS, INVEST WITH </span>
              <br />
              <span className="text-green-600">CONFIDENCE</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets. No gas fees, no native token required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-green-500 hover:bg-green-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Investing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Dual Phone Mockups */}
          <div className="flex justify-center lg:justify-start lg:pt-24 lg:pl-2">
            <div className="flex gap-6 items-center">
              <HeroPhone3D />
              <HeroPhone3DWallet />
            </div>
          </div>
        </div>
      </div>

      {/* Curved Transition Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] transform translate-y-1/2"></div>
        
        {/* Investor's Toolkit Section */}
        <div className="relative z-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-t-[3rem] sm:rounded-t-[4rem] lg:rounded-t-[5rem] pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Investor's toolkit</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Wallet}
                title="Link what you love"
                description="Connect your wallets and exchanges effortlessly. Delta brings all your crypto together in one place."
                color="from-green-500 to-emerald-600"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Stay ahead"
                description="Stay informed with tailored alerts and updates. From Why Is It Moving to price predictions."
                color="from-yellow-500 to-orange-600"
              />
              <FeatureCard
                icon={BarChart3}
                title="Master your portfolio"
                description="Track every coin, every move, and your entire portfolio with crystal clarity."
                color="from-pink-500 to-purple-600"
              />
              <FeatureCard
                icon={Zap}
                title="Uncover new horizons"
                description="Discover opportunities and market trends with tools like What's Moving and advanced analytics."
                color="from-blue-500 to-cyan-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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