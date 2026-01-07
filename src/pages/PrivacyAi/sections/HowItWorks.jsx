// src/pages/PrivacyAi/sections/HowItWorks.jsx

import React from 'react';
import { FileKey, Lock, Cpu, Activity, ShieldCheck } from 'lucide-react';

export default function HowItWorks() {
  const privacyAiFeatures = [
    {
      title: "Intelligent Data Segmentation",
      description: "Data is classified as public, confidential or restricted. Only cryptographic proofs and essential metadata are written on-chain.",
      icon: FileKey
    },
    {
      title: "Privacy-Preserving Verification",
      description: "Eligibility, ownership and compliance are verified without exposing sensitive personal or business information.",
      icon: Lock
    },
    {
      title: "AI-Driven Access Control",
      description: "Access rights adapt dynamically based on role, jurisdiction, asset type and transaction context.",
      icon: Cpu
    },
    {
      title: "Continuous Risk Monitoring",
      description: "AI monitors patterns across transactions to detect anomalies, prevent leakage and reinforce fraud prevention.",
      icon: Activity
    },
    {
      title: "Off-Chain Intelligence, On-Chain Trust",
      description: "Sensitive data is processed securely off-chain, while hashes and proofs on-chain guarantee integrity and auditability.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <div className="relative w-fit mb-4">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="text-black">How </span>
              <span className="text-[#15a36e]">Privacy AI</span>
              <span className="text-black"> works ?</span>
            </h2>
            {/* Underline */}
            <div
              className="absolute bottom-0 left-0 bg-black"
              style={{
                width: 'calc(100% + 120px)',
                height: '0.5px'
              }}
            ></div>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg text-black leading-relaxed mt-6 max-w-4xl"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            At CopyM , zero gas is not a feature – it's a design philosophy. We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {privacyAiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex flex-col items-start">
                {/* Icon Circle */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black mb-4 sm:mb-6 flex-shrink-0 flex items-center justify-center p-3">
                  <IconComponent className="text-white" size={28} />
                </div>

                {/* Title */}
                <h3
                  className="text-[#15a36e] font-bold text-base sm:text-lg md:text-xl mb-2 sm:mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="text-black text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
