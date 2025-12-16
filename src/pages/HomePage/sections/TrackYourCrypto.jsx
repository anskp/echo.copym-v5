import React from 'react';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import WatchSVG from '../../../components/SVG/watch.svg';
import qrcode from '../../../components/SVG/qrcode.svg';

export default function TrackYourCrypto() {

  return (
    <section className="relative py-4 sm:py-6 md:py-8 lg:py-10 bg-black ">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[50px] sm:rounded-t-[75px] md:rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 relative z-10 pb-2 sm:pb-3 md:pb-4 mt-8 sm:mt-12 md:mt-16">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack like the image */}
        <div className="flex flex-col lg:hidden items-center text-center space-y-4 sm:space-y-6 md:space-y-8">
          {/* Watch SVG with Phone Overlay */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto flex justify-center items-center -mt-4 sm:-mt-6 md:-mt-8">
            {/* Watch SVG - Static Background */}
            <div className="relative w-full">
              <img 
                src={WatchSVG} 
                alt="Watch illustration" 
                className="w-full h-auto"
              />
              
              {/* Mobile-ads Overlay - Positioned on top of Watch SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <img 
                   src="/assets/Images/mobile-ads.png" 
                   alt="Copym App Interface" 
                   className="w-24 sm:w-32 md:w-36 h-auto drop-shadow-2xl relative z-10"
                 />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4 sm:space-y-6 text-left">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-white">Download </span><span className="text-[#15a36e]">CopyM</span> <span className="text-white">from your favorite App store</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-normal leading-relaxed max-w-2xl" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Stay connected to your portfolio across all your devices.<br />
              CopyM is available on iOS, Android, Windows, and Mac, so<br />
              you can track every move, get insights, and stay ahead –<br />
              wherever you are.
            </p>
          </div>
          
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-52 h-14 border border-gray-300">
                <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-6 h-6 brightness-0 invert" />
                <div className="text-left">
                  <div className="text-sm text-white font-medium">Download on the</div>
                  <div className="font-bold text-white text-base">App Store</div>
                </div>
              </button>
              <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-52 h-14 border border-gray-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm text-white font-medium">GET IT ON</div>
                  <div className="font-bold text-white text-base">Google Play</div>
                </div>
              </button>
            </div>
            
            {/* QR Code */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <QrCodeIcon className="w-12 h-12 sm:w-16 sm:h-16 text-black " />
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - Original Horizontal Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Watch SVG with Overlaid Mobile */}
          <div className="flex justify-center items-center relative order-2 lg:order-1 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24">
            {/* Watch SVG - Static Background */}
            <div className="relative w-full m-auto max-w-sm sm:max-w-md lg:max-w-lg">
              <img 
                src={WatchSVG} 
                alt="Watch illustration" 
                className="w-full h-auto"
              />
              
              {/* Mobile-ads Overlay - Positioned on top of Watch SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <img 
                   src="/assets/Images/mobile-ads.png" 
                   alt="Copym App Interface" 
                   className="w-32 sm:w-40 md:w-44 lg:w-48 xl:w-56 h-auto drop-shadow-2xl relative z-10"
                 />
              </div>
            </div>
          </div>
          
          {/* Right Side - Marketing Content */}
          <div className="space-y-4 sm:space-y-6 text-left order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-white">Download </span><span className="text-[#15a36e]">CopyM</span> <span className="text-white">from your favorite App store</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-normal leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Stay connected to your portfolio across all your devices.<br />
                CopyM is available on iOS, Android, Windows, and Mac, so<br />
                you can track every move, get insights, and stay ahead –<br />
                wherever you are.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
               {/* Download Buttons */}
               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                 {/* Download Buttons */}
                 <div className="flex flex-col sm:flex-col gap-4 w-full sm:w-auto">
                  <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-52 h-14 border border-gray-300">
                    <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-6 h-6 brightness-0 invert" />
                    <div className="text-left">
                      <div className="text-sm text-white font-medium">Download on the</div>
                      <div className="font-bold text-white text-base">App Store</div>
                    </div>
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-52 h-14 border border-gray-300">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-sm text-white font-medium">GET IT ON</div>
                      <div className="font-bold text-white text-base">Google Play</div>
                    </div>
                  </button>
                 </div>
                 
                 {/* QR Code */}
                 <div className="flex-shrink-0 p-10 rounded-lg shadow-lg">
                   <img 
                     src={qrcode} 
                     alt="QR Code" 
                     className="w-30 h-30 sm:w-[200px] sm:h-[200px] text-black" 
                   />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}