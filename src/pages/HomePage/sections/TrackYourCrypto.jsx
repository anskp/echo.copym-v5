import React from 'react';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import WatchSVG from '../../../components/SVG/watch.svg';
import qrcode from '../../../components/SVG/qrcode.svg';

export default function TrackYourCrypto() {
  return (
    <section className="relative py-2 sm:py-3 md:py-4 lg:py-5 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      {/* Shorten the fade overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-white/10 to-transparent rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[60px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10 pb-4 sm:pb-6 md:pb-8 lg:pb-8 mt-2 sm:mt-4 md:mt-6">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack like the image */}
        <div className="flex flex-col lg:hidden items-start text-left space-y-3 sm:space-y-4 md:space-y-5">
          {/* Watch SVG with Phone Overlay - Moved to top for mobile flow */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-start pt-2 sm:pt-4">
            {/* Watch SVG - Static Background */}
            <div className="relative w-72 sm:w-80 md:w-96">
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
                  className="w-32 sm:w-40 md:w-44 h-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2 sm:space-y-3 text-left w-full">
            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-white">Download </span><span className="text-[#15a36e]">CopyM</span> <span className="text-white">from your favorite App store</span>
            </h2>
            <p className="text-xs sm:text-xs md:text-sm lg:text-base text-white font-normal leading-snug max-w-2xl" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Stay connected to your portfolio across all your devices.<br />
              CopyM is available on iOS, Android, Windows, and Mac, so
              you can track every move, get insights, and stay ahead – wherever you are.
            </p>
          </div>

          {/* Download Grid - Buttons Left, Scanner Right */}
          <div className="flex flex-row items-center justify-start gap-4 sm:gap-6 w-full pt-1 text-left">
            {/* App Store Buttons - Left Grid */}
            <div className="flex flex-col gap-2 flex-1 max-w-[140px] sm:max-w-none">
              <a href="#" className="transform transition-transform hover:scale-105">
                <img
                  src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1314619200&h=791e2b6d762e153f582f3c7e7f6d4d5e"
                  alt="Download on the App Store"
                  className="w-full h-auto max-w-[135px] sm:max-w-[160px]"
                />
              </a>
              <a href="#" className="transform transition-transform hover:scale-105">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="w-full h-auto max-w-[190px] sm:max-w-[220px] -ml-2"
                />
              </a>
            </div>

            {/* QR Code - Right Grid */}
            <div className="flex-shrink-0">
              <img
                src={qrcode}
                alt="QR Code"
                className="w-28 h-28 sm:w-36 sm:h-36"
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout (lg+) - More compact Horizontal Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Side - Watch SVG with Overlaid Mobile */}
          <div className="flex justify-center items-center relative order-2 lg:order-1 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
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
                  className="w-28 sm:w-32 md:w-36 lg:w-44 xl:w-52 h-auto drop-shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Marketing Content */}
          <div className="space-y-3 sm:space-y-4 text-left order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white leading-tight whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-white">Download </span><span className="text-[#15a36e]">CopyM</span> <span className="text-white">from your favorite App store</span>
              </h2>
              <p className="text-xs sm:text-xs md:text-sm lg:text-base text-white font-normal leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Stay connected to your portfolio across all your devices.<br />
                CopyM is available on iOS, Android, Windows, and Mac, so<br />
                you can track every move, get insights, and stay ahead – wherever you are.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              {/* Download Buttons Area */}
              <div className="flex flex-row items-center justify-start gap-6">
                {/* Download Buttons Stack */}
                <div className="flex flex-col gap-3">
                  <a href="#" className="transform transition-transform hover:scale-105">
                    <img
                      src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&releaseDate=1314619200&h=791e2b6d762e153f582f3c7e7f6d4d5e"
                      alt="Download on the App Store"
                      className="w-[180px] h-auto"
                    />
                  </a>
                  <a href="#" className="transform transition-transform hover:scale-105">
                    <img
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      alt="Get it on Google Play"
                      className="w-[240px] h-auto -ml-4"
                    />
                  </a>
                </div>

                {/* QR Code */}
                <div className="flex-shrink-0">
                  <img
                    src={qrcode}
                    alt="QR Code"
                    className="w-32 h-32 xl:w-40 xl:h-40"
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