import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Blog/Breadcrumbs';
import SectionContainer from '../../components/Layout/SectionContainer';
import { FiArrowLeft, FiBook, FiLink } from 'react-icons/fi';

// Sample glossary term data (in production, this would come from an API/CMS)
const glossaryTermData = {
  term: "Tokenization",
  pronunciation: "/ˈtoʊkənɪˈzeɪʃən/",
  partOfSpeech: "noun",
  shortDefinition: "The process of converting rights to an asset into a digital token on a blockchain.",
  fullDefinition: `Tokenization is the process of converting ownership rights or value of a real-world asset into a digital token on a blockchain. These tokens represent fractional or full ownership of the underlying asset and can be traded, transferred, or stored like other digital assets.`,
  detailedExplanation: `
    <p>Tokenization has emerged as a transformative technology in the financial and investment sectors, enabling previously illiquid assets to become more accessible and tradable.</p>
    
    <h3>How Tokenization Works</h3>
    <p>The tokenization process involves several key steps:</p>
    <ul>
      <li><strong>Asset Selection:</strong> Identifying an asset suitable for tokenization (real estate, art, commodities, etc.)</li>
      <li><strong>Valuation:</strong> Determining the total value of the asset</li>
      <li><strong>Legal Structuring:</strong> Establishing the legal framework that links tokens to asset rights</li>
      <li><strong>Token Creation:</strong> Minting digital tokens on a blockchain that represent ownership shares</li>
      <li><strong>Distribution:</strong> Making tokens available to investors through primary or secondary markets</li>
    </ul>
    
    <h3>Benefits of Tokenization</h3>
    <ul>
      <li><strong>Fractional Ownership:</strong> Allows multiple investors to own portions of high-value assets</li>
      <li><strong>Increased Liquidity:</strong> Enables trading of traditionally illiquid assets</li>
      <li><strong>Transparency:</strong> Blockchain provides immutable records of ownership and transactions</li>
      <li><strong>Accessibility:</strong> Lowers barriers to entry for retail investors</li>
      <li><strong>Efficiency:</strong> Reduces intermediaries and streamlines settlement processes</li>
    </ul>
  `,
  examples: [
    "A $10 million commercial building is tokenized into 100,000 tokens, each representing $100 of ownership.",
    "Fine art can be tokenized, allowing multiple collectors to own shares of a valuable painting.",
    "Gold reserves can be tokenized, enabling investors to buy and sell digital representations of physical gold."
  ],
  relatedTerms: [
    { term: "Blockchain", slug: "blockchain" },
    { term: "Smart Contract", slug: "smart-contract" },
    { term: "Fractional Ownership", slug: "fractional-ownership" },
    { term: "Digital Asset", slug: "digital-asset" }
  ],
  relatedArticles: [
    { 
      title: "Understanding Real-World Asset Tokenization", 
      slug: "understanding-rwa-tokenization",
      category: "Education"
    },
    { 
      title: "Gold Tokenization: Traditional Meets Digital", 
      slug: "gold-tokenization-guide",
      category: "Education"
    }
  ],
  lastUpdated: "March 20, 2026"
};

export default function GlossaryTerm() {
  const { slug } = useParams();
  const [term] = useState(glossaryTermData);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-black py-16 sm:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-cyan-400/20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-10">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Breadcrumbs items={[
              { label: 'Blog', path: '/blog' },
              { label: 'Glossary', path: '/glossary' },
              { label: term.term }
            ]} />
          </motion.div>

          {/* Term Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl"
          >
            <Link 
              to="/glossary"
              className="inline-flex items-center gap-2 text-white/70 hover:text-[#15a36e] transition-colors mb-6 text-sm"
            >
              <FiArrowLeft className="w-4 h-4" />
              Back to Glossary
            </Link>

            {/* Term Title */}
            <h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              {term.term}
            </h1>

            {/* Pronunciation & Part of Speech */}
            <div className="flex flex-wrap items-center gap-4 text-white/70 mb-6">
              {term.pronunciation && (
                <span className="text-lg italic">{term.pronunciation}</span>
              )}
              {term.partOfSpeech && (
                <span className="text-sm italic">({term.partOfSpeech})</span>
              )}
            </div>

            {/* Short Definition */}
            <p 
              className="text-lg sm:text-xl text-white/90 leading-relaxed mb-4"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              {term.shortDefinition}
            </p>

            {/* Last Updated */}
            {term.lastUpdated && (
              <p className="text-xs text-white/50">
                Last updated: {term.lastUpdated}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <SectionContainer padding="py-12" bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Full Definition */}
            <div className="mb-8">
              <h2 
                className="text-2xl font-bold text-black mb-4"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Definition
              </h2>
              <p 
                className="text-base sm:text-lg text-gray-800 leading-relaxed"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                {term.fullDefinition}
              </p>
            </div>

            {/* Detailed Explanation */}
            <div className="mb-8">
              <h2 
                className="text-2xl font-bold text-black mb-4"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                Detailed Explanation
              </h2>
              <div 
                className="text-gray-800 leading-relaxed space-y-4"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: term.detailedExplanation }}
              />
            </div>

            {/* Examples */}
            {term.examples && term.examples.length > 0 && (
              <div className="mb-8 bg-gray-50 rounded-xl p-6 border border-black/5">
                <h2 
                  className="text-xl font-bold text-black mb-4 flex items-center gap-2"
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  <FiBook className="w-5 h-5 text-[#15a36e]" />
                  Examples
                </h2>
                <ul className="space-y-3">
                  {term.examples.map((example, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#15a36e] mt-2 flex-shrink-0"></div>
                      <span 
                        className="text-sm sm:text-base text-gray-800"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                      >
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Related Terms */}
            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="mb-8">
                <h2 
                  className="text-2xl font-bold text-black mb-4"
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  Related Terms
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.relatedTerms.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/glossary/${related.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-[#15a36e] hover:text-white rounded-full text-sm font-semibold transition-all duration-300"
                      style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      <FiLink className="w-3.5 h-3.5" />
                      {related.term}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Related Articles */}
            {term.relatedArticles && term.relatedArticles.length > 0 && (
              <div className="mb-8 pt-8 border-t border-black/10">
                <h2 
                  className="text-2xl font-bold text-black mb-4"
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  Related Articles
                </h2>
                <div className="space-y-3">
                  {term.relatedArticles.map((article, index) => (
                    <Link
                      key={index}
                      to={`/blog/${article.category?.toLowerCase()}/${article.slug}`}
                      className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                    >
                      <span className="text-xs font-bold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        {article.category}
                      </span>
                      <h4 
                        className="text-base font-bold text-black mt-1 group-hover:text-[#15a36e] transition-colors"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                      >
                        {article.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </SectionContainer>
    </div>
  );
}
