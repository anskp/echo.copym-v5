import React from 'react';
import { motion } from 'framer-motion';
import Typeform from './Typeform';
// Removed old contact image imports to use public assets directly


const Contact = () => {
  return (
    <div className="min-h-screen bg-white">


      {/* Typeform Section */}
      <section id="typeform-section" className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-left mb-6 sm:mb-8 lg:mb-10">
            <div className="relative w-fit mb-3 sm:mb-4">
              <h2
                className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                <span className="text-black">READY TO </span>
                <span className="text-[#15a36e]">TOKENIZE </span>
                <span className="text-black">YOUR ASSETS?</span>
              </h2>
              <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
            </div>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
          >
            {/* Typeform Container */}
            <div className="relative bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
              <Typeform />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section - Combined with Map */}
      <section className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-left mb-6 sm:mb-8 lg:mb-10">
            <div className="relative w-fit mb-3 sm:mb-4">
              <h2
                className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                <span className="text-[#15a36e]">CONTACT </span>
                <span className="text-black">US</span>
              </h2>
              <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
            </div>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              Reach out to us through any of these channels. We're here to help.
            </p>
          </div>

          {/* Two Column Layout: Cards Left, Map Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column: Email and Address Cards */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {/* Email Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center rounded-2xl bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.3)] transition-shadow duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/assets/Images/email.png"
                    alt="Email"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  E-MAIL ID
                </h3>
                <p className="text-sm sm:text-base opacity-90 break-words" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  support@copym.xyz
                </p>
              </motion.div>

              {/* Address Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center rounded-2xl bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.3)] transition-shadow duration-300"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                  <img
                    src="/assets/Images/address.png"
                    alt="Address"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  ADDRESS
                </h3>
                <p className="text-sm sm:text-base opacity-90" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Smart Station, First Floor, Incubator Building, Masdar City, Abu Dhabi, UAE.
                </p>
              </motion.div>
            </div>

            {/* Right Column: Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.1)] h-full min-h-[500px] lg:min-h-[600px]"
            >
              {/* Map Shadow Background */}
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
                style={{
                  backgroundImage: `url('/assets/Images/Map-shadow.png')`,
                }}
              ></div>

              <div className="relative z-10 w-full h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14529.56708688439!2d54.6152862!3d24.4326555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e458af42657e9%3A0x67586558872e4244!2sMasdar%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1715674845000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Copym Office Location - Masdar City, Abu Dhabi"
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
