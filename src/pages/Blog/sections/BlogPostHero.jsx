import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiShare2, FiTwitter, FiLinkedin, FiMail, FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../../components/Blog/Breadcrumbs';

export default function Hero({ article }) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <section className="relative overflow-hidden min-h-[500px] h-[60vh] sm:h-screen w-full bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(21, 163, 110, 0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(21, 163, 110, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              animation: 'gridMove 20s linear infinite'
            }}
          ></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#15a36e]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full h-full flex items-center justify-start px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl w-full text-left"
        >
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <Breadcrumbs items={[
              { label: 'Blog', path: '/blog' },
              { label: article.category, path: `/blog` },
              { label: article.title }
            ]} />
          </motion.div>

          {/* Category Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block px-4 py-1.5 bg-[#15a36e] text-white text-sm font-bold rounded-full mb-4" 
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            {article.category}
          </motion.span>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            {article.title}
          </motion.h1>

          {/* Subtitle */}
          {article.subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base sm:text-lg text-white/80 mb-6 max-w-3xl"
              style={{ fontFamily: 'Palanquin, sans-serif' }}
            >
              {article.subtitle}
            </motion.p>
          )}

          {/* Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-white/70 mb-8"
          >
            <span className="flex items-center gap-1.5">
              <FiCalendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock className="w-4 h-4" />
              {article.readTime}
            </span>
            {article.updatedDate && (
              <span>
                Updated: {article.updatedDate}
              </span>
            )}
          </motion.div>

          {/* Share Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="text-sm text-white/70">Share:</span>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#15a36e] transition-colors"
              aria-label="Share on Twitter"
            >
              <FiTwitter className="w-4 h-4" />
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#15a36e] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
              className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#15a36e] transition-colors"
              aria-label="Share via Email"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
}
