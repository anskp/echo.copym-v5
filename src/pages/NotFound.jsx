import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <Helmet>
        <title>404 - Page Not Found | CopyM</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to CopyM's tokenization platform." />
        <meta name="robots" content="noindex" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="404 - Page Not Found | CopyM" />
        <meta property="og:description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 Number */}
        <h1 className="text-[8rem] sm:text-[10rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#15a36e] to-emerald-600 mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="group inline-flex items-center justify-between min-w-[140px] sm:min-w-[160px] bg-[#15a36e] border border-[#15a36e] hover:bg-[#12a062] rounded-full p-1 transition-all duration-300"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="pl-4 pr-2 text-white font-semibold text-sm sm:text-base">
              Go Home
            </span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
              <svg className="w-4 h-4 text-[#15a36e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </Link>

          <Link
            to="/blog"
            className="px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold text-sm sm:text-base hover:border-[#15a36e] hover:text-[#15a36e] transition-all duration-300"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Read Blog
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
