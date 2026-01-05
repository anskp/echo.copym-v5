import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-3 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-24">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1.8fr] gap-y-10 gap-x-8 lg:gap-x-12 items-start">
          {/* Left Side - Logo, Description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-1 sm:mb-1.5">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-12 w-auto sm:h-16 md:h-20 object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed translate-x-1 -mt-4 mb-2 sm:mb-2.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col lg:ml-0 mt-5">
            <div className="relative w-fit mb-1.5 sm:mb-1.5">
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                PRODUCT
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-0.5 sm:space-y-2">
              {['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col lg:ml-0 mt-5">
            <div className="relative w-fit mb-1.5 sm:mb-1.5">
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                COMPANY
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-0.5 sm:space-y-2">
              {['About', 'Careers', 'Press', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col lg:ml-0 mt-5">
            <div className="relative w-fit mb-1.5 sm:mb-1.5">
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                SUPPORT
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-0.5 sm:space-y-2">
              {['Help Centre', 'Security', 'Press', 'Terms', 'API'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - Right side */}
          <div className="flex flex-col space-y-2 sm:space-y-2.5 md:space-y-3 mt-5 md:col-span-2 lg:col-span-1">
            <div>
              <div className="relative w-fit mb-1.5 sm:mb-1.5">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  JOIN OUR NEWS LETTER
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <p className="mt-2 sm:mt-2.5 text-sm sm:text-base text-white leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-2">
              <div
                className="flex items-center overflow-hidden w-full max-w-full sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px]"
                style={{
                  height: '36px',
                  background: '#ffffff',
                  borderRadius: '18px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-[18px] placeholder:text-gray-400"
                  style={{
                    paddingLeft: '12px',
                    paddingRight: '8px',
                    color: '#000000',
                    fontSize: '12px',
                    background: 'transparent',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-[18px] whitespace-nowrap px-4 min-w-[100px]"
                  style={{
                    background: '#15a36e',
                    color: '#ffffff',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Subscribe
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 mt-2">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center mb-1 sm:mb-1.5">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Navigation Links - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {/* Product Links */}
            <div>
              <div className="relative w-fit mb-1.5 sm:mb-1.5">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  PRODUCT
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-0.5 sm:space-y-1">
                {['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <div className="relative w-fit mb-1.5 sm:mb-1.5">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  COMPANY
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-0.5 sm:space-y-1">
                {['About', 'Careers', 'Press', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <div className="relative w-fit mb-1.5 sm:mb-1.5">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  SUPPORT
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-0.5 sm:space-y-1">
                {['Help Centre', 'Security', 'Press', 'Terms', 'API'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-sm sm:text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Mobile only */}
        <div className="md:hidden mt-6 sm:mt-8">
          <div className="flex flex-col space-y-2 sm:space-y-2.5">
            <div>
              <div className="relative w-fit mb-1.5 sm:mb-1.5">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  JOIN OUR NEWS LETTER
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <p className="mt-2 sm:mt-2.5 text-sm sm:text-base text-white leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-2">
              <div
                className="flex items-center overflow-hidden w-full max-w-full sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px]"
                style={{
                  height: '36px',
                  background: '#ffffff',
                  borderRadius: '18px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-[18px] placeholder:text-gray-400"
                  style={{
                    paddingLeft: '12px',
                    paddingRight: '8px',
                    color: '#000000',
                    fontSize: '12px',
                    background: 'transparent',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-[18px] whitespace-nowrap px-4 min-w-[100px]"
                  style={{
                    background: '#15a36e',
                    color: '#ffffff',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    Subscribe
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>


      {/* Right Side Ellipse Gradient - Absolute positioned */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -right-[10%] -bottom-[20%] w-[80%] h-[180%] opacity-90">
          <img
            src="/assets/Images/icons/Ellipse.png"
            alt=""
            className="w-full h-full object-contain scale-150"
            style={{ transformOrigin: 'bottom right' }}
          />
        </div>
      </div>

    </footer >
  );
}