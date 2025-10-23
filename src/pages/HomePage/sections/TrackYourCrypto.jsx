import React from 'react';
import { GiPlayButton, GiRoundStar, GiArrowDunk } from 'react-icons/gi';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import WatchSVG from '../../../components/SVG/watch.svg';

export default function TrackYourCrypto() {

  return (
    <section className="relative py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent rounded-t-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Watch SVG with Overlaid Mobile */}
          <div className="relative flex justify-center lg:justify-start lg:ml-40">
            {/* Watch SVG - Static Background */}
            <div className="relative w-full max-w-md">
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
                  className="w-32 lg:w-40 xl:w-48 h-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
          
          {/* Right Side - Marketing Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                DOWNLOAD <span className="text-emerald-600">COPYM</span> FROM YOUR <span className="text-emerald-600">FAVOURITE</span> APP STORE
              </h2>
              <p className="text-lg text-black leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Stay connected to your portfolio across all your devices. Copym is available on iOS, Android, Windows, and Mac, so you can track every move, get insights, and stay ahead — wherever you are.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-6">
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-6 h-6 brightness-0 invert" />
                  <div className="text-left">
                    <div className="text-xs text-white">Download on the</div>
                    <div className="font-bold text-white">App Store</div>
                  </div>
                </button>
                <button className="bg-black hover:bg-gray-800 text-white flex items-center justify-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-white">GET IT ON</div>
                    <div className="font-bold text-white">Google Play</div>
                  </div>
                </button>
              </div>
              
              {/* Marketplace Button and QR Code Row */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
                <Link
                  to="/marketplace"
                  className="btn-gradient inline-flex items-center justify-center px-8 py-4 font-semibold text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Marketplace
                  
                </Link>
                
                                 {/* QR Code Card - Moved to right side and made bigger */}
                 <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                   <QrCodeIcon className="w-24 h-24 text-gray-900" />
                   <p className="text-sm text-gray-600 mt-3 text-center font-medium">Scan to download</p>
                 </div>
              </div>
            </div>
            
            {/* Rating and Trust */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <GiRoundStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">Rated 4.5 in app stores</span>
              </div>
              <div className="text-gray-600 font-medium">
                Trusted by 5 Million+ users
              </div>
            </div>
            
            {/* Platform Availability */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <img src="/assets/Images/apple-black-logo.png" alt="Apple" className="w-4 h-4" />
                <span>iOS</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="/assets/Images/android.png" alt="Android" className="w-4 h-4" />
                <span>Android</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
