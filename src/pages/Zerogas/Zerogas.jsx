import React from 'react';
import { Box } from '@mui/material';
import Hero from './sections/Hero';
import Intro from './sections/Intro';
import HowItWorks from './sections/HowItWorks';
import WhyItMatters from './sections/WhyItMatters';

const ZeroGas = () => {
    return (
        <Box className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-white pt-20">
            <Hero />
            <Intro />
            <HowItWorks />
            <WhyItMatters />
        </Box>
    );
};

export default ZeroGas;
