'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark' | 'inverted' | 'header';
}

export const DFILogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
}) => {
  if (variant === 'header') {
    return (
      <div className={`flex items-center gap-2 sm:gap-3 ${className}`}>
        <div className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0">
          <Image
            src="/onlylogo.png"
            alt="Dhaka Fantasy Island Logo"
            fill
            sizes="48px"
            priority
            className="object-contain"
          />
        </div>
        <div className="flex flex-col justify-center select-none text-left min-w-0">
          <span className="font-bold text-[12px] min-[360px]:text-[13.5px] sm:text-[15.5px] text-[#1E7C46] leading-tight uppercase font-poppins truncate">
            Dhaka Fantasy Island
          </span>
          <span className="text-[8.5px] min-[360px]:text-[9.5px] sm:text-[11px] font-semibold text-[#1E7C46] leading-tight mt-0.5 truncate">
            (Eco Hotel &amp; Resort)
          </span>
        </div>
      </div>
    );
  }

  if (variant === 'mark') {
    return (
      <div className={`relative inline-flex items-center shrink-0 ${className}`}>
        <Image
          src="/onlylogo.png"
          alt="Dhaka Fantasy Island"
          width={48}
          height={48}
          priority
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }

  const isInverted = variant === 'inverted';

  return (
    <div className={`relative inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/dfilogo.png"
        alt="Dhaka Fantasy Island - Eco Hotel & Resort"
        width={866}
        height={345}
        priority
        className={`h-full w-auto object-contain ${
          isInverted ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
};
