import React from 'react';
import { motion } from 'framer-motion';
import Typeform from './Typeform';
import Contact1Image from '../../components/images/Contact1.png';
import Contact2Image from '../../components/images/Contact2.png';
import Contact3Image from '../../components/images/Conatct3.png';

// Custom Icon Components
const EnvelopeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Full Video Background */}
      <section className="relative w-full h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen lg:min-h-[800px] overflow-hidden">
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
        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white uppercase mb-4 sm:mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              LET'S <span className="text-[#15a36e]">CONNECT</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[25px] font-normal text-white leading-relaxed max-w-4xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Connect with our team for investor onboarding,<br/> asset tokenization, legal compliance, or technical integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Typeform Section */}
      <section id="typeform-section" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ 
              position: 'relative',
              background: '#e6f2ed',
              borderRadius: '0px',
              overflow: 'hidden',
              width: '100%'
            }}
          >
            {/* Green Header Bar with Heading */}
            <div style={{ 
              height: '60px', 
              background: 'rgba(179,255,227,0.4)',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <h2 style={{ 
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 'clamp(16px, 2.5vw, 24px)', 
                fontWeight: 600, 
                textAlign: 'center', 
                color: '#000', 
                margin: '0'
              }}>TOKENIZATION APPLICATION FORM</h2>
            </div>

            {/* Separator Line */}
            <div style={{
              height: '1px',
              background: '#7DD1B2',
              width: '100%'
            }}></div>

            {/* Grey Content Area */}
            <div style={{ 
              padding: '20px 24px', 
              background: '#f0f5f3',
              position: 'relative'
            }}>
              <Typeform />
            </div>

            {/* L-shaped Corner Brackets - Top Right */}
            <svg width="50" height="18" viewBox="0 0 50 18" fill="none"
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ position: 'absolute', top: '0', right: '0', zIndex: 1 }}>
              <line x1="0" y1="2" x2="48" y2="2" stroke="#7DD1B2" strokeWidth="3" />
              <line x1="48" y1="2" x2="48" y2="18" stroke="#7DD1B2" strokeWidth="3" />
            </svg>

            {/* L-shaped Corner Brackets - Top Left */}
            <svg width="32" height="18" viewBox="0 0 32 18" fill="none"
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ position: 'absolute', top: '0', left: '0', zIndex: 1 }}>
              <line x1="32" y1="2" x2="2" y2="2" stroke="#7DD1B2" strokeWidth="3" />
              <line x1="2" y1="2" x2="2" y2="18" stroke="#7DD1B2" strokeWidth="3" />
            </svg>

            {/* L-shaped Corner Brackets - Bottom Right */}
            <svg width="50" height="18" viewBox="0 0 50 18" fill="none"
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: '0', right: '0', zIndex: 1 }}>
              <line x1="0" y1="16" x2="48" y2="16" stroke="#7DD1B2" strokeWidth="3" />
              <line x1="48" y1="16" x2="48" y2="0" stroke="#7DD1B2" strokeWidth="3" />
            </svg>

            {/* L-shaped Corner Brackets - Bottom Left */}
            <svg width="32" height="18" viewBox="0 0 32 18" fill="none"
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              style={{ position: 'absolute', bottom: '0', left: '0', zIndex: 1 }}>
              <line x1="0" y1="16" x2="30" y2="16" stroke="#7DD1B2" strokeWidth="3" />
              <line x1="0" y1="16" x2="0" y2="0" stroke="#7DD1B2" strokeWidth="3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase mb-3 sm:mb-4 md:mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <span className="text-black">CONTACT </span>
              <span className="text-[#15a36e]">US ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-6 text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={Contact1Image}
                  alt="Phone"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                PHONE NUMBER :
              </h3>
              <p className="text-white text-sm sm:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                +91 1234567890
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-6 text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={Contact2Image}
                  alt="Email"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                E-MAIL ID:
              </h3>
              <p className="text-white text-sm sm:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                support@copym.xyz
              </p>
            </motion.div>

            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] px-3 sm:px-4 lg:px-5 py-4 sm:py-5 lg:py-6 text-center"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={Contact3Image}
                  alt="Address"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                ADDRESS:
              </h3>
              <p className="text-white text-sm sm:text-base" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                IndiraNnagar , Bangalore
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
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9 h-64 sm:h-80 lg:h-96">
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
