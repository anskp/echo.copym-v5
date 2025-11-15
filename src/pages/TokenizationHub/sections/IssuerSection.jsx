"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import group575 from '../../../components/lotties/Group-575.json';
import group574 from '../../../components/lotties/Group-574 (1).json';
import { 
  GiLockedChest,
  GiChart,
  GiGlobe
} from 'react-icons/gi';
import { Globe as GlobeComponent } from '../../../components/globe';
import BitcoinsplitImage from '../../../components/images/Bitcoinsplit.png';


const investorGroups = [
  { name: 'Institutional', value: 45, color: '#3B82F6' },
  { name: 'Retail', value: 30, color: '#10B981' },
  { name: 'Accredited', value: 25, color: '#F59E0B' }
];

const MinimalTokenizationDashboard = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16" style={{ backgroundColor: '#e9f6f1' }}>
      <div className="mb-6 sm:mb-8 md:mb-10 text-center w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight uppercase mb-3 sm:mb-4 md:mb-5 px-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <span className="text-[#15a36e]">TOKENIZE</span> REAL ASSETS
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-gray-600 leading-relaxed max-w-6xl mx-auto px-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          Digitizing real assets on blockchain
        </p>
      </div>

      {/* Content with Cards and Image */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 sm:gap-8 items-center lg:items-start">
        {/* Three Horizontal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-9 w-full lg:w-2/3 mt-4 sm:mt-8 md:mt-12 lg:mt-4">
        {/* Card 1: We can tokenize any asset */}
        <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#15a36e] flex items-center dm-sans uppercase">
              
              We can tokenize any asset
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-xs sm:text-sm text-left text-blue-800 dm-sans">
                Transform any real-world asset into digital tokens with our secure blockchain platform.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full max-w-[200px] max-h-[200px] sm:max-w-[250px] sm:max-h-[250px] flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group574}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: One simple token management interface */}
        <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg font-semibold text-[#15a36e] flex items-center dm-sans uppercase">
              
              One simple token management interface
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Payment Amount</span>
                <span className="text-xs sm:text-sm font-bold text-green-600">123 USDC</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                <span className="text-xs sm:text-sm font-medium text-gray-700">Transfers</span>
                <span className="text-xs sm:text-sm font-bold text-blue-600">28</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-full h-full max-w-[200px] max-h-[200px] sm:max-w-[250px] sm:max-h-[250px] flex items-center justify-center">
                <Player
                  autoplay
                  loop
                  src={group575}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Investor Groups with Globe */}
        <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="mb-3 sm:mb-4 text-center">
            <h3 className="text-base sm:text-lg font-semibold text-[#15a36e] flex items-center justify-center dm-sans uppercase">
              
              Global Distribution
            </h3>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="hidden sm:block space-y-2">
              {investorGroups.map((group) => (
                <div key={group.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }}></div>
                    <span className="text-xs sm:text-sm text-gray-700">{group.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">{group.value}%</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <GlobeComponent />
            </div>
          </div>
        </div>
      </div>

        {/* Bitcoinsplit Image on the Right */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mt-6 sm:mt-8 lg:mt-0">
          <img 
            src={BitcoinsplitImage} 
            alt="Bitcoin split"
            className="w-full max-w-[200px] sm:max-w-xs h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default MinimalTokenizationDashboard;