import React from 'react';
import { Box } from '@mui/material';
import HeroNew from './sections/HeroNew';
import HowItWorks from './sections/HowItWorks';
import Critical from './sections/Critical';
import FAQSection from './sections/FAQSection';
import TestimonialsSection from '../HomePage/sections/Testimonials.jsx';

const PrivacyAi = () => {
    return (
        <div className="min-h-screen bg-black">

            <HeroNew />
            <HowItWorks />
            <Critical />
            <FAQSection />
            <TestimonialsSection />
        </div>
    );
};

export default PrivacyAi;
