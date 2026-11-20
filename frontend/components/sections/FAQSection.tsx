'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FAQAccordion } from './FAQAccordion';

export const FAQSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
            {lang === 'bn' ? 'সাধারণ প্রশ্নাবলী' : 'FAQ'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight mt-1">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#4B5563] mt-2">
            {t.faq.subtitle}
          </p>
        </div>

        <FAQAccordion items={t.faq.items} />
      </Container>
    </section>
  );
};
