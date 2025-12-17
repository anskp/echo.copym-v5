import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 md:gap-12 items-start">
          {/* Left Side - Logo, Description */}
          <div className="flex flex-col -mt-8 md:-mt-10">
            <div className="flex items-center mb-1 sm:mb-1.5">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-12 w-auto sm:h-16 md:h-20 object-contain"
              />
            </div>
            <p className="text-white text-sm sm:text-base leading-relaxed mb-3 sm:mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Product Links */}
          <div className="flex flex-col ml-20 md:ml-40 pt-14 md:pt-10">
            <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              PRODUCT
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
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
          <div className="flex flex-col ml-12 md:ml-24 pt-14 md:pt-10">
            <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              COMPANY
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
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
          <div className="flex flex-col ml-4 md:ml-8 pt-14 md:pt-10">
            <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              SUPPORT
            </h3>
            <ul className="space-y-1 sm:space-y-1.5">
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
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
            <div>
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                JOIN OUR NEW LETTER
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-3">
              <div 
                className="flex items-center overflow-hidden w-full max-w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
                style={{
                  height: '44px',
                  background: '#ffffff',
                  borderRadius: '22px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-[22px] placeholder:text-gray-400"
                  style={{
                    paddingLeft: '16px',
                    paddingRight: '12px',
                    color: '#000000',
                    fontSize: '14px',
                    background: 'transparent',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-[22px] whitespace-nowrap px-6"
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

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
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
            <p className="text-white text-sm sm:text-base leading-relaxed mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with<br />
              our modern investment platform designed<br />
              for the next generation.
            </p>
          </div>

          {/* Navigation Links - 3 columns on mobile */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {/* Product Links */}
            <div>
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                PRODUCT
              </h3>
              <ul className="space-y-1 sm:space-y-1.5">
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
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                COMPANY
              </h3>
              <ul className="space-y-1 sm:space-y-1.5">
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
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e] mb-2 sm:mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                SUPPORT
              </h3>
              <ul className="space-y-1 sm:space-y-1.5">
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
        <div className="md:hidden mt-10 sm:mt-12">
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
            <div>
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                JOIN OUR NEW LETTER
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-3">
              <div 
                className="flex items-center overflow-hidden w-full max-w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
                style={{
                  height: '44px',
                  background: '#ffffff',
                  borderRadius: '22px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-[22px] placeholder:text-gray-400"
                  style={{
                    paddingLeft: '16px',
                    paddingRight: '12px',
                    color: '#000000',
                    fontSize: '14px',
                    background: 'transparent',
                    fontFamily: 'Palanquin, sans-serif',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-[22px] whitespace-nowrap px-6"
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

      {/* Large COPYM Text with Green Glow */}
      <div className="relative z-10 w-full overflow-hidden" style={{ minHeight: '400px', paddingTop: '60px' }}>
        {/* Green gradient background */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-full pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(21, 163, 110, 0.2) 0%, transparent 50%)',
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center select-none">
          <h1 
            className="text-white font-bold uppercase"
            style={{
              fontSize: 'clamp(140px, 28vw, 320px)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              lineHeight: '0.9',
              textShadow: '0 0 30px rgba(21, 163, 110, 0.9), 0 0 60px rgba(21, 163, 110, 0.7), 0 0 90px rgba(21, 163, 110, 0.5), 0 0 120px rgba(21, 163, 110, 0.3)',
              filter: 'drop-shadow(0 0 15px rgba(21, 163, 110, 0.6))',
            }}
          >
            COPYM
          </h1>
        </div>
      </div>
    </footer>
  );
}