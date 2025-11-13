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

        {/* Video Section */}
        <div className="flex justify-center items-center my-8 sm:my-12 lg:my-16">
          <div className="w-full max-w-4xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-lg"
            >
              <source src="/assets/videos/Cora-aivideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Center logo with left/right info cards */}
        
            
          

        
      </div>
    </Section>
  );
};

export default Services;
