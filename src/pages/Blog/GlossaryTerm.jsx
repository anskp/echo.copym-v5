import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiLink, FiCalendar, FiClock, FiTwitter, FiLinkedin, FiMail, FiFacebook } from 'react-icons/fi';
import { glossaryTerms } from './Glossary';
import Breadcrumbs from '../../components/Blog/Breadcrumbs';
import { blogPosts } from '../../data/blogPosts';

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
    lastUpdated: "March 20, 2026",
    headings: generateHeadings(term)
  };
};

const generateHeadings = (term) => {
  return [
    { id: 'about', title: `About ${term.term}`, level: 2 },
    { id: 'key-characteristics', title: 'Key Characteristics', level: 2 },
    { id: 'why-it-matters', title: 'Why It Matters', level: 2 },
    { id: 'examples', title: 'Examples', level: 2 },
    { id: 'related-articles', title: 'Related Articles', level: 2 },
  ];
};

const getDetailedExplanation = (term) => `
  <p class="mb-6 text-base sm:text-lg text-gray-700 leading-relaxed">${term.description} This concept is fundamental to understanding blockchain technology and digital asset ecosystems.</p>

  <h3 id="key-characteristics" class="text-base sm:text-lg font-bold text-gray-900 mt-8 mb-4">Key Characteristics</h3>
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

  <p class="mb-6 text-gray-700 leading-relaxed">${term.term} plays a crucial role in the modern digital economy. As blockchain technology continues to evolve, concepts like ${term.term.toLowerCase()} have become increasingly important for investors, developers, and enthusiasts to understand.</p>

  <div class="blog-block blog-fast-fact">
    <div class="blog-fast-fact__label">Fast Fact</div>
    <p class="blog-fast-fact__value">The global market for ${term.term.toLowerCase()} is expected to grow significantly as blockchain adoption accelerates.</p>
  </div>

  <h3 id="why-it-matters" class="text-base sm:text-lg font-bold text-gray-900 mt-8 mb-4">Why It Matters</h3>
  <p class="mb-4 text-gray-700 leading-relaxed">Understanding ${term.term} is essential for anyone looking to participate in the digital asset ecosystem. Whether you're an investor, developer, or simply curious about blockchain technology, grasping this concept will help you navigate the space more effectively.</p>

  <div class="blog-block blog-quote">
    <p class="blog-quote__text">"${term.term} represents a paradigm shift in how we think about ownership, value transfer, and trust in the digital age."</p>
    <div class="blog-quote__author">
      <div class="blog-quote__avatar">C</div>
      <div>
        <div class="blog-quote__name">CopyM Team</div>
        <div class="blog-quote__role">Research & Education</div>
      </div>
    </div>
  </div>

  <p class="mb-6 text-gray-700 leading-relaxed">The practical applications of ${term.term} extend far beyond simple definitions. Real-world implementations are already transforming industries and creating new opportunities for innovation and growth.</p>

  <div class="blog-block blog-callout blog-callout--warning">
    <div class="blog-callout__content">
      <div class="blog-callout__title">Important Notice</div>
      <p class="blog-callout__text">Always verify regulatory requirements in your jurisdiction before engaging with ${term.term.toLowerCase()}.</p>
    </div>
  </div>

  <p class="mb-6 text-gray-700 leading-relaxed">The table below outlines the key aspects of ${term.term.toLowerCase()} for better understanding.</p>

  <div class="blog-block blog-table">
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>Digital Asset / Blockchain Concept</td>
        </tr>
        <tr>
          <td>Market Growth</td>
          <td>Projected significant growth through 2030</td>
        </tr>
        <tr>
          <td>Adoption</td>
          <td>Increasing among institutions and retail investors</td>
        </tr>
        <tr>
          <td>Regulatory Status</td>
          <td>Varies by jurisdiction</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="mb-6 text-gray-700 leading-relaxed">As the ecosystem continues to mature, staying informed about developments and best practices will be key to success in leveraging ${term.term.toLowerCase()} effectively.</p>

  <p class="mb-6 text-gray-700 leading-relaxed">For more detailed information and the latest updates, check out our related blog posts and research articles below.</p>

  <div class="blog-block blog-source">
    <div class="blog-source__title">Sources</div>
    <a href="/blog/education/understanding-rwa-tokenization" class="blog-source__link">Understanding Real-World Asset Tokenization - CopyM Blog</a>
  </div>
`;

const getExamples = (term) => [
  { text: `${term.term} is commonly used in blockchain networks for recording transactions.`, id: 'example-1' },
  { text: `Many platforms now support ${term.term.toLowerCase()} as part of their core functionality.`, id: 'example-2' },
  { text: `Understanding ${term.term.toLowerCase()} helps investors make more informed decisions.`, id: 'example-3' }
];

const getRelatedTerms = (currentTerm) => {
  const sameLetter = glossaryTerms.filter(t => t.letter === currentTerm.letter && t.slug !== currentTerm.slug);
  return sameLetter.slice(0, 6).map(t => ({ term: t.term, slug: t.slug }));
};

const getRelatedArticles = (term) => {
  const termLower = term.term.toLowerCase();
  const termWords = termLower.replace(/-/g, ' ').split(' ').filter(w => w.length > 2);
  
  // Score each blog post by relevance to the term
  const scoredPosts = blogPosts.map(post => {
    let score = 0;
    const titleLower = post.title.toLowerCase();
    const excerptLower = post.excerpt.toLowerCase();
    const contentLower = post.content.toLowerCase();
    
    // Check if term words appear in title (high priority)
    termWords.forEach(word => {
      if (titleLower.includes(word)) score += 10;
      if (excerptLower.includes(word)) score += 5;
      if (contentLower.includes(word)) score += 1;
    });
    
    // Bonus for exact term match
    if (titleLower.includes(termLower)) score += 20;
    if (excerptLower.includes(termLower)) score += 10;
    
    return { ...post, score };
  });
  
  // Sort by relevance score and take top 3
  const topPosts = scoredPosts
    .filter(post => post.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  
  // If we don't have enough relevant posts, fill with most recent ones
  if (topPosts.length < 3) {
    const usedIds = new Set(topPosts.map(p => p.id));
    const recentPosts = blogPosts
      .filter(p => !usedIds.has(p.id))
      .slice(0, 3 - topPosts.length);
    topPosts.push(...recentPosts);
  }
  
  return topPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    category: post.category,
    image: post.image,
    description: post.excerpt,
    date: post.date,
    readTime: post.readTime
  }));
};

export default function GlossaryTerm() {
  const { slug } = useParams();
  const [termData, setTermData] = useState(null);
  const [activeSection, setActiveSection] = useState('');
  const [leftSidebarFixed, setLeftSidebarFixed] = useState(true);
  const [rightSidebarFixed, setRightSidebarFixed] = useState(true);

  const mainContentRef = useRef(null);
  const leftSidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    const foundTerm = findTermBySlug(slug);
    if (foundTerm) {
      setTermData(getExtendedTermData(foundTerm));
    }
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle scroll spy and sidebar fixed/absolute switching
  useEffect(() => {
    const handleScroll = () => {
      if (mainContentRef.current) {
        const mainRect = mainContentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const mainContentEnd = mainRect.bottom < windowHeight;
        setLeftSidebarFixed(!mainContentEnd);
        setRightSidebarFixed(!mainContentEnd);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll spy for active section highlighting
  useEffect(() => {
    if (!termData) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    termData.headings?.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [termData]);

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(termData.term)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(termData.term)}&body=${encodeURIComponent(shareUrl)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      return;
    }

    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  };

  const scrollToHeading = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Breadcrumbs - Sticky on desktop, static on mobile */}
      <div className="hidden lg:block fixed top-0 left-0 right-0 bg-gray-50 z-40 pt-28">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 pb-8">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Glossary', path: '/glossary' },
            { label: termData.term }
          ]} />
        </div>
      </div>

      {/* Mobile Breadcrumbs - Static */}
      <div className="lg:hidden pt-28 sm:pt-32 pb-4">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Glossary', path: '/glossary' },
            { label: termData.term }
          ]} />
        </div>
      </div>

      {/* Spacer for desktop fixed breadcrumbs */}
      <div className="hidden lg:block h-28"></div>

      {/* Main Content Layout */}
      <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Table of Contents */}
          <aside ref={leftSidebarRef} className="hidden lg:block w-[200px] flex-shrink-0">
            <div className={leftSidebarFixed ? 'fixed left-[24px] sm:left-[48px] md:left-[64px] lg:left-[96px] xl:left-[128px] top-[220px] w-[200px] max-h-[calc(100vh-240px)] overflow-y-auto touch-auto' : 'max-h-[calc(100vh-240px)] overflow-y-auto touch-auto'} style={leftSidebarFixed ? { WebkitOverflowScrolling: 'touch' } : {}}>
              <div className="space-y-8 pb-8">
                <h3 className="text-sm font-bold mb-6 uppercase tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>Table of Contents</h3>
                <nav className="space-y-5">
                  {termData.headings?.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToHeading(item.id);
                        setActiveSection(item.id);
                      }}
                      className={`w-full text-left block text-sm transition-colors ${
                        activeSection === item.id
                          ? 'text-[#15a36e] font-semibold'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                      style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>

                {/* Divider */}
                <hr className="border-gray-200 my-8" />

                {/* Share */}
                <div>
                  <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>Share</h4>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare('twitter')}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#15a36e] hover:text-white transition-all"
                      aria-label="Share on Twitter"
                    >
                      <FiTwitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#15a36e] hover:text-white transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('facebook')}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#15a36e] hover:text-white transition-all"
                      aria-label="Share on Facebook"
                    >
                      <FiFacebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('email')}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#15a36e] hover:text-white transition-all"
                      aria-label="Share via Email"
                    >
                      <FiMail className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('copy')}
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#15a36e] hover:text-white transition-all"
                      aria-label="Copy Link"
                    >
                      <FiLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Middle Column: Main Content (Scrollable) */}
          <main ref={mainContentRef} className="flex-1 min-w-0">
            <article>
              {/* Term Header */}
              <header className="mb-12 pt-8 lg:pt-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <Link
                    to={`/glossary?letter=${termData.letter}`}
                    className="px-2.5 py-1 sm:px-3 sm:py-1 bg-[#15a36e]/10 text-[#15a36e] text-xs font-bold rounded-full uppercase tracking-wide hover:bg-[#15a36e] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {termData.letter}
                  </Link>
                  <Link
                    to="/glossary"
                    className="px-2.5 py-1 sm:px-3 sm:py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase tracking-wide hover:bg-[#15a36e] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Glossary
                  </Link>
                </div>

                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4 uppercase tracking-tight text-gray-900 break-words" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  {termData.term}
                </h1>

                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-500 mb-4 sm:mb-6">
                  <span className="text-xs sm:text-base md:text-lg italic font-mono bg-gray-50 px-2 py-1 rounded break-all">{termData.pronunciation}</span>
                  <span className="text-sm italic text-gray-300">•</span>
                  <span className="text-sm italic">{termData.partOfSpeech}</span>
                </div>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-3 py-5 border-y border-gray-100 mb-7">
                  <div className="flex items-center gap-3.5 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar className="w-3.5 h-3.5" />
                      Updated: {termData.lastUpdated}
                    </span>
                  </div>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  {termData.fullDefinition}
                </p>
              </header>

              {/* Divider */}
              <hr className="border-gray-200 mb-10" />

              {/* Content Sections */}
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-800 leading-relaxed"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                {/* Detailed Explanation */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  id="about"
                >
                  <h2 id="about-heading" className="text-2xl font-bold text-gray-900 mt-8 mb-4">About {termData.term}</h2>
                  <div
                    className="text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: termData.detailedExplanation }}
                  />
                </motion.section>

                {/* Examples */}
                {termData.examples && termData.examples.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    id="examples"
                    className="mt-12"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4 sm:mb-6">Examples</h2>
                    <div className="space-y-4">
                      {termData.examples.map((example, index) => (
                        <div key={example.id || index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#15a36e] flex items-center justify-center text-white font-bold text-[10px] mt-2">
                            {index + 1}
                          </span>
                          <p className="text-base text-gray-700 leading-relaxed pt-1 flex-1">{example.text || example}</p>
                        </div>
                      ))}
                    </div>
                  </motion.section>
                )}

                {/* Mobile Only - Related Terms, Quick Info & CTA */}
                <div className="lg:hidden mt-10 mb-10 space-y-8">
                  {/* Related Terms */}
                  {termData.relatedTerms && termData.relatedTerms.length > 0 && (
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Related Terms
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {termData.relatedTerms.map((related) => (
                          <Link
                            key={related.slug}
                            to={`/glossary/${related.slug}`}
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#15a36e] hover:text-white border border-gray-300 hover:border-[#15a36e] rounded-lg text-sm font-medium text-gray-700 transition-all duration-300"
                          >
                            <FiLink className="w-3.5 h-3.5" />
                            {related.term}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Quick Info */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Quick Info
                    </h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Letter</span>
                        <Link
                          to={`/glossary?letter=${termData.letter}`}
                          className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#15a36e] hover:text-white transition-all duration-300"
                        >
                          {termData.letter}
                        </Link>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-500">Category</span>
                        <Link
                          to="/glossary"
                          className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#15a36e] hover:text-white transition-all duration-300"
                        >
                          Glossary
                        </Link>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-sm text-gray-500">Updated</span>
                        <span className="text-sm font-semibold text-gray-900">{termData.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Subscription */}
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Subscribe for Updates
                    </h4>
                    <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Get the latest glossary updates and insights delivered to your inbox.
                    </p>
                    <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#15a36e] focus:ring-2 focus:ring-[#15a36e]/20 transition-all"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                      />
                      <button
                        type="submit"
                        className="w-full bg-[#15a36e] hover:bg-[#128a5c] text-white py-2.5 rounded-lg font-semibold text-xs transition-colors"
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>

                {/* Related Articles */}
                {termData.relatedArticles && termData.relatedArticles.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    id="related-articles"
                    className="mt-12"
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4 sm:mb-6">Related Articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {termData.relatedArticles.map((article, index) => (
                        <Link
                          key={index}
                          to={`/blog/${article.category?.toLowerCase()}/${article.slug}`}
                          className="group"
                        >
                          {/* Image */}
                          <div className="relative w-full h-32 sm:h-36 rounded-lg overflow-hidden bg-gray-100 mb-3 group-hover:shadow-lg transition-all duration-300">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Title */}
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#15a36e] transition-colors leading-tight mb-1.5 sm:mb-2 line-clamp-2">
                            {article.title}
                          </h4>

                          {/* Meta Info */}
                          <div className="flex items-center gap-2 mb-1.5 sm:mb-2 text-[10px] text-gray-500">
                            <span className="flex items-center gap-0.5">
                              <FiCalendar className="w-2.5 h-2.5" />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <FiClock className="w-2.5 h-2.5" />
                              {article.readTime}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed line-clamp-2">
                            {article.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.section>
                )}
              </div>

              <style>{`
                .prose h2 {
                  color: #111827 !important;
                  font-weight: 700 !important;
                  font-size: 1.25rem !important;
                  margin-top: 2rem !important;
                  margin-bottom: 1rem !important;
                  padding-bottom: 0.5rem !important;
                  border-bottom: 2px solid #e5e7eb !important;
                  letter-spacing: -0.025em !important;
                  text-transform: uppercase !important;
                }
                @media (min-width: 640px) {
                  .prose h2 {
                    font-size: 1.5rem !important;
                  }
                }
                @media (min-width: 1024px) {
                  .prose h2 {
                    font-size: 1.75rem !important;
                  }
                }
                .prose h3 {
                  color: #15a36e !important;
                  font-weight: 600 !important;
                  font-size: 1.1rem !important;
                  margin-top: 1.5rem !important;
                  margin-bottom: 0.75rem !important;
                  padding-left: 0.75rem !important;
                  border-left: 3px solid #15a36e !important;
                  letter-spacing: -0.01em !important;
                }
                @media (min-width: 640px) {
                  .prose h3 {
                    font-size: 1.25rem !important;
                  }
                }
                .prose p {
                  color: #374151 !important;
                  line-height: 1.8 !important;
                  margin-bottom: 1.25rem !important;
                  font-size: 1rem !important;
                }
                .prose ul {
                  margin-top: 0.75rem !important;
                  margin-bottom: 1.25rem !important;
                  padding-left: 0 !important;
                }
                .prose li {
                  color: #4b5563 !important;
                  margin-bottom: 0.625rem !important;
                  line-height: 1.6 !important;
                }
                .prose strong {
                  color: #1f2937 !important;
                  font-weight: 600 !important;
                }
                /* Custom scrollbar for left sidebar */
                .overflow-y-auto::-webkit-scrollbar {
                  width: 4px;
                }
                .overflow-y-auto::-webkit-scrollbar-track {
                  background: transparent;
                }
                .overflow-y-auto::-webkit-scrollbar-thumb {
                  background: #d1d5db;
                  border-radius: 2px;
                }
                .overflow-y-auto::-webkit-scrollbar-thumb:hover {
                  background: #9ca3af;
                }

                /* ============================================
                   GLOSSARY INSERTABLE CONTENT BLOCKS
                   (Matches BlogPost theme - flat left borders)
                   ============================================ */

                /* --- Base block style --- */
                .blog-block {
                  margin: 2rem 0;
                  border-radius: 0.5rem;
                  overflow: hidden;
                  font-family: 'Palanquin', sans-serif;
                }

                /* --- Fast Fact Block --- */
                .blog-fast-fact {
                  background: #f0fdf7;
                  border-left: 4px solid #15a36e;
                  padding: 1.25rem 1.5rem;
                }
                .blog-fast-fact__label {
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                  font-size: 0.75rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  color: #15a36e;
                  margin-bottom: 0.5rem;
                }
                .blog-fast-fact__value {
                  color: #111827;
                  font-size: 1.1rem;
                  font-weight: 600;
                  line-height: 1.5;
                  margin: 0;
                }

                /* --- Quote Block --- */
                .blog-quote {
                  background: #fafafa;
                  border-left: 4px solid #15a36e;
                  padding: 1.5rem 2rem;
                  position: relative;
                }
                .blog-quote::before {
                  content: '\u201C';
                  position: absolute;
                  top: 0.5rem;
                  left: 1rem;
                  font-size: 4rem;
                  color: rgba(21, 163, 110, 0.1);
                  line-height: 1;
                }
                .blog-quote__text {
                  color: #1f2937;
                  font-size: 1.05rem;
                  font-style: italic;
                  line-height: 1.7;
                  margin: 0 0 1rem;
                  position: relative;
                  z-index: 1;
                }
                .blog-quote__author {
                  display: flex;
                  align-items: center;
                  gap: 0.75rem;
                }
                .blog-quote__avatar {
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  background: rgba(21, 163, 110, 0.15);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #15a36e;
                  font-weight: 700;
                  font-size: 1rem;
                  flex-shrink: 0;
                }
                .blog-quote__avatar img {
                  width: 100%;
                  height: 100%;
                  border-radius: 50%;
                  object-fit: cover;
                }
                .blog-quote__name {
                  font-weight: 600;
                  font-size: 0.875rem;
                  color: #111827;
                }
                .blog-quote__role {
                  font-size: 0.75rem;
                  color: #6b7280;
                }

                /* --- Callout Block --- */
                .blog-callout {
                  padding: 1.25rem 1.5rem;
                }
                .blog-callout__content {
                  width: 100%;
                }
                .blog-callout__title {
                  font-weight: 700;
                  font-size: 0.875rem;
                  margin: 0 0 0.25rem;
                }
                .blog-callout__text {
                  font-size: 0.875rem;
                  line-height: 1.6;
                  margin: 0;
                }

                /* Callout variants */
                .blog-callout--info {
                  background: #eff6ff;
                  border-left: 4px solid #3b82f6;
                }
                .blog-callout--info .blog-callout__title { color: #1e40af; }
                .blog-callout--info .blog-callout__text { color: #1e3a5f; }

                .blog-callout--warning {
                  background: #fefce8;
                  border-left: 4px solid #eab308;
                }
                .blog-callout--warning .blog-callout__title { color: #854d0e; }
                .blog-callout--warning .blog-callout__text { color: #713f12; }

                .blog-callout--note {
                  background: #f5f3ff;
                  border-left: 4px solid #8b5cf6;
                }
                .blog-callout--note .blog-callout__title { color: #5b21b6; }
                .blog-callout--note .blog-callout__text { color: #4c1d95; }

                .blog-callout--success {
                  background: #f0fdf7;
                  border-left: 4px solid #15a36e;
                }
                .blog-callout--success .blog-callout__title { color: #065f46; }
                .blog-callout--success .blog-callout__text { color: #064e3b; }

                /* --- Table Block --- */
                .blog-table {
                  border: 1px solid #e5e7eb;
                  border-radius: 0.75rem;
                  overflow: hidden;
                }
                @media (max-width: 1023px) {
                  .blog-table {
                    overflow-x: auto;
                    -webkit-overflow-scrolling: touch;
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                  }
                  .blog-table::-webkit-scrollbar {
                    display: none;
                  }
                  .blog-table table {
                    min-width: 600px;
                  }
                }
                .blog-table table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 0;
                  font-size: 0.875rem;
                }
                @media (max-width: 639px) {
                  .blog-table table {
                    font-size: 0.75rem;
                  }
                  .blog-table th {
                    padding: 0.625rem 0.75rem;
                  }
                  .blog-table td {
                    padding: 0.5rem 0.75rem;
                  }
                }
                .blog-table thead {
                  background: #f9fafb;
                }
                .blog-table th {
                  color: #111827;
                  font-weight: 600;
                  text-align: left;
                  padding: 0.875rem 1rem;
                  border-bottom: 2px solid #e5e7eb;
                }
                .blog-table td {
                  color: #4b5563;
                  padding: 0.75rem 1rem;
                  border-bottom: 1px solid #f3f4f6;
                }
                .blog-table tbody tr:last-child td {
                  border-bottom: none;
                }
                .blog-table tbody tr:hover {
                  background: #f9fafb;
                }

                /* --- Image + Caption Block --- */
                .blog-image {
                  margin: 2rem 0;
                  border-radius: 0.75rem;
                  overflow: hidden;
                  background: #f9fafb;
                }
                .blog-image img {
                  width: 100%;
                  height: auto;
                  display: block;
                }
                .blog-image__caption {
                  padding: 0.75rem 1rem;
                  font-size: 0.8rem;
                  color: #6b7280;
                  text-align: center;
                  font-style: italic;
                  border-top: 1px solid #e5e7eb;
                }

                /* --- CTA Block --- */
                .blog-cta {
                  background: #ffffff;
                  border: 2px solid #e5e7eb;
                  border-top: 2px solid #e5e7eb;
                  border-right: 2px solid #e5e7eb;
                  border-bottom: 2px solid #e5e7eb;
                  border-left: 2px solid #e5e7eb;
                  border-radius: 1rem;
                  padding: 2rem 1.5rem;
                  position: relative;
                  overflow: hidden;
                  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
                  text-align: center;
                }
                .blog-cta h3,
                .blog-cta__title {
                  color: #000000;
                  font-size: 1.25rem;
                  font-weight: 700;
                  margin: 0 0 0.5rem;
                  line-height: 1.3;
                }
                .blog-cta__text {
                  color: #6b7280;
                  font-size: 0.9rem;
                  line-height: 1.6;
                  margin: 0 0 1.25rem;
                }
                .blog-cta__btn {
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.5rem;
                  background: #15a36e;
                  color: #fff;
                  font-weight: 600;
                  font-size: 0.875rem;
                  padding: 0.625rem 1.5rem;
                  border-radius: 9999px;
                  text-decoration: none;
                  transition: all 0.3s ease;
                  border: none;
                  box-shadow: 0 4px 12px rgba(21, 163, 110, 0.3);
                }
                .blog-cta__btn:hover {
                  background: #12a062;
                  transform: translateY(-2px);
                  box-shadow: 0 6px 20px rgba(21, 163, 110, 0.4);
                }

                /* --- Source / Reference Block --- */
                .blog-source {
                  background: #f9fafb;
                  border-left: 4px solid #d1d5db;
                  padding: 1rem 1.25rem;
                  margin: 2rem 0;
                }
                .blog-source__title {
                  font-size: 0.75rem;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.05em;
                  color: #6b7280;
                  margin-bottom: 0.5rem;
                }
                .blog-source__link {
                  color: #15a36e;
                  font-size: 0.85rem;
                  text-decoration: underline;
                  word-break: break-all;
                  transition: color 0.2s;
                }
                .blog-source__link:hover {
                  color: #0e7a4f;
                }

                /* --- Responsive --- */
                @media (max-width: 768px) {
                  .blog-cta { padding: 1.5rem 1rem; }
                  .blog-cta__title { font-size: 1.1rem; }
                  .blog-quote { padding: 1.25rem 1rem; }
                  .blog-quote::before { font-size: 3rem; }
                  .blog-fast-fact { padding: 1rem 1.25rem; }
                }
              `}</style>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10"
              >
                <div className="blog-block blog-cta">
                  <h3 className="blog-cta__title">Ready to Learn More?</h3>
                  <p className="blog-cta__text">Explore our comprehensive guides on {termData.term.toLowerCase()} and start your journey today.</p>
                  <a href="/blog" className="blog-cta__btn">Explore Resources</a>
                </div>
              </motion.div>

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8"
              >
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Disclaimer</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    This content is for informational and educational purposes only and does not constitute financial, legal, or investment advice. The information provided is based on generally accepted definitions and may vary depending on context. Always conduct your own research and consult with qualified professionals before making any investment or financial decisions.
                  </p>
                </div>
              </motion.div>
            </article>
          </main>

          {/* Right Column: Sidebar */}
          <aside ref={rightSidebarRef} className="hidden lg:block w-[280px] flex-shrink-0">
            <div className={rightSidebarFixed ? 'fixed right-[24px] sm:right-[48px] md:right-[64px] lg:right-[96px] xl:right-[128px] top-[220px] w-[280px]' : ''}>
              <div className="space-y-4 pb-8">
                {/* Related Terms */}
                {termData.relatedTerms && termData.relatedTerms.length > 0 && (
                  <>
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Related Terms
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {termData.relatedTerms.map((related) => (
                        <Link
                          key={related.slug}
                          to={`/glossary/${related.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#15a36e] hover:text-white border border-gray-300 hover:border-[#15a36e] rounded-lg text-sm font-medium text-gray-700 transition-all duration-300"
                        >
                          <FiLink className="w-3.5 h-3.5" />
                          {related.term}
                        </Link>
                      ))}
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-200 my-8" />
                  </>
                )}

                {/* Quick Info */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Quick Info
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Letter</span>
                      <Link
                        to={`/glossary?letter=${termData.letter}`}
                        className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#15a36e] hover:text-white transition-all duration-300"
                      >
                        {termData.letter}
                      </Link>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-500">Category</span>
                      <Link
                        to="/glossary"
                        className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg hover:bg-[#15a36e] hover:text-white transition-all duration-300"
                      >
                        Glossary
                      </Link>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-sm text-gray-500">Updated</span>
                      <span className="text-sm font-semibold text-gray-900">{termData.lastUpdated}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 my-8" />

                {/* Newsletter Subscription */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Subscribe for Updates
                  </h4>
                  <p className="text-xs text-gray-500 mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                    Get the latest glossary updates and insights delivered to your inbox.
                  </p>
                  <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-[#15a36e] focus:ring-2 focus:ring-[#15a36e]/20 transition-all"
                      style={{ fontFamily: 'Palanquin, sans-serif' }}
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#15a36e] hover:bg-[#128a5c] text-white py-2.5 rounded-lg font-semibold text-xs transition-colors"
                      style={{ fontFamily: 'Palanquin, sans-serif' }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
