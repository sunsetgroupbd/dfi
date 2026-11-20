import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const DecorativeArch: React.FC<SvgProps> = ({
  className = 'w-20 h-28',
  ...props
}) => (
  <svg
    viewBox="0 0 80 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Outer Arch */}
    <path
      d="M10 110V50C10 27.9086 27.9086 10 50 10C72.0914 10 90 27.9086 90 50V110"
      stroke="#0E3B24"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Inner Arch */}
    <path
      d="M22 110V50C22 34.536 34.536 22 50 22C65.464 22 78 34.536 78 50V110"
      stroke="#D8D1C3"
      strokeWidth="1"
      strokeDasharray="3 3"
    />
    {/* Arch Key Motif */}
    <circle cx="50" cy="22" r="3" fill="#E5A33B" />
  </svg>
);
