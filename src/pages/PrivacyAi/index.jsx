import React from 'react';
import { Box } from '@mui/material';
import HeroNew from './sections/HeroNew';
import HowItWorks from './sections/HowItWorks';
import Critical from './sections/Critical';
import FAQSection from './sections/FAQSection';

const PrivacyAi = () => {
    return (
        <div className="min-h-screen bg-black">

            <HeroNew />
            <HowItWorks />
            <Critical />
            <FAQSection />
        </div>
    );
};

export default PrivacyAi;
