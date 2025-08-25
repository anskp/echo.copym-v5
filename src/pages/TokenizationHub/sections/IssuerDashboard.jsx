// src/pages/TokenizationHub/sections/IssuerDashboard.jsx

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Shield, Users, BarChart3, Settings } from 'lucide-react';

export default function IssuerDashboard() {
  const dashboardFeatures = [
    { title: 'Real-Time Analytics', description: 'Monitor token performance, holder activity, and market metrics in real-time.', icon: BarChart3, position: 'top-left' },
    { title: 'Investor Management', description: 'Comprehensive investor database with KYC status and communication tools.', icon: Users, position: 'top-right' },
    { title: 'Compliance Monitoring', description: 'Automated compliance tracking and regulatory reporting capabilities.', icon: Shield, position: 'bottom-left' },
    { title: 'Distribution Controls', description: 'Manage token distributions, dividends, and revenue sharing automatically.', icon: Settings, position: 'bottom-right' }
  ];

  const getPositionClasses = (position) => {
    switch (position) {
      case 'top-left':
        return 'absolute -top-4 -left-4';
      case 'top-right':
        return 'absolute -top-4 -right-4';
      case 'bottom-left':
        return 'absolute -bottom-4 -left-4';
      case 'bottom-right':
        return 'absolute -bottom-4 -right-4';
      default:
        return '';
    }
  };

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="anton-regular uppercase font-black text-4xl md:text-5xl mb-4">
            <span className="text-white">ISSUER</span>
            <span className="text-green-500"> DASHBOARD</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Comprehensive control center for managing your tokenized assets and investor relationships.
          </p>
        </div>

        {/* Immersive Layout with Central Lottie and Orbiting Cards */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Lottie Animation */}
          <div className="relative z-10">
            <Player
              autoplay
              loop
              src="/assets/lottie/TokenizationHub/Dashboard.json"
              style={{ height: '500px', width: '500px' }}
            />
          </div>

          {/* Orbiting Feature Cards */}
          {dashboardFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`${getPositionClasses(feature.position)} z-20 animate-pulse`}
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-64 transition-all duration-300 hover:bg-white/10 hover:scale-105">
                <div className="flex items-start">
                  <div className="p-3 border border-white/20 rounded-2xl mr-4 bg-white/10">
                    <feature.icon className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm">{feature.title}</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Background Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Additional Mission Control Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white text-sm font-medium">Mission Control Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}