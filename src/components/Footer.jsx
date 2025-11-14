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
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 items-start">
          {/* Brand */}
          <div className="flex flex-col -mt-3 space-y-6">
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
              title: 'COMPANY',
              links: ['About', 'Careers', 'Press', 'Blog', 'Contact'],
            },
            {
              title: 'SUPPORT',
              links: ['Help Centre', 'Security', 'Press', 'Terms', 'API'],
            },
          ].map((column) => (
            <div key={column.title} className="flex flex-col space-y-5">
              <h3 className="uppercase tracking-[0.18em] text-xs text-white font-semibold underline h-6 flex items-start">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-white">
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
          <div className="flex flex-col space-y-6">
            <div>
              <h3 className="uppercase tracking-[0.18em] text-xs text-[#15a36e] font-semibold h-6 flex items-start">
                JOIN OUR NEW LETTER
              </h3>
              <p className="mt-4 text-sm sm:text-base text-white leading-relaxed">
                To know more subscribe to our newsletter
              </p>
            </div>
            <form className="space-y-3">
              <div className="flex items-center rounded-lg overflow-hidden">
                <input
                  type="email"
                  required
                  placeholder="Enter your E-Mail Address"
                  className="flex-1 bg-white text-gray-900 placeholder:text-gray-500 text-sm sm:text-base px-5 py-3 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center bg-emerald-500 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-400 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} COPYM. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Massive watermark */}
      <div className="pointer-events-none absolute bottom-[-35%] left-1/2 -translate-x-1/2 opacity-100 select-none">
        <img
          src="/assets/copym/png/Header-copym.png"
          alt="COPYM"
          className="w-[1400px] h-[600px] object-contain"
        />
      </div>
    </footer>
  );
}