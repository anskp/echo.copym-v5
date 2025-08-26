import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";
import { LavaLamp } from "../../../components/ui/fluid-blob";

import { heroIcons } from "../constants";
import "./HeroIconsBlack.css";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";
import fonviewImage from "../assets/notification/fonview.jpg";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] md:-mt-[10.55rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* Blue Background Pattern - Same as Marketplace */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
      </div>

      {/* Fluid Blob Background - Same as Marketplace */}
      <div className="absolute inset-0 opacity-30">
        <LavaLamp />
      </div>

      <div ref={parallaxRef} className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Grid - Content from Screenshot */}
          <div className="relative z-1 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-black uppercase anton-regular">
              EXPLORE THE POSSIBILITIES OF
              <br />
              <Typewriter
                options={{
                  strings: [
                    "CROSS-CHAIN INTELLIGENCE",
                    "RWA TOKENIZATION",
                    "AI COMPLIANCE",
                    "DEFI INTEGRATION",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <p className="body-1 mb-8 text-black text-left">
              Our AI Agent has shown <span className="text-color-1 font-bold">23% better accuracy</span> in predicting asset appreciation vs top market tools. 
              Experience the future of finance with{" "}
              <span className="text-color-1 font-bold">COPYM-AI</span>
              , the unified RWA tokenization AI platform.
            </p>

            {/* Market Potential Stats - Horizontal Layout */}
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

          {/* Right Grid - Image */}
          <div className="relative z-1 flex items-center justify-center">
            <img 
              src={fonviewImage} 
              alt="AI Platform Interface" 
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Unified Access to All Major Blockchains - Moved Below */}
        <div className="relative z-1">
          <CompanyLogos className="w-full" />
        </div>
      </div>

      
    </Section>
  );
};

export default Hero;
