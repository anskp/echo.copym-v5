import React from 'react';
import { Box } from '@mui/material';
import HeroNew from './sections/HeroNew';
import HowItWorks from './sections/HowItWorks'; 
import Critical from './sections/Critical';

const PrivacyAi = () => {
    return (
        <div className="min-h-screen bg-white">

            <HeroNew/>
            <HowItWorks/>
            <Critical/>
        </div>
    );
};

export default PrivacyAi;
