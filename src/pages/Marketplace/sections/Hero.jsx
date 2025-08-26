import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { LavaLamp } from '../../../components/ui/fluid-blob';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
      {/* Blue Background Pattern - Same as Homepage */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

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
          {/* Main Title - Full Width with Homepage Font Styles */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-8 uppercase anton-regular">
            <div className="text-gray-900">EXPLORE TOKENIZED</div>
            <div className="text-green-600">REAL-WORLD ASSETS</div>
          </h1>

          {/* Description with Homepage Style */}
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
            Secure, AI-enhanced marketplace powered by Crossmint and Fireblocks. Seamless on-chain investment in real estate, commodities, carbon credits, and luxury assets.
          </p>

          {/* CTA Buttons with Homepage Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-gradient inline-flex items-center justify-center px-8 py-4 font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Enter Marketplace
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 font-semibold text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-all duration-300 transform hover:scale-105">
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