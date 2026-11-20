import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const WaterWaves: React.FC<SvgProps> = ({ className = 'w-24 h-6', ...props }) => (
  <svg
    viewBox="0 0 96 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M2 10C10 6 18 14 26 10C34 6 42 14 50 10C58 6 66 14 74 10C82 6 90 14 94 10"
      stroke="#0F5E73"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M2 17C10 13 18 21 26 17C34 13 42 21 50 17C58 13 66 21 74 17C82 13 90 21 94 17"
      stroke="#3FA7B8"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeOpacity="0.75"
    />
  </svg>
);
