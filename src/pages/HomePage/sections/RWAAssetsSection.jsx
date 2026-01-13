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
      <div className="w-full mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16" style={{ maxWidth: '100%' }}>
        {/* Header Section */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10">
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
          {assets?.map((asset, index) => {
            return (
              <div
                key={asset?.id}
                className="relative w-full h-full"
              >
                {/* Asset Card */}
                <div
                  className="rounded-lg p-3 sm:p-4 lg:p-5 flex flex-col h-full min-h-[380px] sm:min-h-[450px] lg:min-h-[480px] relative"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(251, 251, 251, 1), rgba(240, 240, 240, 1))'
                  }}
                >
                  {/* Floating ROI/APR Badge - Top Right */}
                  <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                    <div className="text-[10px] sm:text-xs font-medium text-right space-y-0.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      <div>
                        <span className="text-[#15a36e] font-bold">76%</span> <span className="text-gray-600">ROI</span>
                      </div>
                      <div>
                        <span className="text-[#15a36e] font-bold">80%</span> <span className="text-gray-600">APR</span>
                      </div>
                    </div>
                  </div>

                  {/* Asset Image - Top, Centered - Fixed Height */}
                  <div className="flex items-center justify-center mb-3 sm:mb-4 lg:mb-5 h-[120px] sm:h-[180px] md:h-[200px] lg:h-[220px]">
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
                      className="text-base sm:text-lg lg:text-xl font-bold text-black min-h-[24px] sm:min-h-[28px] lg:min-h-[32px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {asset?.title}
                    </h3>

                    {/* Description - Fixed Height */}
                    <p
                      className="text-[12px] sm:text-sm lg:text-base text-black leading-relaxed flex-grow min-h-[50px] sm:min-h-[60px] lg:min-h-[72px]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {asset?.description}
                    </p>

                    {/* Know More Section - Conditional Styling */}
                    <div className="mt-auto">
                      <Link to="/marketplace" className="block">
                        {index < 2 ? (
                          /* Style 1: Black Pill Button (First 2 Cards) */
                          <div className="bg-black rounded-full px-1 py-1 flex items-center justify-between group transition-all duration-300 hover:scale-[1.02] border border-white/10">
                            <span className="text-white font-bold text-sm sm:text-base ml-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                              Know More
                            </span>
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center text-black transition-transform group-hover:rotate-45 duration-300">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </div>
                        ) : (
                          /* Style 2: Green Box Button (Remaining Cards) */
                          <div
                            className="rounded-lg p-[1px]"
                            style={{
                              background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(190, 190, 190, 1), rgba(0, 0, 0, 1))'
                            }}
                          >
                            <div
                              className="rounded-lg px-3 sm:px-4 py-3 sm:py-4 h-full w-full flex items-center justify-center group transition-all duration-300 hover:opacity-90"
                              style={{
                                backgroundColor: 'rgba(84, 178, 143, 1)'
                              }}
                            >
                              <div className="text-[12px] sm:text-base font-bold text-white uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                Know More
                                <svg
                                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        )}
                      </Link>
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
