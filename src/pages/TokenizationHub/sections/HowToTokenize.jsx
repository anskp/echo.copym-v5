import React from 'react';
import { motion } from 'framer-motion';

// Smartphone Component with Financial Dashboard
const SmartphoneMockup = ({ stepTitle }) => {
  const gradientId = `gradient-${stepTitle.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <div className="relative">
      {/* Faint background text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          fontSize: 'clamp(80px, 15vw, 200px)',
          fontWeight: 700,
          color: 'rgba(21, 163, 110, 0.1)',
          letterSpacing: '0.05em',
          transform: 'translateY(-10%)'
        }}
      >
        {stepTitle}
      </div>
      
      {/* White Smartphone */}
      <div className="relative z-10">
        <div 
          className="bg-white rounded-[2.5rem] p-2 shadow-2xl"
          style={{
            width: 'clamp(200px, 25vw, 280px)',
            height: 'clamp(400px, 50vw, 560px)'
          }}
        >
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative border-2 border-gray-200">
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-8 bg-white flex items-center justify-between px-4 z-20">
              <span className="text-xs font-semibold text-black">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-2 border border-black rounded-sm">
                  <div className="w-3 h-full bg-black rounded-sm"></div>
                </div>
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="pt-8 pb-16 h-full bg-gradient-to-b from-gray-50 to-white">
              {/* Balance Section */}
              <div className="px-6 pt-8 pb-6">
                <p className="text-xs text-gray-600 mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>Balance</p>
                <p className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'DM Sans, sans-serif' }}>$10,000.00</p>
              </div>

              {/* Graph Section */}
              <div className="px-6 mb-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="h-24 relative">
                    {/* SVG Line Graph */}
                    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <polyline
                        points="0,70 15,60 30,55 45,50 60,45 75,40 90,35 105,30 120,25 135,20 150,15 165,10 180,8 195,5"
                        fill="none"
                        stroke="#15a36e"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Fill area under the line */}
                      <polygon
                        points="0,70 0,80 15,80 15,60 30,55 45,50 60,45 75,40 90,35 105,30 120,25 135,20 150,15 165,10 180,8 195,5 195,80 0,80"
                        fill={`url(#${gradientId})`}
                        opacity="0.2"
                      />
                      <defs>
                        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#15a36e" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#15a36e" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Menu Options */}
              <div className="px-6 space-y-3">
                {['Wallet', 'Transactions', 'Send', 'Receive', 'Settings', 'Help & Support', 'Logout'].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-sm text-gray-800" style={{ fontFamily: 'DM Sans, sans-serif' }}>{item}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-around px-4">
              {['home', 'search', 'plus', 'profile'].map((icon, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-6 h-6 bg-gray-300 rounded mb-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HowToTokenize() {
  const steps = [
    {
      title: 'CREATE',
      description: 'Create your account with CopyM with your verified proof ID\'s and Sign up to register your identity and proof of your assets.',
      phonePosition: 'left'
    },
    {
      title: 'ADMINISTARTE',
      description: 'Roles and permissions would-be set. t Ensure KYC/AML checks, especially in India, and maintain audit trails. The users would Users would be provided with interfaces to view holdings, transaction history, and token status.',
      phonePosition: 'right'
    },
    {
      title: 'DISTRIBUTE',
      description: 'Users receive tokens in wallets like MetaMask, Trust Wallet, or platform-native wallets. For large-scale distribution, use smart contract functions to send tokens to multiple addresses.',
      phonePosition: 'left'
    },
    {
      title: 'TARDE',
      description: 'Roles and permissions would-be set. t Ensure KYC/AML checks, especially in India, and maintain audit trails. The users would Users would be provided with interfaces to view holdings, transaction history, and token status.',
      phonePosition: 'right'
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
                step.phonePosition === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 lg:gap-12`}
            >
              {/* Phone Mockup */}
              <div className={`flex-1 flex ${step.phonePosition === 'left' ? 'justify-start' : 'justify-end'} w-full lg:w-auto`}>
                <SmartphoneMockup stepTitle={step.title} />
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

