import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { Shield, Lock, FileCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { useState } from "react";

const FeatureCard = ({ benefit }) => {
  // Map benefit titles to appropriate Lucide icons
  const getIcon = (title) => {
    switch (title) {
      case "The Problem We Solve":
        return AlertCircle;
      case "AI-Powered Tokenization":
        return Shield;
      case "Integrated Marketplace":
        return Lock;
      case "AI Investment Advisor":
        return FileCheck;
      case "Smart Asset Verification":
        return Shield;
      case "Business Model":
        return AlertCircle;
      default:
        return Shield;
    }
  };

  const IconComponent = getIcon(benefit.title);

  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-4 mx-auto">
        <IconComponent className="w-6 h-6 text-green-500" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
      <p className="text-white/80 text-sm leading-relaxed mb-4">{benefit.text}</p>
      <button className="inline-flex items-center text-green-400 font-semibold text-sm hover:text-green-300 transition-colors duration-200">
        Explore more <ArrowRight className="ml-1 w-4 h-4" />
      </button>
    </div>
  );
};

const Benefits = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-6">
              <span className="text-white">AI FEATURES</span>
              <br />
              <span className="text-green-500">OVERVIEW</span>
            </h2>
            <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
              Revolutionizing Real-World Asset Investment with AI and Blockchain Technology
            </p>
          </div>

          {/* New Layout: AI Features Overview + Core Capabilities + Mission & Vision + Tech/Platform */}
          <section className="min-h-screen space-y-10 p-10 bg-gradient-to-br from-gray-900 via-black to-gray-900">

            {/* AI Features Overview */}
            <div className="w-full shadow-xl rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <h2 className="text-4xl font-black mb-3 anton-regular uppercase text-[#15a36e]">AI Features Overview</h2>
              <p className="text-white/80 text-lg">
                COPYM-AI is a cutting-edge AI-powered Real World Asset (RWA) tokenization platform designed to transform how the world perceives and manages ownership through intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">

              {/* Core Capabilities / Journey */}
              <div className="col-span-1 h-[600px] shadow-xl rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/20">
                <h2 className="text-2xl font-semibold mb-3 text-[#255f99] anton-regular">Core Capabilities</h2>
                <p className="text-white/80 text-lg mb-6">
                  AI-Powered Investment Intelligence, Multi-Chain Infrastructure, and Smart Contract Security guide our platform.
                </p>
                
                {/* AI Icons */}
                <div className="flex items-center justify-between mt-8">
                  {benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center justify-center rounded-2xl w-12 h-12 bg-white/10 border border-white/20">
                      <div className="w-6 h-6 rounded-xl bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center">
                        {(() => {
                          const IconComponent = (() => {
                            switch (benefit.title) {
                              case "The Problem We Solve":
                                return AlertCircle;
                              case "AI-Powered Tokenization":
                                return Shield;
                              case "Integrated Marketplace":
                                return Lock;
                              default:
                                return Shield;
                            }
                          })();
                          return <IconComponent className="w-4 h-4 text-green-500" />;
                        })()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="col-span-2 flex flex-col gap-6">

                {/* Mission & Vision */}
                <div className="h-[280px] shadow-xl rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/20">
                  <h2 className="text-2xl font-semibold mb-3 text-[#15a36e] anton-regular">AI Mission & Vision</h2>

                  <div className="flex flex-col md:flex-row gap-6">

                    {/* Mission */}
                    <div className="flex-1">
                      <div 
                        className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-4 h-full"
                        onClick={() => toggleDropdown('mission')}
                      >
                        <h3 className="text-xl font-bold mb-2 text-[#255f99] anton-regular">Our AI Mission</h3>
                        <p className={openDropdown === 'mission' ? "max-h-full transition-all duration-500 text-white/80" : "max-h-16 overflow-hidden transition-all duration-500 text-white/80"}>
                          To make asset ownership borderless, transparent, and universally accessible through AI-powered blockchain innovation — enabling physical assets to be intelligently digitized, fractionalized, and traded globally with predictive analytics.
                        </p>
                      </div>
                    </div>

                    {/* Vision */}
                    <div className="flex-1">
                      <div 
                        className="bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg border border-white/20 p-4 h-full"
                        onClick={() => toggleDropdown('vision')}
                      >
                        <h3 className="text-xl font-bold mb-2 text-[#15a36e] anton-regular">Our AI Vision</h3>
                        <p className={openDropdown === 'vision' ? "max-h-full transition-all duration-500 text-white/80" : "max-h-16 overflow-hidden transition-all duration-500 text-white/80"}>
                          We see a future where AI-driven insights enable any asset, anywhere, to be owned, traded, and verified instantly with unprecedented accuracy and efficiency.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Technology Stack + Platform Integration */}
                <div className="grid grid-cols-2 gap-6 h-[280px]">

                  {/* AI Technology Stack */}
                  <div className="shadow-xl rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#255f99] anton-regular">AI Technology Stack</h3>
                      <p className="text-white/80 text-lg">
                        Machine Learning, Neural Networks, Smart Contracts, IPFS, Decentralized Identity & AI Security solutions.
                      </p>
                    </div>
                  </div>

                  {/* AI Platform Integration */}
                  <div className="shadow-xl rounded-3xl p-8 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-center">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-[#15a36e] anton-regular">AI Platform Integration</h3>
                      <p className="text-white/80 text-lg">
                        Fireblocks, Crossmint, Sumsub, IPFS — AI-enhanced secure and compliant infrastructure for global operations.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>

          {/* Original Benefits Grid - Kept for reference */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-20">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.id} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
