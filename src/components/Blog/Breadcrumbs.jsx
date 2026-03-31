import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

/**
 * Breadcrumbs Component
 * Shows navigation hierarchy to help users understand their location
 * Example: Home > Blog > Education > Article Title
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  // Default home item if not provided
  const defaultItems = [
    { label: 'Home', path: '/' },
    ...items
  ];

  return (
    <nav className="flex items-center flex-wrap gap-1 text-xs sm:text-sm" aria-label="Breadcrumb">
      {defaultItems.map((item, index) => {
        const isLast = index === defaultItems.length - 1;
        
        return (
          <React.Fragment key={item.path || index}>
            {/* Current Item */}
            {index > 0 && (
              <FiChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 mx-1 sm:mx-2 flex-shrink-0" />
            )}
            
            {isLast ? (
              <span className="text-gray-500 font-medium truncate max-w-[150px] sm:max-w-none">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-[#15a36e] hover:text-[#128a5c] transition-colors font-medium truncate max-w-[150px] sm:max-w-none"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
