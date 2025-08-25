import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { LavaLamp } from '../../../components/ui/fluid-blob';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-white via-white to-green-50">
      {/* Fluid Blob Background */}
      <div className="absolute inset-0 opacity-30">
        <LavaLamp />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* AI-Powered Badge - Top of Content */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered
          </div>
        </div>

        <div className="text-center">
          {/* Main Title - Full Width */}
          <h1 className="brand-title rounded-lg px-6 py-4 inline-block mb-8">
            <div className="text-[#255f99]">Explore Tokenized Real-World</div>
            <div className="text-[#15a36e]">Assets</div>
          </h1>

          {/* Description */}
          <p className="text-xl brand-description text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto px-8 py-6">
            Secure, AI-enhanced marketplace powered by Crossmint and Fireblocks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {/* Primary Button – Enhanced gradient fill */}
            <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white btn-gradient hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
              Enter Marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            {/* Secondary Button – Enhanced styling */}
            <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white btn-gradient-secondary hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Additional UI Elements */}
          <div className="mt-16 flex justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">AI-Enhanced</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}