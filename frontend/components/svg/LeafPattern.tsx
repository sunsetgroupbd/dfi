import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const LeafPattern: React.FC<SvgProps> = ({ className = 'w-16 h-16', ...props }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Main leaf contour */}
    <path
      d="M16 48C16 48 20 28 44 20C44 20 48 38 28 48C23 50.5 18 49 16 48Z"
      fill="#EFE9DC"
      fillOpacity="0.4"
      stroke="#2E7D32"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Leaf central rib */}
    <path
      d="M18 47C25 40 33 32 43 21"
      stroke="#0E3B24"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    {/* Veins */}
    <path d="M26 40C30 38 33 39 33 39" stroke="#0E3B24" strokeWidth="1" strokeLinecap="round" />
    <path d="M31 35C35 33 38 34 38 34" stroke="#0E3B24" strokeWidth="1" strokeLinecap="round" />
    <path d="M28 44C27 46 25 47 25 47" stroke="#2E7D32" strokeWidth="1" strokeLinecap="round" />
    {/* Small accompanying sprout */}
    <path
      d="M38 48C38 48 42 36 54 32C54 32 56 42 46 48C43 49.5 40 48.5 38 48Z"
      fill="#4CA64C"
      fillOpacity="0.25"
      stroke="#4CA64C"
      strokeWidth="1.2"
    />
  </svg>
);
