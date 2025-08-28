import React, { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";

import { curve, robot } from "../assets";
import { heroIcons } from "../constants";
import "./HeroIconsBlack.css";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles, Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  // Add CSS animation styles
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes robotTurn {
        0% { transform: rotateY(0deg); }
        25% { transform: rotateY(-15deg); }
        50% { transform: rotateY(0deg); }
        75% { transform: rotateY(15deg); }
        100% { transform: rotateY(0deg); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Section
      className="hero-section pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Grid - Content */}
          <div className="relative z-1 text-left">
            <h1 className="h1 mb-6 text-left anton-regular">
              <span className="text-gray-900">Explore the Possibilities of</span>
              <br />
              <span className="text-emerald-600">
                <Typewriter
                  options={{
                    strings: [
                      "RWA Tokenization",
                      "AI Compliance",
                      "DeFi Integration",
                      "CrossChain Intelligence",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p className="body-1 mb-6 text-black text-left lg:mb-8">
              Our AI Agent has shown <span className="text-color-1 font-bold">23% better accuracy</span> in predicting asset appreciation vs top market tools. 
              Experience the future of finance with{" "}
              <span className="inline-block relative font-semibold">
                CORA
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
              , the unified RWA tokenization AI platform.
            </p>

            {/* Market Potential Stats */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl font-bold text-color-1 mb-2">$16T</div>
                <div className="text-sm text-black">Total RWA value by 2025</div>
              </div>
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold text-color-4 mb-2">43%</div>
                <div className="text-sm text-black">Market CAGR</div>
              </div>
              <div className="text-left animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold text-color-1 mb-2">$1.5B</div>
                <div className="text-sm text-black">Year 1 target market</div>
              </div>
            </div>

            <Button href="#pricing" black>
              Get started
            </Button>
          </div>

          {/* Right Grid - Robot Image */}
          <div className="relative z-1 flex items-center justify-center">
            <img
              src={robot}
              className="w-full max-w-6xl pointer-events-none select-none animate-robot-turn"
              width={1024}
              height={490}
              alt="AI"
              style={{
                filter: 'brightness(1.1) contrast(1.2)',
                backgroundColor: 'transparent',
                animation: 'robotTurn 6s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;