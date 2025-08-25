import React from 'react';
import { ArrowRight, Brain, TrendingUp, BarChart3, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AIInvestingSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-4 sm:py-6 lg:py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-4">
            {/* Section Label */}
            <div className="inline-flex items-center space-x-2 text-green-400 font-medium text-sm">
              <Brain className="w-4 h-4" />
              <span>Copym AI</span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight anton-regular">
                AI That Invests
                <br />
                <span className="text-green-400">With You</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                From real-time insights to smarter decisions, let AI guide your journey to growing wealth effortlessly.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
                             <Link
                 to="/marketplace"
                 className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-green-400 bg-transparent border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-xl transition-all duration-300 transform hover:scale-105"
               >
                 See the Reveal
                 <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </div>
          </div>
          
                     {/* Right Side - AI Interface Image */}
           <div className="relative flex justify-center lg:justify-end">
             <div className="relative">
                               <img 
                  src="/assets/Images/copyai.png" 
                  alt="Copym AI Voice Assistant Interface" 
                  className="w-32 h-auto rounded-2xl object-contain shadow-2xl"
                />
               
               {/* AI Waveform Effect */}
               <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                 <div className="flex space-x-1">
                   {[...Array(8)].map((_, i) => (
                     <div 
                       key={i}
                       className="w-1 bg-green-400 rounded-full animate-pulse"
                       style={{ 
                         height: `${Math.random() * 20 + 10}px`,
                         animationDelay: `${i * 0.1}s`
                       }}
                     ></div>
                   ))}
                 </div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
