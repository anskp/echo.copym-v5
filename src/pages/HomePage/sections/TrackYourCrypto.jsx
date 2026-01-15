import ColourfulIcon from '../../../components/SVG/Colourfulicon.svg';
import { QrCodeIcon } from '@heroicons/react/24/outline';
import WatchSVG from '../../../components/SVG/watch.svg';
import qrcode from '../../../components/SVG/qrcode.svg';
import { FaApple } from 'react-icons/fa';

export default function TrackYourCrypto() {
  return (
    <section className="relative py-0 bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>
      {/* Shorten the fade overlay at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 md:h-16 bg-gradient-to-t from-white/10 to-transparent rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[60px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10 pb-0 mt-0">
        {/* Mobile/Tablet Layout (sm, md) - Vertical Stack like the image */}
        <div className="flex flex-col lg:hidden items-start text-left space-y-3 sm:space-y-4 md:space-y-5">
          {/* Watch SVG Background with Phone Video Overlay */}
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center mx-auto pt-0">
            {/* Watch SVG - Static Background */}
            <div className="relative w-72 sm:w-80 md:w-96">
              <img
                src={WatchSVG}
                alt="Watch illustration"
                className="w-full h-auto"
              />
              {/* Video Phone Overlay - Positioned on top of Watch SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 sm:w-48 md:w-56 z-10 drop-shadow-2xl">
                  <div className="relative w-full aspect-[9/18]">
                    {/* Single Mockup Image */}
                    <img
                      src="/assets/Images/mockup.png"
                      alt="App Mockup"
                      className="w-[65%] h-[65%] object-contain mx-auto translate-y-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2 sm:space-y-3 text-left w-full">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
            <div className="flex flex-col gap-2 flex-1 max-w-[170px] sm:max-w-none">
              <a href="#" className="flex items-center bg-black border border-white/30 rounded-lg px-3 py-1 gap-3 hover:scale-105 transition-transform w-full sm:w-[170px] h-[54px] group">
                <FaApple className="text-white text-[28px] group-hover:text-white/90" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white/80 leading-none mb-0.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>Get it on</span>
                  <span className="text-[19px] text-white font-bold leading-none" style={{ fontFamily: 'Palanquin, sans-serif' }}>App Store</span>
                </div>
              </a>
              <a href="#" className="flex items-center bg-black border border-white/30 rounded-lg px-3 py-1 gap-3 hover:scale-105 transition-transform w-full sm:w-[170px] h-[54px] group">
                <img src={ColourfulIcon} alt="Google Play" className="w-[26px] h-[26px]" />
                <div className="flex flex-col items-start justify-center">
                  <span className="text-[10px] text-white/80 leading-none mb-0.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>Get it on</span>
                  <span className="text-[19px] text-white font-bold leading-none" style={{ fontFamily: 'Palanquin, sans-serif' }}>Google Play</span>
                </div>
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
        <div className="hidden lg:grid grid-cols-2 gap-4 lg:gap-4 items-center">
          {/* Left Side - Watch SVG with Overlaid Mobile */}
          <div className="flex justify-center lg:justify-end items-center relative order-2 lg:order-1 mt-0 lg:pr-8">
            {/* Watch SVG - Static Background */}
            <div className="relative w-full m-auto max-w-sm sm:max-w-md lg:max-w-lg">
              <img
                src={WatchSVG}
                alt="Watch illustration"
                className="w-full h-auto"
              />

              {/* Video Phone Overlay - Positioned on top of Watch SVG */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 z-10 drop-shadow-2xl">
                  <div className="relative w-full aspect-[9/18]">
                    {/* Single Mockup Image */}
                    <img
                      src="/assets/Images/mockup.png"
                      alt="App Mockup"
                      className="w-[65%] h-[65%] object-contain mx-auto translate-y-20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Marketing Content */}
          <div className="space-y-3 sm:space-y-4 text-left order-1 lg:order-2">
            <div className="space-y-2 sm:space-y-3">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-4xl font-bold text-white leading-tight whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
                  <a href="#" className="flex items-center bg-black border border-white/30 rounded-lg px-3 py-1 gap-3 hover:scale-105 transition-transform w-[170px] h-[54px] group">
                    <FaApple className="text-white text-[28px] group-hover:text-white/90" />
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-[10px] text-white/80 leading-none mb-0.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>Get it on</span>
                      <span className="text-[19px] text-white font-bold leading-none" style={{ fontFamily: 'Palanquin, sans-serif' }}>App Store</span>
                    </div>
                  </a>
                  <a href="#" className="flex items-center bg-black border border-white/30 rounded-lg px-3 py-1 gap-3 hover:scale-105 transition-transform w-[170px] h-[54px] group">
                    <img src={ColourfulIcon} alt="Google Play" className="w-[26px] h-[26px]" />
                    <div className="flex flex-col items-start justify-center">
                      <span className="text-[10px] text-white/80 leading-none mb-0.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>Get it on</span>
                      <span className="text-[19px] text-white font-bold leading-none" style={{ fontFamily: 'Palanquin, sans-serif' }}>Google Play</span>
                    </div>
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