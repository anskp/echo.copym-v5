import React from 'react';
import { motion } from 'framer-motion';

export default function TradableAssets() {
    const assets = [
        {
            image: "/assets/Images/icons/tradee1.png",
            title: "RWA-Wholesale"
        },
        {
            image: "/assets/Images/icons/tradee2.png",
            title: "Treasury & Fixed Income Tokens"
        },
        {
            image: "/assets/Images/icons/tradee3.png",
            title: "Dual LP vs. Yield Farms"
        },
        {
            image: "/assets/Images/icons/tradee4.png",
            title: "Custom Tokenized Opportunities designed with banks and partners"
        }
    ];

    return (
        <section className="w-full bg-white py-20 pb-32 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="relative w-fit mb-12 sm:mb-16">
                    <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-black">What you can trade on</span> <span className="text-[#10b981]">CopyM</span> <span className="text-black">?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 40px)', height: '2px' }}></div>
                </div>

                {/* List of Assets */}
                <div className="flex flex-col gap-6">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black text-white rounded-sm overflow-hidden flex items-center h-24 sm:h-28 md:h-32 group hover:bg-black/90 transition-colors"
                        >
                            {/* Image Container - Fixed Width */}
                            <div className="w-1/3 sm:w-1/4 h-full relative overflow-hidden bg-black/50">
                                <img
                                    src={asset.image}
                                    alt={asset.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Text Container */}
                            <div className="flex-1 px-6 sm:px-8 flex items-center">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold uppercase tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {asset.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
