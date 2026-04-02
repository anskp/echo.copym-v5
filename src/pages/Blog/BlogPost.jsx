import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FiTwitter, FiLinkedin, FiMail, FiFacebook, FiLink, FiCalendar, FiClock, FiUser, FiChevronRight } from 'react-icons/fi';
import DisclaimerBlock from '../../components/Blog/DisclaimerBlock';
import RelatedPosts from '../../components/Blog/RelatedPosts';
import Breadcrumbs from '../../components/Blog/Breadcrumbs';
import { blogPosts, getRelatedPosts as getRelatedPostsUtil } from '../../data/blogPosts';

// Read also posts (static for sidebar)
const readAlsoPosts = [
  {
    id: 5,
    title: "Security Token Offerings: A Complete Guide",
    category: "Education",
    date: "March 1, 2026",
    slug: "security-token-offerings-guide"
  },
  {
    id: 6,
    title: "Blockchain Compliance in 2026",
    category: "Compliance",
    date: "February 25, 2026",
    slug: "blockchain-compliance-2026"
  },
  {
    id: 7,
    title: "Digital Asset Custody Solutions",
    category: "Technology",
    date: "February 20, 2026",
    slug: "digital-asset-custody-solutions"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [leftSidebarFixed, setLeftSidebarFixed] = useState(true);
  const [rightSidebarFixed, setRightSidebarFixed] = useState(true);
  const [expandedHeadings, setExpandedHeadings] = useState([]);

  const mainContentRef = useRef(null);
  const leftSidebarRef = useRef(null);
  const rightSidebarRef = useRef(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Find article by slug
  useEffect(() => {
    const foundPost = blogPosts.find(post => post.slug === slug);
    if (foundPost) {
      setArticle(foundPost);
      // Get related posts (excluding current post)
      setRelatedPosts(getRelatedPostsUtil(foundPost.id, 3));
    }
  }, [slug]);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Enable wheel scrolling for left sidebar
  useEffect(() => {
    const leftSidebarEl = leftSidebarRef.current?.querySelector('div');

    if (leftSidebarEl && leftSidebarFixed) {
      const handleWheel = (e) => {
        e.stopPropagation();
      };

      leftSidebarEl.addEventListener('wheel', handleWheel, { passive: true });
      return () => leftSidebarEl.removeEventListener('wheel', handleWheel);
    }
  }, [leftSidebarFixed]);

  // Handle scroll spy for active section highlighting
  useEffect(() => {
    if (!article) return;

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

    article.headings?.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [article]);

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`
    };

    if (platform === 'copy') {
      navigator.clipboard.writeText(shareUrl);
      return;
    }

    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  };

  // Show loading state while article loads
  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#15a36e] mx-auto mb-4"></div>
          <p className="text-gray-600" style={{ fontFamily: 'Palanquin, sans-serif' }}>Loading article...</p>
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
            { label: 'Blog', path: '/blog' },
            { label: article.category, path: `/blog?category=${article.category.toLowerCase()}` },
            { label: article.title }
          ]} />
        </div>
      </div>

      {/* Mobile Breadcrumbs - Static */}
      <div className="lg:hidden pt-28 sm:pt-32 pb-4">
        <div className="px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Blog', path: '/blog' },
            { label: article.category, path: `/blog?category=${article.category.toLowerCase()}` },
            { label: article.title }
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
                {article.headings?.map((item, idx) => {
                  if (item.level === 3) {
                    // Skip level 3 headings in main loop - they're rendered with their parent
                    return null;
                  }

                  // Find immediate subheadings (level 3) that come after this heading
                  const subheadings = [];
                  for (let i = idx + 1; i < article.headings.length; i++) {
                    if (article.headings[i].level === 3) {
                      subheadings.push(article.headings[i]);
                    } else if (article.headings[i].level === 2) {
                      break; // Stop at next level 2 heading
                    }
                  }

                  const hasSubheadings = subheadings.length > 0;
                  const isExpanded = expandedHeadings.includes(item.id);

                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(item.id);
                          if (hasSubheadings) {
                            setExpandedHeadings(prev =>
                              prev.includes(item.id)
                                ? prev.filter(id => id !== item.id)
                                : [...prev, item.id]
                            );
                          }
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
                      {hasSubheadings && isExpanded && (
                        <ul className="mt-2 space-y-1.5 ml-3 border-l-2 border-gray-200 pl-3">
                          {subheadings.map((sub) => (
                            <li key={sub.id}>
                              <a
                                href={`#${sub.id}`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  document.getElementById(sub.id)?.scrollIntoView({ behavior: 'smooth' });
                                  setActiveSection(sub.id);
                                }}
                                className="block text-xs text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5"
                                style={{ fontFamily: 'Palanquin, sans-serif' }}
                              >
                                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

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
        </aside>

        {/* Middle Column: Main Content (Scrollable) */}
        <main ref={mainContentRef} className="flex-1 min-w-0">
          <article>
            {/* Article Header */}
            <header className="mb-12 pt-8 lg:pt-0">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 uppercase tracking-tight text-gray-900" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                {article.title}
              </h1>

              {article.subtitle && (
                <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  {article.subtitle}
                </p>
              )}

              {/* Author, Category & Meta Row */}
              <div className="flex flex-wrap items-center gap-3 py-5 border-y border-gray-100 mb-7">
                {/* Author */}
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#15a36e]/20 flex items-center justify-center flex-shrink-0">
                    {article.author?.avatar ? (
                      <img src={article.author.avatar} alt={article.author.name} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <span className="text-xs font-bold text-[#15a36e]">{article.author?.name?.charAt(0) || 'C'}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      {article.author?.name || 'CopyM Team'}
                    </p>
                    <p className="text-[10px] text-gray-500">{article.author?.role || 'Research Team'}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-5 w-px bg-gray-200 hidden sm:block"></div>

                {/* Category */}
                <span className="bg-[#15a36e]/10 text-[#15a36e] px-3.5 py-1.5 text-xs font-semibold rounded" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  {article.category}
                </span>

                {/* Date & Read Time */}
                <div className="flex items-center gap-3.5 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              {/* Featured Image */}
              {article.image && (
                <div className="rounded-xl overflow-hidden mb-10">
                  <img src={article.image} alt={article.title} className="w-full h-56 sm:h-72 md:h-96 object-cover" />
                </div>
              )}
            </header>

            {/* Article Body */}
            <div
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-800 leading-relaxed"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <style>{`
              .prose h2 {
                color: #111827 !important;
                font-weight: 700 !important;
                font-size: 1.75rem !important;
                margin-top: 2.5rem !important;
                margin-bottom: 1.25rem !important;
                padding-bottom: 0.75rem !important;
                border-bottom: 3px solid #e5e7eb !important;
                letter-spacing: -0.025em !important;
              }
              .prose h3 {
                color: #374151 !important;
                font-weight: 600 !important;
                font-size: 1.375rem !important;
                margin-top: 1.75rem !important;
                margin-bottom: 0.875rem !important;
                letter-spacing: -0.015em !important;
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
            `}</style>

            {/* Author & Reviewer Section - CopyM Style */}
            <section className="my-12">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Author Card */}
                <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-[#15a36e]/30 transition-all duration-300 group flex flex-col" style={{ boxShadow: '0px 4px 48.9px 0px #BDE3D5' }}>
                  <div className="p-6 flex-1">
                    <div className="flex items-start gap-4">
                      {/* Avatar */}
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#15a36e]/20 to-[#15a36e]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                        {article.author?.avatar ? (
                          <img src={article.author.avatar} alt={article.author.name} className="w-full h-full rounded-lg object-cover" />
                        ) : (
                          <span className="text-xl font-bold text-[#15a36e]">{article.author?.name?.charAt(0) || 'C'}</span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#15a36e] block mb-1">Written By</span>
                        <h4 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                          {article.author?.name || 'CopyM Team'}
                        </h4>
                        <p className="text-xs text-gray-500 mb-3">{article.author?.role || 'Research Team'}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{article.author?.bio || 'Our research team analyzes market trends and emerging technologies in blockchain and tokenization.'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-[#15a36e] to-emerald-400"></div>
                </div>

                {/* Reviewer Card */}
                {article.reviewer && (
                  <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:border-[#15a36e]/30 transition-all duration-300 group flex flex-col" style={{ boxShadow: '0px 4px 48.9px 0px #BDE3D5' }}>
                    <div className="p-6 flex-1">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#15a36e]/20 to-[#15a36e]/5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          {article.reviewer.avatar ? (
                            <img src={article.reviewer.avatar} alt={article.reviewer.name} className="w-full h-full rounded-lg object-cover" />
                          ) : (
                            <span className="text-xl font-bold text-[#15a36e]">{article.reviewer.name.charAt(0)}</span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#15a36e] block mb-1">Reviewed By</span>
                          <h4 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            {article.reviewer.name}
                          </h4>
                          <p className="text-xs text-gray-500 mb-3">{article.reviewer.role}</p>
                          <p className="text-sm text-gray-600 leading-relaxed">{article.reviewer.bio}</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="h-1 bg-gradient-to-r from-[#15a36e] to-emerald-400"></div>
                  </div>
                )}
              </div>
            </section>

            {/* FAQ Section - Simple Inline Style */}
            <section className="my-12">
              <h3 className="text-2xl font-bold mb-8 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                {article.faqs?.map((faq, idx) => (
                  <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <h4 className="text-base font-bold text-gray-900 mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      {faq.question}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* End-of-Article CTA */}
            <section className="mt-12">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#15a36e" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.6,34.3C59,45.5,47.1,54.2,35.1,61.8C23.1,69.4,11,75.9,-0.6,77.2C-12.2,78.5,-24.7,74.6,-36.4,68.5C-48.1,62.4,-59,54.1,-67.6,43.5C-76.2,32.9,-82.5,20,-83.1,6.8C-83.7,-6.4,-78.6,-19.9,-70.4,-31.4C-62.2,-42.9,-50.9,-52.4,-39.3,-59.3C-27.7,-66.2,-15.8,-70.5,-2.6,-69.5C10.6,-68.5,23.6,-62.2,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left max-w-2xl">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Start Your Tokenization Journey
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Join leading institutions using our platform <br className="hidden sm:block" />
                        for digital asset issuance.
                      </p>
                    </div>
                    <a href="/tokenization" className="group inline-flex items-center justify-between min-w-[140px] sm:min-w-[160px] bg-[#15a36e] border border-[#15a36e] hover:bg-[#12a062] rounded-full p-1 transition-all duration-300" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      <span className="pl-3 pr-2 text-white font-semibold text-xs sm:text-sm">
                        Know More
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#15a36e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile Only - Read Also & Newsletter */}
            <div className="lg:hidden mt-12 space-y-8">
              {/* Read Also */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  You May Also Like
                </h4>
                <div className="space-y-3">
                  {readAlsoPosts.map((post) => (
                    <a
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group block py-2 border-b border-gray-100 hover:border-[#15a36e] transition-colors last:border-0"
                    >
                      <span className="text-xs font-semibold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        {post.category}
                      </span>
                      <h5 className="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2 group-hover:text-[#15a36e] transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        {post.title}
                      </h5>
                      <p className="text-xs text-gray-500 mt-0.5">{post.date}</p>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#0E0C15] to-[#1a1a1a] p-5 rounded-2xl border border-[#15a36e]/30">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#15a36e]/20 rounded-full blur-3xl"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#15a36e] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#15a36e]/30">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                        Subscribe to Newsletter
                      </h4>
                      <p className="text-xs text-gray-400">Get latest updates & insights</p>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#15a36e] to-emerald-600 text-white py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold hover:shadow-lg hover:shadow-[#15a36e]/40 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Subscribe Now
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <DisclaimerBlock>
              {article.disclaimer}
            </DisclaimerBlock>
          </article>
        </main>

        {/* Right Column: Sidebar */}
        <aside ref={rightSidebarRef} className="hidden lg:block w-[280px] flex-shrink-0">
          <div className={rightSidebarFixed ? 'fixed right-[24px] sm:right-[48px] md:right-[64px] lg:right-[96px] xl:right-[128px] top-[220px] w-[280px]' : ''}>
            <div className="space-y-4 pb-8">
              <h4 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                You May Also Like
              </h4>
              <div className="space-y-2">
                {readAlsoPosts.map((post) => (
                  <a
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group block py-2 border-b border-gray-100 hover:border-[#15a36e] transition-colors last:border-0"
                  >
                    <span className="text-xs font-semibold text-[#15a36e]" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      {post.category}
                    </span>
                    <h5 className="text-sm font-semibold text-gray-900 mt-0.5 line-clamp-2 group-hover:text-[#15a36e] transition-colors" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      {post.title}
                    </h5>
                    <p className="text-xs text-gray-500 mt-0.5">{post.date}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0E0C15] to-[#1a1a1a] p-5 rounded-2xl border border-[#15a36e]/30">
              {/* Decorative glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#15a36e]/20 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#15a36e] to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#15a36e]/30">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                      Subscribe to Newsletter
                    </h4>
                    <p className="text-xs text-gray-400">Get latest updates & insights</p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#15a36e] to-emerald-600 text-white py-3 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#15a36e]/40 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Subscribe Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </aside>

        </div>
      </div>

      {/* Related Posts - Full Width Section */}
      <section className="bg-gray-50 py-6 sm:py-8">
        <div className="max-w-[1800px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
          <RelatedPosts posts={relatedPosts} title="Related Articles" />
        </div>
      </section>
    </div>
  );
}
