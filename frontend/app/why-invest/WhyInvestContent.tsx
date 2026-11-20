'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { WhyInvestSection } from '@/components/sections/WhyInvestSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';

export const WhyInvestContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      {/* Header Banner */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E7D32]">
          {t.nav.whyInvest}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B24] tracking-tight mt-2 max-w-3xl leading-tight">
          {t.whyInvest.title}
        </h1>
        <p className="text-base sm:text-lg text-[#5A625D] mt-4 max-w-2xl leading-relaxed">
          {t.whyInvest.subtitle}
        </p>
      </Container>

      {/* 10 Cards Grid */}
      <WhyInvestSection />

      {/* Final Action CTA */}
      <FinalCtaSection />
    </div>
  );
};
