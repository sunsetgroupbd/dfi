'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'inverted';
}

export const DFILogo: React.FC<LogoProps> = ({
  className = 'h-10 sm:h-11 w-auto',
  variant = 'full',
}) => {
  const isInverted = variant === 'inverted';

  return (
    <div className={`relative inline-flex items-center shrink-0 ${className}`} style={{ maxHeight: '48px', width: 'auto' }}>
      <Image
        src="/dfilogo.png"
        alt="Dhaka Fantasy Island - Eco Hotel & Resort"
        width={866}
        height={345}
        priority
        style={{ maxHeight: '48px', width: 'auto', objectFit: 'contain' }}
        className={`h-full w-auto max-h-full object-contain ${
          isInverted ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
};
