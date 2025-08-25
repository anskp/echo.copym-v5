// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { Box } from '@mui/material';
import { Users, Globe, Layers3, Repeat2, CheckCircle, ChevronDown } from 'lucide-react';

export default function TokenDistribution() {
  const distributionMethods = [
    { title: 'Private Sales', description: 'Exclusive token sales to accredited investors with customizable terms.', icon: Users, features: ['KYC/AML Integration', 'Investor Accreditation', 'Custom Terms'] },
    { title: 'Public Offerings', description: 'Compliant public token offerings with regulatory oversight.', icon: Globe, features: ['Regulatory Compliance', 'Public Trading', 'Market Liquidity'] },
    { title: 'Fractional Distribution', description: 'Enable fractional ownership through token fractionalization.', icon: Layers3, features: ['Micro-Investments', 'Shared Ownership', 'Liquidity Access'] },
    { title: 'Automated Distributions', description: 'Smart contract-based dividend and revenue distributions.', icon: Repeat2, features: ['Automatic Payouts', 'Transparent Records', 'Real-time Updates'] }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Token Distribution
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Flexible distribution mechanisms to reach your target investors through multiple channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-start">
          {distributionMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-xl lg:self-start shadow-lg h-full flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              </div>
              <Box className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon relative z-10" sx={{ background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(5px)", boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                <method.icon className="h-6 w-6 text-blue-500 group-hover:text-cyan-600 transition-colors duration-300" />
              </Box>
              <div className="flex items-center justify-center relative z-10 mb-3">
                <h3 className="brand-card-title text-black group-hover:text-gray-800 transition-colors duration-300">{method.title}</h3>
              </div>
              <div className="relative z-10">
                <p className="text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">{method.description}</p>
                <ul className="space-y-2">
                  {method.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black group-hover:text-gray-700 transition-colors duration-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 group-hover:text-cyan-500 transition-colors duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-16">
          <img
            src="/assets/Images/Token-Distribution-removebg.png"
            alt="The Digital Securities Distribution Network"
            className="max-w-full h-auto rounded-xl bg-green-50 shadow-lg border border-gray-100"
          />
        </div>
      </div>
    </section>
  );
}