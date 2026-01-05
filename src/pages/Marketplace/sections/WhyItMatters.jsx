import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, DollarSign, Globe, Lock } from 'lucide-react';

export default function WhyItMatters() {
    return (
        <section className="w-full bg-[#e6fcf5] py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="relative w-fit mb-4">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-black">Why the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-black">matters ?</span>
                        </h2>
                        <div className="absolute bottom-0 left-0 bg-black" style={{ width: 'calc(100% + 100px)', height: '1px' }}></div>
                    </div>
                    <p className="text-lg text-gray-700 font-medium max-w-3xl leading-relaxed">
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
                    </p>
                </div>

                {/* Diagram Container */}
                <div className="relative w-full max-w-4xl mx-auto h-[400px] sm:h-[500px] flex items-center justify-center">

                    {/* SVG Connector Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {/* Lines connecting center to nodes - adjusted for responsiveness via % */}
                        <line x1="50%" y1="50%" x2="20%" y2="30%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                        <line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
                    </svg>

                    {/* Center Node */}
                    <div className="absolute z-20 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full shadow-lg flex items-center justify-center p-6">
                        <img src="/assets/copym/png/Copym-02-1.png" alt="CopyM" className="w-full h-auto object-contain" />
                    </div>

                    {/* Top Left Node */}
                    <div className="absolute top-[15%] left-[5%] sm:left-[10%] max-w-[180px] sm:max-w-[220px] z-10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-2 border border-[#10b981]/30">
                            <Cpu className="text-[#10b981] w-6 h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black uppercase">Incentivized participation</p>
                        <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">Rewards for ecosystem growth</p>
                    </div>

                    {/* Top Right Node */}
                    <div className="absolute top-[15%] right-[5%] sm:right-[10%] max-w-[180px] sm:max-w-[220px] z-10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-2 border border-[#10b981]/30">
                            <Globe className="text-[#10b981] w-6 h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black uppercase">Borderless Access</p>
                        <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">Global trading opportunities</p>
                    </div>

                    {/* Bottom Left Node */}
                    <div className="absolute bottom-[15%] left-[5%] sm:left-[10%] max-w-[180px] sm:max-w-[220px] z-10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-2 border border-[#10b981]/30">
                            <DollarSign className="text-[#10b981] w-6 h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black uppercase">Lower barrier to entry</p>
                        <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">Fractional investment models</p>
                    </div>

                    {/* Bottom Right Node */}
                    <div className="absolute bottom-[15%] right-[5%] sm:right-[10%] max-w-[180px] sm:max-w-[220px] z-10 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-2 border border-[#10b981]/30">
                            <Lock className="text-[#10b981] w-6 h-6" />
                        </div>
                        <p className="text-xs sm:text-sm font-bold text-black uppercase">Verifiable ownership</p>
                        <p className="text-[10px] sm:text-xs text-gray-600 hidden sm:block">Secure on-chain records</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
