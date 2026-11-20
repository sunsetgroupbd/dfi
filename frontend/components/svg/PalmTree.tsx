import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const PalmTree: React.FC<SvgProps> = ({ className = 'w-8 h-8', ...props }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Trunk */}
    <path
      d="M16 30C15.5 24 16 18 18 12"
      stroke="#0E3B24"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Leaves */}
    <path
      d="M18 12C15 8 10 9 7 12C6 14 7 16 7 16"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 12C21 8 26 9 29 12C30 14 29 16 29 16"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 12C14 11 11 14 10 18"
      stroke="#4CA64C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 12C22 11 25 14 26 18"
      stroke="#4CA64C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M18 12C17 6 18 4 19 3"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
