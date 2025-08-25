// src/pages/TokenizationHub/sections/TrustAndData.jsx

import React from 'react';
import { Shield, Lock, FileCheck, AlertCircle, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

export default function TrustAndData() {
  const securityFeatures = [
    { title: 'Multi-Signature Wallets', description: 'Enhanced security with multi-signature wallet infrastructure.', icon: Lock, level: 'Enterprise', features: ['256-bit encryption', 'Hardware security', 'Audit trail'] },
    { title: 'Smart Contract Audits', description: 'Thoroughly audited smart contracts by leading security firms.', icon: FileCheck, level: 'Certified', features: ['Third-party audits', 'Vulnerability testing', 'Compliance checks'] },
    { title: 'Compliance Framework', description: 'Built-in regulatory compliance and risk management protocols.', icon: Shield, level: 'Regulatory', features: ['SEC compliance', 'KYC/AML', 'Regulatory reporting'] },
    { title: 'Fraud Detection', description: 'AI-powered fraud detection and prevention systems.', icon: AlertCircle, level: 'Advanced', features: ['Real-time monitoring', 'AI algorithms', 'Threat prevention'] }
  ];

  const analyticsFeatures = [
    'ROI Tracking & Performance Analytics',
    'SEC Compliance & Tax Reporting',
    'Investor Behavior & Demographics',
    'Market Trends & Competitive Analysis'
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part A: Security Section */}
        <div className="text-center mb-16">
          <h2 className="anton-regular uppercase font-black text-4xl md:text-5xl mb-4">
            <span className="text-white">TRUST &</span>
            <span className="text-green-500"> DATA</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Bank-grade security measures protecting your assets and investor data with military-grade encryption and compliance.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full flex flex-col transition-all duration-300 hover:bg-white/10">
                <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center bg-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6 text-green-500" />
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 mb-4 group-hover:bg-green-500/20 group-hover:border-green-500/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    {feature.level}
                  </div>
                  
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2 group-hover:bg-green-300 transition-colors duration-300"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Part B: Analytics & Final CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Data-Driven Decisions */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Data-Driven Decisions
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Comprehensive analytics and reporting tools for data-driven decision making.
            </p>
            <div className="space-y-4">
              {analyticsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Final CTA */}
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Start your tokenization journey today with enterprise-grade security and compliance.
            </p>
            <button className="bg-green-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center">
              Start Tokenizing
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
