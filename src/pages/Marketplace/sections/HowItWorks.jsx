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
        <section className="w-full bg-white py-20 overflow-hidden relative">
            {/* Main Background Header - Watermark Style */}
            <div className="absolute top-0 left-0 w-full pointer-events-none select-none overflow-hidden h-[600px] flex flex-col items-center justify-start z-0 opacity-[0.03] pt-10">
                <h2 className="text-[100px] md:text-[180px] lg:text-[240px] font-black uppercase tracking-tighter leading-[0.8] text-center max-w-full px-4">
                    HOW THE COPYM<br />MARKETPLACE WORKS
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Staggered Grid Container */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 lg:gap-x-24">
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
                                className={`relative flex flex-col group ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                            >
                                {/* Watermark Background Text */}
                                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none h-40 flex items-center justify-center z-0">
                                    <span className="text-[70px] sm:text-[100px] lg:text-[120px] font-black text-black uppercase tracking-tighter whitespace-nowrap opacity-[0.05]">
                                        {step.watermark}
                                    </span>
                                </div>

                                {/* Card Wrapper */}
                                <div className="relative z-10 w-full sm:max-w-[400px] mx-auto">
                                    {/* Card Body */}

                                    {/* Inner Image/Icon Container */}
                                    <div className="relative aspect-[4/5] bg-[#e9ecef]/60 rounded-[2.5rem] overflow-hidden mb-6 flex items-center justify-center p-12 transition-transform duration-500">
                                        <div className="w-full h-full flex items-center justify-center bg-gray-50/50 rounded-[1.5rem] relative">
                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-2xl transition-all duration-500"
                                            />

                                            {/* Plus Icon Overlay */}
                                            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#10b981] text-white border-2 border-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
                                                <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
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
        </section>
    );
}
