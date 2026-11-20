'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import {
  FaShieldHalved,
  FaScaleBalanced,
  FaFileInvoiceDollar,
  FaChartPie,
  FaPeopleRoof,
  FaArrowTrendUp,
  FaCoins,
  FaBriefcase,
  FaBuildingColumns,
  FaAward,
} from 'react-icons/fa6';

export const WhyInvestSection: React.FC = () => {
  const { lang } = useLanguage();

  const items = [
    {
      id: 1,
      icon: FaShieldHalved,
      pattern: 'arch',
      titleBn: 'সুদৃঢ় ও নিরাপদ বিনিয়োগ',
      titleEn: 'Stable & Safe Investment',
    },
    {
      id: 2,
      icon: FaScaleBalanced,
      pattern: 'circle',
      titleBn: 'বৈধ ও নিয়মিত আয়ের সুযোগ',
      titleEn: 'Legal, Regular Income Opportunity',
    },
    {
      id: 3,
      icon: FaFileInvoiceDollar,
      pattern: 'leaf',
      titleBn: 'আইনসম্মত কর সুবিধা',
      titleEn: 'Tax Benefit',
    },
    {
      id: 4,
      icon: FaChartPie,
      pattern: 'grid',
      titleBn: 'সম্পদের সঠিক বহুমুখীকরণ',
      titleEn: 'Asset Diversification',
    },
    {
      id: 5,
      icon: FaPeopleRoof,
      pattern: 'crest',
      titleBn: 'উত্তরাধিকার ও পারিবারিক নিরাপত্তা',
      titleEn: 'Inheritance & Future Security',
    },
    {
      id: 6,
      icon: FaArrowTrendUp,
      pattern: 'wave',
      titleBn: 'দ্রুত বর্ধনশীল ইকো-ট্যুরিজম খাত',
      titleEn: 'Fast Growing Sector',
    },
    {
      id: 7,
      icon: FaCoins,
      pattern: 'crest',
      titleBn: 'মূল্যবৃদ্ধির চমৎকার সম্ভাবনা',
      titleEn: 'High Return Potential',
    },
    {
      id: 8,
      icon: FaBriefcase,
      pattern: 'arch',
      titleBn: 'কর্মসংস্থান সৃষ্টি ও টেকসই উন্নয়ন',
      titleEn: 'Job Creation & Economic Growth',
    },
    {
      id: 9,
      icon: FaBuildingColumns,
      pattern: 'grid',
      titleBn: 'ব্যাংক বা সাধারণ ফ্ল্যাটের চেয়ে টেকসই বিকল্প',
      titleEn: 'Better Alternative to Idle Savings',
    },
    {
      id: 10,
      icon: FaAward,
      pattern: 'leaf',
      titleBn: 'সামাজিক মর্যাদা ও স্থায়ী সম্পদ',
      titleEn: 'Social Status & Wealth Building',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-4">
          {/* Left Column: Heading (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-normal text-[#1E7C46]">
              {lang === 'bn' ? 'বিনিয়োগের গুরুত্ব' : 'WHY INVEST IN DFI?'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-normal leading-tight">
              {lang === 'bn'
                ? 'প্রকৃতিতে প্রোথিত এক সম্ভাবনাময় ভবিষ্যৎ'
                : 'A promising future, rooted in nature'}
            </h2>
            <div className="w-12 h-1 bg-[#1E7C46] rounded-full mt-2"></div>
            <p className="text-xs sm:text-sm text-[#4B5563] pt-3 leading-relaxed">
              {lang === 'bn'
                ? 'সাফ-কবলা জমি, শরীয়াহ তদারকি ও প্রাতিষ্ঠানিক নিরাপত্তার সুদৃঢ় মেলবন্ধন।'
                : 'Freehold Saf-Kabala deed combined with Shariah oversight and capital growth.'}
            </p>
          </div>

          {/* Right Column: 10 App-style Cards (2 per row on mobile, 3 on tablet, 5 on desktop) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-3.5">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] p-3 sm:p-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between min-h-[105px] sm:min-h-[125px] group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F9FAFB] group-hover:bg-white border border-[#E5E7EB] group-hover:border-[#1E7C46]/40 flex items-center justify-center mb-2.5 sm:mb-3 shadow-xs shrink-0">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#1E7C46]" />
                  </div>
                  <div>
                    <h4 className="text-[11px] sm:text-xs font-semibold text-[#111827] leading-tight sm:leading-snug">
                      {lang === 'bn' ? item.titleBn : item.titleEn}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
