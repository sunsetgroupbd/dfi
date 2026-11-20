import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeColor?: string;
}

export const WavePattern: React.FC<SvgProps> = ({
  className = 'w-full h-8',
  strokeColor = '#3FA7B8',
  ...props
}) => (
  <svg
    viewBox="0 0 1200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M0 20C150 5 250 35 400 20C550 5 650 35 800 20C950 5 1050 35 1200 20"
      stroke={strokeColor}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M0 28C150 15 250 41 400 28C550 15 650 41 800 28C950 15 1050 41 1200 28"
      stroke={strokeColor}
      strokeOpacity="0.4"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);
