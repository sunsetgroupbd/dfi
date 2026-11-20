import React from 'react';

interface SvgProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const CitySkyline: React.FC<SvgProps> = ({ className = 'w-full h-16', ...props }) => (
  <svg
    viewBox="0 0 800 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="none"
    aria-hidden="true"
    {...props}
  >
    {/* Minimalist modern city silhouette in background */}
    <rect x="20" y="55" width="28" height="45" fill="#E2DDD2" stroke="#D8D1C3" strokeWidth="1" />
    <rect x="54" y="35" width="34" height="65" fill="#D8D1C3" stroke="#C4BDB0" strokeWidth="1" />
    <rect x="94" y="60" width="22" height="40" fill="#EFE9DC" stroke="#D8D1C3" strokeWidth="1" />
    <rect x="122" y="45" width="30" height="55" fill="#D8D1C3" stroke="#C4BDB0" strokeWidth="1" />
    <polygon points="137,25 127,45 147,45" fill="#C4BDB0" />
    <rect x="158" y="68" width="26" height="32" fill="#E2DDD2" stroke="#D8D1C3" strokeWidth="1" />
    
    <rect x="220" y="50" width="36" height="50" fill="#E2DDD2" stroke="#D8D1C3" strokeWidth="1" />
    <rect x="262" y="30" width="40" height="70" fill="#D8D1C3" stroke="#C4BDB0" strokeWidth="1" />
    <line x1="282" y1="15" x2="282" y2="30" stroke="#0E3B24" strokeWidth="1.5" />
    
    <rect x="520" y="48" width="32" height="52" fill="#E2DDD2" stroke="#D8D1C3" strokeWidth="1" />
    <rect x="558" y="38" width="38" height="62" fill="#D8D1C3" stroke="#C4BDB0" strokeWidth="1" />
    <rect x="602" y="58" width="24" height="42" fill="#EFE9DC" stroke="#D8D1C3" strokeWidth="1" />
    <rect x="632" y="42" width="34" height="58" fill="#D8D1C3" stroke="#C4BDB0" strokeWidth="1" />
    
    {/* Ground baseline */}
    <line x1="0" y1="99" x2="800" y2="99" stroke="#0E3B24" strokeWidth="1.5" strokeOpacity="0.3" />
  </svg>
);
