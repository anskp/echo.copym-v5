import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

/**
 * DisclaimerBlock Component
 * Legal/financial disclaimer for articles
 */
export default function DisclaimerBlock({ 
  title = "Disclaimer",
  children 
}) {
  return (
    <div className="my-8 bg-amber-50 rounded-xl p-5 border border-amber-200">
      <div className="flex items-start gap-3">
        <FiAlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h4 
            className="font-bold text-amber-800 mb-2"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            {title}
          </h4>
          <div 
            className="text-xs sm:text-sm text-amber-700 leading-relaxed"
            style={{ fontFamily: 'Palanquin, sans-serif' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
