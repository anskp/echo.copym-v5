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
          className="pr-4 flex-1 font-semibold text-black text-lg md:text-xl text-left"
          style={{ fontFamily: 'Palanquin, sans-serif' }}
        >
          {question}
        </h3>
        <div className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2578 0L22.5161 19.5H-0.000517845L11.2578 0Z" fill="black" />
            </svg>
          ) : (
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            className="text-black text-lg md:text-xl text-left leading-relaxed mt-2"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
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
      question: "Which chains and standards can I choose from?",
      answer: "Ethereum, Polygon, Solana, Avalanche, BSC and L2s with ERC‑20/721/1155/1400 and SPL. We recommend based on cost, liquidity, and compliance needs."
    },
    {
      question: "How do compliance and investor eligibility work?",
      answer: "KYC/AML and jurisdiction checks are embedded. Allow/deny lists and accreditation are enforced at the token level so only eligible wallets can hold or trade."
    }
  ];

  return (
    <section className="relative bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">

        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="relative w-fit mb-4">
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              <span className="text-black">FREQUENTLY ASKED </span>
              <span className="text-[#15a36e]">QUESTIONS</span>
            </h2>
            <div
              className="absolute bottom-0 left-0 bg-black"
              style={{
                width: 'calc(100% + 200px)',
                height: '0.5px'
              }}
            ></div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-6">
            <p
              className="text-sm sm:text-base md:text-lg text-black font-normal leading-relaxed max-w-3xl"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              These frequently asked questions might have the answer, but if not, our support team is just a message away!
            </p>

            <Link
              to="/contact"
              className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-600 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-md w-fit flex-shrink-0"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              Contact Our Team
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FAQ List - Full Width */}
        <div className="max-w-4xl">
          <div className="space-y-4">
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
        </div>
      </div>
    </section>
  );
}
