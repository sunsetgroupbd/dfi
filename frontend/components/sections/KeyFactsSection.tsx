'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Award, FileCheck2, Building2 } from 'lucide-react';

export const KeyFactsSection: React.FC = () => {
  const { lang } = useLanguage();

  const stats = [
    {
      icon: Award,
      value: '10+',
      labelBn: 'অনন্য সুবিধা ও সুযোগ',
      labelEn: 'Exclusive Privileges',
    },
    {
      icon: FileCheck2,
      value: '100%',
      labelBn: 'স্থায়ী সাফ-কবলা দলিল',
      labelEn: 'Freehold Registered Title',
    },
    {
      icon: Building2,
      value: 'RJSC',
      labelBn: 'কোম্পানি আইন ১৯৯৪',
      labelEn: 'Company Act Reg.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
            {lang === 'bn' ? 'আস্থা ও নিরাপত্তা' : 'TRUSTED BY INVESTORS'}
          </span>
        </div>

        {/* Center-Aligned 3 Key Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] max-w-4xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center text-center ${
                  idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0 text-[#1E7C46] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#0D2F1D] tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-[#6B7280] font-medium block mt-1.5">
                    {lang === 'bn' ? stat.labelBn : stat.labelEn}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
