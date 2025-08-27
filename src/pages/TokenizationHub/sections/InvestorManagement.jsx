// src/pages/TokenizationHub/sections/InvestorManagement.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, BarChart3, Shield, MessageSquare } from 'lucide-react';

export default function InvestorManagement() {
  const features = [
    {
      icon: Users,
      title: "Investor Dashboard",
      description: "Comprehensive dashboard for tracking investments, returns, and portfolio performance.",
      color: "from-pink-500 to-teal-500",
      stats: "10K+ Active"
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Advanced analytics and reporting tools for investment performance tracking.",
      color: "from-yellow-500 to-green-500",
      stats: "Real-time"
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Automated compliance monitoring and regulatory reporting for all investors.",
      color: "from-pink-500 via-blue-500 to-green-500",
      stats: "100% Compliant"
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Integrated communication tools for investor updates and announcements.",
      color: "from-orange-500 to-red-500",
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
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anton-regular mb-6">
            <span className="text-gray-900">INVESTOR</span>
            <br />
            <span className="text-emerald-600">MANAGEMENT</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Comprehensive tools for managing investor relationships, compliance, and portfolio performance.
          </p>
        </div>

                                  {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group relative p-6 border-2 border-gray-200 rounded-2xl hover:border-emerald-400 transition-all duration-300 hover:shadow-lg"
              >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{feature.description}</p>

              {/* Stats Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 mb-4">
                {feature.stats}
              </div>

              {/* CTA Link */}
              <button className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors duration-200">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Manage Investors
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}