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
      className="hero-section pt-16 sm:pt-20 lg:pt-20 pb-12 sm:pb-16 lg:pb-20"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background two-curve graphic */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <img
            src={twocurve}
            alt="Background curves"
            className="opacity-200 w-[600vw] h-[130vh] max-w-none translate-y-[-4rem] object-cover"
 
          />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10 pt-6 md:pt-8">
          <p className="tracking-wider text-xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-800 uppercase mb-4 md:mb-5 dm-sans">
            Explore the possibilities of
            <span className="text-emerald-600 inline-block ml-1">
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
<p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-5xl mx-auto dm-sans">
            Our AI Agent has shown <span className="text-emerald-700 font-dm-sans">23% better accuracy</span> in predicting asset appreciation vs top market tools. Experience the future of finance with <span className="font-semibold">CORA</span>, the unified RWA tokenization AI platform.
          </p>
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;