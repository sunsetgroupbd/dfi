'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
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
      titleBn: 'সুদৃঢ় ও নিরাপদ বিনিয়োগ',
      titleEn: 'Stable & Safe Investment',
    },
    {
      id: 2,
      icon: FaScaleBalanced,
      titleBn: 'বৈধ ও নিয়মিত আয়ের সুযোগ',
      titleEn: 'Legal, Regular Income',
    },
    {
      id: 3,
      icon: FaFileInvoiceDollar,
      titleBn: 'আইনসম্মত কর সুবিধা',
      titleEn: 'Tax Benefits',
    },
    {
      id: 4,
      icon: FaChartPie,
      titleBn: 'সম্পদের সঠিক বহুমুখীকরণ',
      titleEn: 'Asset Diversification',
    },
    {
      id: 5,
      icon: FaPeopleRoof,
      titleBn: 'উত্তরাধিকার ও পারিবারিক নিরাপত্তা',
      titleEn: 'Inheritance & Security',
    },
    {
      id: 6,
      icon: FaArrowTrendUp,
      titleBn: 'দ্রুত বর্ধনশীল ইকো-ট্যুরিজম',
      titleEn: 'Fast Growing Sector',
    },
    {
      id: 7,
      icon: FaCoins,
      titleBn: 'মূল্যবৃদ্ধির চমৎকার সম্ভাবনা',
      titleEn: 'High Return Potential',
    },
    {
      id: 8,
      icon: FaBriefcase,
      titleBn: 'কর্মসংস্থান ও টেকসই উন্নয়ন',
      titleEn: 'Job Creation & Growth',
    },
    {
      id: 9,
      icon: FaBuildingColumns,
      titleBn: 'ব্যাংক জমার চেয়ে লাভজনক বিকল্প',
      titleEn: 'Superior to Idle Cash',
    },
    {
      id: 10,
      icon: FaAward,
      titleBn: 'সামাজিক মর্যাদা ও স্থায়ী সম্পদ',
      titleEn: 'Prestige & Lasting Wealth',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <FadeIn direction="up" className="max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
            {lang === 'bn' ? 'বিনিয়োগের গুরুত্ব' : 'WHY INVEST IN DFI?'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2F1D] tracking-tight mt-1 leading-tight">
            {lang === 'bn'
              ? 'প্রকৃতিতে প্রোথিত এক সম্ভাবনাময় ভবিষ্যৎ'
              : 'A Promising Future Rooted in Nature'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'সাফ-কবলা জমি, শরীয়াহ তদারকি ও প্রাতিষ্ঠানিক নিরাপত্তার সুদৃঢ় মেলবন্ধন।'
              : 'Freehold Saf-Kabala deed combined with Shariah oversight and capital growth.'}
          </p>
        </FadeIn>

        {/* 10 App-style Cards with Circular Outline Icons (MRstudio Style) */}
        <StaggerContainer
          staggerDelay={0.04}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4"
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div className="h-full bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] hover:-translate-y-1 p-4 sm:p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div className="w-10 h-10 rounded-full bg-[#E8F5E9] group-hover:bg-[#1E7C46] border border-[#C8E6C9] group-hover:border-[#1E7C46] flex items-center justify-center mb-3 text-[#1E7C46] group-hover:text-white transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#111827] leading-tight">
                      {lang === 'bn' ? item.titleBn : item.titleEn}
                    </h3>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
};
