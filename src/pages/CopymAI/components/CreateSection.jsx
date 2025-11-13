import React from "react";
import { motion } from "framer-motion";

const CreateSection = () => {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-start items-center relative">
            {/* Background "CREATE" text */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-10"
              style={{
                fontSize: 'clamp(80px, 15vw, 200px)',
                fontWeight: 700,
                color: '#15a36e',
                letterSpacing: '0.05em',
                transform: 'translateX(-10%)'
              }}
            >
              CREATE
            </div>
            
            {/* Phone Mockup */}
            <div className="relative z-10">
              <div className="bg-white rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full rounded-[2.3rem] overflow-hidden">
                  <img 
                    src="/assets/Images/mobile-ads.png" 
                    alt="Create Account App Interface"
                    className="w-[200px] h-[420px] sm:w-[240px] sm:h-[500px] md:w-[280px] md:h-[580px] object-cover rounded-[2.3rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 uppercase tracking-tight dm-sans">
                <span className="text-[#15a36e]">CREATE</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl dm-sans">
                Create your account with CopyM with your verified proof ID's and Sign up to register your identity and proof of your assets.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSection;

