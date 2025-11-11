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
    <Section id="how-to-use" className="bg-black text-white">
      <div className="container">
        <Heading
          title={
            <>
              <span className="text-white">Why Choose </span>
              <span className="text-emerald-400">CORA</span>
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        {/* Center logo with left/right info cards */}
        <div className="relative mt-12 md:mt-16">
          {/* Soft green radial glow */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-emerald-200/25 rounded-full blur-3xl" />

          {/* Two-column layout: left card | right card */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-[200px] z-10">
            {/* Left card - bottom left */}
            <div className="order-2 md:order-1 flex md:justify-start md:items-end md:mt-[250px]">
              <div className="w-full md:w-[90%] bg-[rgba(12,20,18,0.85)] border border-[#13a56e]/40 rounded-2xl px-2 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <h4 className="text-center uppercase font-extrabold tracking-[0.5px] mb-2 text-[15px] dm-sans text-white">
                  <span className="text-[#13a56e]">Cora </span>
                  <span className="text-white">Predictive Analysis</span>
                </h4>
                <p className="text-left text-[13px] md:text-[13px] text-gray-300 leading-[1.6] m-0 dm-sans">
                  Harness the power of Cora AI's advanced machine learning algorithms for real-time market predictions, portfolio optimization, and intelligent investment recommendations across multiple asset classes.
                </p>
              </div>
            </div>
            
            {/* Right card - top right */}
            <div className="order-1 md:order-2 flex md:justify-end md:items-start md:-mt-20">
              <div className="w-full md:w-[90%] bg-[rgba(12,20,18,0.85)] border border-[#13a56e]/40 rounded-2xl px-2 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <h4 className="text-center uppercase font-extrabold tracking-[0.5px] mb-2 text-[15px] dm-sans text-white">
                  <span className="text-[#13a56e]">Cora AI </span>
                  <span className="text-white">Real Estate</span>
                </h4>
                <p className="text-left text-[12px] md:text-[13px] text-gray-300 leading-[1.6] m-0 dm-sans">
                  Transform real estate investment with Cora AI's revolutionary predictive analytics. Precise valuations, rental yield forecasts, and trend predictions powered by cutting-edge ML and blockchain technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative floating bits SVG - fixed position outside cards container */}
        <div className="relative flex justify-center -mt-[500px] pointer-events-none z-0">
          <img src={Floatingbits} alt="Floating decorative bits" className="w-[710px] max-w-full opacity-60" />
        </div>
      </div>
    </Section>
  );
};

export default Services;
