import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/Image'; // Import our AVIF-compatible Image component
import maskcard1 from '../../../components/images/Maskcard1.avif';
import maskcard2 from '../../../components/images/Maskcard2.avif';
import maskcard3 from '../../../components/images/Maskcard3.avif';
import maskcard4 from '../../../components/images/Maskcard4.avif';
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
    <SectionContainer padding="pt-4 sm:pt-6 md:pt-8 lg:pt-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
      <SectionHeader
        title="TOKENIZE REAL ASSETS"
        subtitle={
          <span className="max-w-3xl mx-auto block">
            Gold, Art, Carbon Credits, Real Estate & more. Transform physical assets <br className="hidden md:block" /> into digital tokens for global investment access.
          </span>
        }
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
                  <Image
                    src={asset?.image}
                    alt={asset?.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Asset Info - Below Image */}
                <div className="flex flex-col flex-grow text-left space-y-1.5">
                  {/* Title - Fixed Height */}
                  <h3
                    className="text-xl sm:text-2xl lg:text-[23px] font-bold text-black min-h-[32px] sm:min-h-[40px] lg:min-h-[48px] flex items-center"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {asset?.title}
                  </h3>

                  {/* Description - Fixed Height */}
                  <p
                    className="text-sm text-black leading-snug flex-grow"
                    style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {asset?.description}
                  </p>

                  {/* Know More Button - Transparent Outlined Design */}
                  <div className="mt-12 sm:mt-8 flex justify-center">
                    <Link to="/marketplace" className="group inline-flex items-center justify-between min-w-[120px] sm:min-w-[150px] bg-transparent border border-[#15a36e] hover:bg-[#15a36e] rounded-full p-1 transition-all duration-300 w-fit cursor-pointer">
                      <span className="pl-4 pr-2 text-black group-hover:text-white font-semibold text-xs sm:text-sm" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Know more
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#15a36e] group-hover:bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5">
                        <svg
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:text-[#15a36e]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
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
