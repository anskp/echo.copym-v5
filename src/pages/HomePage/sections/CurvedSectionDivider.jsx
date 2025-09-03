import React from 'react';
import { GiArrowDunk } from 'react-icons/gi';

// Image-based 3D-style icons from public assets
const PuzzleIcon = () => (
  <div className="text-center">
    <img
      src="/assets/Images/icons/puzzle.png"
      alt="Puzzle icon"
      className="w-20 h-20 drop-shadow-lg"
    />
  </div>
);

const House3DIcon = () => (
  <div className="text-center">
    <img
      src="/assets/Images/icons/3d-house.png"
      alt="3D house icon"
      className="w-20 h-20 drop-shadow-lg"
    />
  </div>
);

const WorldwideIcon = () => (
  <div className="text-center">
    <img
      src="/assets/Images/icons/worldwide.png"
      alt="Worldwide icon"
      className="w-20 h-20 drop-shadow-lg"
    />
  </div>
);

const GrowthChartIcon = () => (
  <div className="text-center">
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20 drop-shadow-lg"
    >
      {/* Chart elements */}
      <g
        stroke="white"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Y-axis */}
        <line x1="20" y1="20" x2="20" y2="75" />

        {/* X-axis */}
        <line x1="20" y1="75" x2="80" y2="75" />

        {/* Trending line chart */}
        <polyline points="20,65 30,55 45,35 55,40 70,25" />

        {/* Bar chart */}
        <line x1="30" y1="60" x2="30" y2="75" />
        <line x1="40" y1="50" x2="40" y2="75" />
        <line x1="60" y1="55" x2="60" y2="75" />
        <line x1="70" y1="45" x2="70" y2="75" />
      </g>

      {/* Dots on data points */}
      <g fill="white">
        <circle cx="30" cy="55" r="2" />
        <circle cx="45" cy="35" r="2" />
        <circle cx="55" cy="40" r="2" />
        <circle cx="70" cy="25" r="2" />
      </g>
    </svg>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, ctaText, color }) => {
  return (
    <div className="text-center group flex flex-col items-center justify-start h-full">
      <div className="mb-6 flex justify-center items-center">
        <Icon />
      </div>
      <h3 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-xs">{description}</p>
      <button className="inline-flex items-center justify-center text-white font-semibold text-sm hover:text-white/80 transition-colors duration-200 mt-auto">
      
      </button>
    </div>
  );
};

export default function CurvedSectionDivider() {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-emerald-600 to-emerald-700 backdrop-blur-sm rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular leading-tight">
              <span className="text-white">Own. Earn. </span>
              <span className="text-black">Explore. Trade.</span>
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10">
            <FeatureCard
              icon={PuzzleIcon}
              title="Own a Piece of Big Investments"
              description="Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small amounts and own a piece of high-value assets you actually care about."
              
              color="from-pink-500 to-teal-500"
            />
            <FeatureCard
              icon={House3DIcon}
              title="Earn Without the Hassle"
              description="Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing in steady returns—without the stress of paperwork or management."
              
              color="from-yellow-500 to-green-500"
            />
            <FeatureCard
              icon={WorldwideIcon}
              title="Explore a World of Assets"
              description="From property and gold to private equity and art—our AI picks out smart opportunities so you don't have to dig through endless research."
              
              color="from-pink-500 via-blue-500 to-green-500"
            />
            <FeatureCard
              icon={GrowthChartIcon}
              title="Trade Anytime, Anywhere"
              description="Want out? Sell instantly. Want in? Buy in seconds. With your built-in wallet, you can manage and trade smoothly—just like sending money to a friend."
              
              color="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
