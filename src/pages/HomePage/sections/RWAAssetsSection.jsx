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
      roi: "76% ROI",
      apy: "80% APY",
      image: maskcard1,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 2,
      title: "Fine Art",
      description: "Own fractional shares of masterpieces and contemporary art. Access exclusive art collections and benefit from the appreciation of cultural assets.",
      roi: "76% ROI",
      apr: "80% APR",
      image: maskcard2,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 3,
      title: "Carbon Credits",
      description: "Support environmental initiatives while earning returns. Invest in verified carbon credit projects and contribute to a sustainable future.",
      roi: "76% ROI",
      apr: "80% APR",
      image: maskcard3,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Access premium real estate investments globally. From luxury properties to commercial buildings, own fractional shares of high-value assets.",
      roi: "76% ROI",
      apr: "80% APR",
      image: maskcard4,
      bgColor: "bg-gradient-to-b from-[#fbfbfb] to-[#f0f0f0] text-black"
    }
  ];

  return (
    <section className="w-full bg-background-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="w-full max-w-[1864px] mx-auto px-4 sm:px-6 lg:px-7">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-tight tracking-base uppercase mb-4 sm:mb-6" style={{ fontFamily: 'Palanquin' }}>
            <span className="text-[#15a36e]">TOKENIZE</span>
            <span className="text-black"> REAL ASSETS</span>
          </h2>
        </div>

        {/* Asset Categories */}
        <div className="relative">
          {/* Background Numbers */}
          <div className="absolute inset-0 flex justify-between text-black items-start pointer-events-none">
            <span className="text-[80px] sm:text-[120px] lg:text-[140px] font-semibold text-text-light  tracking-lg opacity-50" style={{ fontFamily: 'Palanquin' }}>1</span>
            <span className="text-[80px] sm:text-[120px] lg:text-[140px] font-semibold text-text-light tracking-lg opacity-50" style={{ fontFamily: 'Palanquin' }}>2</span>
            <span className="text-[80px] sm:text-[120px] lg:text-[140px] font-semibold text-text-light tracking-lg opacity-50" style={{ fontFamily: 'Palanquin' }}>3</span>
            <span className="text-[60px] sm:text-[120px] lg:text-[140px] font-semibold text-text-light tracking-lg opacity-50" style={{ fontFamily: 'Palanquin' }}>4</span>
          </div>

          {/* Description Text */}
          <div className="text-center mb-8 sm:mb-12 relative z-10">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal text-black leading-relaxed tracking-wide max-w-6xl mx-auto" style={{ fontFamily: 'Palanquin' }}>
              Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access.
            </p>
          </div>

          {/* Assets Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
            {assets?.map((asset, index) => (
              <div key={asset?.id} className="relative">
                {/* Asset Card */}
                <div className={`${asset?.bgColor} rounded-lg p-6 h-full flex flex-col justify-between min-h-[400px] sm:min-h-[500px] lg:min-h-[754px] relative overflow-hidden`}>
                  {/* Asset Image */}
                  <div className="flex-1 flex items-center justify-center mb-6">
                    <img 
                      src={asset?.image} 
                      alt={asset?.title}
                      className="max-w-full h-auto object-contain"
                    />
                  </div>

                  {/* Asset Info */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl sm:text-2xl font-medium" style={{ fontFamily: 'DM Sans' }}>
                      {asset?.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-normal leading-relaxed" style={{ fontFamily: 'DM Sans' }}>
                      {asset?.description}
                    </p>
                    
                    <div className="text-sm sm:text-base font-semibold" style={{ fontFamily: 'DM Sans' }}>
                      <span className="text-[#15a36e]">{asset?.roi}</span>
                      <span className="text-text-primary"> </span>
                      <br />
                      <span className="text-[#15a36e]">{asset?.apy || asset?.apr}</span>
                    </div>
                  </div>

                  {/* ROI Badge (for first item) */}
                  {index === 0 && (
                    <div className="absolute top-4 left-4 bg-background-light rounded-xl px-4 py-1">
                      <span className="text-base font-normal" style={{ fontFamily: 'DM Sans' }}>
                        <span className="text-[#15a36e]">76%</span>
                        <span className="text-text-primary"> ROI</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenizeAssetsSection;