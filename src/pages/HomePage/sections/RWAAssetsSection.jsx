import React from 'react';
import { Link } from 'react-router-dom';
import maskcard1 from '../../../components/images/Maskcard1.png';
import maskcard2 from '../../../components/images/Maskcard2.png';
import maskcard3 from '../../../components/images/Maskcard3.png';
import maskcard4 from '../../../components/images/Maskcard4.png';
import SectionContainer from '../../../components/Layout/SectionContainer';
import SectionHeader from '../../../components/Layout/SectionHeader';


const TokenizeAssetsSection = () => {

  const assets = [
    {
      id: 1,
      title: "Gold and Metals",
      description: "Stabilize your portfolio with tokenized gold, silver, and trusted real-world metals.",
      image: maskcard1,
      roi: "82%"
    },
    {
      id: 2,
      title: "Fine Art",
      description: "Own fractional stakes in iconic and contemporary art—exclusive collections with long-term appreciation potential.",
      image: maskcard2,
      roi: "68%"
    },
    {
      id: 3,
      title: "Carbon Credits",
      description: "Earn real returns by owning verified carbon assets—invest with purpose and measurable impact.",
      image: maskcard3,
      roi: "91%"
    },
    {
      id: 4,
      title: "Real Estate",
      description: "Own a fractional stake in premium global real estate—high-value properties built to grow long-term wealth.",
      image: maskcard4,
      roi: "76%"
    }
  ];

  return (
    <SectionContainer padding="py-8 sm:py-12 md:py-16 lg:py-20">
      <SectionHeader
        title="TOKENIZE REAL ASSETS"
        subtitle="Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets into digital tokens for global investment access."
        highlightWords={["TOKENIZE"]}
      />

      {/* Assets Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
        {assets?.map((asset, index) => {
          return (
            <div
              key={asset?.id}
              className="relative w-full h-full"
            >
              {/* Asset Card */}
              <div
                className="rounded-lg p-3 sm:p-4 lg:p-5 flex flex-col h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[480px] relative"
                style={{
                  background: 'linear-gradient(to bottom, rgba(251, 251, 251, 1), rgba(240, 240, 240, 1))'
                }}
              >
                {/* Floating ROI/APR Badge - Top Right */}
                <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                  {/* ROI Badge */}
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#dcfce7] border border-[#bbf7d0]/50 shadow-sm">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2L10.5 9.5H1.5L6 2Z" fill="#15a36e" />
                    </svg>
                    <span className="text-xs sm:text-sm font-bold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>{asset?.roi}</span>

                  </div>


                </div>

                {/* Asset Image - Top, Centered - Fixed Height */}
                <div className="flex items-center justify-center mt-8 sm:mt-10 lg:mt-12 mb-3 sm:mb-4 lg:mb-5 h-[100px] sm:h-[140px] md:h-[160px] lg:h-[180px]">
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
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-black min-h-[48px] sm:min-h-[64px] lg:min-h-[72px] flex items-center"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {asset?.title}
                  </h3>

                  {/* Description - Fixed Height */}
                  <p
                    className="text-sm sm:text-base lg:text-lg text-black leading-relaxed flex-grow"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {asset?.description}
                  </p>

                  {/* Know More Section - Conditional Styling */}
                  <div className="mt-5 flex justify-center">
                    <Link to="/marketplace" className="block">
                      <div
                        className="w-fit bg-[#15a36e] hover:bg-[#128a5d] text-white text-center py-1.5 sm:py-2 px-4 sm:px-5 rounded-lg transition-colors duration-300 pointer-events-auto"
                      >
                        <span className="text-sm sm:text-base font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                          Know more
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
};

export default TokenizeAssetsSection;
