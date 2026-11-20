import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  theme?: 'light' | 'dark' | 'sand';
}

export const SectionDivider: React.FC<SvgProps> = ({
  className = 'w-full h-8',
  theme = 'light',
  ...props
}) => {
  const strokeColor =
    theme === 'dark' ? '#1E4E35' : theme === 'sand' ? '#D8D1C3' : '#E2DDD2';
  const centerFill =
    theme === 'dark' ? '#E5A33B' : theme === 'sand' ? '#0E3B24' : '#2E7D32';

  return (
    <svg
      viewBox="0 0 1200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      {...props}
    >
      <line x1="0" y1="16" x2="550" y2="16" stroke={strokeColor} strokeWidth="1" />
      {/* Decorative center emblem */}
      <circle cx="600" cy="16" r="4" fill={centerFill} />
      <path
        d="M584 16C590 12 596 12 600 16C604 20 610 20 616 16"
        stroke={strokeColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="650" y1="16" x2="1200" y2="16" stroke={strokeColor} strokeWidth="1" />
    </svg>
  );
};
