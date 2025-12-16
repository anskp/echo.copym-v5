import React from 'react';
import Lottie from 'lottie-react';
import productStackAnimation from '../../../components/lotties/prodctstackreview.json';

const ProductStackReview = () => {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        {/* Lottie Animation */}
        <div className="w-full flex justify-start items-center overflow-visible">
          <div className="w-full" style={{ transform: 'scale(1.2)', transformOrigin: 'left center' }}>
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


