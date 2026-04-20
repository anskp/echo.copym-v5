import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { createTheme, ThemeProvider as BWThemeProvider } from '@mui/material/styles';
import { generatePageSEO, generateWebPageSchema } from '../../utils/seo';
import CreateAssetModal from "./tokenizationDemo.jsx";

// Step 1: Import the new section components from the 'sections' subfolder
import Hero from "./sections/Hero.jsx";
import TokenizationProcess from "./sections/TokenizationProcess.jsx";
import MinimalTokenizationDashboard from "./sections/IssuerSection.jsx";
import HowToTokenize from "./sections/HowToTokenize.jsx";
import TokenDistribution from "./sections/TokenDistribution.jsx";
import TokenManagement from "./sections/TokenManagement.jsx";
import FAQSection from "./sections/FAQSection.jsx";
import FinalCTA from "./sections/FinalCTA.jsx";


export default function TokenizationHub() {
  // State management remains in the parent component
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => setIsCreateModalOpen(true);
  const closeCreateModal = () => setIsCreateModalOpen(false);

  const bwTheme = useMemo(() => createTheme({
    palette: {
      mode: 'dark',
      primary: { main: '#ffffff' },
      background: { default: '#000000', paper: '#000000' },
      text: { primary: '#ffffff', secondary: '#aaaaaa' },
    },
  }), []);

  const seo = generatePageSEO({
    title: 'Tokenization Platform - Tokenize Real-World Assets',
    description: "Tokenize real-world assets with CopyM. Secure, compliant, and accessible platform for digital asset issuance and management.",
    canonical: '/tokenization',
  });

  return (
    <div className="min-h-screen bg-white">
      {/* SEO */}
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.meta.description} />
        <link rel="canonical" href={seo.meta.canonical} />
        <meta property="og:type" content={seo.meta.og.type} />
        <meta property="og:title" content={seo.meta.og.title} />
        <meta property="og:description" content={seo.meta.og.description} />
        <meta property="og:image" content={seo.meta.og.image} />
        <meta property="og:url" content={seo.meta.og.url} />
        <meta name="twitter:card" content={seo.meta.twitter.card} />
        <meta name="twitter:title" content={seo.meta.twitter.title} />
        <meta name="twitter:description" content={seo.meta.twitter.description} />
        <meta name="twitter:image" content={seo.meta.twitter.image} />
        <script type="application/ld+json">
          {JSON.stringify(generateWebPageSchema({
            name: 'Tokenization Platform',
            description: 'Tokenize real-world assets with CopyM.',
            url: seo.meta.canonical,
          }))}
        </script>
      </Helmet>

      {/* Step 2: Render the section components in order */}
      <Hero />
      <TokenizationProcess onLaunchCreator={openCreateModal} />
      <MinimalTokenizationDashboard />
      <HowToTokenize />
      <TokenDistribution />
      <TokenManagement />


      <FAQSection />

      <FinalCTA />

      {/* The Modal remains in the parent component */}
      <BWThemeProvider theme={bwTheme}>
        <CreateAssetModal open={isCreateModalOpen} onClose={closeCreateModal} />
      </BWThemeProvider>
    </div>
  );
}
