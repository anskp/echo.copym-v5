// src/pages/TokenizationHub/sections/AnalyticsReporting.jsx

import React from 'react';
import { Box } from '@mui/material';
import { TrendingUp, FileCheck, Users, BarChart3 } from 'lucide-react';

export default function AnalyticsReporting() {
  const reportingFeatures = [
    { title: 'Performance Analytics', description: 'Real-time performance metrics and historical analysis.', icon: TrendingUp, metrics: ['ROI Tracking', 'Price Analytics', 'Volume Metrics'] },
    { title: 'Compliance Reports', description: 'Automated regulatory reporting and audit trail generation.', icon: FileCheck, metrics: ['SEC Compliance', 'Tax Reporting', 'Audit Trails'] },
    { title: 'Investor Insights', description: 'Detailed investor behavior and portfolio analytics.', icon: Users, metrics: ['Holder Analysis', 'Demographics', 'Engagement Stats'] },
    { title: 'Market Intelligence', description: 'Market trends and competitive analysis dashboard.', icon: BarChart3, metrics: ['Market Trends', 'Competitor Analysis', 'Opportunity Mapping'] }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-2 pb-1 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Analytics & Reporting
          </h2>
          <p className="brand-description max-w-3xl mx-auto text-gray-600">
            Comprehensive analytics and reporting tools for data-driven decision making.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:items-start">
          {reportingFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-xl lg:self-start shadow-lg h-full flex flex-col relative overflow-hidden group">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
              </div>
              <Box className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl card-icon relative z-10" sx={{ background: "rgba(255, 255, 255, 0.9)", backdropFilter: "blur(5px)", boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.05)" }}>
                <feature.icon className="h-6 w-6 text-blue-500 group-hover:text-cyan-600 transition-colors duration-300" />
              </Box>
              <div className="flex-1 flex flex-col relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="brand-card-title text-gray-800 group-hover:text-gray-900 transition-colors duration-300">{feature.title}</h3>
                </div>
                <div className="flex-1 mt-3">
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-2 group-hover:bg-gray-600 transition-colors duration-300"></div>
                        {metric}
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