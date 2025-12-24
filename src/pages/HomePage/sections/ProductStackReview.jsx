import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import productStackAnimation from '../../../components/lotties/prodctstackreview.json';

const ProductStackReview = () => {
  const headingRef = useRef(null);
  const [headingLeft, setHeadingLeft] = useState(0);
  const [containerLeft, setContainerLeft] = useState(0);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full bg-white pt-0 pb-6 sm:pb-8 md:pb-10 lg:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-6 sm:mb-8 md:mb-10"
        >
          <div className="relative w-fit" ref={headingRef}>
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e]">PRODUCT </span>
              <span className="text-black">STACK REVIEW</span>
            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            One platform. Multiple products. Full lifecycle tokenization.
          </p>
        </motion.div>
        {/* Lottie Animation */}
        <div className="w-full flex justify-start items-center overflow-visible">
          <div
            className="w-full"
            style={{
              transformOrigin: 'left center',
              marginTop: isDesktop ? '-180px' : '-80px',
              marginLeft: isDesktop ? '-120px' : '0px',
              transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)'
            }}
          >
            <Lottie
              animationData={productStackAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStackReview;
