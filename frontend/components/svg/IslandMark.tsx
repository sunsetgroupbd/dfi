import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const IslandMark: React.FC<SvgProps> = ({ className = 'w-10 h-10', ...props }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Base water mound */}
    <path
      d="M6 36C12 34 18 35 24 35C30 35 36 34 42 36"
      stroke="#3FA7B8"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M10 40C15 39 20 39.5 24 39.5C28 39.5 33 39 38 40"
      stroke="#0F5E73"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Sandy Island Mound */}
    <path
      d="M12 34C14 26 21 24 24 24C27 24 34 26 36 34"
      fill="#EFE9DC"
      stroke="#0E3B24"
      strokeWidth="1.5"
    />
    {/* Center Palm Trunk */}
    <path
      d="M24 24C23.5 18 25 14 27 10"
      stroke="#0E3B24"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Palm fronds */}
    <path
      d="M27 10C24 6 18 8 16 11"
      stroke="#2E7D32"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M27 10C30 6 36 7 38 10"
      stroke="#2E7D32"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M27 10C22 10 19 14 18 16"
      stroke="#4CA64C"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    <path
      d="M27 10C32 11 35 14 36 17"
      stroke="#4CA64C"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    {/* Sun / Accent point */}
    <circle cx="16" cy="14" r="2.5" fill="#E5A33B" />
  </svg>
);
