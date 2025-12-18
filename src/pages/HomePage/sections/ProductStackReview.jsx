import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import productStackAnimation from '../../../components/lotties/prodctstackreview.json';

const ProductStackReview = () => {
  const headingRef = useRef(null);
  const [headingLeft, setHeadingLeft] = useState(0);
  const [containerLeft, setContainerLeft] = useState(0);

  useLayoutEffect(() => {
    // Find the left offset of the heading relative to the containing .max-w-7xl (the section content area)
    if (headingRef.current) {
      const headingRect = headingRef.current.getBoundingClientRect();
      // Find the closest parent with max-w-7xl class (or the section's inner container)
      let ancestor = headingRef.current.parentElement;
      let found = false;
      while (ancestor && !found) {
        if (
          ancestor.classList.contains('max-w-7xl')
        ) {
          found = true;
          break;
        }
        ancestor = ancestor.parentElement;
      }
      const containerRect = ancestor
        ? ancestor.getBoundingClientRect()
        : { left: 0 };
      setHeadingLeft(headingRect.left);
      setContainerLeft(containerRect.left);
    }
  }, []);

  // Calculate the margin-left for the Lottie wrapper so its string starts exactly below heading start
  const lottieLeftOffset =
    headingLeft && containerLeft
      ? Math.max(0, headingLeft - containerLeft)
      : 0;

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
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
              marginTop: '-64px',
              marginLeft: `${lottieLeftOffset}px`,
              transition: 'margin-left 0.35s cubic-bezier(0.4,0,0.2,1)' // smooth visual on mount/resize
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
