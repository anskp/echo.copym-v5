// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { Box } from '@mui/material';
import { Users, Globe, Layers3, Repeat2, CheckCircle } from 'lucide-react';

export default function TokenDistribution() {
  const distributionMethods = [
    { title: 'Private Sales', description: 'Exclusive token sales to accredited investors with customizable terms.', icon: Users, features: ['KYC/AML Integration', 'Investor Accreditation', 'Custom Terms'] },
    { title: 'Public Offerings', description: 'Compliant public token offerings with regulatory oversight.', icon: Globe, features: ['Regulatory Compliance', 'Public Trading', 'Market Liquidity'] },
    { title: 'Fractional Distribution', description: 'Enable fractional ownership through token fractionalization.', icon: Layers3, features: ['Micro-Investments', 'Shared Ownership', 'Liquidity Access'] },
    { title: 'Automated Distributions', description: 'Smart contract-based dividend and revenue distributions.', icon: Repeat2, features: ['Automatic Payouts', 'Transparent Records', 'Real-time Updates'] }
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="anton-regular uppercase font-black text-4xl md:text-5xl mb-4">
            <span className="text-gray-900">TOKEN</span>
            <span className="text-green-600"> DISTRIBUTION</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Flexible distribution mechanisms to reach your target investors through multiple channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-start">
          {distributionMethods.map((method, index) => (
            <div key={index} className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-xl p-6 h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
                <Box 
                  className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon" 
                  sx={{ 
                    background: "rgba(255, 255, 255, 0.9)", 
                    backdropFilter: "blur(5px)", 
                    boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)" 
                  }}
                >
                  <method.icon className="h-8 w-8 text-green-600 transition-colors duration-300" />
                </Box>
                
                <div className="flex items-center justify-center mb-3">
                  <h3 className="text-gray-900 font-bold text-lg text-center transition-colors duration-300">
                    {method.title}
                  </h3>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 transition-colors duration-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}