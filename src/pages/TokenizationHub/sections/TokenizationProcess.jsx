
// src/pages/TokenizationHub/sections/TokenizationProcess.jsx

import React, { useState, useRef } from 'react';
import { GiPlayButton } from 'react-icons/gi';
import { 
  GiChart, 
  GiShield, 
  GiHouse,
  GiCoins,
  GiBookCover,
  GiCpu,
  GiFiles
} from 'react-icons/gi';
import t1Image from '/assets/Images/icons/t1.png';
import t2Image from '/assets/Images/icons/t2.png';
import t3Image from '/assets/Images/icons/t3.png';
import t4Image from '/assets/Images/icons/t4.png';
import t5Image from '/assets/Images/icons/t5.png';
import t6Image from '/assets/Images/icons/t6.png';
import { icons } from '@tabler/icons-react';

export default function TokenizationProcess({ onLaunchCreator }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedBlockchain, setSelectedBlockchain] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  
  // Data arrays remain here as they are specific to this component
  const assetTypes = [
    { id: 1, name: 'Real Estate', desc: 'Properties & Land', icon: GiHouse, value: 'High Value', color: 'from-blue-500 to-blue-600' },
    { id: 2, name: 'Commodities', desc: 'Gold, Silver, Oil', icon: GiCoins, value: 'Stable', color: 'from-yellow-500 to-yellow-600' },
    { id: 3, name: 'Art & Collectibles', desc: 'Paintings, NFTs', icon: GiBookCover, value: 'Unique', color: 'from-purple-500 to-purple-600' },
    { id: 4, name: 'Private Equity', desc: 'Company Shares', icon: GiChart, value: 'Growth', color: 'from-green-500 to-green-600' },
    { id: 5, name: 'Carbon Credits', desc: 'Environmental Assets', icon: GiShield, value: 'ESG', color: 'from-emerald-500 to-emerald-600' }
  ];

  const blockchains = [
    { id: 1, name: 'Ethereum', desc: 'Smart Contracts', icon: GiCpu, value: 'ERC-20', color: 'from-indigo-500 to-indigo-600' },
    { id: 2, name: 'Polygon', desc: 'Low Cost', icon: GiCpu, value: 'MATIC', color: 'from-purple-500 to-purple-600' },
    { id: 3, name: 'Solana', desc: 'High Speed', icon: GiCpu, value: 'SOL', color: 'from-pink-500 to-pink-600' },
    { id: 4, name: 'Avalanche', desc: 'Scalable', icon: GiCpu, value: 'AVAX', color: 'from-red-500 to-red-600' },
    { id: 5, name: 'Binance Smart Chain', desc: 'Compatible', icon: GiCpu, value: 'BSC', color: 'from-yellow-500 to-yellow-600' },
    { id: 6, name: 'Optimism', desc: 'Layer 2', icon: GiCpu, value: 'OP', color: 'from-blue-500 to-blue-600' }
  ];

  const tokenStandards = {
    ethereum: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: GiFiles, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: GiFiles, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: GiFiles, value: 'Hybrid', color: 'from-purple-500 to-purple-600' },
      { id: 4, name: 'ERC-1400', desc: 'Security Token Standard', icon: GiFiles, value: 'Security', color: 'from-red-500 to-red-600' }
    ],
    polygon: [
      { id: 1, name: 'ERC-20', desc: 'Fungible Tokens', icon: GiFiles, value: 'Standard', color: 'from-green-500 to-green-600' },
      { id: 2, name: 'ERC-721', desc: 'Non-Fungible Tokens', icon: GiFiles, value: 'NFT', color: 'from-blue-500 to-blue-600' },
      { id: 3, name: 'ERC-1155', desc: 'Multi-Token Standard', icon: GiFiles, value: 'Hybrid', color: 'from-purple-500 to-purple-600' }
    ],
    solana: [
      { id: 1, name: 'SPL Token', desc: 'Fungible Tokens', icon: GiFiles, value: 'Standard', color: 'from-blue-500 to-blue-600' },
      { id: 2, name: 'Metaplex', desc: 'NFT Standard', icon: GiFiles, value: 'NFT', color: 'from-blue-500 to-blue-600' }
    ]
  };

  const whyTokenizeFeatures = [
    { 
      title: "Programable terms", 
      description: "Program the transfer-restrictions and investment terms that are required between different asset and investor (KYC) classifications.",
      icon: t1Image,
      iconSize: { width: '323px', height: '146px' }
    },
    { 
      title: "Increased accessibility", 
      description: "Tokenization broadens investment opportunities, including retail investors previously excluded from traditional investment structures.",
      icon: t2Image,
      iconSize: { width: '190px', height: '169px' }
    },
    { 
      title: "Global reach", 
      description: "Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.",
      icon: t3Image,
      iconSize: { width: '177px', height: '166px' }
    },  
    { 
      title: "Lower costs", 
      description: "Tokenization reduces costs such as custody, transfer, and administration, resulting in lower fees for investors and increased returns for fund managers.",
      icon: t4Image,
      iconSize: { width: '218px', height: '226px' }
    },
    { 
      title: "Faster settlement times", 
      description: "Tokenization speeds up trade settlements, enabling investors to receive their funds faster after selling their shares in the fund.",
      icon: t5Image,
      iconSize: { width: '147px', height: '137px' }
    },
    { 
      title: "Greater transparency", 
      description: "Investors can track their token ownership and access real-time information on fund performance and holdings.",
      icon: t6Image,
      iconSize: { width: '147px', height: '137px' }
    }
  ];

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-4 sm:mb-5 lg:mb-6">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 dm-sans">
              <span className="text-black">WHY</span>
              <span className="text-black">TOKENIZE?</span>
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-[10px] sm:text-xs lg:text-sm mb-3 sm:mb-4 px-4 dm-sans">
              Discover the key benefits that make tokenization the future of asset management and investment.
            </p>
            <button 
              onClick={onLaunchCreator} 
              className="bg-white text-emerald-600 font-semibold px-2.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-[10px] sm:text-xs"
            >
              <GiPlayButton className="mr-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 inline" />
              Launch Token Creator Demo
            </button>
          </div>

          {/* Why Tokenize Features Grid - Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-4 sm:mt-6 lg:mt-8">
            {whyTokenizeFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[16px] shadow-[5px_4px_4px_0_rgba(173,173,173,0.25)] overflow-hidden flex flex-col"
                style={{ minHeight: '280px' }}
              >
                {/* Top Section with Icon */}
                <div className="relative h-24 sm:h-28 lg:h-32 xl:h-36 flex-shrink-0">
                  {/* Green Gradient Icon Background */}
                  <div
                    className="absolute top-2 left-2 sm:top-3 sm:left-3 lg:top-3.5 lg:left-3.5 rounded-[16px] w-16 h-12 sm:w-20 sm:h-16 lg:w-24 lg:h-20 xl:w-28 xl:h-24"
                    style={{
                      background: 'linear-gradient(179.04deg, rgba(79,217,148,0.2) 57.8%, rgba(255,255,255,0.2) 101.33%)'
                    }}
                  />

                  {/* Icon Image - positioned precisely */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 lg:top-4 lg:left-4 flex items-center justify-center z-10">
                    {feature.icon && (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-12 h-auto sm:w-16 lg:w-20 xl:w-24"
                        style={{
                          maxWidth: '55%',
                          maxHeight: '75%',
                          objectFit: 'contain'
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col justify-end p-3 sm:p-4 lg:p-5">
                  <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-black mb-1.5 sm:mb-2 text-left dm-sans leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm xl:text-base text-black text-left dm-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}