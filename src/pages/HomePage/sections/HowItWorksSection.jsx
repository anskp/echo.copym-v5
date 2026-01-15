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
    // Ensure refs are available
    if (!containerRef.current || !panel2Ref.current) return;

    let ctx = gsap.context(() => {
      // Kill any existing ScrollTriggers on this element
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          start: "top top",
          end: "+=100%",
          invalidateOnRefresh: true,
          // markers: true, // Uncomment for debugging
        }
      });

      // Transition Panel 2: Slower slide-in (80% of scroll duration)
      timeline
        .to({}, { duration: 0.4 })
        .to(panel2Ref.current, { xPercent: -100, duration: 1.6, ease: "none" });

    }, containerRef);

    // Refresh ScrollTrigger after a short delay to ensure proper calculation
    const refreshTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(refreshTimeout);
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full h-[320px] sm:h-[370px] md:h-[470px] lg:h-[570px] overflow-hidden relative bg-white">
      {/* Top Header - Fixed/Static within pinned section */}
      <div className="relative w-full z-30 pt-0 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          {/* Header Section - Exact copy of ProductStackReview structure */}
          <div className="text-left mb-6 sm:mb-8 md:mb-10">
            <div className="relative w-fit mb-3 sm:mb-4">
              <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                <span className="text-[#15a36e]">HOW IT </span>
                <span className="text-black">WORKS</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              How Copym works - for issuers and investors
            </p>
          </div>
        </div>
      </div>


      {/* Panel 1: Asset Owners */}
      <div className="panel absolute inset-0 w-full h-full flex items-center justify-center bg-white z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full h-full flex flex-col justify-center">
          {/* Animation */}
          {/* Animation */}
          <div className="w-full max-w-4xl mx-auto pointer-events-auto">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#15a36e] mb-2 sm:mb-4 text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
        className="panel absolute top-0 left-full w-full h-full flex items-center justify-center bg-white z-20"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 w-full h-full flex flex-col justify-center">
          {/* Animation */}
          <div className="w-full max-w-4xl mx-auto pointer-events-auto">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#15a36e] mb-2 sm:mb-4 text-center" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
