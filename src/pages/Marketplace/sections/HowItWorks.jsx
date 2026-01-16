import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import cardshades from '../../../components/images/cardshades.png';
import tiicon1 from '../../../components/icons/Tokenization/tiicon1.png';
import tiicon2 from '../../../components/icons/Tokenization/tiicon2.png';
import tiicon3 from '../../../components/icons/Tokenization/tiicon3.png';
import tiicon4 from '../../../components/icons/Tokenization/tiicon4.png';
import ticon4 from '../../../components/icons/Tokenization/ticon4.png';
const smallp2 = "/assets/Images/smallp2.png";

export default function HowItWorks() {
    const steps = [
        {
            title: "Asset Onboarding",
            description: "Verified real-world or digital assets are onboarded with clear documentation, then tokenized and listed with immutable on-chain records and transparent metadata.",
            icon: tiicon2,

        },
        {
            title: "Fractional Ownership",
            description: "Each asset is divided into programmable tokens, allowing participants to invest in fractions instead of purchasing the entire asset.",
            icon: tiicon1,

        },
        {
            title: "Buy, Sell & Trade",
            description: "Participants can acquire, trade or exit positions through an open marketplace driven by real-time supply and demand.",
            icon: tiicon4,

        },
        {
            title: "Smart Contract Settlement",
            description: "Ownership transfers, revenue distribution and settlements are executed automatically via smart contracts – reducing intermediaries, delays and errors.",
            icon: ticon4,

        },
        {
            title: "Self Custodial Security",
            description: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: smallp2,
            number: "05."
        },
        {
            title: "Compliance-First Architecture",
            description: "KYC, asset verification and regulatory safeguards are embedded by design, so every transaction is built on trust and future-ready compliance.",
            icon: tiicon3,
            number: "06."
        }
    ];

    const [constraint, setConstraint] = useState(0);
    const containerRef = useRef(null);
    const cardWidth = 320;
    const gap = 32;
    const cardTotalWidth = cardWidth + gap;

    // Calculate constraint based on number of cards
    React.useEffect(() => {
        const calculateConstraint = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const totalCardsWidth = steps.length * cardTotalWidth;
                const maxDrag = Math.max(0, totalCardsWidth - containerWidth);
                setConstraint(-maxDrag);
            }
        };

        calculateConstraint();
        window.addEventListener('resize', calculateConstraint);
        return () => window.removeEventListener('resize', calculateConstraint);
    }, [steps.length, cardTotalWidth]);

    return (
        <section className="w-full bg-[#f8f9fa] py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <div className="relative w-fit mb-4 mx-auto">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-black">How the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-black">Works</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium max-w-4xl mx-auto" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence <br className="hidden sm:block" />
                        that give you the edge in crypto trading
                    </p>
                </div>

                {/* Horizontal drag/swipe container */}
                <div
                    ref={containerRef}
                    className="relative overflow-hidden py-4 cursor-grab active:cursor-grabbing"
                >
                    <motion.div
                        className="flex pb-8"
                        style={{ gap: `${gap}px` }}
                        drag="x"
                        dragConstraints={{ left: constraint, right: 0 }}
                        dragElastic={0.2}
                        dragMomentum={true}
                        whileDrag={{ cursor: 'grabbing' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
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
                                drag={false}
                            >


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
                                        <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                                            <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
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
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
