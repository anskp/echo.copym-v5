import React from 'react';
import { GiPlayButton, GiRoundStar, GiArrowDunk } from 'react-icons/gi';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import WatchSVG from '../../../components/SVG/watch.svg';

export default function TrackYourCrypto() {

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Watch SVG with Overlaid Mobile */}
          <div className="flex justify-center items-center relative mt-48 lg:mt-52">
            {/* Watch SVG - Static Background */}
            <div className="relative w-full max-w-lg">
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
                   className="w-40 lg:w-48 xl:w-56 h-auto drop-shadow-2xl relative z-10"
                 />
              </div>
            </div>
          </div>
          
          {/* Right Side - Marketing Content */}
          <div className="space-y-6 text-left">
            <div className="space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                DOWNLOAD <span className="text-emerald-600">COPYM</span> FROM YOUR <span className="text-emerald-600">FAVOURITE</span> APP STORE
              </h2>
              <p className="text-sm sm:text-base text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Stay connected to your portfolio across all your devices. Copym is available on iOS, Android, Windows, and Mac, so you can track every move, get insights, and stay ahead — wherever you are.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-4">
               {/* Download Buttons */}
               <div className="flex items-center gap-4">
                 {/* Download Buttons - Reduced width */}
                 <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-2 px-3 sm:px-4 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-48 h-12 border border-gray-300">
                    <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-5 h-5 brightness-0 invert" />
                    <div className="text-left">
                      <div className="text-xs text-white">Download on the</div>
                      <div className="font-bold text-white text-sm">App Store</div>
                    </div>
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-2 px-3 sm:px-4 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-48 h-12 border border-gray-300">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-white">GET IT ON</div>
                      <div className="font-bold text-white text-sm">Google Play</div>
                    </div>
                   </button>
                 </div>
                 
                 {/* QR Code - Moved to the right */}
                 <div className="flex-shrink-0">
                   <QrCodeIcon className="w-16 h-16 text-black" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
