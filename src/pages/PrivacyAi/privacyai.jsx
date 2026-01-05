import React from 'react';
import { Box } from '@mui/material';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Critical from './sections/Critical';

const PrivacyAi = () => {
    return (
        <Box className="min-h-screen bg-black text-white selection:bg-green-500 selection:text-white pt-20">
            <Hero />
            <HowItWorks />
            <Critical />
        </Box>
    );
};

export default PrivacyAi;
