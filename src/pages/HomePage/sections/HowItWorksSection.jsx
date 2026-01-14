import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react';
import assetOwnersAnimation from '../../../components/lotties/forassetsowners.json';
import investorsAnimation from '../../../components/lotties/forinvestors.json';
import SectionContainer from '../../../components/Layout/SectionContainer';
import SectionHeader from '../../../components/Layout/SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const HowItWorksSection = () => {
  const containerRef = useRef(null);
  const panel2Ref = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          anticipatePin: 1, // Reduce jitter
          start: "top top",
          end: "+=200%" // Length of the scroll distance (2x height of screen roughly)
        }
      });

      // Logic:
      // 0-50% scroll: Panel 1 static (no animation happening, effectively waiting).
      // 50-100% scroll: Panel 2 slides in.

      // To achieve this with a timeline attached to the whole scroll distance:
      // We can insert an empty tween for the first half, then the slide for the second half.

      timeline
        .to({}, { duration: 1 }) // Wait for first 50% (relative units)
        .to(panel2Ref.current, { xPercent: -100, duration: 1, ease: "none" }); // Slide in for second 50%

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-screen overflow-hidden relative bg-white">
      {/* Top Header - Fixed/Static within pinned section */}
      <div className="absolute top-0 left-0 w-full z-30 pt-4 sm:pt-8 md:pt-12 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 pointer-events-none">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            title="HOW IT WORKS"
            highlightWords={['WORKS']}
            alignment="left"
            className="!mb-3 sm:!mb-4"
          />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-medium leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
            How Copym works - for issuers and investors
          </p>
        </div>
      </div>

      {/* Panel 1: Asset Owners */}
      <div className="panel absolute inset-0 w-full h-full flex items-center justify-center bg-white z-10 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full h-full flex flex-col justify-center">
          {/* Animation */}
          <div className="w-full max-w-4xl mx-auto my-auto pointer-events-auto">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#15a36e] -mb-12 mt-6 sm:mt-8 text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              For Asset Owners
            </h3>
            <Lottie
              animationData={assetOwnersAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Panel 2: Investors */}
      {/* Starting off-screen right via CSS transform or simple positioning. Let's use Tailwind left-full or just GSAP set. */}
      {/* Using `left-full` puts it 100% to the right. Then we animate xPercent: -100 to bring it back to 0 (center). */}
      <div
        ref={panel2Ref}
        className="panel absolute top-0 left-full w-full h-full flex items-center justify-center bg-white z-20 pt-16 sm:pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full h-full flex flex-col justify-center">
          {/* Animation */}
          <div className="w-full max-w-4xl mx-auto pointer-events-auto">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#15a36e] -mb-12 mt-6 sm:mt-8 text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              For Investors
            </h3>
            <Lottie
              animationData={investorsAnimation}
              loop={true}
              autoplay={true}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
