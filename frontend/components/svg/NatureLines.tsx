import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const NatureLines: React.FC<SvgProps> = ({ className = 'w-32 h-12', ...props }) => (
  <svg
    viewBox="0 0 160 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Organic contour lines representing land topography */}
    <path
      d="M4 36C28 32 54 40 80 34C106 28 132 38 156 32"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 24C34 20 62 26 88 20C114 14 136 24 152 18"
      stroke="#0E3B24"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
    <path
      d="M24 14C48 8 72 16 98 10C120 6 138 12 148 9"
      stroke="#E5A33B"
      strokeWidth="1"
      strokeLinecap="round"
      strokeOpacity="0.8"
    />
  </svg>
);
