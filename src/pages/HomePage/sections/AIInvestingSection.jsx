import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { useEffect } from 'react';
import Image from '../../../components/Image'; // Import our AVIF-compatible Image component
import ellipse from '../../../components/SVG/mixedellipse.svg';


export default function AIInvestingSection() {
  useEffect(() => {
    // MOBILE-ONLY: Dynamic adjustments for AI Investing section only
    if (window.innerWidth <= 768) {
      const adjustForMobile = () => {
        const centralContainer = document.querySelector('.central-container');
        if (centralContainer) {
          // Adjust scale based on screen width
          const screenWidth = window.innerWidth;
          const scale = Math.min(screenWidth / 375, 1); // 375px as baseline
          centralContainer.style.transform = `scale(${Math.max(scale, 0.6)})`;
        }

        // Ensure proper touch targets for mobile
        const infoBoxes = document.querySelectorAll('.info-box');
        infoBoxes.forEach(box => {
          const rect = box.getBoundingClientRect();
          if (rect.width < 100) { // Minimum touch area for info boxes
            box.style.minWidth = '100px';
          }
        });
      };

      adjustForMobile();

      // Listen for window resize to maintain mobile adjustments
      const handleResize = () => {
        if (window.innerWidth <= 768) {
          adjustForMobile();
        } else {
          // Reset style for desktop if needed
          const centralContainer = document.querySelector('.central-container');
          if (centralContainer) {
            centralContainer.style.transform = '';
          }
        }
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <section className="ai-investing-section w-full bg-black pt-12 sm:pt-12 md:pt-12 lg:pt-12 pb-12 sm:pb-16 md:pb-20 lg:pb-24 overflow-x-hidden relative">
      <style>{`
        /* MOBILE-ONLY: AI Investing Section */
        @media (max-width: 768px) {
          .ai-investing-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
          }
          
          .ai-investing-title {
            font-size: clamp(1.2rem, 4vw, 1.8rem) !important;
            margin-bottom: 1rem;
          }
          
          .ai-investing-subtitle {
            font-size: clamp(0.8rem, 3vw, 1rem) !important;
            line-height: 1.4;
            margin-bottom: 1.5rem;
          }

          .central-container {
            margin-top: -1rem;
            min-height: 260px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .info-box {
            width: clamp(130px, 35vw, 180px);
            padding: 0.6rem 0.8rem;
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 40;
          }

          .info-box-text {
            font-size: clamp(7px, 2.2vw, 10px) !important;
            line-height: 1.3;
          }

          .cora-ai-badge {
            padding: 0.4rem 0.8rem;
            font-size: clamp(0.7rem, 2.5vw, 0.9rem);
          }

          .info-box-left {
            left: clamp(-2%, 1vw, 4%) !important;
          }

          .info-box-right {
            right: clamp(-2%, 1vw, 4%) !important;
          }

          .central-visual {
            transform: none !important;
            position: relative;
            z-index: 30;
          }

          .central-image {
            width: clamp(160px, 40vw, 240px) !important;
            height: auto !important;
            transform: none !important;
          }

          .ai-investing-bottom-heading {
            padding-top: 1.5rem !important;
          }
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="relative w-fit mx-auto mb-2 sm:mb-3">
            <h2 className="ai-investing-title inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-white"> THAT INVESTS WITH YOU</span>
            </h2>
          </div>
          <p className="ai-investing-subtitle text-sm text-white font-normal leading-relaxed tracking-wide mt-3 sm:mt-4 max-w-3xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            From real-time insights to smarter decisions, <br className="sm:hidden" />let AI guide your journey <br className="hidden sm:block" />to growing wealth effortlessly.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">

          {/* Item 1: The Blue Sphere with Info Boxes */}
          <div className="central-container relative w-full flex justify-center items-center -mt-4 md:-mt-6">
            {/* Background Ellipse for depth */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 translate-y-12 md:translate-y-16 lg:translate-y-20">
              <img
                src={ellipse}
                alt=""
                className="w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] opacity-60"
              />
            </div>

            {/* Left Info Box - Text Only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="info-box info-box-left absolute left-[2%] sm:left-[2%] lg:left-[4%] xl:left-[8%] top-[calc(50%+15px)] md:top-[calc(50%+20px)] lg:top-[calc(50%+25px)] -translate-y-1/2 z-20 w-[110px] sm:w-[240px] lg:w-[320px] flex items-center justify-end"
            >
              <p className="info-box-text text-[7px] sm:text-[11px] lg:text-[13px] text-white font-medium leading-relaxed text-right pr-1 sm:pr-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-[#15a36e] font-bold">Cora AI</span> is a AI technology designed by <span className="font-bold">CopyM</span> to make better investments.
              </p>
              {/* Left Connector Line */}
              <img
                src="/assets/svg/leftvector.svg"
                alt=""
                className="w-[40px] sm:w-[80px] lg:w-[100px] h-auto flex-shrink-0 translate-y-1.5"
              />
            </motion.div>

            {/* Central Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="central-visual relative z-30 translate-y-40 md:translate-y-48 lg:translate-y-56"
            >
              <Image
                src="/assets/Images/cora-ai.avif"
                alt="Cora AI"
                className="central-image w-[180px] sm:w-[280px] md:w-[340px] lg:w-[420px] h-auto object-contain translate-y-12"
              />
            </motion.div>

            {/* Right Info Box - Restored Pill Style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="info-box info-box-right absolute right-[2%] sm:right-[2%] lg:right-[4%] xl:right-[8%] top-[calc(50%+15px)] md:top-[calc(50%+20px)] lg:top-[calc(50%+25px)] -translate-y-1/2 z-20 w-[110px] sm:w-[240px] lg:w-[320px] flex items-center justify-start"
            >
              {/* Right Connector Line */}
              <img
                src="/assets/svg/rightvectorr.svg"
                alt=""
                className="w-[40px] sm:w-[80px] lg:w-[100px] h-auto flex-shrink-0 translate-y-1.5"
              />
              <p className="info-box-text text-[7px] sm:text-[11px] lg:text-[13px] text-white font-medium leading-relaxed text-left pl-1 sm:pl-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-[#15a36e] font-bold">AI</span> that predicts trends, analyzes data, and guides <span className="text-[#15a36e] font-bold">smarter investments</span>
              </p>
            </motion.div>
          </div>

          {/* Item 2: Bold Heading (Moved above button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="ai-investing-bottom-heading max-w-4xl pt-12 sm:pt-6 md:pt-8 lg:pt-10"
          >
            <h2 className="text-base sm:text-lg md:text-xl lg:text-[24px] font-bold text-white leading-tight tracking-wide text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Invest Smarter. Chat with <br className="hidden md:block" /> Cora AI
            </h2>
          </motion.div>

          {/* Item 3: Cora AI Assistant Badge (Moved below heading) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="cora-ai-badge rounded-[2rem] bg-gradient-to-r from-[#179572] via-[#2A867F] to-[#236594] bg-clip-padding p-[1px] cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 p-1 sm:px-8 sm:py-3 min-w-[120px] sm:min-w-fit rounded-[2rem] bg-black/40 backdrop-blur-xl shadow-sm">
              <div className="relative">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-white sm:w-5 sm:h-5">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <span className="text-white font-medium text-xs sm:text-base tracking-tight pl-3 pr-2 sm:p-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Cora AI Assistant
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}