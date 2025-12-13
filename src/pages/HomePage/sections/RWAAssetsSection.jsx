import React from 'react';
import { Link } from 'react-router-dom';
import maskcard1 from '../../../components/images/Maskcard1.png';
import maskcard2 from '../../../components/images/Maskcard2.png';
import maskcard3 from '../../../components/images/Maskcard3.png';
import maskcard4 from '../../../components/images/Maskcard4.png';


const TokenizeAssetsSection = () => {
  
  const assets = [
    {
      id: 1,
      title: "Gold and Metals",
      description: "Invest in precious metals and commodities. Diversify your portfolio with gold, silver, and other valuable metals through secure digital tokens.",
      
      apy: "80% APY",
      image: maskcard1,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 2,
      title: "Fine Art",
      description: "Own fractional shares of masterpieces and contemporary art. Access exclusive art collections and benefit from the appreciation of cultural assets.",
     
      apr: "80% APY",
      image: maskcard2,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 3,
      title: "Carbon Credits",
      description: "Support environmental initiatives while earning returns. Invest in verified carbon credit projects and contribute to a sustainable future.",
     
      apr: "80% APY",
      image: maskcard3,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Access premium real estate investments globally. From luxury properties to commercial buildings, own fractional shares of high-value assets.",
      
      apr: "80% APY",
      image: maskcard4,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16" style={{ maxWidth: '100%' }}>
        {/* Header Section */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-[#15a36e]">TOKENIZE</span>
            <span className="text-black"> REAL ASSETS</span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 bg-black mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-black leading-relaxed max-w-6xl px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
          </p>
        </div>

        {/* Assets Grid - Responsive and fits window */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-visible w-full">
          {assets?.map((asset, index) => {
            return (
            <div 
              key={asset?.id} 
              className="relative w-full" 
              style={{ overflow: 'visible' }}
            >
              {/* Asset Card */}
              <div 
                className="rounded-lg p-4 h-full flex flex-col shadow-sm relative w-full" 
                style={{ 
                  overflow: 'visible', 
                  minHeight: '420px',
                  maxHeight: '480px',
                  background: 'linear-gradient(to bottom, #fbfbfb, #f0f0f0)'
                }}
              >

                {/* Asset Image - positioned at right side of card */}
                <div 
                  className={`flex items-center justify-end mb-0 relative z-10 w-full ${index === 2 ? 'sm:-mt-[125px] -mt-[90px]' : index === 3 ? '-mt-[75px]' : index === 0 ? '-mt-[70px]' : '-mt-[20px]'}`}
                  style={{ marginTop: index === 2 ? undefined : (index === 3 ? '-75px' : index === 0 ? '-70px' : '-20px') }}
                >
                  <img 
                    src={asset?.image} 
                    alt={asset?.title}
                    className="h-auto object-contain"
                    style={{ 
                      maxHeight: '500px',
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      marginRight: '-17px',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                {/* Asset Info - consistent left alignment for all cards */}
                <div className="absolute bottom-0 left-0 right-0 text-left space-y-3 z-10 px-4 pb-4">
                  <h3 
                    className="text-xl font-bold" 
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#000000' }}
                  >
                    {asset?.title}
                  </h3>
                  
                  <p 
                    className="text-sm font-normal leading-snug line-clamp-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#000000' }}
                  >
                    {asset?.description}
                  </p>
                  
                  {/* Returns Section */}
                  <div className="flex flex-col gap-2 mt-4">
                    <div className="border-2 border-[#15a36e] rounded-lg px-3 py-2 text-center">
                      <span className="text-sm font-semibold text-[#15a36e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        76% ROI in returns
                      </span>
                    </div>
                    <div className="border-2 border-[#15a36e] rounded-lg px-3 py-2 text-center">
                      <span className="text-sm font-semibold text-[#15a36e]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        80% APR in returns
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TokenizeAssetsSection;