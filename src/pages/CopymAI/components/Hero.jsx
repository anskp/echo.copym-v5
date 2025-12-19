import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import twocurve from "../assets/hero/twocurve.png";
// import coraVideo from "../assets/hero/Cora-Aivdo.mp4";
const coraVideo = ""; // Placeholder until video is restored


gsap.registerPlugin(ScrollTrigger);

import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="hero-section bg-black text-white h-screen min-h-[600px] sm:min-h-[700px] lg:h-screen xl:h-screen flex items-center"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center">
        {/* Background video */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="bg-black p-4 sm:p-6 md:p-8 rounded-lg">
            <div className="relative w-full max-w-[500px] h-[500px] sm:max-w-[400px] sm:h-[400px] md:max-w-[500px] md:h-[500px] lg:max-w-[600px] lg:h-[600px] flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={coraVideo} type="video/mp4" />
              </video>
              {/* Retina image centered over video */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                  src="/assets/Images/icons/Retina.png"
                  alt="Retina"
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Heading - positioned higher */}
        <div className="absolute top-[15%] sm:top-[15%] md:top-[15%] lg:top-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="tracking-wider text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase mb-6 sm:mb-8 md:mb-10 lg:mb-12 dm-sans leading-tight" style={{ textShadow: '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3), 0 0 60px rgba(16, 185, 129, 0.2)' }}>
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
        </div>

        {/* Paragraph - positioned lower */}
        <div className="absolute top-[75%] sm:top-[75%] md:top-[75%] lg:top-[75%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto dm-sans leading-relaxed" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.4), 0 0 30px rgba(16, 185, 129, 0.2), 0 0 45px rgba(16, 185, 129, 0.1)' }}>
            Our AI Agent has shown <span className="text-emerald-400 font-dm-sans">23% better accuracy</span> in predicting asset appreciation vs top market tools. Experience the future of finance with <span className="font-semibold text-white">CORA</span>, the unified RWA tokenization AI platform.
          </p>
        </div>
      </div>


    </Section>
  );
};

export default Hero;