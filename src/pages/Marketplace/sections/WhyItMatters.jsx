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
            className="w-full pt-12 sm:pt-16 pb-0 overflow-hidden relative"
            style={{
                backgroundImage: "url('/assets/Images/Lightgreenbg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header at the top */}
                <div className="mb-12 text-center">
                    <div className="relative w-fit mb-4 mx-auto">
                        <h2 className="inline-flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold uppercase leading-tight pb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            <span className="text-black">Why the</span> <span className="text-[#10b981]">CopyM Marketplace</span> <span className="text-black">matters ?</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Master the markets with AI-driven insights, predictive alerts, and real-time intelligence <br className="hidden sm:block" />
                        that give you the edge in crypto trading
                    </p>
                </div>

                {/* Lottie Animation Container below the text */}
                <div className="relative w-full max-w-full mx-auto h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] flex items-center justify-center mt-4">
                    {animationData && (
                        <div className="w-full h-full flex items-center justify-center">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                autoplay={true}
                                className="w-full h-full max-w-full"
                                style={{
                                    width: '100%',
                                    height: '100%'
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
