// src/pages/TokenizationHub/sections/TokenizationProcess.jsx

import React from 'react';

export default function TokenizationProcess() {
  const whyTokenizeFeatures = [
    {
      title: "Programmable terms",
      description: "Program the transfer-restrictions and investment terms that are required between different asset and investor (KYC) classifications.",
    },
    {
      title: "Increased accessibility",
      description: "Tokenization broadens investment opportunities, including retail investors previously excluded from traditional investment structures.",
    },
    {
      title: "Global reach",
      description: "Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.",
    },
    {
      title: "Global reach",
      description: "Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.",
    },
    {
      title: "Faster settlement times",
      description: "Tokenization speeds up trade settlements, enabling investors to receive their funds faster after selling their shares in the fund.",
    },
    {
      title: "Greater transparency",
      description: "Investors can track their token ownership and access real-time information on fund performance and holdings.",
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
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="text-black">WHY </span>
              <span className="text-[#15a36e]">TOKENIZE</span>
              <span className="text-black"> ?</span>
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
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {whyTokenizeFeatures.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              {/* Icon Circle */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black mb-4 sm:mb-6 flex-shrink-0"></div>

              {/* Title */}
              <h3
                className="text-[#15a36e] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-black text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}