import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import cardshades from '../../../components/images/cardshades.png';

export default function HowItWorks() {
    const steps = [
        {
            title: "Asset Onboarding",
            description: "Verified real-world or digital assets are onboarded with clear documentation, then tokenized and listed with immutable on-chain records and transparent metadata.",
            icon: "/assets/Images/icons/t1.png",
            badge: "Documentation",
            number: "01."
        },
        {
            title: "Fractional Ownership",
            description: "Each asset is divided into programmable tokens, allowing participants to invest in fractions instead of purchasing the entire asset.",
            icon: "/assets/Images/icons/t2.png",
            badge: "Accessibility",
            number: "02."
        },
        {
            title: "Buy, Sell & Trade",
            description: "Participants can acquire, trade or exit positions through an open marketplace driven by real-time supply and demand.",
            icon: "/assets/Images/icons/t3.png",
            badge: "Liquidity",
            number: "03."
        },
        {
            title: "Smart Contract Settlement",
            description: "Ownership transfers, revenue distribution and settlements are executed automatically via smart contracts – reducing intermediaries, delays and errors.",
            icon: "/assets/Images/icons/t1.png", // Using t1 icon for now, you can change if needed
            badge: "Automation",
            number: "04."
        },
        {
            title: "Self Custodial Security",
            description: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: "/assets/Images/icons/t2.png", // Using t2 icon for now, you can change if needed
            badge: "Control",
            number: "05."
        },
        {
            title: "Compliance-First Architecture",
            description: "KYC, asset verification and regulatory safeguards are embedded by design, so every transaction is built on trust and future-ready compliance.",
            icon: "/assets/Images/icons/t3.png", // Using t3 icon for now, you can change if needed
            badge: "Trust",
            number: "06."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        if (isHovered) return; // Pause when hovered

        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % steps.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [isHovered, steps.length]);

    return (
        <section className="w-full bg-[#f8f9fa] py-20 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="relative w-fit mb-4">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-black">How the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-black">Works</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 100px)', height: '1px' }}></div>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium max-w-3xl">
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
                    </p>
                </div>

                {/* Horizontal scrolling container */}
                <div
                    className="relative overflow-hidden py-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="flex space-x-8 pb-8" style={{ transform: `translateX(-${currentIndex * (320 + 32)}px)`, transition: isHovered ? 'none' : 'transform 0.5s ease-in-out' }}>
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex-shrink-0 w-80 group relative rounded-xl border-[6px] border-[#EEEEEE] bg-white overflow-hidden flex flex-col justify-end min-h-[420px] transition-all duration-300 shadow-sm hover:shadow-xl"
                            >
                                {/* Card Number (Top Left Default) */}
                                <div className="absolute top-5 left-5 z-20 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#10b981] block" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {step.number}
                                    </span>
                                </div>

                                {/* Top Part: Hover Image with Responsive Gradient */}
                                <div className="absolute top-0 left-0 w-full h-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden z-0">
                                    <img
                                        src={cardshades}
                                        alt=""
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/40 to-transparent"></div>
                                </div>

                                {/* Content Area - Fluid Height & Spacing */}
                                <div className="relative z-10 w-full p-6 flex flex-col justify-end transition-all duration-500 group-hover:h-1/2 group-hover:justify-start group-hover:pt-4">
                                    {/* Icon (Fades out and collapses on hover) */}
                                    <div className="transition-all duration-300 group-hover:opacity-0 group-hover:h-0 group-hover:mb-0 mb-5 overflow-hidden flex shrink-0">
                                        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center">
                                            <img src={step.icon} alt={step.title} className="w-7 h-7 object-contain" />
                                        </div>
                                    </div>

                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-2 leading-tight transition-all duration-300" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                        {step.title}
                                    </h3>

                                    {/* Revealable Content (Hover only) */}
                                    <div className="max-h-0 opacity-0 group-hover:max-h-[350px] group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden text-left flex flex-col pointer-events-none group-hover:pointer-events-auto">
                                        {step.description && (
                                            <p className="text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed font-medium mb-0" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                                {step.description}
                                            </p>
                                        )}

                                        {step.badge && (
                                            <div className="flex justify-center mt-1 pb-1">
                                                <span className="inline-block bg-[#10b981] text-white text-[10px] sm:text-[12px] font-semibold py-1.5 px-4 rounded-full shadow-md whitespace-nowrap active:scale-95 transition-transform">
                                                    {step.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {steps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? 'bg-[#10b981] w-6' : 'bg-gray-300'
                                }`}
                                aria-label={`Go to step ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
