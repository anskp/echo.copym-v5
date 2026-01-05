import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/assets/lottie/copymelite.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center">

      {/* Background Gradient Spot for depth */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-green-900/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 uppercase tracking-tight" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <span className="text-white block mb-2">EXPLORE THE</span>
            <span className="text-white block mb-2">POSSIBILITIES OF</span>
            <span className="text-[#10b981]">CROSSCHAIN INTELLIGENCE</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
            Our AI-driven marketplace connects asset owners, investors and infrastructure partners in one transparent ecosystem. Experience the future of finance with CopyM, the smartest tokenization ecosystem.
          </p>
        </motion.div>

        {/* Right Side: Lottie Animation */}
        <div className="relative h-full w-full flex justify-center lg:justify-end items-center">
          {animationData && (
            <div className="w-full max-w-2xl transform scale-110 sm:scale-125 lg:scale-150 origin-center lg:origin-right opacity-90">
              <Lottie animationData={animationData} loop={true} />
            </div>
          )}
        </div>

      </div>
    </section>
  );
}