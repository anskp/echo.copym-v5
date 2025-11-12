import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div 
      className="mb-4 transition-all duration-300"
      style={{
        background: "rgba(228,253,243,0.6)",
        boxShadow: "0px 4px 4px 0 rgba(159,159,159,0.25)",
        borderRadius: "8px",
        minHeight: isOpen ? '160px' : '60px',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center transition-colors duration-200"
        style={{
          padding: isOpen ? '16px 20px' : '16px 20px',
          minHeight: '60px'
        }}
      >
        <h3 
          className="pr-4 flex-1"
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: '#000',
            textAlign: 'left'
          }}
        >
          {question}
        </h3>
        <div className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <svg
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.2578 0L22.5161 19.5H-0.000517845L11.2578 0Z" fill="black" />
            </svg>
          ) : (
            <svg
              width="20"
              height="23"
              viewBox="0 0 20 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.5 11.2578L0 -0.000518799V22.5161L19.5 11.2578Z" fill="black" />
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <div 
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            padding: '0 20px 16px 20px'
          }}
        >
          <p 
            style={{
              fontSize: '20px',
              color: '#000',
              textAlign: 'left',
              lineHeight: '1.6',
              marginTop: '8px'
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What does the end‑to‑end tokenization flow look like?",
      answer: "Intake and due‑diligence → audited contract deployment → mint with transfer rules → investor onboarding → listing and lifecycle management. Most pilots complete in days."
    },
    {
      question: "Which assets are best suited for tokenization?",
      answer: "Income‑producing real estate, commodities, carbon credits, private equity, and revenue streams. If ownership and cash flows are verifiable, we can structure it."
    },
    {
      question: "What chains and standards can I choose from?",
      answer: "Ethereum, Polygon, Solana, Avalanche, BSC and L2s with ERC‑20/721/1155/1400 and SPL. We recommend based on cost, liquidity, and compliance needs."
    },
    {
      question: "How do compliance and investor eligibility work?",
      answer: "KYC/AML and jurisdiction checks are embedded. Allow/deny lists and accreditation are enforced at the token level so only eligible wallets can hold or trade."
    }
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            <span className="text-black">FREQUENTLY ASKED </span>
            <span className="text-[#15a36e]">QUESTIONS</span>
          </h2>
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            These frequently asked questions might have the answer, but if not, our support team is just a message away!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-white font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-lg"
            style={{
              borderRadius: "55px",
              background: "linear-gradient(179.93deg, rgba(35,189,131,0.8) 0.13%, rgba(16,146,97,0.8) 76.14%)",
              fontFamily: 'Palanquin, sans-serif',
              minWidth: '200px'
            }}
          >
            Contact Our Team
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - FAQ List */}
          <div className="space-y-4 order-2 lg:order-1">
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

          {/* Right Side - Image and Support Info */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Image */}
            <div className="mb-8 sm:mb-12 flex justify-center lg:justify-end">
              <img 
                src="/assets/Images/ai-overvew.png" 
                alt="FAQ Illustration"
                className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                style={{
                  maxHeight: '400px'
                }}
              />
            </div>
            
            {/* Support Card */}
            
          </div>
        </div>
      </div>
    </section>
  );
}


