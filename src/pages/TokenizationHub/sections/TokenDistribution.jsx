// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, TrendingUp, Shield } from 'lucide-react';

export default function TokenDistribution() {
  const features = [
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Reach investors worldwide with automated compliance and multi-jurisdictional support.",
      color: "from-pink-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Investor Onboarding",
      description: "Streamlined KYC/AML verification with instant investor qualification and onboarding.",
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: TrendingUp,
      title: "Liquidity Management",
      description: "Automated market making and liquidity provision for seamless trading experience.",
      color: "from-pink-500 via-blue-500 to-green-500"
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks ensuring adherence to global securities regulations.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight anton-regular mb-6">
            <span className="text-gray-900">TOKEN</span>
            <br />
            <span className="text-emerald-600">DISTRIBUTION</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Reach global investors with automated compliance, seamless onboarding, and intelligent liquidity management.
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
              <p className="text-gray-700 leading-relaxed mb-6">{feature.description}</p>

              {/* CTA Link */}
              <button className="inline-flex items-center text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors duration-200">
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-60"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black to-transparent opacity-30"></div>
    </section>
  );
}