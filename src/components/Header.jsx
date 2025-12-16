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
      dropdown: []
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
      <motion.nav 
        className="bg-[#15a36e] w-full shadow-md relative z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-10 md:h-12 lg:h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/assets/copym/png/Copym-02-1.png"
                alt="CopyM Logo"
                className="h-11 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="text-white font-medium text-sm sm:text-base hover:text-white/80 transition-colors duration-200 whitespace-nowrap py-2"
                    style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item.label}
                  </Link>
            
            {/* Dropdown Menu */}
            <AnimatePresence>
                    {hoveredItem === item.path && item.dropdown && item.dropdown.length > 0 && (
                  <>
                    {/* Dark Background with Green Light Effects */}
                    <motion.div
                      className="fixed top-8 sm:top-10 md:top-12 lg:top-14 left-0 right-0 bottom-0 bg-black/60 z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setHoveredItem(null)}
                    >
                      {/* Green Light Effects */}
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#15a36e]/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#15a36e]/20 to-transparent"></div>
                    </motion.div>

                    {/* White Card Dropdown - Slides from Right */}
                    <motion.div
                      className="fixed top-8 sm:top-10 md:top-12 lg:top-14 right-4 sm:right-6 md:right-8 w-full max-w-md bg-white rounded-2xl overflow-hidden z-50"
                      style={{
                        boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)'
                      }}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div className="p-6 sm:p-8">
                        {/* Title */}
                        <div className="mb-6">
                          <h3 className="text-xl sm:text-2xl font-bold mb-2 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                            {item.path === "/compliance" ? (
                              <>
                                <span className="text-[#15a36e]">COMPLIANCE</span>
                                <span className="text-black"> AND SECURITY</span>
                              </>
                            ) : (
                              <span className="text-[#15a36e]">{item.label.toUpperCase()}</span>
                            )}
                          </h3>
                          {/* Black underline */}
                          <div className="h-0.5 bg-black"></div>
                        </div>
                        
                        {/* Dropdown Items */}
                        <div className="space-y-6">
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className="flex items-start gap-4 hover:opacity-80 transition-opacity duration-200 group"
                              onClick={() => setHoveredItem(null)}
                            >
                              {/* Icon - Black square with icon */}
                              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-black">
                                <div className={
                                  item.path === "/solutions" || item.path === "/compliance" 
                                    ? (index === 0 ? 'text-white' : 'text-[#15a36e]')
                                    : 'text-white'
                                }>
                                  {dropdownItem.icon}
                                </div>
                              </div>
                              
                              {/* Content */}
                              <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-black text-base mb-2" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                  {dropdownItem.heading}
                                </h4>
                                <p className="text-sm text-black leading-relaxed" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
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
      </motion.nav>

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
              className="absolute top-16 left-4 right-4 bg-[#15a36e] rounded-xl border border-white/20 overflow-hidden shadow-xl max-h-[80vh] overflow-y-auto"
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
                      style={{ fontFamily: 'Palanquin, sans-serif' }}
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
