import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'gold' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-150 rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-normal select-none';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 min-h-[36px] gap-1.5',
    md: 'text-sm px-5 py-2.5 min-h-[42px] gap-2 font-medium',
    lg: 'text-sm sm:text-base px-6 py-3 min-h-[46px] gap-2.5 font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-[#1E7C46] text-white border-[#1E7C46] hover:bg-[#176337] hover:border-[#176337] focus-visible:ring-[#1E7C46]',
    secondary:
      'bg-white text-[#111827] border-[#D1D5DB] hover:bg-[#F9FAFB] hover:border-[#9CA3AF] focus-visible:ring-[#1E7C46]',
    outline:
      'bg-transparent text-[#1E7C46] border-[#1E7C46] hover:bg-[#1E7C46] hover:text-white focus-visible:ring-[#1E7C46]',
    gold:
      'bg-[#D97706] text-white border-[#D97706] hover:bg-[#B45309] hover:border-[#B45309] font-semibold focus-visible:ring-[#D97706]',
    dark:
      'bg-[#0D2F1D] text-white border-[#0D2F1D] hover:bg-[#1E7C46] hover:border-[#1E7C46] focus-visible:ring-[#0D2F1D]',
    ghost:
      'bg-transparent text-[#111827] border-transparent hover:bg-[#F3F4F6] focus-visible:ring-[#1E7C46]',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
