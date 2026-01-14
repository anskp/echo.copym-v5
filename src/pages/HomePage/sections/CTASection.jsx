import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ctavdo from '../../../components/Videos/ctavdos.mp4';
export default function CTASection() {
    return (
        <section className="relative w-full py-8 sm:py-10 md:py-14 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                <div className="relative w-full h-[40vh] sm:h-[45vh] lg:h-[50vh] overflow-hidden">
                    {/* Background Video */}
                    <div className="absolute inset-0 w-full h-full">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={ctavdo} type="video/mp4" />

                        </video>

                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center px-6 sm:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-3 sm:mb-4 leading-tight" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                Turning assets into opportunities
                            </h2>
                            <Link
                                to="/contact"
                                className="inline-block bg-black px-6 py-3 sm:px-8 sm:py-4 hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 rounded"
                            >
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#15a36e] font-bold uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                    Invest in the revolution
                                </p>
                            </Link>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
