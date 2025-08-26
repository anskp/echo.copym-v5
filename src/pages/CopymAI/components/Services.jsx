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

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={
            <>
              Why Choose CORA{" "}
            </>
          }
          text="Revolutionizing Real-World Asset Investment with AI and Blockchain Technology"
        />

        <div className="relative">
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
                  <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-green-800 uppercase anton-regular">COPYM-AI Real Estate</h4>
                  <p className="body-2 mb-[3rem] text-green-700">
                    COPYM-AI's proprietary AI models for real estate valuation and rental income prediction, enhanced by RealT's proven tokenization infrastructure.
                  </p>
                </div>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-transparent rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-4 text-black uppercase anton-regular">COPYM-AI Smart Contracts</h4>
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

          {/* Gradient removed to eliminate purple and blue background colors */}
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-center mb-12 text-black uppercase anton-regular">Enterprise-Grade RWA Tokenization Platform</h3>
          
          {/* Card Container with Light Blue Backdrop */}
          <div className="bg-blue-50 p-8 rounded-3xl">
            {/* White Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="p-6 text-left bg-transparent text-black font-bold">Platform Capabilities</th>
                      <th className="p-6 text-center bg-transparent text-color-1 font-bold">COPYM AI</th>
                      <th className="p-6 text-center bg-transparent text-black font-bold">Market Standard</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-6 font-semibold text-black">AI-Powered Investment Intelligence</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          Predictive Analytics
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                          Historical Data
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-6 font-semibold text-black">Multi-Chain Infrastructure</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          Cross-Chain Native
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                          Single Chain
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-6 font-semibold text-black">Regulatory Compliance</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          Automated KYC/AML
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                          Manual Process
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-6 font-semibold text-black">Real-Time Portfolio Analytics</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          Live Dashboard
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                          Periodic Reports
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-6 font-semibold text-black">Smart Contract Security</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                          Enterprise-Grade
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
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
    </Section>
  );
};

export default Services;
