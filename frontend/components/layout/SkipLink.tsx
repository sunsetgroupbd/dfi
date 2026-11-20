import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0E3B24] focus:text-white focus:border focus:border-[#E5A33B] focus:outline-none"
    >
      Skip to main content
    </a>
  );
};
