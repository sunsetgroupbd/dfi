import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const AbstractNatureShape: React.FC<SvgProps> = ({
  className = 'w-32 h-32',
  ...props
}) => (
  <svg
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
    {...props}
  >
    {/* Geometric eco emblem: organic ring and botanical geometry */}
    <circle cx="60" cy="60" r="48" stroke="#0E3B24" strokeWidth="1.5" strokeDasharray="4 3" />
    <circle cx="60" cy="60" r="38" stroke="#D8D1C3" strokeWidth="1" />
    {/* Interlocking leaf petals */}
    <path
      d="M60 22C60 22 75 42 75 60C75 78 60 98 60 98C60 98 45 78 45 60C45 42 60 22 60 22Z"
      fill="#EFE9DC"
      stroke="#2E7D32"
      strokeWidth="1.25"
    />
    <path
      d="M22 60C22 60 42 45 60 45C78 45 98 60 98 60C98 60 78 75 60 75C42 75 22 60 22 60Z"
      fill="#F7F5EE"
      stroke="#0F5E73"
      strokeWidth="1.25"
    />
    <circle cx="60" cy="60" r="5" fill="#E5A33B" />
  </svg>
);
