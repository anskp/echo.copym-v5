import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

/**
 * TableOfContents Component
 * Sticky navigation for long articles
 * Collapsible on mobile, sticky on desktop
 */
export default function TableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveId(id);
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 lg:top-28">
      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between px-4 py-3 bg-white border border-black/10 rounded-lg font-semibold text-sm mb-3"
        style={{ fontFamily: 'Palanquin, sans-serif' }}
      >
        <span>Table of Contents</span>
        <FiChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Desktop Sidebar / Mobile Dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="bg-white rounded-xl p-4 border border-black/5 shadow-sm">
          <h4 
            className="text-sm font-bold text-black mb-3 hidden lg:block"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            On this page
          </h4>
          <nav className="space-y-2">
            {headings.map(({ id, title, level }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                className={`block text-sm transition-colors ${
                  activeId === id
                    ? 'text-[#15a36e] font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                } ${level === 3 ? 'pl-4 border-l-2 border-[#15a36e]' : ''}`}
                style={{ fontFamily: 'Palanquin, sans-serif' }}
              >
                {title}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
