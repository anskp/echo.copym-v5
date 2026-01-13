import React from 'react';

const SectionContainer = ({
  children,
  className = '',
  padding = 'py-10',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-20">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;