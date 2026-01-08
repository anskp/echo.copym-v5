import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';


export default function WhyItMatters() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        fetch('/assets/lottie/copymelite.json')
            .then(response => response.json())
            .then(data => setAnimationData(data))
            .catch(error => console.error("Error loading Lottie animation:", error));
    }, []);

    return (
        <section
            className="w-full py-20 overflow-hidden relative"
            style={{
                backgroundImage: "url('/assets/Images/Lightgreenbg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
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

                {/* Lottie Animation Container */}
                <div className="relative w-full max-w-full mx-auto h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] flex items-center justify-center mt-8 sm:mt-0">
                    {animationData && (
                        <div className="w-full h-full flex items-center justify-center transform scale-150 sm:scale-125 md:scale-110 lg:scale-100">
                            <Lottie animationData={animationData} loop={true} className="w-full h-full" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
