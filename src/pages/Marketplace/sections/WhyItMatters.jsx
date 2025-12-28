import React from 'react';
import { motion } from 'framer-motion';

export default function WhyItMatters() {
    const benefits = [
        "Unlocks liquidity for traditionally illiquid assets",
        "Democratizes access through fractional investing",
        "Increases transparency with verifiable on-chain records",
        "Reduces cost and friction through automation",
        "Enables global, borderless participation under a compliant framework"
    ];

    return (
        <section className="w-full bg-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <div className="relative w-fit mb-4">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-white">Why the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-white">matters ?</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-white" style={{ width: 'calc(100% + 100px)', height: '1px' }}></div>
                    </div>
                    <p className="text-lg text-gray-400 max-w-3xl">
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
                    </p>
                </div>

                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="w-full py-8 px-6 border border-[#10b981] rounded-[24px] bg-transparent transition-colors hover:bg-[#10b981]/10 flex items-center justify-center group cursor-default"
                        >
                            <span className="text-white text-lg sm:text-xl font-medium tracking-wide text-center">
                                {benefit}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
