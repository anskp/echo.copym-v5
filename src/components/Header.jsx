import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import { FaUsers, FaDollarSign, FaHandshake, FaFileAlt, FaKey, FaFileAlt as FaReport, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { HiCube } from 'react-icons/hi';
import tiicon4 from '../components/icons/Tokenization/tiicon4.png';
import aboutush from '../components/images/aboutush.png';
import tokencoinh from '../components/images/tokencoinh.png';
import zerogash from '../components/images/zerogash.png';
import parivaryaih from '../components/images/parivaryaih.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background logic
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show/Hide logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: "Product",
      path: "/product",
      dropdown: [
        {
          icon: <img src={tokencoinh} alt="Tokenization" className="w-10 h-10 object-contain" />,
          heading: "Tokenization",
          description: "Learn how CopyM tokenizes real-world assets into digital securities.",
          path: "/tokenization"
        },
        {
          icon: <img src={tiicon4} alt="Marketplace" className="w-10 h-10 object-contain" />,
          heading: "Marketplace",
          description: "Discover investment opportunities in a secure, compliant digital asset marketplace.",
          path: "/marketplace"
        }
      ]
    },
    // {
    //   label: "Solutions",
    //   path: "/solutions",
    //   dropdown: [
    //     {
    //       icon: <img src="/assets/Images/icons/assets.png" alt="Asset Owners" className="w-full h-full object-contain" />,
    //       heading: "Asset Owners",
    //       description: "Explore how CopyM can help asset owners leverage tokenization to generate revenue"
    //     },
    //     {
    //       icon: <img src="/assets/Images/icons/investors.png" alt="Investors" className="w-full h-full object-contain" />,
    //       heading: "Investors",
    //       description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
    //     },
    //     {
    //       icon: <img src="/assets/Images/icons/partners.png" alt="Partners" className="w-full h-full object-contain" />,
    //       heading: "Partners",
    //       description: "Explore how CopyM can help Investors leverage tokenization to generate revenue"
    //     }
    //   ]
    // },
    {
      label: "Technology",
      path: "/technology",
      dropdown: [
        // {
        //   icon: <HiCube className="w-10 h-10" />,
        //   heading: "Architecture",
        //   description: "Explore how CopyM can help asset owners leverage tokenization to generate revenue"
        // },
        {
          icon: <img src={zerogash} alt="Zero Gas" className="w-10 h-10 object-contain" />,
          heading: "Zero Gas",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue",
          path: "/zerogas"
        },
        {
          icon: <img src={parivaryaih} alt="Privacy AI" className="w-10 h-10 object-contain" />,
          heading: "Privacy AI",
          description: "Explore how CopyM can help Investors leverage tokenization to generate revenue",
          path: "/privacy-ai"
        }
      ]
    },
    {
      label: "Company",
      path: "/company",
      dropdown: [
        {
          icon: <img src={aboutush} alt="About Us" className="w-10 h-10 object-contain" />,
          heading: "About Us",
          description: "Learn about our mission, vision, and the team driving CopyM forward.",
          path: "/about"
        }
      ]
    }
  ];

  // Chevron icon for mobile dropdown open/close indicator
  function DropdownChevron({ open }) {
    return (
      <svg
        className={`transition-transform ml-2 w-3 h-3 inline-block ${open ? "rotate-180" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  return (
    <>
      {/* Green Header Bar (DESKTOP: style remains AS BEFORE, but responsive tweaks for mobile) */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#15a36e]/95 backdrop-blur-md shadow-lg h-14 sm:h-12'
          : 'bg-[#15a36e] shadow-md h-16 sm:h-13 md:h-14'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : "-100%", opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* --- FLEX HEADER CONTAINER --- */}
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src="/assets/copym/png/Copym-02-1.png"
                alt="CopyM Logo"
                className={`transition-all duration-300 w-auto object-contain ${isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-11 md:h-12'
                  }`}
                style={{ maxWidth: '280px' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.path}
                    className="text-white font-medium text-base lg:text-lg hover:text-white/80 transition-colors duration-200 whitespace-nowrap py-2"
                    style={{ fontFamily: 'Palanquin, sans-serif' }}
                  >
                    {item.label}
                  </Link>
                  {/* DESKTOP Dropdown */}
                  <AnimatePresence>
                    {hoveredItem === item.path && item.dropdown && item.dropdown.length > 0 && (
                      <>
                        {/* Dark Overlay with Green Light at Top/Bottom */}
                        <motion.div
                          className="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-40"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setHoveredItem(null)}
                        >
                          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#15a36e]/20 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#15a36e]/20 to-transparent"></div>
                        </motion.div>
                        {/* Desktop Dropdown Card */}
                        <motion.div
                          className="fixed mt-2 lg:mt-0 top-20 sm:top-24 lg:top-24 right-3 sm:right-8 lg:right-10 w-[96vw] sm:w-[420px] md:w-[480px] lg:w-[400px] xl:w-[500px] max-w-full bg-white rounded-2xl overflow-hidden z-50"
                          style={{ boxShadow: '0px 4px 48.9px 0px rgba(189, 227, 213, 1)' }}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 100 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                          <div className="p-6 sm:p-8">
                            {/* Title */}
                            <div className="mb-6">
                              <h3 className="text-xl sm:text-2xl font-bold mb-2 uppercase" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                <span className="text-[#15a36e]">{item.label.toUpperCase()}</span>
                              </h3>
                              <div className="h-0.5 bg-[#15a36e]"></div>
                            </div>
                            {/* Dropdown Items */}
                            <div className="space-y-6">
                              {item.dropdown.map((dropdownItem, index) => (
                                <Link
                                  key={index}
                                  to={dropdownItem.path || item.path}
                                  className="flex items-center gap-4 hover:opacity-80 transition-opacity duration-200 group"
                                  onClick={() => setHoveredItem(null)}
                                >
                                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-50 border border-gray-100 shadow-sm">
                                    <div className={
                                      item.path === "/solutions"
                                        ? (index === 0 ? 'text-black' : 'text-[#15a36e]')
                                        : 'text-[#15a36e]'
                                    }>
                                      {dropdownItem.icon}
                                    </div>
                                  </div>
                                  <div className="flex-1 min-w-0 flex flex-col justify-center min-h-[48px]">
                                    <h4 className="font-bold text-black text-base leading-tight mb-1" style={{ fontFamily: 'Palanquin, sans-serif' }}>
                                      {dropdownItem.heading}
                                    </h4>
                                    <p className="text-sm text-black leading-snug" style={{ fontFamily: 'Palanquin, sans-serif' }}>
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
              className="lg:hidden text-white hover:text-white/80 transition-colors duration-200 p-1"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                if (isMenuOpen) setMobileDropdownOpen(null);
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IoClose className="h-6 w-6" /> : <GiHamburgerMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Bottom Shadow/Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </motion.nav>

      {/* Mobile/Tablet Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => { setIsMenuOpen(false); setMobileDropdownOpen(null); }}
            />
            {/* Slide-out Panel - Now from Right */}
            <motion.div
              className="absolute top-0 right-0 w-[93vw] xs:w-[88vw] sm:w-[375px] md:w-[440px] max-w-md h-full bg-[#15a36e] rounded-l-2xl shadow-2xl overflow-y-auto border-l-2 border-white/10"
              initial={{ x: 400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 400, opacity: 0 }}
              transition={{ duration: 0.29, ease: "easeOut" }}
              style={{
                maxWidth: 440,
              }}
            >
              {/* Mobile Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center flex-shrink-0"
                >
                  <img
                    src="/assets/copym/png/Copym-02-1.png"
                    alt="CopyM Logo"
                    className="h-10 w-auto object-contain"
                    style={{ maxWidth: 140 }}
                  />
                </Link>
                <button
                  className="text-white p-2"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <IoClose className="h-7 w-7" />
                </button>
              </div>
              {/* Mobile Navigation Items - Accordion */}
              <div className="py-2">
                {navItems.map((item, idx) => {
                  const isDropdown = item.dropdown && item.dropdown.length > 0;
                  const open = isDropdown && mobileDropdownOpen === item.path;
                  return (
                    <div key={item.path} className="border-b border-white/10 last:border-b-0">
                      <div
                        className={`flex items-center px-6 py-3 text-white font-medium transition-colors duration-200 cursor-pointer select-none ${open ? 'bg-white/10' : 'hover:bg-white/10'}`}
                        onClick={() => {
                          if (isDropdown) {
                            setMobileDropdownOpen(mobileDropdownOpen === item.path ? null : item.path);
                          } else {
                            setIsMenuOpen(false);
                            setMobileDropdownOpen(null);
                          }
                        }}
                        style={{ fontFamily: 'Palanquin, sans-serif' }}
                        tabIndex={0}
                        onKeyDown={e => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            if (isDropdown) {
                              setMobileDropdownOpen(mobileDropdownOpen === item.path ? null : item.path);
                            } else {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }
                          }
                        }}
                      >
                        <Link
                          to={item.path}
                          className="block flex-1 min-w-0 text-white text-base"
                          style={{ fontFamily: 'Palanquin, sans-serif' }}
                          onClick={e => {
                            if (isDropdown) {
                              e.preventDefault();
                            } else {
                              setIsMenuOpen(false);
                              setMobileDropdownOpen(null);
                            }
                          }}
                        >
                          {item.label}
                        </Link>
                        {isDropdown && <DropdownChevron open={open} />}
                      </div>
                      {/* Accordion content */}
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            className="bg-[#14a16d] px-6 pt-2 pb-3 space-y-2"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                          >
                            {item.dropdown.map((dropdownItem, idy) => (
                              <Link
                                key={idy}
                                to={dropdownItem.path || item.path}
                                className="flex items-start gap-3 py-2 pl-1.5 rounded hover:bg-white/10"
                                style={{ color: "#fff", fontSize: "15px" }}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <span className="inline-flex items-center justify-center w-10 h-10 rounded bg-white/10 mr-2 border border-white/5">
                                  <span className="text-white">{dropdownItem.icon}</span>
                                </span>
                                <div className="flex flex-col">
                                  <span className="font-bold leading-none text-sm">{dropdownItem.heading}</span>
                                  <span className="text-xs text-white/90 mt-1">{dropdownItem.description}</span>
                                </div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
