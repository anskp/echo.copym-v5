// src/pages/TokenizationHub/sections/InvestorManagement.jsx

import React from 'react';
import { Box } from '@mui/material';
import { UserCheck, Database, Activity, PieChart } from 'lucide-react';

export default function InvestorManagement() {
  const managementTools = [
    { title: 'KYC/AML Verification', description: 'Automated identity verification and anti-money laundering checks.', icon: UserCheck, stats: '99.9% accuracy' },
    { title: 'Investor Portal', description: 'Dedicated portal for investors to track holdings and receive updates.', icon: Database, stats: '24/7 access' },
    { title: 'Communication Hub', description: 'Direct communication channels with investors and stakeholders.', icon: Activity, stats: 'Real-time messaging' },
    { title: 'Reporting & Analytics', description: 'Comprehensive investor analytics and performance reporting.', icon: PieChart, stats: 'Custom reports' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-2 pb-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Investor Management
          </h2>
          <p className="brand-description max-w-3xl mx-auto">
            Streamlined tools for managing investor relationships, compliance, and communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {managementTools.map((tool, index) => (
            <div key={index} className="w-full max-w-sm">
              <div className="bg-white rounded-2xl p-8 cursor-pointer hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-xl w-full text-center relative overflow-hidden group shadow-lg">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                </div>
                <Box className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon mx-auto relative z-10" sx={{ background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(5px)", boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                  <tool.icon className="h-6 w-6 text-blue-500 group-hover:text-cyan-600 transition-colors duration-300" />
                </Box>
                <div className="flex items-center justify-center mb-3 relative z-10">
                  <h3 className="brand-card-title text-black text-center group-hover:text-gray-800 transition-colors duration-300">{tool.title}</h3>
                </div>
                <div className="relative z-10">
                  <p className="text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">{tool.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium group-hover:bg-cyan-100 group-hover:text-cyan-800 transition-colors duration-300">
                    {tool.stats}
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