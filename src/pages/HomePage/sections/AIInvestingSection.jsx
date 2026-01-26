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
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative w-fit mx-auto mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-white"> THAT INVESTS WITH YOU</span>
            </h2>
          </div>
          <p className="text-sm text-white font-normal leading-relaxed tracking-wide mt-3 sm:mt-4 max-w-3xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            From real-time insights to smarter decisions, <br className="sm:hidden" />let AI guide your journey <br className="hidden sm:block" />to growing wealth effortlessly.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-10 md:space-y-12">

          {/* Item 1: The Blue Sphere with Info Boxes */}
          <div className="relative w-full flex justify-center items-center mt-6 md:mt-8">
            {/* Background Ellipse for depth */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 translate-y-24 md:translate-y-32 lg:translate-y-40">
              <img
                src={ellipse}
                alt=""
                className="w-[450px] h-[450px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] opacity-60"
              />
            </div>

            {/* Left Info Box - Standardized Width */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute left-[0%] sm:left-[2%] lg:left-[6%] xl:left-[12%] top-[-5px] lg:top-[5px] z-20 w-[160px] sm:w-[210px] lg:w-[300px]"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] py-3 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-center">
                <p className="text-[9px] sm:text-[10px] lg:text-[11.5px] text-white font-medium leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  <span className="text-[#15a36e] font-bold">Cora AI</span> is a AI technology designed by <span className="font-bold">CopyM</span> <br /> to make better investments
                </p>
              </div>
            </motion.div>

            {/* Central Visual - Restored Size and Translation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative z-10 translate-y-8 md:translate-y-10 lg:translate-y-12"
            >
              <Image
                src="/assets/Images/cora-ai.png"
                alt="Cora AI"
                className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] h-auto object-contain"
              />
            </motion.div>

            {/* Right Info Box - Standardized Width */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute right-[-2%] sm:right-[0%] lg:right-[5%] xl:right-[10%] bottom-[-40px] lg:bottom-[-20px] z-20 w-[160px] sm:w-[210px] lg:w-[300px]"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-[2rem] py-3 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] text-center">
                <p className="text-[9px] sm:text-[10px] lg:text-[11.5px] text-white font-medium leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  <span className="text-[#15a36e] font-bold">AI</span> that predicts trends, analyzes data, <br /> and guides <span className="text-[#15a36e] font-bold">smarter investments</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Item 2: Cora AI Assistant Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-r from-[#179572] via-[#2A867F] to-[#236594] bg-clip-padding p-[1px]"
          >
            <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-[2rem] bg-black/20 backdrop-blur-xl shadow-sm">
              <div className="relative">
                {/* Custom Sharp Sparkle SVG */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white absolute -top-1 -right-1 opacity-70">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Cora AI Assistant
              </span>
            </div>
          </motion.div>

          {/* Item 3: Bold Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-white leading-[1.15] lg:leading-[1.1]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Invest Smarter. Chat with <br /> Cora AI !
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}