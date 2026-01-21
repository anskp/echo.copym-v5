import React from 'react';
import { motion } from "framer-motion";
import { Landmark } from "lucide-react";

const insights = [
  {
    quote: "Tokenization is a key enabler for the future of digital capital markets, improving efficiency, transparency, and access.",
    name: "Sergio Ermotti",
    title: "CEO of UBS",
    company: "UBS",
  },
  {
    quote: "Tokenization has the potential to redefine how assets are issued, traded, and managed globally.",
    name: "Noel Quinn",
    title: "CEO of HSBC",
    company: "HSBC",
  },
  {
    quote: "Digital assets and tokenization are becoming integral to the evolution of financial market infrastructure.",
    name: "Robin Vince",
    title: "CEO of BNY Mellon",
    company: "BNY Mellon",
  },
  {
    quote: "Tokenization and blockchain technology are reshaping how value is represented and exchanged in the digital economy.",
    name: "Alfred Kelly",
    title: "Former CEO of Visa",
    company: "Visa",
  },
  {
    quote: "The future of commerce will be powered by tokenized assets, real-time settlement, and programmable money.",
    name: "Michael Miebach",
    title: "CEO of Mastercard",
    company: "Mastercard",
  },
  {
    quote: "Tokenization will play a central role in how financial products are structured and distributed in the future.",
    name: "Abigail Johnson",
    title: "CEO of Fidelity Investments",
    company: "Fidelity",
  },
  {
    quote: "Blockchain-based tokenization represents a structural shift in the financial system rather than a passing trend.",
    name: "James Gorman",
    title: "Former CEO of Morgan Stanley",
    company: "Morgan Stanley",
  },
  {
    quote: "Tokenization will enable new efficiencies across custody, settlement, and asset servicing.",
    name: "Christian Sewing",
    title: "CEO of Deutsche Bank",
    company: "Deutsche Bank",
  },
  {
    quote: "Blockchain and tokenization are transforming how capital markets operate at a fundamental level.",
    name: "Ana Botín",
    title: "Executive Chair of Santander",
    company: "Santander",
  },
  {
    quote: "Tokenization will unlock previously illiquid assets and bring new participants into the financial ecosystem.",
    name: "Bill Winters",
    title: "CEO of Standard Chartered",
    company: "Standard Chartered",
  },
  {
    quote: "Asset tokenization could reach a market size of trillions of dollars by fundamentally reshaping ownership and liquidity.",
    name: "Strategic Analysis",
    title: "Boston Consulting Group Report",
    company: "BCG",
  },
  {
    quote: "Tokenization has the potential to redefine financial services by enabling faster settlement, fractional ownership, and assets.",
    name: "Expert Insights",
    title: "McKinsey & Company Research",
    company: "McKinsey",
  },
  {
    quote: "Distributed ledger technology and tokenized assets may significantly alter the future landscape of financial markets.",
    name: "Official View",
    title: "European Central Bank Oversight",
    company: "ECB",
  },
];

function InsightCard({ insight }) {
  return (
    <motion.div
      className="flex-shrink-0 flex flex-col gap-4 p-4 w-[350px] sm:w-[450px] md:w-[550px]"
    >
      {/* Brand Header - Pure Typography */}
      <h3 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter" style={{ fontFamily: 'Palanquin, sans-serif' }}>
        {insight.company}
      </h3>

      {/* Quote */}
      <p className="text-xl md:text-2xl text-[#111] leading-tight font-medium italic" style={{ fontFamily: 'Palanquin, sans-serif' }}>
        "{insight.quote}"
      </p>

      {/* Author Info */}
      <div className="pt-2">
        <p className="text-base font-bold text-black" style={{ fontFamily: 'Palanquin, sans-serif' }}>
          {insight.name}
        </p>
        <p className="text-sm text-[#444]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
          {insight.title}
        </p>
      </div>
    </motion.div>
  );
}

/** Infinite scrolling row component */
function InfiniteScrollingRow({ items, duration = 60 }) {
  // Triple the items for seamless scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-8">
      <motion.div
        className="flex gap-16 md:gap-24 px-6"
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: duration,
        }}
      >
        {duplicatedItems.map((insight, index) => (
          <InsightCard key={index} insight={insight} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 mb-12">
        {/* Main Title */}
        <div className="text-left mb-6 sm:mb-8 lg:mb-10">
          <div className="relative w-fit mb-3 sm:mb-4">
            <h2 className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold pb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-[#15a36e] uppercase">INSIGHT'</span><span className="text-black">s</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 hidden md:block"></div>

        <InfiniteScrollingRow items={insights} duration={30} />
      </div>
    </section>
  );
}