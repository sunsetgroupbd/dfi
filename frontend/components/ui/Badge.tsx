import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'forest' | 'sand' | 'gold' | 'outline' | 'blue';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'forest',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center px-2.5 py-1 text-xs font-medium tracking-normal uppercase rounded-[2px] border';

  const variantClasses = {
    forest: 'bg-[#0D2F1D] text-white border-[#0D2F1D]',
    sand: 'bg-[#F3F4F6] text-[#111827] border-[#E5E7EB]',
    gold: 'bg-[#D97706] text-white border-[#D97706] font-semibold',
    outline: 'bg-transparent text-[#1E7C46] border-[#1E7C46]',
    blue: 'bg-[#1E7C46] text-white border-[#1E7C46]',
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};
