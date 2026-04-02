import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLink, FiCalendar } from 'react-icons/fi';
import { glossaryTerms } from './Glossary';
import Breadcrumbs from '../../components/Blog/Breadcrumbs';

// Helper function to find term by slug
const findTermBySlug = (slug) => {
  return glossaryTerms.find(term => term.slug === slug);
};

// Generate extended term data
const getExtendedTermData = (term) => {
  if (!term) return null;
  
  return {
    ...term,
    pronunciation: `/${term.term.toLowerCase().replace(/ /g, '-')}/`,
    partOfSpeech: "noun",
    fullDefinition: term.description,
    detailedExplanation: getDetailedExplanation(term),
    examples: getExamples(term),
    relatedTerms: getRelatedTerms(term),
    relatedArticles: getRelatedArticles(term),
    lastUpdated: "March 20, 2026"
  };
};

const getDetailedExplanation = (term) => `
  <p class="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">${term.description} This concept is fundamental to understanding blockchain technology and digital asset ecosystems.</p>
  
  <h3 class="text-base sm:text-lg font-bold text-gray-900 mt-8 mb-4">Understanding ${term.term}</h3>
  <p class="mb-4 text-gray-700 leading-relaxed">${term.term} plays a crucial role in the modern digital economy. As blockchain technology continues to evolve, concepts like ${term.term.toLowerCase()} have become increasingly important for investors, developers, and enthusiasts to understand.</p>
  
  <h3 class="text-base sm:text-lg font-bold text-gray-900 mt-8 mb-4">Key Characteristics</h3>
  <ul class="space-y-3 mb-6">
    <li class="flex items-start gap-3">
      <span class="w-1.5 h-1.5 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></span>
      <span class="text-gray-700"><strong class="text-gray-900">Digital-first:</strong> Exists primarily in digital form on blockchain networks</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="w-1.5 h-1.5 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></span>
      <span class="text-gray-700"><strong class="text-gray-900">Verifiable:</strong> Can be authenticated through cryptographic methods</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="w-1.5 h-1.5 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></span>
      <span class="text-gray-700"><strong class="text-gray-900">Transferable:</strong> Can be sent, received, and traded across networks</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="w-1.5 h-1.5 bg-[#15a36e] rounded-full mt-2 flex-shrink-0"></span>
      <span class="text-gray-700"><strong class="text-gray-900">Secure:</strong> Protected by cryptographic algorithms</span>
    </li>
  </ul>
  
  <h3 class="text-base sm:text-lg font-bold text-gray-900 mt-8 mb-4">Why It Matters</h3>
  <p class="mb-4 text-gray-700 leading-relaxed">Understanding ${term.term} is essential for anyone looking to participate in the digital asset ecosystem. Whether you're an investor, developer, or simply curious about blockchain technology, grasping this concept will help you navigate the space more effectively.</p>
`;

const getExamples = (term) => [
  `${term.term} is commonly used in blockchain networks for recording transactions.`,
  `Many platforms now support ${term.term.toLowerCase()} as part of their core functionality.`,
  `Understanding ${term.term.toLowerCase()} helps investors make more informed decisions.`
];

const getRelatedTerms = (currentTerm) => {
  const sameLetter = glossaryTerms.filter(t => t.letter === currentTerm.letter && t.slug !== currentTerm.slug);
  return sameLetter.slice(0, 6).map(t => ({ term: t.term, slug: t.slug }));
};

const getRelatedArticles = (term) => {
  return [
    { title: `Understanding ${term.term} in Depth`, slug: 'understanding-rwa-tokenization', category: 'Education' },
    { title: `How ${term.term} Impacts Digital Assets`, slug: 'future-compliant-marketplaces', category: 'Education' }
  ];
};

export default function GlossaryTerm() {
  const { slug } = useParams();
  const [termData, setTermData] = useState(null);

  useEffect(() => {
    const foundTerm = findTermBySlug(slug);
    if (foundTerm) {
      setTermData(getExtendedTermData(foundTerm));
    }
    window.scrollTo(0, 0);
  }, [slug]);

  if (!termData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-[#15a36e] mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium text-sm sm:text-base">Loading term...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12">

        {/* Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6 sm:mb-8"
        >
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Glossary', path: '/glossary' },
            { label: termData.term }
          ]} />
        </motion.div>

        {/* Term Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-[#15a36e]/10 text-[#15a36e] text-xs font-bold rounded-full uppercase tracking-wide">
              {termData.letter}
            </span>
            <span className="px-2.5 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wide">
              Glossary
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            {termData.term}
          </h1>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 mb-4 sm:mb-6">
            <span className="text-base sm:text-lg italic font-mono bg-gray-50 px-2 py-1 rounded">{termData.pronunciation}</span>
            <span className="text-sm italic text-gray-300">•</span>
            <span className="text-sm italic">{termData.partOfSpeech}</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            {termData.fullDefinition}
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <FiCalendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Updated: {termData.lastUpdated}
            </span>
          </div>
        </motion.div>

        {/* Divider */}
        <hr className="border-gray-200 mb-8 sm:mb-10" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Main Content - Full width on mobile, 3/4 on lg+ */}
          <div className="lg:col-span-3">

            {/* Detailed Explanation */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">About {termData.term}</h2>
              <div
                className="text-gray-700 leading-relaxed prose prose-sm sm:prose-base md:prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: termData.detailedExplanation }}
              />
            </motion.section>

            {/* Examples */}
            {termData.examples && termData.examples.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Examples</h2>
                <div className="space-y-3 sm:space-y-4">
                  {termData.examples.map((example, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#15a36e] flex items-center justify-center text-white font-bold text-xs mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1 flex-1">{example}</p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Related Articles */}
            {termData.relatedArticles && termData.relatedArticles.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 sm:mb-10 md:mb-12"
              >
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Articles</h2>
                <div className="space-y-3 sm:space-y-4">
                  {termData.relatedArticles.map((article, index) => (
                    <Link
                      key={index}
                      to={`/blog/${article.category?.toLowerCase()}/${article.slug}`}
                      className="group block py-3 sm:py-4 border-b border-gray-100 hover:border-[#15a36e] transition-colors last:border-0"
                    >
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        <div className="flex-1">
                          <span className="text-xs font-bold text-[#15a36e] uppercase tracking-wide">
                            {article.category}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 mt-1 sm:mt-2 group-hover:text-[#15a36e] transition-colors">
                            {article.title}
                          </h4>
                        </div>
                        <FiLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300 group-hover:text-[#15a36e] transition-colors mt-1 flex-shrink-0" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar - Stacks below content on mobile, right side on lg+ */}
          <aside className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Related Terms */}
              {termData.relatedTerms && termData.relatedTerms.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">Related Terms</h3>
                  <div className="flex flex-wrap gap-2">
                    {termData.relatedTerms.map((related) => (
                      <Link
                        key={related.slug}
                        to={`/glossary/${related.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#15a36e] hover:text-white border border-gray-300 hover:border-[#15a36e] rounded-lg text-xs sm:text-sm font-medium text-gray-700 transition-all duration-300"
                      >
                        <FiLink className="w-3.5 h-3.5" />
                        {related.term}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Info */}
              <div className="pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3 sm:mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-500">Letter</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 bg-gray-100 px-2 sm:px-3 py-1 rounded-lg">{termData.letter}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-xs sm:text-sm text-gray-500">Category</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 bg-gray-100 px-2 sm:px-3 py-1 rounded-lg">Glossary</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-xs sm:text-sm text-gray-500">Updated</span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">{termData.lastUpdated}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6 sm:pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Want to Learn More?</h3>
                <Link
                  to="/blog"
                  className="block w-full bg-[#15a36e] hover:bg-[#128a5c] text-white text-center py-2.5 sm:py-3 rounded-lg font-semibold text-xs sm:text-sm transition-colors"
                >
                  Visit Blog
                </Link>
              </div>
            </motion.div>
          </aside>

        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-gray-200"
        >
          <div className="bg-gray-50 rounded-lg p-4 sm:p-5 md:p-6">
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-2 sm:mb-3">Disclaimer</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              This content is for informational and educational purposes only and does not constitute financial, legal, or investment advice. The information provided is based on generally accepted definitions and may vary depending on context. Always conduct your own research and consult with qualified professionals before making any investment or financial decisions.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
