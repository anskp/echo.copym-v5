import React from 'react';
import { motion } from 'framer-motion';
import Typeform from './Typeform';
import Contact1Image from '../../components/images/Contact1.png';
import Contact2Image from '../../components/images/Contact2.png';
import Contact3Image from '../../components/images/Conatct3.png';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Video Background */}
      <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:h-[90vh] xl:h-screen overflow-hidden flex items-center">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/About-us1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-3xl"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 uppercase tracking-tight">
              <span className="text-white block mb-1">LET'S </span>
              <span className="text-[#15a36e] block">CONNECT</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Connect with our team for investor onboarding, asset tokenization, legal compliance, or technical integration.
            </p>
          </motion.div>
        </div>
      </section>

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
              style={{ fontFamily: 'DM Sans, sans-serif' }}
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

      {/* Contact Us Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-2xl bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] hover:shadow-[0_30px_80px_rgba(15,23,42,0.3)] transition-shadow duration-300"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                <img
                  src={Contact1Image}
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                PHONE NUMBER
              </h3>
              <p className="text-sm sm:text-base opacity-90" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                +91 1234567890
              </p>
            </motion.div>

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
                  src={Contact2Image}
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
                  src={Contact3Image}
                  alt="Address"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                ADDRESS
              </h3>
              <p className="text-sm sm:text-base opacity-90" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Indiranagar, Bangalore
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Section Header */}
          <div className="text-left mb-6 sm:mb-8 lg:mb-10">
            <div className="relative w-fit mb-3 sm:mb-4">
              <h2
                className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                <span className="text-black">FIND </span>
                <span className="text-[#15a36e]">US</span>
              </h2>
              <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
            </div>
            <p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Visit our office or get in touch with our team.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full rounded-lg overflow-hidden border border-gray-200 shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
          >
            {/* Map Shadow Background */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: `url('/assets/Images/Map-shadow.png')`,
              }}
            ></div>

            <div className="relative z-10 w-full h-[55vh] sm:h-[60vh] lg:h-[70vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6408!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copym Office Location - Indiranagar, Bengaluru"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
