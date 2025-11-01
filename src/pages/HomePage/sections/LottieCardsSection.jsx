import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

// Import Lottie JSON files from components/lotties
import group470 from '../../../components/lotties/Group-470.json';      // Hexagon
import group402 from '../../../components/lotties/Chain-with-$.json';      // Chain with $
import group469 from '../../../components/lotties/Risinggraph.json';  // Rising graph
import frame71 from '../../../components/lotties/Group-402.json';    // Candlesticks

const LottieCardsSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Row - Two Cards with Horizontal Split (Text Left, Graphic Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 mb-3 lg:mb-4">
          {/* Card 1 - "Own a piece of big Investment" - Chain with $ */}
          <div className="relative bg-[#eaf1f7] rounded-xl border-2 border-[#eaf1f7] shadow-[0px_4px_22.6px_rgba(0,0,0,0.25)] p-3 lg:p-6 grid grid-cols-2 gap-2 lg:gap-5 items-center min-h-[120px] lg:min-h-[150px] overflow-hidden">
            {/* Text Section - Left Grid */}
            <div className="flex flex-col justify-center overflow-hidden">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#15a36e] mb-2 lg:mb-3 text-left leading-tight">
                Own a piece of big Investment
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-black leading-relaxed text-left">
                Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small
                amounts and own a piece of high-value assets you actually care about.
              </p>
            </div>
            {/* Lottie Animation - Right Grid */}
            <div className="flex items-center justify-center overflow-hidden max-w-full max-h-full">
              <div className="w-full h-full max-w-[200px] max-h-[200px] sm:max-w-[240px] sm:max-h-[240px] lg:max-w-[250px] lg:max-h-[250px] flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group469}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2 - "Own a piece of big Investment" - Hexagon */}
          <div className="relative bg-[#eaf1f7] rounded-xl border-2 border-[#eaf1f7] shadow-[0px_4px_22.6px_rgba(0,0,0,0.25)] p-3 lg:p-4 flex flex-col md:flex-row items-center gap-3 lg:gap-4 min-h-[120px] lg:min-h-[150px] overflow-hidden">
            {/* Text Section - Left */}
            <div className="flex-1 flex flex-col justify-center overflow-hidden">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#15a36e] mb-2 lg:mb-3 text-left">
                Own a piece of big Investment
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-black leading-relaxed text-left">
                Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small
                amounts and own a piece of high-value assets you actually care about.
              </p>
            </div>
            {/* Lottie Animation - Right */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={frame71}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Three Cards with Vertical Split (Text Top, Graphic Bottom) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4">
          {/* Card 3 - "Trade anytime, anywhere" - Candlesticks */}
          <div className="relative bg-[#eaf1f7] rounded-xl border-2 border-[#eaf1f7] shadow-[0px_4px_22.6px_rgba(0,0,0,0.25)] p-3 lg:p-4 flex flex-col min-h-[200px] lg:min-h-[240px] overflow-hidden">
            {/* Text Section - Top */}
            <div className="flex-1 flex flex-col mb-3 lg:mb-4 overflow-hidden">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#15a36e] mb-2 lg:mb-3 text-left">
                Trade anytime, anywhere
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-black leading-relaxed text-left">
                Want out ? Sell instantly. Want in ? Buy in seconds. With your built-in wallet, you can manage
                and trade smoothly—just like sending money to a friend.
              </p>
            </div>
            {/* Lottie Animation - Bottom */}
            <div className="w-full h-10 sm:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group402}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 4 - "Earn without a hassle" - Rising graph */}
          <div className="relative bg-[#eaf1f7] rounded-xl border-2 border-[#eaf1f7] shadow-[0px_4px_22.6px_rgba(0,0,0,0.25)] p-3 lg:p-4 flex flex-col min-h-[200px] lg:min-h-[240px] overflow-hidden">
            {/* Text Section - Top */}
            <div className="flex-1 flex flex-col mb-3 lg:mb-4 overflow-hidden">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#15a36e] mb-2 lg:mb-3 text-left">
                Earn without a hassle
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-black leading-relaxed text-left">
                Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing
                in steady returns—without the stress of paperwork or management.
              </p>
            </div>
            {/* Lottie Animation - Bottom */}
            <div className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group470}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 5 - "Explore a world of assets" - Hexagon/Globe */}
          <div className="relative bg-[#eaf1f7] rounded-xl border-2 border-[#eaf1f7] shadow-[0px_4px_22.6px_rgba(0,0,0,0.25)] p-3 lg:p-4 flex flex-col min-h-[200px] lg:min-h-[240px] overflow-hidden">
            {/* Text Section - Top */}
            <div className="flex-1 flex flex-col mb-3 lg:mb-4 overflow-hidden">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#15a36e] mb-2 lg:mb-3 text-left">
                Explore a world of assets
              </h3>
              <p className="text-xs sm:text-sm lg:text-base font-medium text-black leading-relaxed text-left">
                From property and gold to private equity and art—our AI picks out smart opportunities so you
                don't have to dig through endless research.
              </p>
            </div>
            {/* Lottie Animation - Bottom */}
            <div className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full max-w-full max-h-full flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group470}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LottieCardsSection;

