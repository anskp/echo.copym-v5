// src/pages/TokenizationHub/sections/IssuerDashboard.jsx

import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Shield, Users, BarChart3, Settings } from 'lucide-react';

export default function IssuerDashboard() {
  const dashboardFeatures = [
    { title: 'Real-Time Analytics', description: 'Monitor token performance, holder activity, and market metrics in real-time.', icon: BarChart3, bgClass: 'bg-white', iconClass: 'text-blue-500' },
    { title: 'Investor Management', description: 'Comprehensive investor database with KYC status and communication tools.', icon: Users, bgClass: 'bg-white', iconClass: 'text-blue-500' },
    { title: 'Compliance Monitoring', description: 'Automated compliance tracking and regulatory reporting capabilities.', icon: Shield, bgClass: 'bg-white', iconClass: 'text-blue-500' },
    { title: 'Distribution Controls', description: 'Manage token distributions, dividends, and revenue sharing automatically.', icon: Settings, bgClass: 'bg-white', iconClass: 'text-blue-500' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Issuer Dashboard
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Comprehensive control center for managing your tokenized assets and investor relationships.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-green-50 rounded-2xl border border-gray-200 shadow-lg p-6 min-h-[400px]">
            <Player
              autoplay
              loop
              src="/assets/lottie/TokenizationHub/Dashboard.json"
              style={{ height: '350px', width: '100%' }}
            />
          </div>

          <div className="space-y-6">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
                <div className="flex items-start relative z-10">
                  <div className={`p-3 border border-blue-100 rounded-2xl mr-4 ${feature.bgClass} group-hover:border-cyan-200 transition-colors duration-300`}>
                    <feature.icon className={`h-6 w-6 ${feature.iconClass} group-hover:text-cyan-600 transition-colors duration-300`} />
                  </div>
                  <div>
                    <h4 className="brand-card-title text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">{feature.title}</h4>
                    <p className="text-black group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}