
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
    <section className="relative bg-white pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
      {/* Main Content */}
      <div className="relative z-10 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 dm-sans">
              <span className="text-white">WHY TOKENIZE?</span>
            </h2>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed dm-sans">
              Discover the key benefits that make tokenization the future of asset management and investment.
            </p>
            {/* <button 
              onClick={onLaunchCreator} 
              className="bg-white text-emerald-600 font-semibold px-2.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-[10px] sm:text-xs"
            >
              <GiPlayButton className="mr-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 inline" />
              Launch Token Creator Demo
            </button> */}
          </div>

          {/* Why Tokenize Features - Two Row Layout */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            {/* Row 1 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              marginBottom: '80px',
              flexWrap: 'wrap'
            }}>
              {whyTokenizeFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  style={{
                    width: '280px',
                    padding: '20px',
                    borderRadius: '12px',
                    background: '#fff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'linear-gradient(179.04deg, rgba(79,217,148,0.2) 57.8%, rgba(255,255,255,0.2) 101.33%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                    {feature.icon && (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      />
                    )}
                  </div>
                  <div style={{ marginTop: '40px', width: '100%' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#000',
                      margin: '0 0 8px 0',
                      textAlign: 'center'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.5', margin: '0' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              {whyTokenizeFeatures.slice(3, 6).map((feature, index) => (
                <div
                  key={index + 3}
                  style={{
                    width: '280px',
                    padding: '20px',
                    borderRadius: '12px',
                    background: '#fff',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                    position: 'relative',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    textAlign: 'left',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'linear-gradient(179.04deg, rgba(79,217,148,0.2) 57.8%, rgba(255,255,255,0.2) 101.33%)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10,
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  }}>
                    {feature.icon && (
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                      />
                    )}
                  </div>
                  <div style={{ marginTop: '40px', width: '100%' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#000',
                      margin: '0 0 8px 0',
                      textAlign: 'center'
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#333', lineHeight: '1.5', margin: '0' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}