import React from 'react';
import { Container, Typography } from '@mui/material';

const zerogassfee = '/assets/Images/zerogassfee.png';

const Intro = () => {
    return (
        <div className="bg-black py-20 relative overflow-hidden">
            <Container maxWidth="lg">
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-green-900 to-transparent opacity-50"></div>
                <Typography variant="h3" className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                    <span className="text-green-500">Zero Gas</span> at CopyM ?
                </Typography>
                <div className="max-w-4xl">
                    <Typography className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        At CopyM, zero gas is <span className="text-white font-semibold">not a feature - it's a design philosophy.</span>
                    </Typography>
                    <Typography className="text-gray-400 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        We abstract blockchain complexity so users can interact with tokenized assets without ever touching gas fees, while still benefiting from full on-chain security and transparency.
                    </Typography>
                </div>
                {/* Network graphic placeholder */}
                <div className="mt-16 relative w-full flex items-center justify-center">
                    <img
                        src={zerogassfee}
                        alt="Zero Gas Fee Mechanism"
                        className="max-w-full h-auto rounded-2xl shadow-2xl border border-green-900/30"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Intro;
