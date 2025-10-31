// src/pages/TokenizationHub/sections/TokenDistribution.jsx

import React from 'react';
import { motion } from 'framer-motion';
import spiralssImage from '../../../components/images/spiralss.png';
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
    <section className="relative">
      {/* Main Content */}
      <div 
        className="relative z-10 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden "
        style={{
          backgroundImage: `url(${spiralssImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent'
        }}
      >
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight dm-sans mb-6">
              <span className="text-[#15a36e]">TOKEN </span>
              <span className="text-black">DISTRIBUTION</span>
            </h2>

            <p className="text-black text-lg sm:text-xl max-w-3xl mx-auto dm-sans">
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
                className="relative flex flex-col"
                style={{
                  width: '100%',
                  minHeight: '280px',
                  borderRadius: '24px',
                  background: '#fff',
                  borderWidth: '1px',
                  borderColor: '#c8c8c8',
                  borderStyle: 'solid',
                  boxShadow: '0px 4px 4px 0 rgba(0,0,0,0.25)',
                  padding: '24px 20px'
                }}
              >
                {/* Icon */}
                <div className="flex items-center justify-center mb-6">
                  {feature.icon && (
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain filter brightness-125 contrast-125"
                    />
                  )}
                </div>
                
                <h3 
                  className="dm-sans mb-4 text-sm sm:text-base md:text-base lg:text-base uppercase"
                  style={{
                    fontWeight: 600,
                    textAlign: 'center',
                    color: '#000'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="dm-sans text-xs sm:text-xs md:text-sm lg:text-sm flex-1"
                  style={{
                    textAlign: 'center',
                    color: '#000',
                    lineHeight: '1.4',
                    textTransform: 'none'
                  }}
                >
                  {feature.description.charAt(0).toUpperCase() + feature.description.slice(1).toLowerCase()}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}