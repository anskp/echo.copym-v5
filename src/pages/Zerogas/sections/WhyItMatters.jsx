// src/pages/Zerogas/sections/WhyItMatters.jsx

import React from 'react';
import tiicon1 from '../../../components/icons/Tokenization/tiicon1.png';
import tiicon2 from '../../../components/icons/Tokenization/tiicon2.png';
import tiicon3 from '../../../components/icons/Tokenization/tiicon3.png';
import tiicon4 from '../../../components/icons/Tokenization/tiicon4.png';

export default function WhyItMatters() {
  const whyZeroGasFeatures = [
    {
      title: "Mass adoption",
      description: "Eliminates the single biggest friction point for new users - acquiring and managing gas tokens.",
      icon: tiicon4
    },
    {
      title: "Predictable costs",
      description: "Enterprises and institutions can onboard without volatile gas fees impacting their operational budgets.",
      icon: tiicon2
    },
    {
      title: "Higher participation and liquidity",
      description: "When users don't worry about gas, they operate more freely and frequently. This increases overall platform engagement.",
      icon: tiicon1
    },
    {
      title: "Ideal for real-world and regulated assets",
      description: "With zero gas, you can enforce strict access controls and compliance rules without penalizing authorized users.",
      icon: tiicon3
    }
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <div className="relative w-fit mb-4">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              <span className="text-black">Why </span>
              <span className="text-[#15a36e]">Zero Gas</span>
              <span className="text-black"> matters ?</span>
            </h2>
            {/* Underline */}
            <div
              className="absolute bottom-0 left-0 bg-black"
              style={{
                width: 'calc(100% + 120px)',
                height: '0.5px'
              }}
            ></div>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg text-black leading-relaxed mt-6 max-w-4xl"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {whyZeroGasFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                {/* Icon Circle */}
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white mb-4 sm:mb-6 flex-shrink-0 flex items-center justify-center p-0 overflow-hidden"
                  style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)' }}
                >
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                </div>

                {/* Title */}
                <h3
                  className="text-[#15a36e] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3"
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-black text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
