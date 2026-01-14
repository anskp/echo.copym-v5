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

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is Copym and how does it work?",
      answer: "Copym is a real-world asset tokenization platform that allows you to invest in fractional ownership of high-value assets like real estate, commodities, carbon credits, and luxury items. Our marketplace connects investors with exclusive investment opportunities."
    },
    {
      question: "What types of assets can I invest in on Copym?",
      answer: "Our marketplace offers diverse real-world assets including commercial and residential real estate, precious metals, renewable energy projects, carbon credits, fine art, and luxury collectibles - all available for fractional ownership starting from small amounts."
    },
    {
      question: "How secure is my investment on Copym?",
      answer: "Your investments are protected with institutional-grade security, blockchain transparency, and regulatory compliance. All assets are legally tokenized and backed by real-world value, with your ownership recorded on secure blockchain technology."
    },
    {
      question: "What are the benefits of investing through Copym?",
      answer: "Enjoy passive income from rental yields and asset appreciation, diversify your portfolio with institutional-grade investments, access previously unavailable opportunities, and trade your fractional ownership anytime through our integrated marketplace."
    }
  ];

  return (
    <section className="relative py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-left mb-6 sm:mb-8 lg:mb-10">
          <div className="relative w-fit mb-3 sm:mb-4">
            <h2
              className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              <span className="text-[#15a36e]">FAQ's </span>

            </h2>
            <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 160px)', height: '0.5px' }}></div>
          </div>
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4 mb-4 sm:mb-6"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            These FAQ's questions might have the answer, but if not, our support team is just a message away!
          </p>

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
