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
      <section className="relative w-full min-h-[520px] sm:min-h-[600px] lg:min-h-[760px] overflow-hidden flex items-center">
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
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center sm:text-left max-w-3xl mx-auto sm:mx-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white uppercase mb-4 sm:mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              LET'S <span className="text-[#15a36e]">CONNECT</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-white/90 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Connect with our team for investor onboarding, asset tokenization, legal compliance, or technical integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Typeform Section */}
      <section id="typeform-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-3xl border border-[#7DD1B2]/60 bg-[#e6f2ed] shadow-[0_40px_120px_rgba(15,23,42,0.15)]"
          >
            {/* Green Header Bar with Heading */}
            <div className="flex h-14 sm:h-16 items-center justify-center bg-[#b3ffe3]/40 px-4 text-center">
              <h2
                className="m-0 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide uppercase text-black"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <span>READY TO </span>
                <span className="text-[#15a36e]">TOKENIZE </span>
                <span>YOUR ASSETS?</span>
              </h2>
            </div>

            {/* Separator Line */}
            <div className="h-px w-full bg-[#7DD1B2]" />

            {/* Black Content Area */}
            <div className="relative bg-black px-3 py-6 sm:px-6 sm:py-8 lg:px-10">
              <Typeform />
            </div>

            {/* Decorative Corners */}
            <svg
              width="50"
              height="18"
              viewBox="0 0 50 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="absolute top-0 right-0 hidden text-[#7DD1B2] sm:block"
            >
              <line x1="0" y1="2" x2="48" y2="2" stroke="currentColor" strokeWidth="3" />
              <line x1="48" y1="2" x2="48" y2="18" stroke="currentColor" strokeWidth="3" />
            </svg>

            <svg
              width="32"
              height="18"
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="absolute top-0 left-0 hidden text-[#7DD1B2] sm:block"
            >
              <line x1="32" y1="2" x2="2" y2="2" stroke="currentColor" strokeWidth="3" />
              <line x1="2" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="3" />
            </svg>

            <svg
              width="50"
              height="18"
              viewBox="0 0 50 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="absolute bottom-0 right-0 hidden text-[#7DD1B2] sm:block"
            >
              <line x1="0" y1="16" x2="48" y2="16" stroke="currentColor" strokeWidth="3" />
              <line x1="48" y1="16" x2="48" y2="0" stroke="currentColor" strokeWidth="3" />
            </svg>

            <svg
              width="32"
              height="18"
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="absolute bottom-0 left-0 hidden text-[#7DD1B2] sm:block"
            >
              <line x1="0" y1="16" x2="30" y2="16" stroke="currentColor" strokeWidth="3" />
              <line x1="0" y1="16" x2="0" y2="0" stroke="currentColor" strokeWidth="3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-black">CONTACT </span>
              <span className="text-[#15a36e]">US ?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-[2rem] bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                <img
                  src={Contact1Image}
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                PHONE NUMBER :
              </h3>
              <p className="text-sm sm:text-base opacity-90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                +91 1234567890
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-[2rem] bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                <img
                  src={Contact2Image}
                  alt="Email"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                E-MAIL ID:
              </h3>
              <p className="text-sm sm:text-base opacity-90 break-words" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                support@copym.xyz
              </p>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center rounded-[2rem] bg-black px-6 py-8 sm:px-8 sm:py-10 text-white shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-4 flex items-center justify-center">
                <img
                  src={Contact3Image}
                  alt="Address"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ADDRESS:
              </h3>
              <p className="text-sm sm:text-base opacity-90" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Indiranagar, Bangalore
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-black">FIND </span>
              <span className="text-[#15a36e]">US?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-[28px] font-normal text-black leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Visit our office or get in touch
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-[2rem] overflow-hidden border border-black/5 shadow-[0_30px_100px_rgba(15,23,42,0.2)]"
          >
            <div className="w-full aspect-[4/3] sm:aspect-[3/2] lg:aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6408!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Copym Office Location - Indiranagar, Bengaluru"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
