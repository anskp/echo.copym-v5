import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-white/20 last:border-b-0 mb-6">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 px-0 flex justify-between items-center hover:text-green-400 transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-white pr-4">{question}</h3>
        <div className="flex-shrink-0 transition-transform duration-300">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-green-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white/60" />
          )}
        </div>
      </button>
             <div 
         className={`overflow-hidden transition-all duration-300 ease-in-out ${
           isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
         }`}
       >
         <div className="pb-4">
           <p className="text-white/80 leading-relaxed">{answer}</p>
         </div>
       </div>
    </div>
  );
};

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Can I track all my crypto assets with Delta?",
      answer: "Connect to top exchanges like Binance, Coinbase, Kraken, and your on chain activity such as Bitcoin and Ethereum. Delta automatically pulls in your balances and transaction history."
    },
    {
      question: "What kind of insights do I get for my crypto?",
      answer: "Get real-time market analysis, portfolio performance tracking, risk assessment, and AI-powered investment recommendations to help you make informed decisions."
    },
    {
      question: "How secure is my investment data?",
      answer: "Your data is protected with bank-level security, end-to-end encryption, and we never store your private keys. Your assets remain in your control at all times."
    },
    {
      question: "What types of assets can I invest in?",
      answer: "From real estate and commodities to carbon credits and luxury assets - our platform offers fractional ownership of high-value investments that were previously out of reach."
    }
  ];

  return (
    <section className="relative">


      {/* Main Content */}
      <div className="relative z-10 bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FAQ Content */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
                         {/* Left Side - FAQ List */}
             <div className="lg:col-span-2">
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

            {/* Right Side - Support Info */}
            <div className="lg:col-span-1 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                  FAQs
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Still got questions?
                </p>
                <p className="text-white/70 text-base mb-8 leading-relaxed">
                  These frequently asked questions might have the answer, but if not, our support team is just a message away!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
