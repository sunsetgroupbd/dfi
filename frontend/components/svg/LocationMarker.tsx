import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  color?: string;
}

export const LocationMarker: React.FC<SvgProps> = ({
  className = 'w-6 h-6',
  color = '#0E3B24',
  ...props
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    <path
      d="M12 2C7.58172 2 4 5.58172 4 10C4 15.25 12 22 12 22C12 22 20 15.25 20 10C20 5.58172 16.4183 2 12 2Z"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="#FFFFFF"
    />
    <circle cx="12" cy="10" r="3" fill={color} />
  </svg>
);
