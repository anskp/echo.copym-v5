import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            num: "01.",
            title: "Asset Onboarding",
            desc: "Verified real-world or digital assets are onboarded with clear documentation, then tokenized and listed with immutable on-chain records and transparent metadata.",
            icon: "📝"
        },
        {
            num: "02.",
            title: "Fractional Ownership",
            desc: "Each asset is divided into programmable tokens, allowing participants to invest in fractions instead of purchasing the entire asset.",
            icon: "🍰"
        },
        {
            num: "03.",
            title: "Buy, Sell & Trade",
            desc: "Participants can acquire, trade or exit positions through an open marketplace driven by real-time supply and demand.",
            icon: "💹"
        },
        {
            num: "04.",
            title: "Smart Contract Settlement",
            desc: "Ownership transfers, revenue distribution and settlements are executed automatically via smart contracts – reducing intermediaries, delays and errors.",
            icon: "🤝"
        },
        {
            num: "05.",
            title: "Self-Custodial Security",
            desc: "Users maintain full control and verifiable ownership of their positions through secure blockchain wallets.",
            icon: "🔒"
        },
        {
            num: "06.",
            title: "Compliance-First Architecture",
            desc: "KYC, asset verification and regulatory safeguards are embedded by design, so every transaction is built on trust and future-ready compliance.",
            icon: "⚖️"
        }
    ];

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group hover:shadow-md transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10b981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="text-4xl text-[#10b981] font-bold mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                {step.num}
                            </div>

                            {/* Decorative hexagon/circle background placeholder */}
                            <div className="absolute right-[-20px] top-[10px] opacity-10 pointer-events-none">
                                <div className="w-32 h-32 bg-[#10b981] rounded-full blur-3xl"></div>
                            </div>

                            <div className="mt-4">
                                <h3 className="text-xl font-bold text-black mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {step.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed font-medium">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

}
