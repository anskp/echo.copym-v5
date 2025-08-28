import { useState } from "react";
import { service1, service2, service3, check } from "../assets";
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
              <span className="text-emerald-600">CORA</span>
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        {/* Section 2: AI Features Overview + Core Capabilities + Mission & Vision + Tech/Platform */}
        <section className="min-h-screen space-y-10 p-10 bg-gradient-to-br from-blue-50 via-white to-green-50">

          {/* AI Features Overview */}
          <div className="w-full shadow-xl rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
            <h2 className="text-4xl font-black mb-3 anton-regular uppercase text-[#15a36e]">AI Features Overview</h2>
            <p className="text-gray-600 text-lg">
              COPYM-AI is a cutting-edge AI-powered Real World Asset (RWA) tokenization platform designed to transform how the world perceives and manages ownership through intelligent automation.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">

            {/* Core Capabilities / Journey */}
            <div className="col-span-1 h-[600px] shadow-xl rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
              <h2 className="text-2xl font-semibold mb-3 text-[#255f99] anton-regular">Core Capabilities</h2>
              <p className="text-gray-600 text-lg mb-6">
                AI-Powered Investment Intelligence, Multi-Chain Infrastructure, and Smart Contract Security guide our platform.
              </p>
              
              {/* AI Icons */}
              <div className="flex items-center justify-between mt-8">
                {brainwaveServicesIcons.map((icon, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-center rounded-2xl ${
                      i === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 bg-gray-800 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        i === 2
                          ? "flex items-center justify-center w-full h-full bg-gray-700 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img
                        src={icon}
                        width={24}
                        height={24}
                        alt={`icon-${i}`}
                      />
                    </div>
                  </li>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 flex flex-col gap-6">

              {/* Mission & Vision */}
              <div className="h-[280px] shadow-xl rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-3 text-[#15a36e] anton-regular">AI Mission & Vision</h2>

                <div className="flex flex-col md:flex-row gap-6">

                  {/* Mission */}
                  <div className="flex-1">
                    <div 
                      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-4 h-full"
                      onClick={() => toggleDropdown('mission')}
                    >
                      <h3 className="text-xl font-bold mb-2 text-[#255f99] anton-regular">Our AI Mission</h3>
                      <p className={openDropdown === 'mission' ? "max-h-full transition-all duration-500" : "max-h-16 overflow-hidden transition-all duration-500"}>
                        To make asset ownership borderless, transparent, and universally accessible through AI-powered blockchain innovation — enabling physical assets to be intelligently digitized, fractionalized, and traded globally with predictive analytics.
                      </p>
                    </div>
                  </div>

                  {/* Vision */}
                  <div className="flex-1">
                    <div 
                      className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-4 h-full"
                      onClick={() => toggleDropdown('vision')}
                    >
                      <h3 className="text-xl font-bold mb-2 text-[#15a36e] anton-regular">Our AI Vision</h3>
                      <p className={openDropdown === 'vision' ? "max-h-full transition-all duration-500" : "max-h-16 overflow-hidden transition-all duration-500"}>
                        We see a future where AI-driven insights enable any asset, anywhere, to be owned, traded, and verified instantly with unprecedented accuracy and efficiency.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Technology Stack + Platform Integration */}
              <div className="grid grid-cols-2 gap-6 h-[280px]">

                {/* AI Technology Stack */}
                <div className="shadow-xl rounded-3xl p-8 bg-white/80 backdrop-blur-sm flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#255f99] anton-regular">AI Technology Stack</h3>
                    <p className="text-gray-600 text-lg">
                      Machine Learning, Neural Networks, Smart Contracts, IPFS, Decentralized Identity & AI Security solutions.
                    </p>
                  </div>
                </div>

                {/* AI Platform Integration */}
                <div className="shadow-xl rounded-3xl p-8 bg-white/80 backdrop-blur-sm flex items-center justify-center text-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[#15a36e] anton-regular">AI Platform Integration</h3>
                    <p className="text-gray-600 text-lg">
                      Fireblocks, Crossmint, Sumsub, IPFS — AI-enhanced secure and compliant infrastructure for global operations.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Original Service Cards - Kept for reference */}
        <div className="relative mt-20">
          {/* Service 2 & 3 */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-gray-300 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={service2}
                  alt="Robot"
                  className="h-full w-full object-cover pointer-events-none select-none"
                  width={630}
                  height={750}
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <div className="bg-green-50 p-4 opacity-90 rounded-2xl mb-6 border border-green-200">
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-green-800 uppercase anton-regular">
                    <span className="text-gray-900">COPYM-AI </span>
                    <span className="text-emerald-600">Real Estate</span>
                  </h4>
                  <p className="body-2 mb-[3rem] text-green-700">
                    COPYM-AI's proprietary AI models for real estate valuation and rental income prediction, enhanced by RealT's proven tokenization infrastructure.
                  </p>
                </div>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-transparent rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-black uppercase anton-regular">
                  <span className="text-gray-900">COPYM-AI </span>
                  <span className="text-emerald-600">Smart Contracts</span>
                </h4>
                <p className="body-2 mb-[2rem] text-black">
                  COPYM-AI's intelligent smart contract generation and atomic transfer optimization, powered by Algorand's advanced blockchain technology.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((icon, i) => (
                    <li
                      key={i}
                      className={`flex items-center justify-center rounded-2xl ${
                        i === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-gray-800 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          i === 2
                            ? "flex items-center justify-center w-full h-full bg-gray-700 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img
                          src={icon}
                          width={24}
                          height={24}
                          alt={`icon-${i}`}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-transparent rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className={`w-full h-full object-cover ${
                    isPlaying && "animate-pulse"
                  } pointer-events-none select-none`}
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />

                <VideoChatMessage isPlaying={isPlaying} />
                <VideoBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <div className="relative">
            {/* Curved Section */}
            <div className="relative z-10 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16 sm:mb-20 lg:mb-24">
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 anton-regular">
                    <span className="text-white">Enterprise-Grade </span>
                    <span className="text-green-500">RWA Tokenization Platform</span>
                  </h3>
                  <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto">
                    <span className="text-white">Compare our advanced platform capabilities with </span>
                    <span className="text-green-500">industry standards</span>
                  </p>
                </div>
                
                {/* Card Container with Black Backdrop */}
                <div className="bg-black p-8 rounded-3xl border border-gray-700">
                  {/* Dark Card */}
                  <div className="bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-600">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-600">
                            <th className="p-6 text-left bg-transparent text-white font-bold">Platform Capabilities</th>
                            <th className="p-6 text-center bg-transparent text-green-400 font-bold">COPYM AI</th>
                            <th className="p-6 text-center bg-transparent text-white font-bold">Market Standard</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-600">
                            <td className="p-6 font-semibold text-white">AI-Powered Investment Intelligence</td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-900 text-green-300 text-sm font-semibold">
                                Predictive Analytics
                              </span>
                            </td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-semibold">
                                Historical Data
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-600">
                            <td className="p-6 font-semibold text-white">Multi-Chain Infrastructure</td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-900 text-green-300 text-sm font-semibold">
                                Cross-Chain Native
                              </span>
                            </td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-semibold">
                                Single Chain
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-600">
                            <td className="p-6 font-semibold text-white">Regulatory Compliance</td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-900 text-green-300 text-sm font-semibold">
                                Automated KYC/AML
                              </span>
                            </td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-semibold">
                                Manual Process
                              </span>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-600">
                            <td className="p-6 font-semibold text-white">Real-Time Portfolio Analytics</td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-900 text-green-300 text-sm font-semibold">
                                Live Dashboard
                              </span>
                            </td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-semibold">
                                Periodic Reports
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="p-6 font-semibold text-white">Smart Contract Security</td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-900 text-green-300 text-sm font-semibold">
                                Enterprise-Grade
                              </span>
                            </td>
                            <td className="p-6 text-center">
                              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-700 text-gray-300 text-sm font-semibold">
                                Basic Security
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
