'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FAQAccordion } from './FAQAccordion';

export const FAQSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
            {lang === 'bn' ? 'সাধারণ প্রশ্নাবলী' : 'FREQUENTLY ASKED QUESTIONS'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2F1D] tracking-tight mt-1">
            {t.faq.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-2">
            {t.faq.subtitle}
          </p>
        </div>

        <FAQAccordion items={t.faq.items} />
      </Container>
    </section>
  );
};
