import React from 'react';
import { Wallet, TrendingUp, BarChart3, Zap, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, ctaText, color }) => {
  return (
    <div className="text-center">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 mx-auto`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-4">{description}</p>
      <button className="inline-flex items-center text-white font-semibold text-sm hover:text-white/80 transition-colors duration-200">
        {ctaText} <ArrowRight className="ml-1 w-4 h-4" />
      </button>
    </div>
  );
};

export default function CurvedSectionDivider() {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 anton-regular">
              Own. Earn. Explore. Trade
            </h2>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <FeatureCard
              icon={Wallet}
              title="Own a Piece of Big Investments"
              description="Ever thought real estate, gold, or fine art was only for the rich? Not anymore. Start with small amounts and own a piece of high-value assets you actually care about."
              ctaText="Start Investing"
              color="from-pink-500 to-teal-500"
            />
            <FeatureCard
              icon={TrendingUp}
              title="Earn Without the Hassle"
              description="Sit back and let the experts (and AI) do the heavy lifting. Your money works for you, bringing in steady returns—without the stress of paperwork or management."
              ctaText="View Returns"
              color="from-yellow-500 to-green-500"
            />
            <FeatureCard
              icon={BarChart3}
              title="Explore a World of Assets"
              description="From property and gold to private equity and art—our AI picks out smart opportunities so you don't have to dig through endless research."
              ctaText="Explore Assets"
              color="from-pink-500 via-blue-500 to-green-500"
            />
            <FeatureCard
              icon={Zap}
              title="Trade Anytime, Anywhere"
              description="Want out? Sell instantly. Want in? Buy in seconds. With your built-in wallet, you can manage and trade smoothly—just like sending money to a friend."
              ctaText="Trade Now"
              color="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
