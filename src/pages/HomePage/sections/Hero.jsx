import React, { useState } from 'react';
import { GiCrossedSwords } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* ====== BACKGROUND VIDEO ====== */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ minHeight: '100vh' }}
        >
          <source src="/assets/videos/hero section video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* ====== HERO CONTENT - RIGHT BOTTOM ====== */}
      <div className="relative z-10 w-full min-h-screen flex items-end justify-end px-4 sm:px-6 lg:px-8 xl:px-12 pb-8 sm:pb-12 lg:pb-10 xl:pb-5">
        <div className="max-w-lg sm:max-w-xl w-full text-right">
          {/* ====== HEADLINE ====== */}
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-start font-bold leading-tight text-white mb-3 sm:mb-4 uppercase"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            UNLOCK EXCLUSIVE{' '}
            <span className="text-emerald-500">ASSETS,</span>
            <br />
            <span className="text-emerald-500">INVEST </span>
            WITH CONFIDENCE
          </h1>

          {/* ====== DESCRIPTION ====== */}
          <p
            className="text-xs sm:text-sm md:text-base text-start text-white opacity-90 leading-relaxed mb-4 sm:mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Seamless on-chain investment in real estate, <br className="hidden sm:block"/>commodities, carbon credits and luxury <br className="hidden sm:block"/> assets.
            No gas fees, no native token required.
          </p>

          {/* ====== BUTTONS (SIDE BY SIDE) ====== */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4">
            <Link
              to="/marketplace"
              className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md w-full sm:w-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              START INVESTING
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            <button
              onClick={() => setVideoOpen(true)}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              WATCH DEMO
            </button>
          </div>
        </div>
      </div>

      {/* ====== VIDEO MODAL ====== */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setVideoOpen(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <GiCrossedSwords size={32} />
            </button>
            <video
              src="/assets/videos/how-it-works.mp4"
              controls
              autoPlay
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
