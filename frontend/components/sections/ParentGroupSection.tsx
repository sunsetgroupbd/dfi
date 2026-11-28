'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { Building2, ExternalLink, ShieldCheck } from 'lucide-react';

export const ParentGroupSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        <div className="relative overflow-hidden bg-[#F9FAFB] border border-[#E5E7EB] p-7 sm:p-10 rounded-2xl shadow-sm">
          <CardShapePattern variant="rings" color="#1E7C46" className="w-48 h-48 opacity-30" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Parent Info (8 cols) */}
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E7EB] text-[#1E7C46] text-xs font-semibold uppercase tracking-normal rounded-xl shadow-xs">
                <Building2 className="w-3.5 h-3.5 text-[#1E7C46]" />
                <span>{t.parentGroup.tag}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-normal">
                {t.parentGroup.title}
              </h2>

              <p className="text-xs font-semibold text-[#1E7C46] uppercase tracking-normal">
                {t.parentGroup.subtitle}
              </p>

              <div className="space-y-2 text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                <p>{t.parentGroup.p1}</p>
                <p>{t.parentGroup.p2}</p>
              </div>

              {/* Super Combo cross-promotion note */}
              <div className="p-3.5 bg-white border border-[#E5E7EB] text-xs text-[#4B5563] rounded-xl shadow-xs">
                <p className="font-medium text-[#111827]">
                  {t.parentGroup.superComboNotice}
                </p>
              </div>
            </div>

            {/* Right Column: Governance Badge & Action Link (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between space-y-4">
              <div className="p-5 bg-white border border-[#E5E7EB] rounded-2xl w-full text-left shadow-xs">
                <div className="flex items-center gap-2 text-[#111827] font-semibold text-xs mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1E7C46]" />
                  <span>{lang === 'bn' ? 'আইনগত কাঠামোর ভিত্তি' : 'Statutory Registry'}</span>
                </div>
                <p className="text-xs text-[#4B5563] leading-relaxed">
                  {t.common.companyActNotice}
                </p>
              </div>

              <Button
                href="https://sunsetgroupbd.com"
                external
                variant="primary"
                size="md"
                className="w-full lg:w-auto rounded-xl px-5"
              >
                <span>{t.parentGroup.visitWebsite}</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
