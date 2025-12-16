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
      image: maskcard1,
    },
    {
      id: 2,
      title: "Fine Art",
      description: "Own fractional shares of masterpieces and contemporary art. Access exclusive art collections and benefit from the appreciation of cultural assets.",
      image: maskcard2,
    },
    {
      id: 3,
      title: "Carbon Credits",
      description: "Support environmental initiatives while earning returns. Invest in verified carbon credit projects and contribute to a sustainable future.",
      image: maskcard3,
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Access premium real estate investments globally. From luxury properties to commercial buildings, own fractional shares of high-value assets.",
      image: maskcard4,
    }
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-full mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32" style={{ maxWidth: '100%' }}>
        {/* Header Section */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="relative w-fit mb-3 sm:mb-4 md:mb-5">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight uppercase pb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-[#15a36e]">TOKENIZE</span>
              <span className="text-black"> REAL ASSETS</span>
            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
          </p>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
          {assets?.map((asset) => {
            return (
              <div 
                key={asset?.id} 
                className="relative w-full h-full"
              >
                {/* Asset Card */}
                <div 
                  className="rounded-lg p-4 sm:p-5 flex flex-col h-full min-h-[450px] sm:min-h-[480px]"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(251, 251, 251, 1), rgba(240, 240, 240, 1))'
                  }}
                >
                  {/* Asset Image - Top, Centered - Fixed Height */}
                  <div className="flex items-center justify-center mb-4 sm:mb-5 h-[180px] sm:h-[200px] md:h-[220px]">
                    <img 
                      src={asset?.image} 
                      alt={asset?.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Asset Info - Below Image */}
                  <div className="flex flex-col flex-grow text-left space-y-3">
                    {/* Title - Fixed Height */}
                    <h3 
                      className="text-lg sm:text-xl font-bold text-black min-h-[28px] sm:min-h-[32px]" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {asset?.title}
                    </h3>
                    
                    {/* Description - Fixed Height */}
                    <p 
                      className="text-sm sm:text-base text-black leading-relaxed flex-grow min-h-[60px] sm:min-h-[72px]" 
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {asset?.description}
                    </p>
                    
                    {/* Returns Section - Single Green Box - Fixed at Bottom */}
                    <div 
                      className="rounded-lg mt-auto p-[1px]"
                      style={{ 
                        background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(190, 190, 190, 1), rgba(0, 0, 0, 1))'
                      }}
                    >
                      <div 
                        className="rounded-lg px-3 sm:px-4 py-3 sm:py-4 h-full w-full"
                        style={{ 
                          backgroundColor: 'rgba(84, 178, 143, 1)'
                        }}
                      >
                        <div className="text-sm sm:text-base font-semibold text-center space-y-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                          <div>
                            <span className="text-black">76%</span> <span className="text-white">ROI in returns</span>
                          </div>
                          <div>
                            <span className="text-black">80%</span> <span className="text-white">APR in returns</span>
                          </div>
                        </div>
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
