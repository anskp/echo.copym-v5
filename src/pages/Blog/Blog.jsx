import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionContainer from '../../components/Layout/SectionContainer';
import PostCard from '../../components/Blog/PostCard';
import Pagination from '../../components/Blog/Pagination';
import FeaturedSection from '../../components/Blog/FeaturedSection';
import Hero from './sections/Hero';
import { FiMail } from 'react-icons/fi';
import { blogPosts, getFeaturedPosts as getFeaturedPostsUtil } from '../../data/blogPosts';

const categories = ["All", "Education", "News", "Insights", "Product Updates", "Glossary"];
const POSTS_PER_PAGE = 6;

export default function Blog() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch = searchTerm === "" ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const handleCategoryChange = (category) => {
    if (category === 'Glossary') {
      navigate('/glossary');
    } else {
      setSelectedCategory(category);
      setCurrentPage(1);
    }
  };

  // Get featured posts (sorted by priority)
  const featuredPosts = useMemo(() => {
    return getFeaturedPostsUtil(5);
  }, []);

  // Get regular (non-featured) posts for the grid
  const regularPosts = useMemo(() => {
    return filteredPosts.filter(post => !post.featured);
  }, [filteredPosts]);

  // Pagination calculation
  const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = regularPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset to page 1 when filters change
  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Featured Section */}
      {searchTerm === "" && (
        <FeaturedSection featuredPosts={featuredPosts} />
      )}

      {/* Blog Posts Grid */}
      <SectionContainer padding="pt-16 pb-16" bgColor="bg-white">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="relative w-fit mx-auto mb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              <span className="text-gray-900">ALL </span>
              <span className="text-[#15a36e]">POSTS</span>
            </h2>
          </div>
        </motion.div>

        {/* Search + Filter Header - Clean Vercel-style layout */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filters - Clean Pills */}
            <div className="flex flex-wrap gap-2 justify-center w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category && category !== 'Glossary'
                      ? 'bg-[#15a36e] text-white shadow-lg shadow-[#15a36e]/20'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: 'Palanquin, sans-serif' }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar - Right Side */}
            <div className="relative w-full lg:w-auto lg:min-w-[350px]">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search articles, news..."
                className="w-full px-6 py-3 pl-12 rounded-lg bg-gray-100 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#15a36e] focus:ring-2 focus:ring-[#15a36e]/20 transition-all text-sm"
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              />
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Post Grid */}
        {paginatedPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PostCard post={post} variant="standard" />
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 sm:py-16 px-4"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-700 mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              No posts found
            </h3>
            <p className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'Palanquin, sans-serif' }}>
              Try selecting a different category or search term
            </p>
          </motion.div>
        )}
      </SectionContainer>

      {/* Newsletter Section - White Card with Pill Button */}
      <SectionContainer padding="py-16" bgColor="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6"
        >
          {/* Newsletter Banner - White Rectangular Card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white px-6 py-12 sm:px-12 sm:py-16 shadow-[0_20px_60px_rgba(15,23,42,0.1)] border border-gray-100"
          >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#15a36e]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#15a36e]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-[#15a36e] to-emerald-600 shadow-lg shadow-[#15a36e]/30">
                  <FiMail className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  JOIN OUR NEWSLETTER
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-lg text-center lg:text-left" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                  Subscribe to our newsletter for the latest insights on real-world asset tokenization and exclusive updates.
                </p>
              </div>

              {/* Right Content - Form */}
              <div className="w-full flex justify-center">
                <form className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center sm:items-stretch" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    required
                    placeholder="Enter your E-Mail Address"
                    className="w-full sm:w-auto px-6 py-4 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#15a36e] focus:ring-2 focus:ring-[#15a36e]/10 transition-all text-sm font-medium"
                    style={{ fontFamily: 'Palanquin, sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-between min-w-[160px] sm:min-w-[180px] bg-[#15a36e] border border-[#15a36e] hover:bg-[#12a062] rounded-full p-1 transition-all duration-300"
                    style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    <span className="pl-4 pr-2 text-white font-semibold text-sm sm:text-base">
                      Subscribe
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                      <svg
                        className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#15a36e]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </div>
  );
}
