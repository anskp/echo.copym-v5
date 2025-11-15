import React from 'react';
import { motion } from 'framer-motion';

// Import Group images
import Group1Image from '/assets/Images/icons/Group1.png';
import Group2Image from '/assets/Images/icons/Group2.png';
import Group3Image from '/assets/Images/icons/Group3.png';
import Group4Image from '/assets/Images/icons/Group4.png';

export default function HowToTokenize() {
  const steps = [
    {
      title: 'CREATE',
      description: 'Create your account with CopyM with your verified proof ID\'s and Sign up to register your identity and proof of your assets.',
      image: Group1Image,
      imagePosition: 'left'
    },
    {
      title: 'ADMINISTRATE',
      description: 'Roles and permissions would-be set. Ensure KYC/AML checks, especially in India, and maintain audit trails. The users would be provided with interfaces to view holdings, transaction history, and token status.',
      image: Group2Image,
      imagePosition: 'right'
    },
    {
      title: 'DISTRIBUTE',
      description: 'Users receive tokens in wallets like MetaMask, Trust Wallet, or platform-native wallets. For large-scale distribution, use smart contract functions to send tokens to multiple addresses.',
      image: Group3Image,
      imagePosition: 'left'
    },
    {
      title: 'TRADE',
      description: 'Trade your tokenized assets on our platform. Buy, sell, and exchange tokens with other users. Ensure compliance with KYC/AML regulations and maintain transparent transaction history.',
      image: Group4Image,
      imagePosition: 'right'
    }
  ];

  return (
    <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-[#15a36e]">TOKENIZE</span> ASSETS
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                step.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center justify-center gap-6 sm:gap-8 lg:gap-12 px-4`}
            >
              {/* Image */}
              <div className={`flex-1 flex justify-center ${step.imagePosition === 'left' ? 'lg:justify-start' : 'lg:justify-end'} w-full lg:w-auto`}>
                <div className="relative w-full max-w-[280px] sm:max-w-md lg:max-w-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#15a36e] mb-3 sm:mb-4 lg:mb-6 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

