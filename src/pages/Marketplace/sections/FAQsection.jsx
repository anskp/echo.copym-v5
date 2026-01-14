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
            textAlign: 'left'
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
            lineHeight: '1.6'
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQsection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How do I start investing on the marketplace?",
      answer: "Create an account, complete KYC in minutes, connect a wallet (or use custodial onboarding), and browse assets. Each listing shows minimum investment, risk band, and expected ROI."
    },
    {
      question: "What currencies and wallets are supported?",
      answer: "We support USDC on major chains and popular wallets like MetaMask and WalletConnect. Custodial wallets are available for beginners—fund with card or bank transfer."
    },
    {
      question: "Are these assets really backed by real-world value?",
      answer: "Yes. All listings are legally structured and backed by off-chain asset documentation. Title, custody and cash flows are handled by regulated partners with on-chain proofs where available."
    },
    {
      question: "Can I sell my position later?",
      answer: "Many offerings enable secondary trading during open windows. Liquidity varies by asset class. Check each listing's 'Liquidity & Exit' section for specific rules and timelines."
    }
  ];

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 sm:mb-6 uppercase dm-sans px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <span className="text-black">FAQ's </span>
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 px-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            These FAQ's questions might have the answer, but if not, our support team is just a message away!
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - FAQ List */}
          <div className="order-2 lg:order-1">
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
            <div className="mb-6 sm:mb-8 md:mb-12 flex justify-center lg:justify-end">
              <img
                src="/assets/Images/ai-overvew.png"
                alt="FAQ Illustration"
                className="w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-lg h-auto object-contain"
                style={{
                  maxHeight: '300px'
                }}
              />
            </div>

            {/* Support Card */}

          </div>
        </div>
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-[34px] py-[10px] font-bold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base border-2 border-emerald-500 bg-[#1ab87d] text-white rounded-full"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}


