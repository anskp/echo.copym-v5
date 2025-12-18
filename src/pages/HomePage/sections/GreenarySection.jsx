import React from 'react';

export const GreenarySection = () => {
  return (
    <section className="relative w-full bg-white py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20 overflow-x-hidden overflow-y-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
        {/* Increased edge radius: */}
        <div className="relative flex items-center justify-center rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[2rem] lg:rounded-[2.5rem] xl:rounded-[3.5rem] overflow-hidden">
          {/* Background Image */}
          <img 
            src="/assets/Images/ctasection.png" 
            alt="CTA Section" 
            className="w-full h-auto object-contain"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-end sm:justify-center px-4 sm:px-6 md:px-8 pb-10 sm:pb-10">
            {/* CTA Button - Responsive positioning */}
            <div className="flex items-center justify-center w-full max-w-full sm:mt-72 md:mt-[340px] lg:mt-[430px] xl:mt-[490px]">
              <button 
                onClick={() => {
                  // Button is clickable but doesn't open form modal
                  // Add custom functionality here if needed
                }}
                className="bg-black rounded-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2.5 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 xl:gap-5 transition-all duration-200 border border-gray-800 w-full sm:w-auto max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden min-w-0 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span className="text-[#15a36e] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Invest in the revolution
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreenarySection;

