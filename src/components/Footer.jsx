import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16">
        <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-3 lg:grid-cols-5 items-start">
          {/* Brand */}
          <div className="flex flex-col -mt-3 space-y-3 sm:space-y-4 md:space-y-6">
            <div className="h-9 flex items-start">
            <img
              loading="lazy"
                src="assets/copym/png/Copym-02-1.png"
              alt="COPYM"
                className="h-10  w-auto sm:h-14 object-contain"
            />
            </div>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-sm">
              Investing for outliers. Build wealth with our modern investment platform designed for the next generation.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              {[
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaLinkedin, label: 'LinkedIn' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaGithub, label: 'GitHub' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: 'PRODUCT',
              links: ['Stock', "ETF's", 'Crypto', 'Options', 'Retirement'],
            },
            {
              title: 'COMAPNY',
              links: ['About', 'Careers', 'Press', 'Blog', 'Contact'],
            },
            {
              title: 'SUPPORT',
              links: ['Help Centre', 'Security', 'Press', 'Terms', 'API'],
            },
          ].map((column) => (
            <div key={column.title} className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
              <h3 className="uppercase tracking-[0.18em] text-xs text-[#15a36e] font-semibold h-6 flex items-start border-b border-[#15a36e] pb-1">
                {column.title}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-white">
                {column.links.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-emerald-400 transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
            <div>
              <h3 className="uppercase tracking-[0.18em] text-xs text-[#15a36e] font-semibold h-6 flex items-start border-b border-[#15a36e] pb-1">
                JOIN OUR NEW LETTER
              </h3>
              <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-white leading-relaxed">
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-3">
              <div 
                className="flex items-center overflow-hidden w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]"
                style={{
                  height: '40px',
                  background: '#fffdfd',
                  borderRadius: '20px',
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 h-full focus:outline-none rounded-l-lg placeholder:text-[#c0b5b5]"
                  style={{
                    paddingLeft: '14px',
                    paddingRight: '8px',
                    color: '#000000',
                    fontSize: '13px',
                    background: 'transparent',
                  }}
                />
                <button
                  type="submit"
                  className="h-full flex items-center justify-center hover:opacity-90 transition rounded-r-lg whitespace-nowrap"
                  style={{
                    minWidth: '120px',
                    paddingLeft: '16px',
                    paddingRight: '50px',
                    background: '#15a36e',
                    marginLeft: '-55px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#fffdfd',
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