import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import twocurve from "../assets/hero/twocurve.png";

gsap.registerPlugin(ScrollTrigger);

import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="hero-section bg-n-12 text-white pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-28 md:min-h-screen md:flex md:items-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:flex-col md:items-center md:justify-center md:gap-6">
        {/* Background two-curve graphic */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <img
            src={twocurve}
            alt="Background curves"
            className="opacity-200 w-[600vw] h-[130vh] max-w-none translate-y-[-14rem] object-cover md:w-[220vw] md:h-[115vh] md:translate-y-[-12rem] lg:w-[150vw] lg:h-[105vh] lg:translate-y-[-14rem] xl:w-[110vw] xl:h-[95vh] xl:translate-y-[-16rem] 2xl:w-full 2xl:h-[90vh]"
 
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-6 md:pt-8 md:px-6">
          <p className="tracking-wider text-xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-white uppercase mb-4 md:mb-6 dm-sans leading-tight">
            Explore the possibilities of
            <span className="text-emerald-400 inline-block ml-1">
              <Typewriter
                options={{
                  strings: [
                    "CrossChain Intelligence",
                    "AI Compliance",
                    "RWA Tokenization",
                    "DeFi Integration",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </p>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto dm-sans leading-relaxed">
            Our AI Agent has shown <span className="text-emerald-400 font-dm-sans">23% better accuracy</span> in predicting asset appreciation vs top market tools. Experience the future of finance with <span className="font-semibold text-white">CORA</span>, the unified RWA tokenization AI platform.
          </p>
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;