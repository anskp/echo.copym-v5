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

        {/* Center logo with left/right info cards */}
        <div className="relative mt-12 md:mt-16">
          {/* Soft green radial glow */}
          <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-emerald-200/25 rounded-full blur-3xl" />

          {/* Three-column layout: left card | center logo | right card */}
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center mt-12">
            {/* Left card */}
            <div className="order-2 md:order-1 flex md:justify-end md:-mt-10">
              <div className="w-full md:w-full bg-[#f8fffc] border border-[#13a56e] rounded-2xl px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <h4 className="text-left uppercase font-extrabold tracking-[0.5px] mb-2 text-[18px]">
                  <span className="text-[#13a56e]">Cora </span>
                  <span className="text-black">Predictive Analysis</span>
                </h4>
                <p className="text-left text-[14px] md:text-[15px] text-gray-600 leading-[1.6] m-0 ">
                  Harness the power of Cora AI's advanced machine learning algorithms for real-time market predictions, portfolio optimization, and intelligent investment recommendations across multiple asset classes.
                </p>
              </div>
            </div>
            {/* Center logo */}
            <div className="order-1 md:order-2 flex justify-center">
              
            </div>
            {/* Right card */}
            <div className="order-3 md:order-3 flex md:justify-start md:-mt-10">
              <div className="w-full md:w-full bg-[#f8fffc] border border-[#13a56e] rounded-2xl px-8 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                <h4 className="text-left uppercase font-extrabold tracking-[0.5px] mb-2 text-[18px]">
                  <span className="text-[#13a56e]">Cora AI </span>
                  <span className="text-black">Real Estate</span>
                </h4>
                <p className="text-left text-[14px] md:text-[15px] text-gray-600 leading-[1.6] m-0">
                  Transform real estate investment with Cora AI's revolutionary predictive analytics. Precise valuations, rental yield forecasts, and trend predictions powered by cutting-edge ML and blockchain technology.
                </p>
              </div>
            </div>
          </div>

         
        </div>

        {/* Decorative floating bits SVG at bottom */}
        <div className="flex justify-center mt-[-300px]">
          <img src={Floatingbits} alt="Floating decorative bits" className="w-[880px] max-w-full opacity-1000" />
        </div>
      </div>
    </Section>
  );
};

export default Services;
