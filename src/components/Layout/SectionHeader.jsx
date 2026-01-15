import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({
  title,
  subtitle,
  highlightWords = [],
  underline = true,
  alignment = 'center',
  className = ''
}) => {
  const getTitleWithHighlights = (title) => {
    if (!highlightWords || highlightWords.length === 0) {
      return title;
    }

    const words = title.split(/(\s+)/);
    return words.map((word, index) => {
      // Strip punctuation for matching (e.g., "EARN," becomes "EARN")
      const cleanWord = word.trim().replace(/[.,!?;:]/g, "").toUpperCase();
      if (highlightWords.includes(cleanWord)) {
        return (
          <span key={index} className="text-[#15a36e]">
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`
        ${alignment === 'center' ? 'text-center' : 'text-center'} 
        mb-8 sm:mb-10 md:mb-12
        ${className}
      `}
    >
      <div className={`relative w-fit ${alignment === 'center' ? 'mx-auto' : ''}`}>
        <h2
          className="inline-flex items-baseline text-center gap-1 text-base sm:text-lg md:text-xl lg:text-4xl font-bold uppercase pb-1 text-black"
          style={{ fontFamily: 'Palanquin, sans-serif' }}
        >
          {getTitleWithHighlights(title)}
        </h2>
      </div>
      {subtitle && (
        <p className="text-sm sm:text-base md:text-lg lg:text-3xl text-centertext-black font-normal leading-relaxed tracking-wide mt-3 sm:mt-4" style={{ fontFamily: 'Palanquin, sans-serif' }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;