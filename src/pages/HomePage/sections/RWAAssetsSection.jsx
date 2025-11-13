import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import maskcard1 from '../../../components/images/Maskcard1.png';
import maskcard2 from '../../../components/images/Maskcard2.png';
import maskcard3 from '../../../components/images/Maskcard3.png';
import maskcard4 from '../../../components/images/Maskcard4.png';


const TokenizeAssetsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  
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
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-[#15a36e]">TOKENIZE</span>
            <span className="text-black"> REAL ASSETS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal text-black leading-relaxed max-w-6xl mx-auto px-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
          </p>
        </div>

        {/* Assets Grid - Responsive and fits window */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 overflow-visible w-full">
          {assets?.map((asset, index) => {
            const isHovered = hoveredCard === asset.id;
            
            return (
            <div 
              key={asset?.id} 
              className="relative w-full cursor-pointer" 
              style={{ overflow: 'visible' }}
              onMouseEnter={() => setHoveredCard(asset.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Asset Card */}
              <div 
                className={`rounded-lg p-3 sm:p-4 md:p-4 h-full flex flex-col shadow-sm relative w-full transition-all duration-300`} 
                style={{ 
                  overflow: 'visible', 
                  minHeight: '420px',
                  maxHeight: '480px',
                  background: isHovered ? '#000000' : 'linear-gradient(to bottom, #fbfbfb, #f0f0f0)'
                }}
              >
                {/* Large Overlay Number - positioned in top-left, extending beyond card */}
                <div 
                  className="absolute font-semibold pointer-events-none z-0 transition-colors duration-300" 
                  style={{ 
                    fontFamily: 'DM Sans, sans-serif', 
                    fontSize: 'clamp(90px, 9vw, 90px)',
                    lineHeight: '0.9',
                    top: '20px',
                    left: '-10px',
                    opacity: '0.40',
                    transform: 'translate(-12px, -12px)',
                    color: isHovered ? '#15a36e' : '#9ca3af'
                  }}
                >
                  {index + 1}
                </div>

                {/* ROI Badge - positioned in top-left of card content area */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-7 bg-[#e8f5e9] group-hover:bg-[#e8f5e9] rounded-2xl px-2 sm:px-2.5 py-0.5 sm:py-1 z-20">
                  <span className="text-xs font-normal" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="text-[#15a36e] font-semibold">76%</span>
                    <span className="text-black group-hover:text-black"> ROI</span>
                  </span>
                </div>

                {/* Asset Image - positioned at right side of card */}
                <div className="flex items-center justify-end mb-0 relative z-10 w-full" style={{ marginTop: index === 2 ? '-125px' : index === 3 ? '-75px' : index === 0 ? '-70px' : '-20px' }}>
                  <img 
                    src={asset?.image} 
                    alt={asset?.title}
                    className="h-auto object-contain"
                    style={{ 
                      maxHeight: 'clamp(320px, 45vw, 500px)',
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      marginRight: '-17px',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                {/* Asset Info - consistent left alignment for all cards */}
                <div className="absolute bottom-0 left-0 right-0 text-left space-y-1 sm:space-y-2 md:space-y-3 z-10 px-3 sm:px-4 md:px-4 pb-3 sm:pb-4 md:pb-4">
                  <h3 
                    className="text-base sm:text-lg md:text-xl font-bold transition-colors duration-300" 
                    style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? '#ffffff' : '#000000' }}
                  >
                    {asset?.title}
                  </h3>
                  
                  <p 
                    className="text-xs sm:text-xs md:text-sm font-normal leading-snug transition-colors duration-300 line-clamp-3" 
                    style={{ fontFamily: 'DM Sans, sans-serif', color: isHovered ? '#ffffff' : '#000000' }}
                  >
                    {asset?.description}
                  </p>
                  
                  <div className="text-xs sm:text-xs md:text-sm font-semibold space-y-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    <div className="text-[#15a36e]">{asset?.apy || asset?.apr}</div>
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