import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import SectionContainer from '../../../components/Layout/SectionContainer';
import SectionHeader from '../../../components/Layout/SectionHeader';
import z1Animation from '../../../components/lotties/Z1.json';
import z2Animation from '../../../components/lotties/Z2.json';
import z3Animation from '../../../components/lotties/Z3.json';
import z4Animation from '../../../components/lotties/Z4.json';

const HowItWorks = () => {
  return (
    <SectionContainer padding="py-16 sm:py-20 md:py-24" bgColor="bg-white" maxWidth="max-w-5xl">
      {/* Main Heading */}
      <SectionHeader
        title="How Zero Gas works ?"
        highlightWords={['Zero Gas']}
        alignment="left"
      />

      {/* Vertical Stack of 5 Sections */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {/* Section 1 - GAS ABSTRACTION (Graphic Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-14 lg:gap-20"
        >
          {/* Graphic - Left */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <div
              className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={z1Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              GAS ABSTRACTION
            </h3>
            <p className="text-lg sm:text-xl md:text-xl text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Users never need to hold native blockchain tokens. All transaction costs are handled at the protocol level.
            </p>
          </div>
        </motion.div>

        {/* Section 2 - META-TRANSACTIONS (Graphic Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse md:justify-end items-center gap-6 md:gap-14 lg:gap-20"
        >
          {/* Graphic - Right */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div
              className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={z2Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              META-TRANSACTIONS
            </h3>
            <p className="text-lg sm:text-xl md:text-xl text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Users simply review and sign transactions. CopyM submits them on-chain and pays gas on the user's behalf.
            </p>
          </div>
        </motion.div>

        {/* Section 3 - SPONSORED TRANSACTIONS (Graphic Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-14 lg:gap-20"
        >
          {/* Graphic - Left */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <div
              className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={z3Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              SPONSORED TRANSACTIONS
            </h3>
            <p className="text-lg sm:text-xl md:text-xl text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              CopyM sponsors gas for key interactions such as asset issuance, marketplace trades, ownership transfers, and yield distributions.
            </p>
          </div>
        </motion.div>

        {/* Section 4 - OPTIMIZED INFRASTRUCTURE (Graphic Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row-reverse md:justify-end items-center gap-6 md:gap-14 lg:gap-20"
        >
          {/* Graphic - Right */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div
              className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={z4Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              OPTIMIZED INFRASTRUCTURE
            </h3>
            <p className="text-lg sm:text-xl md:text-xl text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              The platform runs on high-throughput, low-cost blockchain layers, making the zero-gas model economically sustainable.
            </p>
          </div>
        </motion.div>

        {/* Section 5 - ENTERPRISE-GRADE UX (Graphic Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-6 md:gap-14 lg:gap-20"
        >
          {/* Graphic - Left */}
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <div
              className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={z1Animation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              ENTERPRISE-GRADE UX
            </h3>
            <p className="text-lg sm:text-xl md:text-xl text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Transactions feel instant and intuitive. No gas sliders, no out-of-eth errors - just clear confirmations.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default HowItWorks;
