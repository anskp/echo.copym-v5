import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import twocurve from "../assets/hero/twocurve.png";
import coraVideo from "../assets/hero/Cora-Aivdo.mp4";

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
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        {/* Removed background two-curve graphic */}

        {/* Dotted grid lines background */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dotted border-cyan-400/30"></div>
          <div className="absolute top-0 left-1/2 w-px h-full border-l border-dotted border-cyan-400/30"></div>
        </div>

        {/* Text content - top left */}
        <div className="relative z-10 pt-6 md:pt-8 lg:pt-12 text-left max-w-5xl">
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
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl dm-sans leading-relaxed">
            Our AI Agent has shown <span className="text-emerald-400 font-dm-sans">23% better accuracy</span> in predicting asset appreciation vs top market tools. Experience the future of finance with <span className="font-semibold text-white">CORA</span>, the unified RWA tokenization AI platform.
          </p>
        </div>

        {/* Center video - 735x735 with blue border */}
        <div className="relative z-10 flex-1 flex items-center justify-center my-8 md:my-12">
          <div className="relative w-full max-w-[300px] h-[300px] sm:max-w-[400px] sm:h-[400px] md:max-w-[500px] md:h-[500px] lg:max-w-[500px] lg:h-[500px] border border-cyan-400/50 flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={coraVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;