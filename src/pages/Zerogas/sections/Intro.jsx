import React from 'react';
import { Container } from '@mui/material';
import SectionHeader from '../../../components/Layout/SectionHeader';

const zerogassfee = '/assets/Images/zerogassfee.png';

const Intro = () => {
    return (
        <div className="bg-black py-20 relative overflow-hidden">
            <Container maxWidth="lg">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-900 to-transparent opacity-50"></div>
                
                {/* Section Header with HomePage style */}
                <div className="mb-8 sm:mb-10 md:mb-12">
                    <div className="relative w-fit mb-3 sm:mb-4">
                        <h2
                            className="inline-flex items-baseline gap-1 text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase pb-1 text-white"
                            style={{ fontFamily: 'Palanquin, sans-serif' }}
                        >
                            <span className="text-[#15a36e]">Zero Gas</span>
                            <span className="text-white"> at CopyM ?</span>
                        </h2>
                        <div
                            className="absolute bottom-0 left-0 bg-white"
                            style={{
                                width: 'calc(100% + 160px)',
                                height: '0.5px'
                            }}
                        ></div>
                    </div>
                    
                    {/* Subtitle */}
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-normal leading-relaxed tracking-wide mt-3 sm:mt-4 mb-4"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                        At CopyM, zero gas is <span className="font-semibold">not a feature - it's a design philosophy.</span>
                    </p>
                    
                    {/* Additional description */}
                    <p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed tracking-wide"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                        We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
                    </p>
                </div>
                
                {/* Network graphic placeholder */}
                <div className="mt-16 relative w-full flex items-center justify-center">
                    <img
                        src={zerogassfee}
                        alt="Zero Gas Fee Mechanism"
                        className="max-w-full h-auto shadow-2xl border border-green-900/30"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Intro;
