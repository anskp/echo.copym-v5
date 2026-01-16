import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import ellipse from '../../../components/SVG/Ellipse.svg';

export default function AIInvestingSection() {
  return (
    <section className="w-full bg-background-white pt-12 sm:pt-12 md:pt-12 lg:pt-12 pb-24 sm:pb-32 md:pb-40 lg:pb-48 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative w-fit mx-auto mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">CORA-AI</span>
              <span className="text-black"> THAT INVESTS WITH YOU</span>
            </h2>
          </div>
          <p className="text-sm text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4 max-w-3xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            From real-time insights to smarter decisions, <br className="sm:hidden" />let AI guide your journey <br className="hidden sm:block" />to growing wealth effortlessly.
          </p>
        </div>

        <div className="flex flex-col items-center text-center space-y-10 md:space-y-12">

          {/* Item 1: The Blue Sphere */}
          <div className="relative w-full flex justify-center items-center mt-6 md:mt-8">
            {/* Background Ellipse for depth */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 translate-y-24 md:translate-y-32 lg:translate-y-40">
              <img
                src={ellipse}
                alt=""
                className="w-[450px] h-[450px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] opacity-60"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="translate-y-8 md:translate-y-10 lg:translate-y-12"
            >
              <img
                src="/assets/Images/cora-ai.png"
                alt="Cora AI"
                className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* Item 2: Cora AI Assistant Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-[1px] rounded-full"
            style={{
              background: 'linear-gradient(to right, #83D47E, #7DD1B2)'
            }}
          >
            <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white shadow-sm">
              <div className="relative">
                <HiSparkles className="text-[#15a36e] text-xl sm:text-2xl" />
                <HiSparkles className="text-[#15a36e] text-sm absolute -top-1 -right-1 opacity-70" />
              </div>
              <span className="text-black font-semibold text-lg tracking-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-[1.15] lg:leading-[1.1]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Invest Smarter. Chat with <br /> Cora AI !
            </h2>
          </motion.div>

        </div>
      </div>
    </section>
  );
}