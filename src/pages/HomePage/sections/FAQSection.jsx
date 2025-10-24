import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div 
      className="bg-white border border-gray-200 mb-4"
      style={{
        borderRadius: 51,
        boxShadow: "4px 4px 4px 0 rgba(84,82,82,0.25)"
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-6 flex justify-between items-center transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <div className="flex-shrink-0 transition-transform duration-300">
          <span className="w-5 h-5 inline-block text-gray-500">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
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
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Support Info */}
          <div className="flex flex-col">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-40 text-left">
              Frequently asked
              <br />
              questions
            </h3>
            <div 
              className="bg-gray-50 rounded-lg p-8"
              style={{
                filter: "drop-shadow(4px 4px 4px rgba(84,82,82,0.25))",
                borderRadius: 55
              }}
            >
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-left">
                  Still have a question ?
                </h4>
                <p className="text-gray-600 leading-relaxed text-left">
                  Can't find the answer to your question? Send us an email and we'll get back to you as soon as possible!
                </p>
              </div>
               <Link
                 to="/marketplace"
                 className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold transition-all duration-300 transform hover:scale-105"
                 style={{
                   borderRadius: 55,
                   background: "linear-gradient(179.93deg, rgba(35,189,131,0.8) 0.13%, rgba(16,146,97,0.8) 76.14%)"
                   
                 }}
               >
                 Explore Assets
               </Link>
            </div>
          </div>

          {/* Right Side - FAQ List */}
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
