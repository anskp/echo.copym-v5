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
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="anton-regular uppercase font-black text-4xl md:text-5xl mb-4">
            <span className="text-gray-900">INVESTOR</span>
            <span className="text-green-600"> MANAGEMENT</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Streamlined tools for managing investor relationships, compliance, and communications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {managementTools.map((tool, index) => (
            <div key={index} className="w-full max-w-sm">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                
                {/* Main Card */}
                <div className="relative bg-white rounded-xl p-8 w-full text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <Box 
                    className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon mx-auto" 
                    sx={{ 
                      background: "rgba(255, 255, 255, 0.9)", 
                      backdropFilter: "blur(5px)", 
                      boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)" 
                    }}
                  >
                    <tool.icon className="h-8 w-8 text-green-600 transition-colors duration-300" />
                  </Box>
                  
                  <div className="flex items-center justify-center mb-3">
                    <h3 className="text-gray-900 font-bold text-lg text-center transition-colors duration-300">
                      {tool.title}
                    </h3>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium transition-colors duration-300">
                      {tool.stats}
                    </div>
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