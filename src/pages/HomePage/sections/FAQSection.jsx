import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div
      className="transition-all duration-300 border-b border-black/10"
      style={{
        overflow: 'hidden'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-start py-4 sm:py-5 group"
      >
        <h3
          className="pr-4 flex-1"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 600,
            color: '#000',
            textAlign: 'left',
            fontFamily: 'Palanquin, sans-serif'
          }}
        >
          {question}
        </h3>
        <div className="flex-shrink-0 pt-1 transition-transform duration-300">
          {isOpen ? (
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 10L12 0H0L6 10Z" fill="black" />
            </svg>
          ) : (
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6L0 0V12L10 6Z" fill="black" />
            </svg>
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p
          style={{
            fontSize: 'clamp(14px, 1.8vw, 18px)',
            color: '#000',
            textAlign: 'left',
            lineHeight: '1.6',
            fontFamily: 'Palanquin, sans-serif'
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is Copym and how does it work?",
      answer: "Copym is a compliance-first platform designed to structure, tokenize, and manage real-world assets through secure on-chain entitlement frameworks. The platform connects asset owners, investors, and infrastructure partners within a unified system that supports asset structuring, issuance, participation, and lifecycle management. Copym provides the underlying infrastructure and tools. All participation decisions remain with the user."
    },
    {
      question: "What asset classes are available on Copym?",
      answer: "Copym supports structured participation across multiple real-world asset classes, including real estate, precious metals, fine art, carbon credits, and other alternative assets. Each asset listed on Copym follows defined structuring, disclosure, and entitlement frameworks. Availability may vary based on jurisdiction, eligibility, and regulatory requirements."
    },
    {
      question: "How does entitlement work on Copym?",
      answer: "Entitlement on Copym represents a defined set of rights and conditions linked to a specific real-world asset structure. These entitlements are recorded and managed through on-chain smart contracts rather than direct legal ownership of the underlying asset. This approach provides transparency, traceability, and enforceable rules aligned with the asset's structure and documentation."
    },
    {
      question: "How secure is Copym's infrastructure?",
      answer: "Copym operates on pre-audited smart contract infrastructure. All core contracts undergo independent security reviews prior to deployment and are implemented across established blockchain networks. On-chain records provide transparency, while governance controls and deployment standards are designed to prioritize integrity, verification, and controlled execution."
    },
    {
      question: "What are the benefits of using Copym?",
      answer: "Copym provides a structured environment for real-world asset participation, offering: Compliance-first asset structuring and tokenization, Transparent on-chain entitlement and lifecycle visibility, Access to multiple asset classes through a single platform, Pre-audited smart contract infrastructure, Unified experience across web and mobile platforms. Copym focuses on infrastructure, transparency, and control."
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 md:py-14 lg:pt-6 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="relative w-fit mx-auto mb-3 sm:mb-4">
            <h2
              className="inline-flex items-baseline gap-1 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold pb-1"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              <span className="text-[#15a36e] uppercase">FAQ'</span><span className="text-black">s</span>
            </h2>
          </div>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onToggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
