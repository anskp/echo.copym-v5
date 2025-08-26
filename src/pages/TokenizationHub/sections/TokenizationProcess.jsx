
// src/pages/TokenizationHub/sections/TokenizationProcess.jsx

import React, { useState, useRef } from 'react';
import { Play, CheckCircle, Briefcase, Cpu, Code, Building2, Coins, BookCopy, TrendingUp, Shield } from 'lucide-react';

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
    <section className="bg-[#10B981] py-24 rounded-[50px] mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="anton-regular uppercase font-black text-4xl md:text-5xl mb-4">
            <span className="text-white">TOKENIZATION</span>
            <span className="text-black"> PROCESS</span>
          </h2>
          <p className="text-black/80 max-w-3xl mx-auto mb-8 text-lg">
            Our streamlined process transforms your real-world assets into compliant digital tokens in just three simple steps.
          </p>
          <button 
            onClick={onLaunchCreator} 
            className="bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-black/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Play className="mr-2 h-5 w-5 inline" />
            Launch Token Creator Demo
          </button>
        </div>

        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            {stepCards.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${
                    step.stepNumber === 3 
                      ? 'bg-black scale-110 shadow-xl' 
                      : 'bg-white border border-white/30 scale-100 shadow-lg'
                  }`}>
                    {step.stepNumber === 3 ? (
                      <CheckCircle className="w-10 h-10 text-white" />
                    ) : (
                      <span className="text-black">{step.stepNumber}</span>
                    )}
                  </div>
                </div>
                
                {index < stepCards.length - 1 && (
                  <div className="w-32 h-1 mx-6 transition-all duration-500 rounded-full bg-white/30">
                    <div className={`h-full rounded-full transition-all duration-500 ${
                      step.status === 'completed' 
                        ? 'bg-black' 
                        : 'bg-transparent'
                    }`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Glassmorphism Step Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stepCards.map((step, index) => (
            <div 
              key={index} 
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 transition-all duration-300 hover:bg-white/30 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center mr-4">
                  <step.icon className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-black font-semibold text-lg">{step.title}</h3>
              </div>
              <p className="text-black/80">
                {step.stepNumber === 1 && "Choose from real estate, commodities, art, or any asset type"}
                {step.stepNumber === 2 && "Select your preferred blockchain network for deployment"}
                {step.stepNumber === 3 && "Pick the appropriate token standard for your use case"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}