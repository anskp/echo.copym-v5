// src/pages/TokenizationHub/sections/SecurityProtocols.jsx

import React from 'react';
import { Shield, Lock, FileCheck, AlertCircle } from 'lucide-react';

export default function SecurityProtocols() {
  const securityFeatures = [
    { title: 'Multi-Signature Wallets', description: 'Enhanced security with multi-signature wallet infrastructure.', icon: Lock, level: 'Enterprise', color: 'from-blue-500 to-blue-600', features: ['256-bit encryption', 'Hardware security', 'Audit trail'] },
    { title: 'Smart Contract Audits', description: 'Thoroughly audited smart contracts by leading security firms.', icon: FileCheck, level: 'Certified', color: 'from-green-500 to-green-600', features: ['Third-party audits', 'Vulnerability testing', 'Compliance checks'] },
    { title: 'Compliance Framework', description: 'Built-in regulatory compliance and risk management protocols.', icon: Shield, level: 'Regulatory', color: 'from-purple-500 to-purple-600', features: ['SEC compliance', 'KYC/AML', 'Regulatory reporting'] },
    { title: 'Fraud Detection', description: 'AI-powered fraud detection and prevention systems.', icon: AlertCircle, level: 'Advanced', color: 'from-red-500 to-red-600', features: ['Real-time monitoring', 'AI algorithms', 'Threat prevention'] }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.05),transparent_50%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full text-sm font-medium text-blue-600 mb-6 border border-blue-200">
            <Shield className="w-4 h-4 mr-2" />
            Security First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Security Protocols
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bank-grade security measures protecting your assets and investor data with military-grade encryption and compliance.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-cyan-300/50 transition-all duration-300 hover:bg-gray-50 cursor-pointer h-full flex flex-col relative overflow-hidden group shadow-lg hover:shadow-xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                </div>
                <div className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center bg-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                  <feature.icon className="h-6 w-6 text-green-500" />
                </div>
                <div className="flex-1 relative z-10">
                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300">{feature.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-600 border border-cyan-200 mb-4 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/30 transition-all duration-300">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></div>
                    {feature.level}
                  </div>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 group-hover:bg-cyan-400 transition-colors duration-300"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}