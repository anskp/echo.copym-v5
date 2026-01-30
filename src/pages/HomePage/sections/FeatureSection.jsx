import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import SectionContainer from '../../../components/Layout/SectionContainer';
import SectionHeader from '../../../components/Layout/SectionHeader';
import bigInvestmentAnimation from '../../../components/lotties/bigInvestment.json';
import tradeAnytimeAnimation from '../../../components/lotties/tradeanytime.json';
import exploreAnimation from '../../../components/lotties/explore.json';
import earnWithoutHassleAnimation from '../../../components/lotties/earnwithoutahassle.json';

const FeatureSection = () => {
  return (
    <SectionContainer padding="pt-12 pb-26 sm:py-20 md:py-24 lg:py-26 text-center" bgColor="bg-white" maxWidth="max-w-10xl">
      {/* Main Heading */}
      <SectionHeader
        title="Exposure. EARN. EXPLORE. TRADE"
        highlightWords={['EARN', 'TRADE']}
        alignment="center"
      />

      {/* Vertical Stack of 4 Sections */}
      <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
        {/* Section 1 - Own a piece of big Investment (Graphic Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }} /* Adjust margin for mobile triggering */
          className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-20 lg:gap-64"
        >
          {/* Graphic - Left */}
          <div className="w-full md:w-auto flex justify-center">
            <div
              className="w-[350px] sm:w-[260px] md:w-[450px] min-h-[220px] sm:min-h-[260px] md:h-[450px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={bigInvestmentAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-auto lg:w-auto text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-2 sm:mb-3 whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Own a piece of assets
            </h3>
            <p className="text-sm md:text-lg text-black leading-normal max-w-xl md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Ever thought real estate, gold, or fine art was only for the rich? Not anymore.
              Start with small amounts and own a piece of high-value assets you actually
              care about.
            </p>
          </div>
        </motion.div>

        {/* Section 2 - Trade anytime, anywhere (Graphic Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }} /* Adjust margin for mobile triggering */
          className="flex flex-col md:flex-row-reverse md:justify-center items-center gap-8 md:gap-20 lg:gap-64"
        >
          {/* Graphic - Right */}
          <div className="w-full md:w-auto flex justify-center">
            <div
              className="w-[350px] sm:w-[260px] md:w-[450px] min-h-[220px] sm:min-h-[260px] md:h-[450px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={tradeAnytimeAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-2 sm:mb-3 whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Trade anytime, anywhere
            </h3>
            <p className="text-sm md:text-lg text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Want out? Sell instantly. Want in? Buy in seconds. With your
              built-in wallet, you can manage and trade smoothly—just like
              sending money to a friend.
            </p>
          </div>
        </motion.div>

        {/* Section 3 - Earn without a hassle (Graphic Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }} /* Adjust margin for mobile triggering */
          className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-20 lg:gap-64"
        >
          {/* Graphic - Left */}
          <div className="w-full md:w-auto flex justify-center">
            <div
              className="w-[350px] sm:w-[260px] md:w-[450px] min-h-[220px] sm:min-h-[260px] md:h-[450px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={earnWithoutHassleAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-2 sm:mb-3 whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Earn without a hassle
            </h3>
            <p className="text-sm md:text-lg text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Sit back and let the experts and CORA-AI do the heavy lifting. Your money works for
              you, bringing in steady returns–without the stress of paperwork or
              management.
            </p>
          </div>
        </motion.div>

        {/* Section 4 - Explore a world of assets (Graphic Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }} /* Adjust margin for mobile triggering */
          className="flex flex-col md:flex-row-reverse md:justify-center items-center gap-8 md:gap-20 lg:gap-64"
        >
          {/* Graphic - Right */}
          <div className="w-full md:w-auto flex justify-center">
            <div
              className="w-[350px] sm:w-[260px] md:w-[450px] min-h-[220px] sm:min-h-[260px] md:h-[450px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)',
                backgroundImage:
                  'radial-gradient(circle at 50% 50%, rgba(240,240,240,0.9), rgba(250,250,250,1))',
              }}
            >
              <Lottie
                animationData={exploreAnimation}
                loop={true}
                autoplay={true}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content - Left */}
          <div className="w-full md:w-auto text-center md:text-left">
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-black mb-2 sm:mb-3 whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Explore a world of assets
            </h3>
            <p className="text-sm md:text-lg text-black leading-normal max-w-xl mx-auto md:mx-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              From property and gold to private equity and art—our CORA-AI picks out
              smart opportunities so you don't have to dig through endless
              research.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default FeatureSection;