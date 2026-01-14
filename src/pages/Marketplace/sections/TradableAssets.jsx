import React from 'react';
import { motion } from 'framer-motion';

export default function TradableAssets() {
    const assets = [
        {
            image: "/assets/Images/icons/tradee1.png",
            title: "Real-World Assets"
        },
        {
            image: "/assets/Images/icons/tradee2.png",
            title: "Revenue & Profit-Sharing Tokens"
        },
        {
            image: "/assets/Images/icons/tradee3.png",
            title: "Brand, IP and Digital Assets"
        },
        {
            image: "/assets/Images/icons/tradee4.png",
            title: "Custom Tokenized Opportunities designed with issuers and partners"
        }
    ];

    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 pb-20 sm:pb-32 overflow-hidden">
            <div className="max-w-3xl sm:max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="relative w-fit mb-10 sm:mb-12 md:mb-16">
                    <h2 className="inline-flex items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-black">What you can trade on</span> <span className="text-[#10b981]">CopyM</span> <span className="text-black">?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-black w-full sm:w-[calc(100%+40px)]" style={{ height: '2px' }}></div>
                </div>

                {/* List of Assets */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {assets.map((asset, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-black text-white rounded-sm overflow-hidden flex items-center h-24 sm:h-24 md:h-32 lg:h-40 group"
                        >
                            {/* Image Container */}
                            <div className="w-[35%] sm:w-[30%] md:w-[25%] h-full relative overflow-hidden flex items-end justify-center bg-black">
                                <img
                                    src={asset.image}
                                    alt={asset.title}
                                    className={`w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-115 
                                        ${index === 1 ? 'scale-100 translate-y-2 -translate-x-6' :
                                            index === 3 ? 'scale-110 -translate-x-4' :
                                                'scale-110'}`}
                                />
                            </div>

                            {/* Text Container */}
                            <div className="flex-1 px-4 sm:px-6 md:px-8 flex items-center">
                                <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
