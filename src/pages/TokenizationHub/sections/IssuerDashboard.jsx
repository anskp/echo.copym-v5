// src/pages/TokenizationHub/sections/IssuerDashboard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { ArrowRight, BarChart3, Users, Shield, TrendingUp } from 'lucide-react';

export default function IssuerDashboard() {
  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Real-time insights into your tokenized assets performance and market trends.",
      color: "from-pink-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Investor Management",
      description: "Comprehensive tools for managing investor relationships and communications.",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Compliance Center",
      description: "Automated compliance monitoring and regulatory reporting dashboard.",
      color: "from-pink-500 via-blue-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "AI-powered market analysis and investment opportunity identification.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const getPositionClasses = (index) => {
    const positions = [
      'top-2 left-2',    // Top-left
      'top-2 right-2',   // Top-right
      'bottom-2 left-2', // Bottom-left
      'bottom-2 right-2' // Bottom-right
    ];
    return positions[index] || positions[0];
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 py-4 sm:py-6 lg:py-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-green-400 font-medium text-sm mb-4">
            <BarChart3 className="w-4 h-4" />
            <span>Issuer Dashboard</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight anton-regular mb-4">
            <span className="text-white">ISSUER</span>
            <br />
            <span className="text-green-400">DASHBOARD</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Your mission control center for managing tokenized assets, investor relationships, and compliance.
          </p>
        </div>

        {/* Main Dashboard Layout */}
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Central Lottie Animation */}
          <div className="relative z-10">
            <Player
              autoplay
              loop
              src="/assets/lottie/TokenizationHub/Dashboard.json"
              style={{ height: '500px', width: '500px' }}
            />
            
            {/* Mission Control Badge */}
            <div className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Mission Control</span>
            </div>
          </div>

          {/* Orbiting Feature Cards */}
          {dashboardFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`absolute ${getPositionClasses(index)} w-64`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Background Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 font-semibold text-green-400 bg-transparent border-2 border-green-400 hover:bg-green-400 hover:text-black rounded-xl transition-all duration-300 transform hover:scale-105">
            Access Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}