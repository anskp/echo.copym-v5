
// src/pages/TokenizationHub/sections/TokenizationProcess.jsx

import React, { useState, useRef } from 'react';
import { Play, CheckCircle, Briefcase, Cpu, Code, Building2, Coins, BookCopy, TrendingUp, Shield, ArrowRight } from 'lucide-react';
import Silk from '../../../components/Silk';

export default function TokenizationProcess({ onLaunchCreator }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  
  // Data arrays remain here as they are specific to this component
  const assetTypes = [
    { id: 1, name: 'Real Estate', desc: 'Properties & Land', icon: Building2, value: 'High Value', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Commodities', desc: 'Gold, Silver, Oil', icon: Coins, value: 'Stable', color: 'from-yellow-500 to-yellow-600' },
    { id: 3, name: 'Art & Collectibles', desc: 'Paintings, NFTs', icon: BookCopy, value: 'Unique', color: 'from-purple-500 to-purple-600' },
    { id: 4, name: 'Private Equity', desc: 'Company Shares', icon: TrendingUp, value: 'Growth', color: 'from-green-500 to-green-600' },
    { id: 5, name: 'Carbon Credits', desc: 'Environmental Assets', icon: Shield, value: 'ESG', color: 'from-emerald-500 to-emerald-600' }
  ];

  const blockchains = [
    { id: 1, name: 'Ethereum', desc: 'Smart Contracts', icon: Cpu, value: 'ERC-20', color: 'from-indigo-500 to-indigo-600' },
    { id: 2, name: 'Polygon', desc: 'Low Cost', icon: Cpu, value: 'MATIC', color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'Solana', desc: 'High Speed', icon: Cpu, value: 'SOL', color: 'from-pink-500 to-pink-600' },
    { id: 4, name: 'Avalanche', desc: 'Scalable', icon: Cpu, value: 'AVAX', color: 'from-red-500 to-red-600' },
    { id: 5, name: 'Binance Smart Chain', desc: 'Compatible', icon: Cpu, value: 'BSC', color: 'from-yellow-500 to-yellow-600' },
    { id: 6, name: 'Optimism', desc: 'Layer 2', icon: Cpu, value: 'OP', color: 'from-blue-500 to-blue-600' }
  ];

  const tokenStandards = {
    ethereum: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: Code, value: 'Hybrid', color: 'from-purple-500 to-purple-600' },
      { id: 4, name: 'ERC-1400', desc: 'Security Token Standard', icon: Code, value: 'Security', color: 'from-red-500 to-red-600' }
    ],
    polygon: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: Code, value: 'Hybrid', color: 'from-purple-500 to-purple-600' }
    ],
    solana: [
      { id: 1, name: 'SPL Token', desc: 'Fungible Tokens', icon: Code, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'Metaplex', desc: 'NFT Standard', icon: Code, value: 'NFT', color: 'from-blue-500 to-blue-600' }
    ]
  };

  const stepCards = [
    { title: "Select Asset Type", icon: Briefcase, stepNumber: 1, status: currentStep >= 0 ? 'completed' : 'pending' },
    { title: "Choose Blockchain Network", icon: Cpu, stepNumber: 2, status: currentStep >= 1 ? 'completed' : 'pending' },
    { title: "Token Standards", icon: Code, stepNumber: 3, status: currentStep >= 2 ? 'completed' : 'pending' }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-emerald-600 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0 opacity-15">
          <Silk
            speed={2}
            scale={1.5}
            color="#ffffff"
            noiseIntensity={0.8}
            rotation={0.1}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 anton-regular">
              <span className="text-white">TOKENIZATION</span>
              <br />
              <span className="text-black">PROCESS</span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 px-4">
              Our streamlined process transforms your real-world assets into compliant digital tokens in just three simple steps.
            </p>
            <button 
              onClick={onLaunchCreator} 
              className="bg-white text-emerald-600 font-semibold px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 inline" />
              Launch Token Creator Demo
            </button>
          </div>

          {/* Step Progress Indicator */}
          <div className="relative mb-8 sm:mb-12 lg:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0">
              {stepCards.map((step, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center">
                  <div className="relative">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg lg:text-xl transition-all duration-500 ${
                      step.stepNumber === 3 
                        ? 'bg-black scale-110 shadow-xl' 
                        : 'bg-white border border-white/30 scale-100 shadow-lg'
                    }`}>
                      {step.stepNumber === 3 ? (
                        <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                      ) : (
                        <span className="text-black">{step.stepNumber}</span>
                      )}
                    </div>
                  </div>
                  
                  {index < stepCards.length - 1 && (
                    <div className="hidden sm:block w-16 sm:w-20 lg:w-32 h-1 mx-2 sm:mx-4 lg:mx-6 transition-all duration-500 rounded-full bg-white/30">
                      <div className={`h-full rounded-full transition-all duration-500 ${
                        step.status === 'completed' 
                          ? 'bg-black' 
                          : 'bg-transparent'
                      }`} />
                    </div>
                  )}
                  
                  {/* Mobile: Show step title below circle */}
                  <div className="sm:hidden mt-2 text-center">
                    <p className="text-white/80 text-xs font-medium">{step.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Content Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
            {stepCards.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:bg-white/30 shadow-lg"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/30 flex items-center justify-center mr-3 sm:mr-4">
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">{step.title}</h3>
                </div>
                <p className="text-white/80 text-xs sm:text-sm lg:text-base">
                  {step.stepNumber === 1 && "Choose from real estate, commodities, art, or any asset type"}
                  {step.stepNumber === 2 && "Select your preferred blockchain network for deployment"}
                  {step.stepNumber === 3 && "Pick the appropriate token standard for your use case"}
                </p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          {currentStep === 3 && (
            <div className="text-center mt-8 sm:mt-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Tokenize!</h3>
                <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                  You've selected {selectedAsset?.name} on {selectedBlockchain?.name} using {selectedStandard?.name}
                </p>
                <button
                  onClick={onLaunchCreator}
                  className="inline-flex items-center justify-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 font-semibold text-emerald-600 bg-white hover:bg-gray-100 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  Launch Token Creator
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}