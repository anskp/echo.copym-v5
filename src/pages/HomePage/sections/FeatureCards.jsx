import React from 'react';

// Feature Card Component
const FeatureCard = ({ icon, title, description, bgColor = "bg-emerald-50" }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Visual Element Section */}
      <div className={`${bgColor} p-8 h-48 flex items-center justify-center`}>
        <div className="w-full h-full flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-emerald-600 mb-3 leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

// Icon Components
const InvestmentIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex items-center justify-center space-x-2">
      <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        $
      </div>
      <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
        $
      </div>
      <div className="w-6 h-6 bg-emerald-300 rounded-full flex items-center justify-center text-white font-bold text-xs">
        $
      </div>
      <div className="w-4 h-4 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xs">
        $
      </div>
    </div>
  </div>
);

const EarnIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      </div>
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z"/>
        </svg>
      </div>
    </div>
  </div>
);

const ExploreIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      </div>
      <div className="absolute -top-4 -left-4 bg-emerald-100 px-3 py-1 rounded-full text-emerald-700 text-sm font-medium">
        Equity
      </div>
      <div className="absolute -bottom-4 -right-4 bg-emerald-100 px-3 py-1 rounded-full text-emerald-700 text-sm font-medium">
        Art
      </div>
    </div>
  </div>
);

const TradeIcon = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="flex items-center space-x-4">
      <div className="flex flex-col space-y-2">
        <div className="w-4 h-8 bg-emerald-500 rounded"></div>
        <div className="w-4 h-6 bg-emerald-400 rounded"></div>
        <div className="w-4 h-10 bg-emerald-600 rounded"></div>
      </div>
      <div className="flex items-center space-x-1">
        <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
          $
        </div>
        <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
        <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
        <div className="w-1 h-1 bg-emerald-300 rounded-full"></div>
        <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
          $
        </div>
      </div>
    </div>
  </div>
);

export default function FeatureCards() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            OWN. EARN. EXPLORE. TRADE.
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <FeatureCard
            icon={<InvestmentIcon />}
            title="Own a piece of big Investment"
            description="Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small amounts and own a piece of high-value assets you actually care about."
          />
          
          <FeatureCard
            icon={<EarnIcon />}
            title="Earn without a hassle"
            description="Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing in steady returns—without the stress of paperwork or management."
          />
          
          <FeatureCard
            icon={<ExploreIcon />}
            title="Explore a world of assets"
            description="From property and gold to private equity and art—our AI picks out smart opportunities so you don't have to dig through endless research."
          />
          
          <FeatureCard
            icon={<TradeIcon />}
            title="Trade anytime, anywhere"
            description="Want out? Sell instantly. Want in? Buy in seconds. With your built-in wallet, you can manage and trade smoothly—just like sending money to a friend."
          />
        </div>
      </div>
    </section>
  );
}
