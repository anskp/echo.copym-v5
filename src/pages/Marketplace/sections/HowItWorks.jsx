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
            title: "Buy, Trade & Settlement\u00A0",
            description: "Participate in a transparent marketplace where ownership and returns are automated through smart contracts.",
            icon: tiicon4,
            watermark: ""
        },
        {
            id: "secure",
            title: "Self Custodial Security",
            description: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: smallp2,
            watermark: ""
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
        <section className="w-full bg-black py-12 md:py-20 lg:pt-32 lg:pb-40 overflow-hidden relative">
            {/* Main Background Header Removed */}



            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                {/* Header */}


                {/* Staggered Grid Container */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 lg:gap-x-8">
                    {/* Shared Background Watermark "MARKETPLACE" for cards 2 & 3 area */}
                    <div className="absolute top-[480px] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 hidden lg:block overflow-visible">
                        <span
                            className="font-black uppercase tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-center lg:text-[140px] leading-none"
                            style={{
                                backgroundImage: 'radial-gradient(ellipse at center, #1C9065 0%, #088557 60%, rgba(0,0,0,0) 100%)'
                            }}
                        >
                            MARKETPLACE
                        </span>
                    </div>
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
                                className={`relative flex flex-col group items-center ${index === 0 ? 'md:items-start lg:mt-[-40px]' : (index === 1 ? 'md:items-end md:mt-48 lg:items-start lg:mt-[600px]' : (index === 2 ? 'md:items-start lg:items-start lg:mt-40' : 'md:items-end md:mt-48 lg:items-center lg:mt-[800px]'))}`}
                            >
                                {/* Card Wrapper - Side-by-side for cards 2 & 3 on large screens */}
                                <div className={`relative z-10 w-full mx-auto max-w-[320px] sm:max-w-[380px] lg:max-w-full 
                                    ${index === 1 ? 'lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 lg:mx-0 lg:translate-x-[20%]' :
                                        index === 2 ? 'lg:flex lg:flex-row lg:items-center lg:gap-10 lg:mx-0 lg:translate-x-[20%]' : ''}`}>

                                    {/* Visual Group - Constrains width of image/watermark for small cards */}
                                    <div className={`relative w-full mb-4 ${[1, 2].includes(index) ? 'max-w-[320px] lg:max-w-[150px] mx-auto lg:mx-0' : 'max-w-[320px] sm:max-w-[380px] lg:max-w-full mx-auto'} ${[1, 2].includes(index) ? 'lg:mb-0 lg:shrink-0' : ''}`}>

                                        {/* Watermark Background Text - Only for cards 1 & 4 */}
                                        {[0, 3].includes(index) && (
                                            <div className={`absolute pointer-events-none select-none z-0 
                                                ${index === 0 ? 'left-0 bottom-0' :
                                                    'right-0 bottom-0'}`}
                                            >
                                                <span
                                                    className={`font-black uppercase tracking-tighter whitespace-nowrap bg-clip-text text-transparent bg-center text-[80px] sm:text-[120px] lg:text-[140px] leading-none`}
                                                    style={{
                                                        backgroundImage: 'radial-gradient(circle, #1C9065 0%, #088557 50%, rgba(0,0,0,0) 90%)'
                                                    }}
                                                >
                                                    {step.watermark}
                                                </span>
                                            </div>
                                        )}

                                        {/* Card Body */}

                                        {/* Outer Container with gap - Dark Glass Theme (Ultra transparent to show watermark) */}
                                        <div className={`relative aspect-[4/5] bg-zinc-900/10 backdrop-blur-sm border border-white/10 rounded-[1.5rem] p-5 transition-transform duration-500 flex items-center justify-center w-full`}>
                                            {/* Inner box - Subtle glass gradient */}
                                            <div className="w-[75%] h-full flex items-center justify-center bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-[1rem] relative overflow-visible">
                                                {/* Logo Only - positioned conditionally */}
                                                <div className={`absolute z-20 ${[1, 2].includes(index) ? '-bottom-4 -left-4 sm:-bottom-5 sm:-left-5' : '-top-4 -right-4 sm:-top-5 sm:-right-5'}`}>
                                                    <div className="w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 hover:scale-110 drop-shadow-xl">
                                                        <img
                                                            src="/assets/copym/png/Copym-05.png"
                                                            alt="Add"
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </div>
                                                {/* Custom Radial Gradient Shadow - Increased Spreading Emerald */}
                                                <div
                                                    className={`absolute rounded-full blur-3xl opacity-50 ${[0, 3].includes(index) ? 'w-64 h-64' : 'w-52 h-52'}`}
                                                    style={{
                                                        background: 'radial-gradient(circle, #1C9065 0%, #088557 50%, rgba(0,0,0,0) 80%)'
                                                    }}
                                                ></div>
                                                <img
                                                    src={step.icon}
                                                    alt={step.title}
                                                    className={`relative z-10 object-contain drop-shadow-2xl transition-all duration-500 ${index === 0 ? 'w-36 h-36 -translate-y-6' : (index === 3 ? 'w-44 h-44' : 'w-32 h-32')} ${index === 3 ? 'translate-x-4' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <div className="pl-0 pr-6 w-fit max-w-full text-left flex flex-col">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 whitespace-nowrap" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
