import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const assetOwnerSteps = [
    { id: 1, text: 'Onboard & verify', color: 'white', textColor: 'black' },
    { id: 2, text: 'Tokenize & structure', color: 'gray-700', textColor: 'white' },
    { id: 3, text: 'List on marketplace / launchpool', color: 'green', textColor: 'white' },
    { id: 4, text: 'Distribute to investors', color: 'gray-700', textColor: 'white' },
    { id: 5, text: 'Monitor & report', color: 'white', textColor: 'black' },
  ];

  const investorSteps = [
    { id: 1, text: "Discover curated RWA's", color: 'white', textColor: 'black' },
    { id: 2, text: 'Complete KYC once', color: 'gray-700', textColor: 'white' },
    { id: 3, text: 'Invest & earn', color: 'green', textColor: 'white' },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-black">HOW IT </span>
            <span className="text-[#15a36e]">WORKS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How Copym works - for issuers and investors
          </p>
        </motion.div>

        {/* Two Workflows Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Asset Owners Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              For Asset Owners
            </h3>
            
            {/* Steps Grid */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  assetOwnerSteps[0].color === 'white' ? 'bg-white' :
                  assetOwnerSteps[0].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    assetOwnerSteps[0].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {assetOwnerSteps[0].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  assetOwnerSteps[1].color === 'white' ? 'bg-white' :
                  assetOwnerSteps[1].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    assetOwnerSteps[1].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {assetOwnerSteps[1].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  assetOwnerSteps[2].color === 'white' ? 'bg-white' :
                  assetOwnerSteps[2].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    assetOwnerSteps[2].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {assetOwnerSteps[2].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  assetOwnerSteps[3].color === 'white' ? 'bg-white' :
                  assetOwnerSteps[3].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    assetOwnerSteps[3].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {assetOwnerSteps[3].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 5 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  assetOwnerSteps[4].color === 'white' ? 'bg-white' :
                  assetOwnerSteps[4].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    assetOwnerSteps[4].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {assetOwnerSteps[4].text}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Investors Workflow */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black rounded-2xl p-6 sm:p-8 lg:p-10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              For Investors
            </h3>
            
            {/* Steps Grid */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  investorSteps[0].color === 'white' ? 'bg-white' :
                  investorSteps[0].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    investorSteps[0].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {investorSteps[0].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  investorSteps[1].color === 'white' ? 'bg-white' :
                  investorSteps[1].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    investorSteps[1].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {investorSteps[1].text}
                  </span>
                </div>
                <svg className="w-6 h-6 text-[#15a36e] flex-shrink-0 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-3">
                <div className={`rounded-lg px-4 py-3 flex-1 ${
                  investorSteps[2].color === 'white' ? 'bg-white' :
                  investorSteps[2].color === 'green' ? 'bg-[#15a36e]' :
                  'bg-gray-700'
                }`}>
                  <span className={`text-sm sm:text-base font-semibold ${
                    investorSteps[2].textColor === 'white' ? 'text-white' : 'text-black'
                  }`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {investorSteps[2].text}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
        >
          <button className="bg-[#15a36e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-[#15a36e]/90 transition-all duration-300" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            See workflow details
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

