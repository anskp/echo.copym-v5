// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { motion } from 'framer-motion';
import leftStringsImage from '../../../components/images/Left-strings.png';
import rightStringsImage from '../../../components/images/Right-strings.png';
import t3Image from '/assets/Images/icons/t3.png';
import t8Image from '/assets/Images/icons/t8.png';
import t9Image from '/assets/Images/icons/t9.png';
import t6Image from '/assets/Images/icons/t6.png';

export default function TokenDistribution() {
  const features = [
    {
      icon: t3Image,
      title: "Global Distribution",
      description: "Reach investors worldwide with automated compliance and multi-jurisdictional support."
    },
    {
      icon: t8Image,
      title: "Investor Onboarding",
      description: "Streamlined KYC/AML verification with instant investor qualification and onboarding."
    },
    {
      icon: t9Image,
      title: "Liquidity Management",
      description: "Automated market making and liquidity provision for seamless trading experience."
    },
    {
      icon: t6Image,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks ensuring adherence to global securities regulations."
    }
  ];

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* String Patterns on Far Left and Right */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-64 md:w-80 lg:w-96 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${leftStringsImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'left center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          transform: 'scale(1.5)',
          transformOrigin: 'left center'
        }}
      />
      <div 
        className="absolute right-0 top-0 bottom-0 w-64 md:w-80 lg:w-96 pointer-events-none z-0"
        style={{
          backgroundImage: `url(${rightStringsImage})`,
          backgroundSize: '100%',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          transform: 'scale(1.5)',
          transformOrigin: 'right center'
        }}
      />

      {/* Main Content */}
      <div 
        className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32"
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-white">TOKEN </span>
              <span className="text-[#15a36e]">DISTRIBUTION</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white leading-relaxed max-w-6xl mx-auto px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Reach global investors with automated compliance, seamless onboarding, and intelligent liquidity management.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex flex-col justify-center items-center"
                style={{
                  width: '100%',
                  minHeight: '280px',
                  borderRadius: '24px',
                  background: 'transparent',
                  borderWidth: '1px',
                  borderColor: '#15a36e',
                  borderStyle: 'solid',
                  padding: '24px 20px'
                }}
              >
                <h3 
                  className="dm-sans mb-4 text-base sm:text-lg md:text-lg font-bold"
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    textTransform: 'none'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="dm-sans text-sm sm:text-base md:text-base text-center"
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    lineHeight: '1.6',
                    textTransform: 'none'
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}