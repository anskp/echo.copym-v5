import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div 
      className="bg-white border border-white mb-4"
      style={{
        borderRadius: 15,
        boxShadow: "4px 4px 4px 0 rgba(84,82,82,0.25)"
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex justify-between items-center transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4 dm-sans">{question}</h3>
        <div className="flex-shrink-0 transition-transform duration-300 hidden">
          <span className="w-5 h-5 inline-block text-gray-500">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed dm-sans">{answer}</p>
        </div>
      </div>
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
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Support Info */}
          <div className="flex flex-col order-2 lg:order-1">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-40 text-center lg:text-left px-2 dm-sans">
              Frequently asked
              <br />
              questions
            </h3>
            <div 
              className="bg-white rounded-lg p-8 sm:p-10"
              style={{
                filter: "drop-shadow(2px 2px 2px rgba(84,82,82,0.25))",
                borderRadius: 15
              }}
            >
              <div 
                className="mb-4 sm:mb-6 border border-white"
                style={{ borderRadius: 15 }}
              >
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 text-center lg:text-left dm-sans">
                  Still have a question ?
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center lg:text-left dm-sans">
                  Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
                </p>
              </div>
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto dm-sans"
                style={{
                  borderRadius: 15,
                  background: "linear-gradient(179.93deg, rgba(35,189,131,0.8) 0.13%, rgba(16,146,97,0.8) 76.14%)"
                }}
              >
                Explore Assets
              </Link>
            </div>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
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


