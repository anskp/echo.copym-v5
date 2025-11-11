import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Atmospheric glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-[#0b3b2c]" />
        <div
          className="absolute inset-x-0 bottom-[-35%] h-[70%] opacity-80"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, rgba(16,185,129,0.4), transparent 55%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-6">
            <img
              loading="lazy"
              src="assets/copym/png/Copym-01-1.png"
              alt="COPYM"
              className="h-10 w-auto sm:h-14 object-contain"
            />
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
            <div key={column.title} className="space-y-5">
              <h3 className="uppercase tracking-[0.18em] text-xs text-gray-400 font-semibold">
                {column.title}
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-gray-300">
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
          <div className="space-y-6">
            <div>
              <h3 className="uppercase tracking-[0.18em] text-xs text-gray-400 font-semibold">
                Join Our Newsletter
              </h3>
              <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                To know more subscribe to our weekly updates.
              </p>
            </div>
            <form className="space-y-3">
              <div className="flex items-center rounded-full bg-white/10 backdrop-blur border border-white/10 focus-within:border-emerald-400/70 transition">
                <input
                  type="email"
                  required
                  placeholder="Enter your e-mail address"
                  className="flex-1 bg-transparent placeholder:text-gray-400 text-sm sm:text-base text-white px-5 py-3 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mr-1 inline-flex items-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-400 transition"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
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
      <div className="pointer-events-none absolute bottom-[-6%] left-1/2 -translate-x-1/2 text-white/5 text-[clamp(6rem,18vw,14rem)] font-extrabold tracking-[0.15em] select-none">
        COPYM
      </div>
    </footer>
  );
}