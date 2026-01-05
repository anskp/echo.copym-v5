import React from 'react';
import { motion } from 'framer-motion';

export default function HowItWorks() {
    const steps = [
        {
            num: "01.",
            title: "Asset Onboarding",
            desc: "Native on markets/brokers with AI-driven insights, predictive alarms, and real-time intelligence that give you the edge in crypto trading",
            icon: "/assets/Images/icons/t1.png",
            variant: "default"
        },
        {
            num: "02.",
            title: "Fractional Ownership",
            desc: "Assets are divided into programmable tokens, allowing participants to invest in fractions.",
            icon: "/assets/Images/icons/t2.png",
            variant: "featured"
        },
        {
            num: "03.",
            title: "Buy, Sell & Trade",
            desc: "Participants can acquire, trade or exit positions through an open marketplace.",
            icon: "/assets/Images/icons/t3.png",
            variant: "default"
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
                    <p className="text-lg text-gray-800 leading-relaxed font-medium max-w-3xl">
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-8 shadow-sm border flex flex-col justify-between relative overflow-hidden transition-all duration-300 h-[320px]
                            ${step.variant === 'featured' ? 'bg-white border-none text-black' : 'bg-white border-gray-100'}`}
                        >
                            {/* Background for Featured Card */}
                            {step.variant === 'featured' && (
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="/assets/Images/icons/Group1.png"
                                        alt=""
                                        className="w-full h-full object-cover opacity-20"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
                                </div>
                            )}

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                {step.variant === 'default' ? (
                                    <>
                                        <div className="text-5xl text-[#10b981] font-bold" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                            {step.num}
                                        </div>
                                        <div>
                                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                                                <img src={step.icon} alt={step.title} className="w-6 h-6 object-contain invert" />
                                            </div>
                                            <h3 className="text-xl font-bold text-black" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                                {step.title}
                                            </h3>
                                        </div>
                                    </>
                                ) : (
                                    /* Featured Card Layout */
                                    <>
                                        <div className="flex-1 flex flex-col justify-center">
                                            <h3 className="text-2xl font-bold text-black mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-700 font-medium leading-relaxed">
                                                {step.desc}
                                            </p>
                                        </div>
                                        <div className="w-full h-1/2 relative bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(/assets/Images/icons/Group2.png)` }}></div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
