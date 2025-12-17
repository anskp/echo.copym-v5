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
        <div className="grid gap-8 sm:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start">
          {/* Brand */}
          <div className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
            <div className="h-9 flex items-start">
              <img
                loading="lazy"
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-10 w-auto sm:h-12 md:h-14 object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-white leading-relaxed max-w-sm" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Investing for outliers. Build wealth with our modern investment platform designed for the next generation.
            </p>
          </div>

          {[
            {
              title: 'PRODUCT',
              links: ['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'],
            },
            {
              title: 'COMPANY',
              links: ['About', 'Careers', 'Press', 'Blog', 'Contact'],
            },
            {
              title: 'SUPPORT',
              links: ['Help Centre', 'Security', 'Press', 'Terms', 'API'],
            },
          ].map((column) => (
            <div key={column.title} className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
              <h3 className="uppercase tracking-wide text-xs sm:text-sm text-[#15a36e] font-semibold pb-1 border-b border-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                {column.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-white">
                {column.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-[#15a36e] transition-colors duration-200" style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5 sm:col-span-2 lg:col-span-1">
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