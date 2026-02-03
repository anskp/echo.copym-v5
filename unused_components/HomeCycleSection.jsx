import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import forInvestorsVideo from '../../../components/Videos/forinvestors.mp4';
import forAssetsOwnersVideo from '../../../components/Videos/forassetsowners.mp4';

export default function HomeCycleSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    {
      id: 1,
      title: 'For Asset Owners',
      video: forAssetsOwnersVideo,
    },
    {
      id: 2,
      title: 'For Investors',
      video: forInvestorsVideo,
    }
  ];

  const goToSlide = (index) => {
    setCurrentVideoIndex(index);
  };

  const goToNext = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const goToPrevious = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-black">HOW IT </span>
            <span className="text-[#15a36e]">WORKS</span>
          </h2>
          <div className="w-24 sm:w-32 h-0.5 bg-black mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base md:text-lg text-black" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            How Copym works - for issuers and investors
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative w-full">
          {/* Video Container */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVideoIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    goToNext();
                  } else if (swipe > 10000) {
                    goToPrevious();
                  }
                }}
                className="w-full cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full bg-black rounded-lg overflow-hidden">
                  <video
                    key={videos[currentVideoIndex].id}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '600px' }}
                  >
                    <source src={videos[currentVideoIndex].video} type="video/mp4" />
                  </video>
                  
                  {/* Video Title Overlay */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2">
                      <h3 className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {videos[currentVideoIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200"
              aria-label="Previous video"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200"
              aria-label="Next video"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-4 sm:mt-6">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentVideoIndex
                    ? 'bg-[#15a36e] w-8 h-2'
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
