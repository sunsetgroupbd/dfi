import React from 'react';

interface CardShapePatternProps {
  variant?: 'circle' | 'wave' | 'rings' | 'leaf' | 'grid' | 'arch' | 'crest';
  className?: string;
  color?: string;
}

export const CardShapePattern: React.FC<CardShapePatternProps> = ({
  variant = 'circle',
  className = 'w-28 h-28',
  color = '#E5E7EB',
}) => {
  // 1. Arch / Gateway: Elegant architectural stepped portal contours
  if (variant === 'rings' || variant === 'arch') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <path d="M100 0 H20 V45 C20 75 55 100 100 100 V0 Z" fill={color} fillOpacity="0.35" />
        <path d="M100 0 H50 V30 C50 55 72 75 100 75 V0 Z" fill={color} fillOpacity="0.65" />
        <path d="M100 0 H75 V15 C75 35 88 50 100 50 V0 Z" fill={color} fillOpacity="0.9" />
      </svg>
    );
  }

  // 2. Crest / Sunrise: Radial geometric stepped sun-burst rays
  if (variant === 'crest') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Layered sun rays fan from corner */}
        <path d="M100 0 L25 100 H55 L100 45 Z" fill={color} fillOpacity="0.3" />
        <path d="M100 0 L55 100 H85 L100 25 Z" fill={color} fillOpacity="0.5" />
        <path d="M100 0 L80 100 H100 Z" fill={color} fillOpacity="0.75" />
        <circle cx="100" cy="0" r="35" fill={color} fillOpacity="0.9" />
      </svg>
    );
  }

  // 3. Wave / Flow: Organic river/lagoon water contours
  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Serpentine wave curves */}
        <path
          d="M100 0 H35 Q10 40 45 65 Q70 85 100 100 V0 Z"
          fill={color}
          fillOpacity="0.35"
        />
        <path
          d="M100 0 H60 Q35 30 65 50 Q85 65 100 75 V0 Z"
          fill={color}
          fillOpacity="0.65"
        />
        <path
          d="M100 0 H80 Q65 18 80 32 Q92 42 100 50 V0 Z"
          fill={color}
          fillOpacity="0.9"
        />
      </svg>
    );
  }

  // 4. Leaf / Botanical: Tropical palm frond & petal silhouettes
  if (variant === 'leaf') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Overlapping organic botanical petals */}
        <path
          d="M100 0 C40 5 15 45 20 95 C65 95 95 60 100 0 Z"
          fill={color}
          fillOpacity="0.38"
        />
        <path
          d="M100 0 C60 0 45 30 48 70 C78 70 98 45 100 0 Z"
          fill={color}
          fillOpacity="0.7"
        />
        <path
          d="M100 0 C80 0 70 20 72 45 C88 45 98 30 100 0 Z"
          fill={color}
          fillOpacity="0.9"
        />
      </svg>
    );
  }

  // 5. Grid / Diamond: Modern luxury isometric facet angles
  if (variant === 'grid') {
    return (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
        aria-hidden="true"
      >
        {/* Clean geometric angled facets */}
        <polygon points="100,0 15,0 100,85" fill={color} fillOpacity="0.35" />
        <polygon points="100,0 48,0 100,52" fill={color} fillOpacity="0.65" />
        <polygon points="100,0 75,0 100,25" fill={color} fillOpacity="0.9" />
      </svg>
    );
  }

  // 6. Default 'circle' / Dome: Soft stepped radial corner ripples
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none absolute right-0 top-0 select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <circle cx="100" cy="0" r="95" fill={color} fillOpacity="0.32" />
      <circle cx="100" cy="0" r="65" fill={color} fillOpacity="0.6" />
      <circle cx="100" cy="0" r="38" fill={color} fillOpacity="0.88" />
    </svg>
  );
};
