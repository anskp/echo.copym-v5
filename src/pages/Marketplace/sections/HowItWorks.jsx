import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


// Using existing image imports - would ideally use specific product images but staying within project assets
import tiicon1 from '../../../components/icons/Tokenization/tiicon1.png';
import tiicon2 from '../../../components/icons/Tokenization/tiicon2.png';
import tiicon3 from '../../../components/icons/Tokenization/tiicon3.png';
import tiicon4 from '../../../components/icons/Tokenization/tiicon4.png';
import ticon4 from '../../../components/icons/Tokenization/ticon4.png';
const smallp2 = "/assets/Images/smallp2.png";

export default function HowItWorks() {


    const steps = [
        {
            id: "fraction",
            title: "Fractional Ownership",
            description: "Each asset is divided into programmable tokens, allowing participants to invest in fractions instead of purchasing the entire asset.",
            icon: tiicon1,
            watermark: "HOW"
        },
        {
            id: "trade-settle",
            title: "Buy, Trade & Settlement",
            description: "Participants can acquire, trade or exit positions through an open marketplace. Ownership transfers and revenue distribution are executed automatically via smart contracts.",
            icon: tiicon4,
            watermark: "THE"
        },
        {
            id: "secure",
            title: "Self Custodial Security",
            description: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: smallp2,
            watermark: "COPYM"
        },
        {
            id: "trust",
            title: "Compliance-First",
            description: "KYC, asset verification and regulatory safeguards are embedded by design, ensuring every transaction is built on trust.",
            icon: tiicon3,
            watermark: "WORKS"
        }
    ];

    // Determine which cards to show
    const visibleSteps = steps;

    return (
        <section className="w-full bg-black py-12 md:py-20 overflow-hidden relative">
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
                                    duration: 0.5,
                                    delay: index * 0.1
                                }}
                                className={`relative flex flex-col group items-center ${index % 2 === 0 ? 'md:items-start' : 'md:items-end md:mt-48'}`}
                            >
                                {/* Watermark Background Text */}
                                <div className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none h-40 flex items-center justify-center z-0">
                                    <span
                                        className="text-[50px] sm:text-[100px] lg:text-[120px] font-black uppercase tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-center"
                                        style={{
                                            backgroundImage: 'conic-gradient(from 180deg at 50% 50%, #18181b 0%, #059669 40%, #a7f3d0 50%, #059669 60%, #18181b 100%)'
                                        }}
                                    >
                                        {step.watermark}
                                    </span>
                                </div>

                                {/* Card Wrapper - Custom size pattern: Big(0), Small(1), Small(2), Big(3), Big(4), Small(5) */}
                                <div className={`relative z-10 w-full mx-auto max-w-[260px] ${[0, 3, 4].includes(index) ? 'sm:max-w-[280px]' : 'sm:max-w-[220px]'}`}>
                                    {/* Card Body */}

                                    {/* Outer Container with gap - light gray/mint background */}
                                    {/* Outer Container with gap - Dark Glass Theme */}
                                    <div className="relative aspect-[4/5] bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-5 mb-4 transition-transform duration-500 flex items-center justify-center">
                                        {/* Inner box - Subtle glass gradient */}
                                        <div className="w-[75%] h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-[1rem] relative overflow-visible">
                                            {/* Plus Icon Overlay - positioned at top-right edge of inner box */}
                                            {/* Logo Only - positioned at top-right edge */}
                                            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-20">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 hover:scale-110 drop-shadow-xl">
                                                    <img
                                                        src="/assets/copym/png/Copym-05.png"
                                                        alt="Add"
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                            </div>
                                            {/* Emerald glow behind icon */}
                                            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-emerald-500/20 blur-2xl"></div>
                                            <img
                                                src={step.icon}
                                                alt={step.title}
                                                className={`relative z-10 object-contain drop-shadow-2xl transition-all duration-500 ${[0, 3, 4].includes(index) ? 'w-28 h-28 sm:w-40 sm:h-40' : 'w-20 h-20 sm:w-28 sm:h-28'}`}
                                            />
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="px-2">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-medium" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                            {step.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>


            </div>
        </section >
    );
}
