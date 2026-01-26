import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import Image from '../../../components/Image'; // Import our AVIF-compatible Image component
import ellipse from '../../../components/SVG/mixedellipse.svg';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-black pt-12 sm:pt-12 md:pt-12 lg:pt-12 pb-24 sm:pb-32 md:pb-40 lg:pb-48 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8">
          <div className="relative w-fit mx-auto mb-2 sm:mb-3">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-white"> THAT INVESTS WITH YOU</span>
            </h2>
          </div>
          <p className="text-sm text-white font-normal leading-relaxed tracking-wide mt-2 sm:mt-3 max-w-3xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            From real-time insights to smarter decisions, <br className="sm:hidden" />let AI guide your journey <br className="hidden sm:block" />to growing wealth effortlessly.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">

          {/* Item 1: The Blue Sphere with Info Boxes */}
          <div className="relative w-full flex justify-center items-center -mt-4 md:-mt-6">
            {/* Background Ellipse for depth */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 translate-y-12 md:translate-y-16 lg:translate-y-20">
              <img
                src={ellipse}
                alt=""
                className="w-[350px] h-[350px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] opacity-60"
              />
            </div>

            {/* Left Info Box - Restored Pill Style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-[-1%] sm:left-[1%] lg:left-[4%] xl:left-[7%] top-[calc(50%+20px)] md:top-[calc(50%+24px)] lg:top-[calc(50%+28px)] -translate-y-1/2 z-20 w-[160px] sm:w-[210px] lg:w-[280px]"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] py-3 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-center">
                <p className="text-[10px] sm:text-[11px] lg:text-[13px] text-white font-medium leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  <span className="text-[#15a36e] font-bold">Cora AI</span> is a AI technology designed by <span className="font-bold">CopyM</span> to make better investments.
                </p>
              </div>
            </motion.div>

            {/* Central Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 translate-y-32 md:translate-y-36 lg:translate-y-40"
            >
              <Image
                src="/assets/Images/cora-ai.png"
                alt="Cora AI"
                className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[420px] h-auto object-contain"
              />
            </motion.div>

            {/* Right Info Box - Restored Pill Style */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute right-[0%] sm:right-[2%] lg:right-[5%] xl:right-[8%] top-[calc(50%+20px)] md:top-[calc(50%+24px)] lg:top-[calc(50%+28px)] -translate-y-1/2 z-20 w-[160px] sm:w-[210px] lg:w-[280px]"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] py-3 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-center">
                <p className="text-[10px] sm:text-[11px] lg:text-[13px] text-white font-medium leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  <span className="text-[#15a36e] font-bold">AI</span> that predicts trends, analyzes data, and guides <span className="text-[#15a36e] font-bold">smarter investments</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Item 2: Bold Heading (Moved above button) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl pt-4 sm:pt-6 md:pt-8 lg:pt-10"
          >
            <h2 className="text-xl md:text-2xl lg:text-[24px] font-bold text-white leading-tight tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Invest Smarter. Chat with <br className="hidden md:block" /> Cora AI
            </h2>
          </motion.div>

          {/* Item 3: Cora AI Assistant Badge (Moved below heading) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-r from-[#179572] via-[#2A867F] to-[#236594] bg-clip-padding p-[1px] cursor-pointer hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-2.5 px-8 py-3 rounded-[2rem] bg-black/40 backdrop-blur-xl shadow-sm">
              <div className="relative">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <span className="text-white font-medium text-base tracking-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Cora AI Assistant
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}