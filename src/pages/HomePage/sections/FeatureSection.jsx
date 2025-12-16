import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import bigInvestmentAnimation from '../../../components/lotties/bigInvestment.json';
import tradeAnytimeAnimation from '../../../components/lotties/tradeanytime.json';
import exploreAnimation from '../../../components/lotties/explore.json';
import earnWithoutHassleAnimation from '../../../components/lotties/earnwithoutahassle.json';

const FeatureSection = () => {
  return (
    <section className="relative w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <div className="relative w-fit">
            <h2
              className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              <span className="text-black">OWN,</span>
              <span className="text-[#15a36e]">EARN,</span>
              <span className="text-black">EXPLORE,</span>
              <span className="text-[#15a36e]">TRADE</span>
            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
        </motion.div>

        {/* Vertical Stack of 4 Sections */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
          {/* Section 1 - Own a piece of big Investment (Graphic Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-0 lg:gap-0 lg:-ml-2"
          >
            {/* Graphic - Left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
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
            <div className="w-full text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Own a piece of big Investment
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-black leading-normal" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Ever thought real estate, gold, or fine art was only for the rich? Not anymore.<br />
                Start with small amounts and own a piece of high-value assets you actually<br />
                care about.
              </p>
            </div>
          </motion.div>

          {/* Section 2 - Trade anytime, anywhere (Graphic Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-0.5 sm:gap-1 lg:gap-1"
          >
            {/* Graphic - Right */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div
                className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
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
            <div className="w-full text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Trade anytime, anywhere
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-black leading-normal" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Want out? Sell instantly. Want in? Buy in seconds. With your<br />
                built-in wallet, you can manage and trade smoothly—just like<br />
                sending money to a friend.
              </p>
            </div>
          </motion.div>

          {/* Section 3 - Earn without a hassle (Graphic Left) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-0 lg:gap-0 lg:-ml-2"
          >
            {/* Graphic - Left */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
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
            <div className="w-full text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Earn without a hassle
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-black leading-normal" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Sit back and let the experts (and AI) do the heavy lifting. Your money works for<br />
                you, bringing in steady returns–without the stress of paperwork or<br />
                management.
              </p>
            </div>
          </motion.div>

          {/* Section 4 - Explore a world of assets (Graphic Right) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row-reverse items-center gap-0.5 sm:gap-1 lg:gap-1"
          >
            {/* Graphic - Right */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div
                className="w-[180px] sm:w-[200px] md:w-[220px] h-[180px] sm:h-[200px] md:h-[220px] bg-white rounded-lg flex items-center justify-center overflow-hidden"
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
            <div className="w-full text-left">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-2 sm:mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Explore a world of assets
              </h3>
              <p className="text-base sm:text-lg md:text-lg text-black leading-normal" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                From property and gold to private equity and art—our AI picks out<br />
                smart opportunities so you don't have to dig through endless<br />
                research.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
