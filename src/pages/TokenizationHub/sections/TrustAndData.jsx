// src/pages/TokenizationHub/sections/TrustAndData.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { GiShield, GiLockedChest, GiEyeball, GiArrowDunk } from 'react-icons/gi';

export default function TrustAndData() {
  const securityFeatures = [
    { title: 'Multi-Signature Wallets', description: 'Enhanced security with multi-signature wallet infrastructure.', icon: GiLockedChest, level: 'Enterprise', features: ['256-bit encryption', 'Hardware security', 'Audit trail'] },
    { title: 'Smart Contract Audits', description: 'Thoroughly audited smart contracts by leading security firms.', icon: GiEyeball, level: 'Certified', features: ['Third-party audits', 'Vulnerability testing', 'Compliance checks'] },
    { title: 'Compliance Framework', description: 'Built-in regulatory compliance and risk management protocols.', icon: GiShield, level: 'Regulatory', features: ['SEC compliance', 'KYC/AML', 'Regulatory reporting'] },
    { title: 'Fraud Detection', description: 'AI-powered fraud detection and prevention systems.', icon: GiShield, level: 'Advanced', features: ['Real-time monitoring', 'AI algorithms', 'Threat prevention'] }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Security Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular">
              <span className="text-white">TRUST & </span>
              <span className="text-black">DATA</span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8">
              Bank-grade security measures protecting your assets and investor data with military-grade encryption and compliance.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-white/80 text-sm mb-4 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Level Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  {feature.level}
                </div>
                
                {/* Features List */}
                <div className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center text-xs text-white/70 group-hover:text-white/90 transition-colors duration-300 justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-2 group-hover:bg-white transition-colors duration-300"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
