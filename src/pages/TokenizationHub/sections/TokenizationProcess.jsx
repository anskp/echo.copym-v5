
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
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-section-title mb-4 bg-gradient-to-r from-[#15a36e] to-[#255f99] text-transparent bg-clip-text">
            Tokenization Process
          </h2>
          <p className="brand-description max-w-3xl mx-auto mb-8">
            Our streamlined process transforms your real-world assets into compliant digital tokens in just three simple steps.
          </p>
          <button onClick={onLaunchCreator} className="btn-gradient mx-auto">
            <Play className="mr-2 h-5 w-5" />
            Launch Token Creator Demo
          </button>
        </div>

        <div className="relative mb-16">
          <div className="flex items-center justify-center">
            {stepCards.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xl transition-all duration-500 ${step.stepNumber === 3 ? 'bg-gradient-to-r from-[#15a36e] to-[#255f99] scale-110 shadow-xl' : 'bg-gradient-to-r from-gray-400 to-gray-500 scale-100 shadow-lg'}`}>
                    {step.stepNumber === 3 ? <CheckCircle className="w-10 h-10" /> : step.stepNumber}
                  </div>
                </div>
                {index < stepCards.length - 1 && (
                  <div className={`w-32 h-1 mx-6 transition-all duration-500 rounded-full ${step.status === 'completed' ? 'bg-gradient-to-r from-[#15a36e] to-[#255f99]' : 'bg-gradient-to-r from-gray-300 to-gray-400'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};