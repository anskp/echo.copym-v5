// src/pages/TokenizationHub/sections/InvestorManagement.jsx

import React from 'react';
import { motion } from 'framer-motion';
import cyclonebitcoinImage from '../../../components/images/cyclonebitcoin.png';

export default function InvestorManagement() {
  const features = [
    {
      title: "Investor Dashboard",
      description: "Comprehensive dashboard for tracking investments, returns, and portfolio performance.",
      stats: "10+ Active"
    },
    {
      title: "Portfolio Analytics",
      description: "Advanced analytics and reporting tools for investment performance tracking.",
      stats: "Real Time"
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and regulatory reporting for all investors.",
      stats: "100% Compliant"
    },
    {
      title: "Communication Hub",
      description: "Integrated communication tools for investor updates and announcements.",
      stats: "24/7 Support"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Top Section Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-30"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight dm-sans mb-6">
            <span className="text-gray-900">INVESTOR</span>
            <span className="text-emerald-600">MANAGEMENT</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto dm-sans">
            Comprehensive tools for managing investor relationships, compliance, and portfolio performance.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: Image and Buttons */}
          <div className="flex flex-col items-center lg:items-start">
            {/* 3D Graphic Image */}
            <div className="mb-8 w-full max-w-lg">
              <img 
                src={cyclonebitcoinImage} 
                alt="Digital Asset Ecosystem" 
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Two Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              {/* MANAGE INVESTORS Button */}
              <button className="relative inline-flex items-center justify-between px-6 py-3 bg-[#15a36e] text-white font-semibold rounded-lg hover:bg-[#128d5c] transition-colors duration-200 w-full sm:w-auto">
                <span>MANAGE INVESTORS</span>
                <div className="ml-3 flex items-center justify-center w-7 h-7 bg-[#15a36e] rounded-full border-2 border-white/30">
                  <span className="text-white text-sm font-bold">→</span>
                </div>
              </button>
              
              {/* LEARN MORE Button */}
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#15a36e] font-semibold border-2 border-[#15a36e] rounded-lg hover:bg-[#15a36e] hover:text-white transition-all duration-200 w-full sm:w-auto">
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Side: Four Cards Stacked */}
          <div className="flex flex-col gap-4">
            {features.map((feature, index) => {
              // Further reduced header height for horizontally long cards
              const headerHeight = '48px';
              // Further reduced SVG dimensions proportionally
              const svgWidth = index === 0 ? 50 : 48;
              const svgHeightTop = 18;
              const svgHeightBottom = 18;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ 
                    position: 'relative',
                    marginBottom: '16px',
                    background: '#e6f2ed',
                    borderRadius: '0px',
                    
                    overflow: 'hidden',
                    width: '100%'
                  }}
                >
                  {/* Green Header Bar with Heading */}
                  <div style={{ 
                    height: headerHeight, 
                    background: 'rgba(179,255,227,0.4)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    
                  }}>
                    <h3 className="dm-sans" style={{ 
                      fontSize: 'clamp(14px, 2vw, 18px)', 
                      fontWeight: 600, 
                      textAlign: 'center', 
                      color: '#000', 
                      margin: '0'
                    }}>{feature.title}</h3>
                  </div>

                  {/* Grey Content Area */}
                  <div style={{ 
                    padding: '15px 20px', 
                    background: '#f0f5f3',
                    position: 'relative'
                  }}>
                    <p className="dm-sans" style={{ 
                      fontSize: 'clamp(12px, 1.5vw, 14px)', 
                      textAlign: 'left', 
                      color: '#000', 
                      lineHeight: '1.4',
                      margin: '0 0 20px 0'
                    }}>
                      {feature.description}
                    </p>

                    {/* Status Badge */}
                    <div style={{ 
                      position: 'absolute',
                      bottom: '5px',
                      right: '41px',
                      background: '#fff', 
                      padding: '3px 9px', 
                      borderRadius: '20px', 
                      
                      fontSize: 'clamp(10px, 1.4vw, 13px)',
                      color: '#15a36e',
                      
                      whiteSpace: 'nowrap'
                    }}>
                      {feature.stats}
                    </div>
                  </div>

                  {/* Straight Corner Lines - Top Right */}
                  <svg width={svgWidth} height={svgHeightTop} viewBox={`0 0 ${svgWidth} ${svgHeightTop}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    style={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }}>
                    <line x1="0" y1="2" x2={index === 0 ? "48" : "46"} y2="2" stroke="#7DD1B2" strokeWidth="3" />
                    <line x1={index === 0 ? "48" : "46"} y1="2" x2={index === 0 ? "48" : "46"} y2="18" stroke="#7DD1B2" strokeWidth="3" />
                  </svg>

                  {/* Straight Corner Lines - Top Left */}
                  <svg width={32} height={svgHeightTop} viewBox={`0 0 32 ${svgHeightTop}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    style={{ position: 'absolute', top: '0', left: '0', zIndex: 1 }}>
                    <line x1="32" y1="2" x2="2" y2="2" stroke="#7DD1B2" strokeWidth="3" />
                    <line x1="2" y1="2" x2="2" y2="18" stroke="#7DD1B2" strokeWidth="3" />
                  </svg>

                  {/* Straight Corner Lines - Bottom Right */}
                  <svg width={svgWidth} height={svgHeightBottom} viewBox={`0 0 ${svgWidth} ${svgHeightBottom}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    style={{ position: 'absolute', bottom: '0', right: '0', zIndex: 1 }}>
                    <line x1="0" y1="16" x2={index === 0 ? "48" : "46"} y2="16" stroke="#7DD1B2" strokeWidth="3" />
                    <line x1={index === 0 ? "48" : "46"} y1="16" x2={index === 0 ? "48" : "46"} y2="0" stroke="#7DD1B2" strokeWidth="3" />
                  </svg>

                  {/* Straight Corner Lines - Bottom Left */}
                  <svg width={32} height={svgHeightBottom} viewBox={`0 0 32 ${svgHeightBottom}`} fill="none"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
                    style={{ position: 'absolute', bottom: '0', left: '0', zIndex: 1 }}>
                    <line x1="32" y1="16" x2="2" y2="16" stroke="#7DD1B2" strokeWidth="3" />
                    <line x1="2" y1="16" x2="2" y2="0" stroke="#7DD1B2" strokeWidth="3" />
                  </svg>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}