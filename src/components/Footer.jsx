import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-10 sm:pt-12 md:pt-16 pb-12 sm:pb-24">
        {/* Desktop Layout (Large Screens) */}
        <div className="hidden lg:grid grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr_1.8fr] gap-x-12 items-start">
          {/* Left Side - Logo, Description */}
          <div className="flex flex-col">
            <div className="flex items-center mb-0">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white text-base leading-relaxed translate-x-1 -mt-2 mb-2.5" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col mt-5">
            <div className="relative w-fit mb-3">
              <h3 className="uppercase tracking-wide text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                PRODUCT
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-2">
              {['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col mt-5">
            <div className="relative w-fit mb-3">
              <h3 className="uppercase tracking-wide text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                COMPANY
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-2">
              {['About', 'Careers', 'Press', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col mt-5">
            <div className="relative w-fit mb-3">
              <h3 className="uppercase tracking-wide text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                SUPPORT
              </h3>
              <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
            </div>
            <ul className="space-y-2">
              {['Help Centre', 'Security', 'Press', 'Terms', 'API'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white hover:text-[#15a36e] text-base transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section - Right side */}
          <div className="flex flex-col space-y-3 mt-5">
            <div>
              <div className="relative w-fit mb-3">
                <h3 className="uppercase tracking-wide text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  JOIN OUR NEWS LETTER
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <p className="mt-2.5 text-base text-white leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-2">
              <div
                className="flex items-center overflow-hidden w-full max-w-[360px]"
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

        {/* Mobile & Tablet Layout (<Large Screens) */}
        <div className="lg:hidden space-y-8 mt-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col">
            <div className="flex items-center mb-1">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Navigation Links - 3 columns */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8">
            {/* Product Links */}
            <div>
              <div className="relative w-fit mb-2">
                <h3 className="uppercase tracking-wide text-[10px] sm:text-xs text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  PRODUCT
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-1">
                {['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-[10px] sm:text-sm transition-colors whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <div className="relative w-fit mb-2">
                <h3 className="uppercase tracking-wide text-[10px] sm:text-xs text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  COMPANY
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-1">
                {['About', 'Careers', 'Press', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-[10px] sm:text-sm transition-colors whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <div className="relative w-fit mb-2">
                <h3 className="uppercase tracking-wide text-[10px] sm:text-xs text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  SUPPORT
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <ul className="space-y-1">
                {['Help Centre', 'Security', 'Press', 'Terms', 'API'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white hover:text-[#15a36e] text-[10px] sm:text-sm transition-colors whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section - Mobile & Tablet only */}
        <div className="lg:hidden mt-8">
          <div className="flex flex-col space-y-3">
            <div>
              <div className="relative w-fit mb-2">
                <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  JOIN OUR NEWS LETTER
                </h3>
                <div className="absolute bottom-0 left-0 bg-[#15a36e]" style={{ width: '100%', height: '1px' }}></div>
              </div>
              <p className="mt-2 text-sm text-white leading-relaxed whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-2 w-full">
              <div
                className="flex items-center overflow-hidden w-full max-w-[400px]"
                style={{
                  height: '40px',
                  background: '#ffffff',
                  borderRadius: '20px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-[20px] placeholder:text-gray-400"
                  style={{
                    paddingLeft: '16px',
                    paddingRight: '8px',
                    color: '#000000',
                    fontSize: '14px',
                    background: 'transparent',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-[20px] whitespace-nowrap px-6"
                  style={{
                    background: '#15a36e',
                    color: '#ffffff',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
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
        {/* Zoomed in from right bottom */}
        <div className="absolute right-0 bottom-0 w-[120%] sm:w-[90%] md:w-[80%] lg:w-[50%] translate-x-[20%] translate-y-[20%] opacity-80 md:opacity-90 origin-bottom-right transform scale-150">
          <img
            src="/assets/Images/icons/Ellipse.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>

    </footer >
  );
}