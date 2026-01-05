import React from 'react';

const SectionContainer = ({ 
  children, 
  className = '', 
  padding = 'py-16', 
  bgColor = 'bg-white',
  id = null
}) => {
  return (
    <section 
      id={id}
      className={`
        w-full 
        ${bgColor}
        ${padding}
        overflow-x-hidden
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;