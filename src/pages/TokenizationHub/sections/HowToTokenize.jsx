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
    <section className="relative bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            HOW TO <span className="text-[#15a36e]">TOKENIZE</span> ASSETS
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${
                step.imagePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Image */}
              <div className={`flex-1 flex ${step.imagePosition === 'left' ? 'justify-start' : 'justify-end'} w-full lg:w-auto`}>
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 w-full lg:w-auto">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15a36e] mb-4 lg:mb-6 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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

