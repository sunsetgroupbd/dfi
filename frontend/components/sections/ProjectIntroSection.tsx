'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { MapPin, Check } from 'lucide-react';

export const ProjectIntroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Forest green feature card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0D2F1D] text-white p-7 sm:p-9 rounded-[4px] border border-[#1A452E] flex flex-col justify-between min-h-[340px]">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#081E13] border border-[#2D5A3D] text-[#86EFAC] text-[11px] font-semibold uppercase tracking-wider rounded-[3px]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{t.projectIntro.badgeText}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {lang === 'bn' ? 'প্রকৃতিবান্ধব আধুনিক আতিথেয়তা' : 'Eco-Hospitality Benchmark'}
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {lang === 'bn'
                    ? 'ঢাকার নাগরিক ব্যস্ততার সীমানা পেরিয়ে নিবিড় সবুজ ও শান্ত জলের বুকে একটি দীর্ঘমেয়াদী স্থায়ী সম্পদ।'
                    : 'A serene waterside sanctuary offering permanent deeded ownership minutes from urban Dhaka.'}
                </p>
              </div>

              <div className="pt-5 border-t border-[#1A452E] space-y-2 text-xs text-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86EFAC]" />
                  <span>{lang === 'bn' ? '১০০% সাফ-কবলা দলিল রেজিস্ট্রেশন' : '100% Deeded Saf-Kabala Title'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86EFAC]" />
                  <span>{lang === 'bn' ? 'স্বতন্ত্র শরীয়াহ কমিটির নিয়মিত পর্যবেক্ষণ' : 'Independent Shariah Committee'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#86EFAC]" />
                  <span>{lang === 'bn' ? 'বাৎসরিক অবস্থানের বিশেষ আতিথেয়তা অধিকার' : 'Exclusive Annual Stay Privileges'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
              {t.projectIntro.tag}
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight leading-tight">
              {t.projectIntro.title}
            </h2>

            <div className="space-y-3 text-sm text-[#4B5563] leading-relaxed">
              <p>{t.projectIntro.p1}</p>
              <p>{t.projectIntro.p2}</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <Button href="/overview" variant="primary" size="md">
                {t.common.learnMore}
              </Button>
              <Button href="/location" variant="secondary" size="md">
                {t.nav.location}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
