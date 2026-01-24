import React from 'react';
import { Box } from '@mui/material';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import HowItWorks from './sections/HowItWorks';
import WhyItMatters from './sections/WhyItMatters';
import FAQSection from './sections/FAQSection';


const ZeroGas = () => {
    return (
        <div className="min-h-screen bg-black">
            <Hero />
            <Intro />
            <HowItWorks />
            <WhyItMatters />
            <FAQSection />

        </div>
    );
};

export default ZeroGas;
