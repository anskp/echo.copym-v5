import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

// Using existing image imports - would ideally use specific product images but staying within project assets
import tiicon1 from '../../../components/icons/Tokenization/tiicon1.png';
import tiicon2 from '../../../components/icons/Tokenization/tiicon2.png';
import tiicon3 from '../../../components/icons/Tokenization/tiicon3.png';
import tiicon4 from '../../../components/icons/Tokenization/tiicon4.png';
import ticon4 from '../../../components/icons/Tokenization/ticon4.png';
const smallp2 = "/assets/Images/smallp2.png";

export default function HowItWorks() {
    const [showAll, setShowAll] = useState(false);

    const steps = [
        {
            id: "onboard",
            title: "Asset Onboarding",
            description: "Verified real-world or digital assets are onboarded with clear documentation, tokenized and listed with on-chain records.",
            icon: tiicon2,
            watermark: "HOW   THE "
        },
        {
            id: "fraction",
            title: "Fractional Ownership",
            description: "Each asset is divided into programmable tokens, allowing participants to invest in fractions instead of purchasing the entire asset.",
            icon: tiicon1,
            watermark: "COPYM"
        },
        {
            id: "market",
            title: "Buy, Sell & Trade",
            description: "Participants can acquire, trade or exit positions through an open marketplace driven by real-time supply and demand.",
            icon: tiicon4,
            watermark: "MARKETPLACE"
        },
        {
            id: "settle",
            title: "Smart Settlement",
            description: "Ownership transfers and revenue distribution are executed automatically via smart contracts – reducing intermediaries.",
            icon: ticon4,
            watermark: "WORKS"
        },
        {
            id: "secure",
            title: "Self Custodial Security",
            description: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: smallp2,
            watermark: "SECURE"
        },
        {
            id: "trust",
            title: "Compliance-First",
            description: "KYC, asset verification and regulatory safeguards are embedded by design, ensuring every transaction is built on trust.",
            icon: tiicon3,
            watermark: "TRUST"
        }
    ];

    // Determine which cards to show
    const visibleSteps = showAll ? steps : steps.slice(0, 4);

    return (
        <section className="w-full bg-white py-12 md:py-20 overflow-hidden relative">
            {/* Main Background Header Removed */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Staggered Grid Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 lg:gap-x-16">
                    <AnimatePresence mode="popLayout">
                        {visibleSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                transition={{
                                    duration: 0.5,
                                    delay: showAll && index >= 4 ? (index - 4) * 0.1 : 0
                                }}
                                className={`relative flex flex-col group items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:mt-48'}`}
                            >
                                {/* Watermark Background Text */}
                                <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none h-40 flex items-center justify-center z-0">
                                    <span
                                        className="text-[50px] sm:text-[100px] lg:text-[120px] font-black uppercase tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-center"
                                        style={{
                                            backgroundImage: 'conic-gradient(from 0deg at 50% 50%, rgba(26, 87, 64, 0.77) 1%, #000000 14%, rgba(43, 108, 84, 0.81) 36%, rgba(69, 140, 113, 0.87) 56%, #50997E 64%, rgba(0, 0, 0, 0.85) 77%, #7DD1B2 100%)'
                                        }}
                                    >
                                        {step.watermark}
                                    </span>
                                </div>

                                {/* Card Wrapper - Custom size pattern: Big(0), Small(1), Small(2), Big(3), Big(4), Small(5) */}
                                <div className={`relative z-10 w-full mx-auto max-w-[260px] ${[0, 3, 4].includes(index) ? 'sm:max-w-[280px]' : 'sm:max-w-[220px]'}`}>
                                    {/* Card Body */}

                                    {/* Outer Container with gap - light gray/mint background */}
                                    <div className="relative aspect-[4/5] bg-[#e8f0ed]/70 rounded-[1.5rem] p-5 mb-4 transition-transform duration-500 flex items-center justify-center">
                                        {/* Inner teal-tinted box - narrower width */}
                                        <div className="w-[75%] h-full flex items-center justify-center bg-gradient-to-br from-[#d0e8e0]/60 to-[#c5e0d5]/40 rounded-[1rem] relative overflow-visible">
                                            {/* Plus Icon Overlay - positioned at top-right edge of inner box */}
                                            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20">
                                                {/* Outer ring */}
                                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white flex items-center justify-center p-1">
                                                    {/* Inner ring with white surface */}
                                                    <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 flex items-center justify-center shadow-lg shadow-gray-200/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                                        style={{ boxShadow: '0 4px 20px rgba(21, 163, 110, 0.15), 0 2px 8px rgba(0,0,0,0.08)' }}>
                                                        <Plus className="w-7 h-7 sm:w-8 sm:h-8 text-[#15A36E]" strokeWidth={2} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Darker green sphere behind icon */}
                                            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#a8d4c0]/70"></div>
                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className={`relative z-10 object-contain drop-shadow-2xl transition-all duration-500 ${[0, 3, 4].includes(index) ? 'w-28 h-28 sm:w-40 sm:h-40' : 'w-20 h-20 sm:w-28 sm:h-28'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="px-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {step.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Footer Link - Toggles the cards */}
                <div className="mt-20 md:mt-24 text-left px-4 relative z-20">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="text-gray-900 font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300 group underline underline-offset-8 decoration-2 decoration-[#10b981]"
                    >
                        {showAll ? "Show Less Process" : "View Marketplace Process"}
                        <div className={`w-8 h-8 rounded-full bg-[#10b981] flex items-center justify-center text-white transition-transform duration-500 ${showAll ? 'rotate-180' : ''}`}>
                            {showAll ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </div>
                    </button>
                </div>
            </div>
        </section >
    );
}
