import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'sand' | 'forest';
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'white',
  ...props
}) => {
  const variantClasses = {
    white: 'bg-white text-[#111827] border-[#E5E7EB]',
    sand: 'bg-[#F9FAFB] text-[#111827] border-[#E5E7EB]',
    forest: 'bg-[#0D2F1D] text-white border-[#1A452E]',
  };

  return (
    <div
      className={`border p-6 sm:p-8 rounded-[3px] transition-colors ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
