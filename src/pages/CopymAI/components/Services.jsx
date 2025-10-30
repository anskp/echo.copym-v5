import { useState } from "react";
import { service1, service2, service3, check, ethereum, bitcoin, polygon, solana, copymColoredIcon } from "../assets";
import Floatingbits from "../../../components/SVG/Floatingbits.svg";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-gray-900">Why Choose </span>
              <span className="text-emerald-700">CORA</span>
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        {/* Redesigned: Center logo with floating tokens, left/right info cards, phone at bottom */}
        <div className="relative mt-12 md:mt-16">
          {/* Soft green radial glow */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-emerald-200/25 rounded-full blur-3xl" />

         
          

          
          {/* Side info cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-12">
            <div className="order-2 md:order-1">
              <div className="w-full md:w-[85%] md:ml-auto bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-2xl p-5">
                <h4 className="text-base sm:text-lg font-extrabold tracking-tight mb-2 text-emerald-700 dm-sans">
                  CORA PREDICTIVE ANALYSIS
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Harness the power of Cora AI's advanced machine learning algorithms for real-time market predictions, portfolio optimization, and intelligent investment recommendations across multiple asset classes.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="w-full md:w-[85%] md:mr-auto bg-white/80 backdrop-blur-sm border border-emerald-100 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-2xl p-5">
                <h4 className="text-base sm:text-lg font-extrabold tracking-tight mb-2 text-emerald-700 dm-sans">
                  CORA AI REAL ESTATE
                </h4>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Transform real estate investment with Cora AI's revolutionary predictive analytics. Precise valuations, rental yield forecasts, and trend predictions powered by cutting‑edge ML and blockchain technology.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative floating bits SVG at bottom */}
          <div className="flex justify-center mt-4">
            <img src={Floatingbits} alt="Floating decorative bits" className="w-[880px] max-w-full opacity-300" />
          </div>
        </div>

        
      </div>
    </Section>
  );
};

export default Services;
