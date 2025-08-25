import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import Typewriter from "typewriter-effect";

import { heroIcons } from "../constants";
import "./HeroIconsBlack.css";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import { Gradient } from "./design/Hero";
import Generating from "./Generating";
import Notification from "./Notification";
import Section from "./Section";

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
      <div ref={parallaxRef} className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 text-black uppercase anton-regular">
            Explore the Possibilities of
            <br />
            <Typewriter
              options={{
                strings: [
                  "RWA Tokenization",
                  "AI Compliance",
                  "DeFi Integration",
                  "Cross-Chain Intelligence",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-black lg:mb-8">
            Our AI has shown <span className="text-color-1 font-bold">23% better accuracy</span> in predicting asset appreciation vs top market tools. 
            Experience the future of finance with{" "}
            <span className="inline-block relative font-semibold">
              COPYM-AI
            </span>
            , the unified RWA tokenization AI platform.
          </p>

          {/* Market Potential Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-color-1 mb-2">$16T</div>
              <div className="text-sm text-black">Total RWA value by 2025</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-color-4 mb-2">43%</div>
              <div className="text-sm text-black">Market CAGR</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-color-1 mb-2">$1.5B</div>
              <div className="text-sm text-black">Year 1 target market</div>
            </div>
          </div>

          <Button href="#pricing" black>
            Get started
          </Button>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      
    </Section>
  );
};

export default Hero;
