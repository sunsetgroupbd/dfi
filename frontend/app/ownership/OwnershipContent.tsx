'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { OwnershipSection } from '@/components/sections/OwnershipSection';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

export const OwnershipContent: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      {/* Header Banner */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E7D32]">
          {t.nav.ownership}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B24] tracking-tight mt-2 max-w-3xl leading-tight">
          {t.ownership.title}
        </h1>
        <p className="text-base sm:text-lg text-[#5A625D] mt-4 max-w-2xl leading-relaxed">
          {t.ownership.subtitle}
        </p>
      </Container>

      {/* 3 Step Interactive Process Component */}
      <OwnershipSection />

      {/* Detailed Legal Framework */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#165B33]">
                {lang === 'bn' ? 'আইনি ও প্রাতিষ্ঠানিক ভিত্তি' : 'Statutory & Corporate Governance'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] mt-1">
                {lang === 'bn' ? 'নিরাপদ বিনিয়োগের প্রাতিষ্ঠানিক প্রতিশ্রুতি' : 'Institutional Security Framework'}
              </h2>
            </div>

            <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-6 sm:p-8 rounded-[4px] space-y-6 text-sm text-[#4B5563] leading-relaxed">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#165B33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#111827] text-base mb-1">
                    {lang === 'bn' ? '১. কোম্পানি আইন ১৯৯৪ এর পূর্ণাঙ্গ আনুগত্য' : '1. Compliance with Company Act 1994'}
                  </h3>
                  <p>
                    {lang === 'bn'
                      ? 'সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিমিটেড দেশের প্রচলিত কোম্পানি আইন ১৯৯৪ অনুসারে সরকারের নিবন্ধিত যৌথ মূলধনী কোম্পানি ও ফার্মসমূহের পরিদপ্তর (RJSC) কর্তৃক নিবন্ধিত। প্রতিটি শেয়ারহোল্ডার প্রাতিষ্ঠানিক নিয়মানুযায়ী সুরক্ষিত।'
                      : 'Sunset Kuakata Hotel & Resort Limited is incorporated under the Company Act 1994 and registered with the Registrar of Joint Stock Companies and Firms (RJSC), ensuring corporate governance and shareholder rights.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E5E7EB]">
                <Scale className="w-6 h-6 text-[#165B33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#111827] text-base mb-1">
                    {lang === 'bn' ? '২. শরীয়াহ সুপারভাইজরি কমিটি' : '2. Shariah Supervisory Committee'}
                  </h3>
                  <p>
                    {lang === 'bn'
                      ? 'প্রকল্পের আয় বণ্টন ও পরিচালন প্রক্রিয়া যাতে হালাল ও নৈতিক বাণিজ্য নীতিমালার সাথে সংগতিপূর্ণ থাকে, তা নিশ্চিত করার জন্য একটি স্বতন্ত্র শরীয়াহ সুপারভাইজরি কমিটি দায়িত্ব পালন করে।'
                      : 'An independent Shariah Supervisory Committee oversees financial allocations, dividend frameworks, and commercial practices to maintain strict alignment with Islamic ethical principles.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-[#E5E7EB]">
                <FileText className="w-6 h-6 text-[#165B33] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#111827] text-base mb-1">
                    {lang === 'bn' ? '৩. সাফ-কবলা হস্তান্তর ও বিক্রয় অধিকার' : '3. Deeded Freehold Transferability'}
                  </h3>
                  <p>
                    {lang === 'bn'
                      ? 'সাফ-কবলা দলিল রেজিস্ট্রেশনের পর শেয়ারহোল্ডার তার অর্জিত জমি ও শেয়ার উত্তরাধিকারীদের বণ্টন অথবা তৃতীয় পক্ষের কাছে হস্তান্তরের পূর্ণ আইনি অধিকার উপভোগ করবেন।'
                      : 'Upon registration of the Saf-Kabala title, shareholders retain full statutory rights to bequeath, gift, or transfer their proportionate land and equity holdings in compliance with company bylaws.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button href="/contact" variant="primary" size="lg">
                {t.common.enquireNow}
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
