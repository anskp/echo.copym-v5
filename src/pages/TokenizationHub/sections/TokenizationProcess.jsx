
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
      iconSize: { width: '170px', height: '160px' }
    },
    { 
      title: "Global reach", 
      description: "Tokenization enables investors from around the world to invest in the fund, providing greater access to international capital.",
      icon: t3Image,
      iconSize: { width: '170px', height: '150px' }
    },  
    { 
      title: "Lower costs", 
      description: "Tokenization reduces costs such as custody, transfer, and administration, resulting in lower fees for investors and increased returns for fund managers.",
      icon: t4Image,
      iconSize: { width: '218px', height: '150px' }
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
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-visible">
        <svg
          className="absolute left-1/2 -translate-x-1/2 w-[2685.21px] h-[1363px]"
          viewBox="0 0 1920 1486"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_f_972_811)">
            <ellipse
              cx="654.802"
              cy="250.062"
              rx="654.802"
              ry="250.062"
              transform="matrix(0.0122606 0.999925 0.997334 -0.0729724 1759.39 114.607)"
              fill="url(#paint0_linear_972_811)"
            />
          </g>
          <path
            d="M2045.21 1317.39C2182.94 1307.31 2291.37 1035.88 2287.39 711.127C2283.41 386.376 2168.52 131.282 2030.79 141.36C1893.05 151.438 1784.62 422.871 1788.6 747.622C1792.58 1072.37 1907.47 1327.47 2045.21 1317.39Z"
            fill="white"
          />
          <g filter="url(#filter1_f_972_811)">
            <ellipse
              cx="654.802"
              cy="250.062"
              rx="654.802"
              ry="250.062"
              transform="matrix(-0.0122606 0.999925 -0.997334 -0.0729724 144.605 97.6074)"
              fill="url(#paint1_linear_972_811)"
            />
          </g>
          <path
            d="M-141.209 1300.39C-278.947 1290.31 -387.377 1018.88 -383.395 694.127C-379.413 369.376 -264.527 114.282 -126.79 124.36C10.9475 134.438 119.377 405.871 115.396 730.622C111.414 1055.37 -3.47239 1310.47 -141.209 1300.39Z"
            fill="white"
          />
          <defs>
            <filter
              id="filter0_f_972_811"
              x="1688.19"
              y="16.9996"
              width="657.253"
              height="1468.22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="39.55" result="effect1_foregroundBlur_972_811" />
            </filter>
            <filter
              id="filter1_f_972_811"
              x="-441.444"
              y="-0.000389099"
              width="657.253"
              height="1468.22"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="39.55" result="effect1_foregroundBlur_972_811" />
            </filter>
            <linearGradient
              id="paint0_linear_972_811"
              x1="697.903"
              y1="-5.62463"
              x2="700.179"
              y2="185.239"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.40392" stopColor="#E4FFE8" />
              <stop offset="0.750165" stopColor="white" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_972_811"
              x1="697.903"
              y1="-5.62463"
              x2="700.179"
              y2="185.239"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.40392" stopColor="#E4FFE8" />
              <stop offset="0.750165" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Main Content */}
      <div className="relative z-10 overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              WHY <span className="text-[#15a36e]">TOKENIZE</span> ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl mx-auto px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
            </p>
            {/* <button 
              onClick={onLaunchCreator} 
              className="bg-white text-emerald-600 font-semibold px-2.5 sm:px-4 lg:px-5 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-[10px] sm:text-xs"
            >
              <GiPlayButton className="mr-1.5 h-2.5 w-2.5 sm:h-3 sm:w-3 inline" />
              Launch Token Creator Demo
            </button> */}
          </div>

          {/* Why Tokenize Features - Alternating Two-Column Layout */}
          <div className="relative mt-12 sm:mt-16 lg:mt-20">
            {/* Center vertical SVG line */}
            <svg
              className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 h-full w-[28px] pointer-events-none select-none"
              // Width fixed, height stretches with container
              viewBox="0 0 28 937"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <g filter="url(#filter0_f_967_1007)">
                <line
                  x1="13.8008"
                  y1="9.80078"
                  x2="13.8007"
                  y2="926.801"
                  stroke="url(#paint0_linear_967_1007)"
                  strokeWidth={8}
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_967_1007"
                  x="0.000781059"
                  y="0.000781059"
                  width="27.6"
                  height="936.6"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="4.9" result="effect1_foregroundBlur_967_1007" />
                </filter>
                <linearGradient
                  id="paint0_linear_967_1007"
                  x1="9.30078"
                  y1="9.80078"
                  x2="9.80078"
                  y2="967.801"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop />
                  <stop offset="0.35498" stopColor="#28B580" />
                  <stop offset="0.639707" stopColor="#34CB93" />
                  <stop offset={1} stopColor="white" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-16 md:space-y-24">
              {whyTokenizeFeatures.map((feature, index) => {
                const isRight = index % 2 === 0; // even indices on the right (Programable terms etc.)
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row ${isRight ? 'md:justify-end' : 'md:justify-start'} items-start`}
                  >
                    <div
                      className={`flex items-start gap-6 max-w-lg ${isRight ? '' : 'md:flex-row-reverse text-right'}`}
                    >
                      {/* Icon */}
                      {feature.icon && (
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          style={{
                            width: feature.iconSize?.width || '64px',
                            height: feature.iconSize?.height || '64px',
                            objectFit: 'contain'
                          }}
                        />
                      )}
                      {/* Text */}
                      <div>
                        <h3 className="text-emerald-600 font-semibold text-lg mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-700 text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}