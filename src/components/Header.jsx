import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaDollarSign, FaHandshake, FaFileAlt, FaKey, FaNewspaper, FaFileAlt as FaReport } from 'react-icons/fa';
import { HiCube, HiShieldCheck } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { 
      label: "Product", 
      path: "/product",
      dropdown: null
    },
    { 
      label: "Solutions", 
      path: "/solutions",
      dropdown: [
        {
          icon: <FaUsers className="w-5 h-5" />,
          heading: "Asset Owners",
          description: "Explore how CopyM can help asset owners leverage tokenization to generate revenue"
        },
        {
          icon: <FaDollarSign className="w-5 h-5" />,
          heading: "Investors",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
        },
        {
          icon: <FaHandshake className="w-5 h-5" />,
          heading: "Partners",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
        }
      ]
    },
    { 
      label: "Compliance & Security", 
      path: "/compliance",
      dropdown: [
        {
          icon: <FaFileAlt className="w-5 h-5" />,
          heading: "Legal pages",
          description: "Identify and obtain the relevant legal pages acquired by the company in relation to tokenization"
        },
        {
          icon: <FaKey className="w-5 h-5" />,
          heading: "Licenses",
          description: "Find and document the licenses CopyM has secured to operate tokenization services for asset owners"
        }
      ]
    },
    { 
      label: "Technology", 
      path: "/technology",
      dropdown: [
        {
          icon: <HiCube className="w-5 h-5" />,
          heading: "Architecture",
          description: "Explore how CopyM can help asset owners leverage tokenization to generate revenue"
        },
        {
          icon: <HiShieldCheck className="w-5 h-5" />,
          heading: "Zero Gas",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
        },
        {
          icon: <HiCube className="w-5 h-5" />,
          heading: "Privacy AI",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
        }
      ]
    },
    { 
      label: "Blog", 
      path: "/blog",
      dropdown: [
        {
          icon: <FaNewspaper className="w-5 h-5" />,
          heading: "Articles",
          description: "Identify and obtain the relevant legal pages acquired by the company in relation to tokenization"
        },
        {
          icon: <FaReport className="w-5 h-5" />,
          heading: "Report",
          description: "Find and document the licenses CopyM has secured to operate tokenization services for asset owners"
        }
      ]
    }
  ];

  return (
    <>
      {/* Green Header Bar */}
      <nav className="bg-[#15a36e] w-full shadow-md relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src="/assets/copym/png/Copym-02-1.png"
                alt="COPYM"
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="text-white font-medium text-sm sm:text-base hover:text-white/80 transition-colors duration-200 whitespace-nowrap flex items-center gap-1 py-2"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
                    )}
                  </Link>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
                    {hoveredItem === item.path && item.dropdown && (
                <motion.div
                        className="absolute top-full left-0 mt-0 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Green line connector */}
                        <div className="h-0.5 bg-[#15a36e]"></div>
                        
                        <div className="p-5">
                          {/* Title */}
                          <h3 className="text-[#15a36e] font-bold text-base mb-3 uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                            {item.label}
                          </h3>
                          
                          {/* Gray separator line */}
                          <div className="h-px bg-gray-200 mb-4"></div>
                          
                          {/* Dropdown Items */}
                          <div className="space-y-4">
                            {item.dropdown.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={item.path}
                                className="flex items-start gap-3 p-0 hover:opacity-80 transition-opacity duration-200 group"
                              >
                                {/* Icon */}
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-[#15a36e] rounded bg-white">
                                  <div className="text-black">
                                    {dropdownItem.icon}
                                  </div>
                        </div>
                                
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-bold text-black text-sm mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {dropdownItem.heading}
                                  </h4>
                                  <p className="text-xs text-gray-600 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                                    {dropdownItem.description}
                                  </p>
                        </div>
                      </Link>
                    ))}
                          </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          ))}
          </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-white hover:text-white/80 transition-colors duration-200 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoClose className="h-6 w-6" /> : <GiHamburgerMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Bottom Shadow/Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
            className="fixed inset-0 z-50 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Container */}
          <motion.div 
              className="absolute top-20 left-4 right-4 bg-[#15a36e] rounded-xl border border-white/20 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
              {/* Mobile Navigation Items */}
              <div className="py-4">
                {navItems.map((item, index) => (
                  <div key={item.path}>
                    <Link
                      to={item.path}
                      className="block px-6 py-3 text-white font-medium hover:bg-white/10 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="px-6 pb-3 space-y-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                            key={idx}
                          to={item.path}
                            className="block pl-8 py-2 text-white/90 text-sm hover:text-white hover:bg-white/5 rounded transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                            {dropdownItem.heading}
                            </Link>
                          ))}
                        </div>
                    )}
                  </div>
                ))}
              </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
