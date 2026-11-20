import React from 'react';

interface CardShapePatternProps {
  variant?: 'circle' | 'wave' | 'rings' | 'leaf' | 'grid';
  className?: string;
  color?: string;
}

export const CardShapePattern: React.FC<CardShapePatternProps> = ({
  variant = 'circle',
  className = 'w-28 h-28',
  color = '#E5E7EB',
}) => {
  if (variant === 'rings') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Layered solid architectural arch half-shade */}
        <path d="M100 0 H15 C15 50 50 100 100 100 V0 Z" fill={color} fillOpacity="0.38" />
        <path d="M100 0 H45 C45 40 70 80 100 80 V0 Z" fill={color} fillOpacity="0.65" />
        <path d="M100 0 H70 C70 25 85 55 100 55 V0 Z" fill={color} fillOpacity="0.9" />
      </svg>
    );
  }

  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Layered solid organic wave curve half-shade */}
        <path
          d="M100 0 H20 C20 45 55 90 100 100 V0 Z"
          fill={color}
          fillOpacity="0.4"
        />
        <path
          d="M100 0 H50 C50 35 75 70 100 75 V0 Z"
          fill={color}
          fillOpacity="0.75"
        />
        <path
          d="M100 0 H75 C75 20 88 45 100 50 V0 Z"
          fill={color}
          fillOpacity="0.95"
        />
      </svg>
    );
  }

  if (variant === 'leaf') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Layered solid petal diagonal half-shade */}
        <path
          d="M100 0 C60 0 25 35 25 85 C75 85 100 50 100 0 Z"
          fill={color}
          fillOpacity="0.45"
        />
        <path
          d="M100 0 C72 0 50 22 50 60 C80 60 100 38 100 0 Z"
          fill={color}
          fillOpacity="0.75"
        />
      </svg>
    );
  }

  if (variant === 'grid') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Layered solid angular geometric corner shade */}
        <polygon points="100,0 20,0 100,80" fill={color} fillOpacity="0.4" />
        <polygon points="100,0 55,0 100,45" fill={color} fillOpacity="0.75" />
      </svg>
    );
  }

  // Default: 'circle'
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* Layered solid circular half-shade in the corner */}
      <circle cx="100" cy="0" r="95" fill={color} fillOpacity="0.4" />
      <circle cx="100" cy="0" r="65" fill={color} fillOpacity="0.7" />
      <circle cx="100" cy="0" r="35" fill={color} fillOpacity="0.95" />
    </svg>
  );
};
