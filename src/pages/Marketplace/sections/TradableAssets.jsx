import React from 'react';
import { motion } from 'framer-motion';

export default function TradableAssets() {
    return (
        <section className="w-full bg-white py-20 pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative w-fit mb-16">
                    <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        <span className="text-black">What you can trade on</span> <span className="text-[#10b981]">CopyM</span> <span className="text-black">?</span>
                    </h2>
                    <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 100px)', height: '1px' }}></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Decorative blur */}
                        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-gray-200 rounded-full blur-3xl opacity-50 z-0"></div>

                        {/* Placeholder image that looks like the glass buildings in wireframe */}
                        <img
                            src="/assets/Images/Buildings.png"
                            alt="Tradable Real World Assets"
                            className="relative z-10 w-full max-w-full object-contain transform scale-100 -translate-x-20 origin-center"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-xl sm:text-2xl font-bold text-black mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            Real-World Assets –
                        </h3>
                        <p className="text-lg text-gray-700 leading-relaxed font-medium max-w-md">
                            E.g- real estate, gold, commodities, private credit, bonds
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
