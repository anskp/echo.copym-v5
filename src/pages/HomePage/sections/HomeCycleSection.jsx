import React, { useState, useEffect } from 'react';
import HomeCycle1 from '../../../components/SVG/HomeCycle1.svg';
import HomeCycle2 from '../../../components/SVG/HomeCycle2.svg';
import HomeCycle3 from '../../../components/SVG/HomeCycle3.svg';
import HomeCycle4 from '../../../components/SVG/HomeCycle4.svg';

export default function HomeCycleSection() {
  const [currentSVGIndex, setCurrentSVGIndex] = useState(0);
  
  // Array of all HomeCycle SVG files
  const homeCycleSVGs = [
    HomeCycle1,
    HomeCycle2,
    HomeCycle3,
    HomeCycle4
  ];

  // Preload all images for smoother transitions
  useEffect(() => {
    homeCycleSVGs.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Auto-rotate through SVG files matching Figma prototype settings
  // Delay: 1ms, Duration: 300ms, Total: 301ms per frame
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSVGIndex((prevIndex) => 
        (prevIndex + 1) % homeCycleSVGs.length
      );
    }, 301); // 1ms delay + 300ms duration = 301ms per frame

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HomeCycle SVG Section with Rotating Animation */}
        <div className="flex justify-center items-center w-full">
          <div className="relative w-full max-w-4xl h-auto flex justify-center items-center">
            {/* Single image that changes src rapidly */}
            <img 
              src={homeCycleSVGs[currentSVGIndex]} 
              alt="Innovation and Investment Cycle" 
              className="w-full h-auto mx-auto"
              style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

