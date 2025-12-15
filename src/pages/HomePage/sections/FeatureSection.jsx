import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import bigInvestmentAnimation from '../../../components/lotties/bigInvestment.json';
import tradeAnytimeAnimation from '../../../components/lotties/tradeanytime.json';
import exploreAnimation from '../../../components/lotties/explore.json';
import earnWithoutHassleAnimation from '../../../components/lotties/earnwithoutahassle.json';

const FeatureSection = () => {
  return (
    <section className="relative w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-black">OWN, </span>
            <span className="text-[#15a36e]">EARN, </span>
            <span className="text-black">EXPLORE, </span>
            <span className="text-black underline decoration-[#15a36e] decoration-2 underline-offset-4">TRADE</span>
          </h2>
        </motion.div>

        {/* Vertical Stack of 4 Sections */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {/* Section 1 - Own a piece of big Investment (Graphic Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Graphic - Left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="w-full max-w-[340px] sm:max-w-[360px] aspect-square bg-white rounded-lg flex items-center justify-center"
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
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Own a piece of big Investment
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small amounts and own a piece of high-value assets you actually care about.
              </p>
            </div>
          </motion.div>

          {/* Section 2 - Trade anytime, anywhere (Graphic Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Graphic - Right */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div
                className="w-full max-w-[340px] sm:max-w-[360px] aspect-square bg-white rounded-lg flex items-center justify-center"
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
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Trade anytime, anywhere
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Want out? Sell instantly. Want in? Buy in seconds. With your built-in wallet, you can manage and trade smoothly—just like sending money to a friend.
              </p>
            </div>
          </motion.div>

          {/* Section 3 - Earn without a hassle (Graphic Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Graphic - Left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="w-full max-w-[340px] sm:max-w-[360px] aspect-square bg-white rounded-lg flex items-center justify-center"
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
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Earn without a hassle
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing in steady returns—without the stress of paperwork or management.
              </p>
            </div>
          </motion.div>

          {/* Section 4 - Explore a world of assets (Graphic Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Graphic - Right */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div
                className="w-full max-w-[340px] sm:max-w-[360px] aspect-square bg-white rounded-lg flex items-center justify-center"
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
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Explore a world of assets
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                From property and gold to private equity and art—our AI picks out smart opportunities so you don't have to dig through endless research.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
