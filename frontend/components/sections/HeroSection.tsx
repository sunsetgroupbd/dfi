'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { FileText, Compass, ShieldCheck } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative bg-[#071F14] text-white overflow-hidden">
      {/* 1. Full-Bleed Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/dfiheroimage.webp"
          alt="Dhaka Fantasy Island - Eco Hotel & Resort"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_35%]"
        />
        {/* Cinematic Gradient Scrim: Dark on the left for text contrast, clear on right for resort view */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071F14] via-[#071F14]/70 to-[#071F14]/40 lg:bg-gradient-to-r lg:from-[#071F14]/95 lg:via-[#071F14]/75 lg:to-[#071F14]/30" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* 2. Hero Content (Text and Buttons Overlayed on Top of Image) */}
      <div className="relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-20 sm:pb-24 lg:pb-28">
        <Container>
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            {/* Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.22]">
              {lang === 'bn' ? (
                <>
                  <span className="block text-white">শহরের প্রাণকেন্দ্রে</span>
                  <span className="block text-[#E5E7EB] font-medium text-2xl sm:text-3xl md:text-4xl mt-1">
                    কোলাহল মুক্ত প্রকৃতির শান্ত পরিবেশে
                  </span>
                  <span className="block text-[#86EFAC] font-extrabold mt-2">
                    ঢাকা ফ্যান্টাসি আইল্যান্ড
                  </span>
                  <span className="block text-[#BBF7D0] text-xl sm:text-2xl font-semibold mt-1">
                    (ইকো হোটেল এন্ড রিসোর্ট)
                  </span>
                </>
              ) : (
                <>
                  <span className="block text-white">In the Heart of the City</span>
                  <span className="block text-[#E5E7EB] font-medium text-2xl sm:text-3xl md:text-4xl mt-1">
                    A Peaceful Natural Environment Away from Noise
                  </span>
                  <span className="block text-[#86EFAC] font-extrabold mt-2">
                    Dhaka Fantasy Island
                  </span>
                  <span className="block text-[#BBF7D0] text-xl sm:text-2xl font-semibold mt-1">
                    (Eco Hotel &amp; Resort)
                  </span>
                </>
              )}
            </h1>

            {/* Sub-text narrative */}
            <p className="text-sm sm:text-base md:text-lg text-[#E5E7EB]/90 leading-relaxed max-w-xl font-normal">
              {lang === 'bn'
                ? 'রাজধানীর মোহাম্মদপুর সংলগ্ন বসিলা পরিকল্পিত এলাকায় নিবিড় প্রকৃতি ও আধুনিক আতিথেয়তার সমন্বয়ে স্থায়ী সাফ-কবলা মালিকানায় অংশীদারিত্বের এক অনন্য সুযোগ।'
                : 'A serene waterside sanctuary in planned Mohammadpur offering permanent deeded Saf-Kabala land share ownership and halal hospitality investment.'}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href="#packages-section"
                variant="primary"
                size="lg"
                className="bg-[#165B33] hover:bg-[#124A2A] text-white border border-[#22C55E]/40 shadow-lg shadow-black/30 rounded-xl px-7 py-3 text-sm font-semibold"
              >
                {t.hero.ctaPrimary}
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-xl px-7 py-3 text-sm font-semibold"
              >
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. Full-width Attached Statutory Fact Strip (Directly connected to hero bottom) */}
      <div className="relative z-10 bg-[#0A2617]/95 backdrop-blur-md border-t border-[#18422A] py-6 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Fact 1 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="w-11 h-11 rounded-xl border border-[#2D5A3D] bg-[#071F14] flex items-center justify-center shrink-0 shadow-inner">
                <FileText className="w-5 h-5 text-[#86EFAC]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {lang === 'bn' ? 'সাফ-কবলা মালিকানা' : 'Saf-Kabala Ownership'}
                </h4>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  {lang === 'bn' ? 'রেজিস্ট্রেশনকৃত স্থায়ী হস্তান্তরযোগ্য দলিল' : 'Deeded permanent registered title'}
                </p>
              </div>
            </div>

            {/* Fact 2 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="w-11 h-11 rounded-xl border border-[#2D5A3D] bg-[#071F14] flex items-center justify-center shrink-0 shadow-inner">
                <Compass className="w-5 h-5 text-[#86EFAC]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {lang === 'bn' ? 'শরীয়াহ সুপারভাইজরি কমিটি' : 'Shariah Supervisory Committee'}
                </h4>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  {lang === 'bn' ? 'হালাল বিনিয়োগ নীতিমালা নিশ্চিতকরণে গঠিত' : 'Supervising halal investment standards'}
                </p>
              </div>
            </div>

            {/* Fact 3 */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.04] border border-white/10">
              <div className="w-11 h-11 rounded-xl border border-[#2D5A3D] bg-[#071F14] flex items-center justify-center shrink-0 shadow-inner">
                <ShieldCheck className="w-5 h-5 text-[#86EFAC]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {lang === 'bn' ? 'কোম্পানি আইন ১৯৯৪' : 'Company Act 1994'}
                </h4>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  {lang === 'bn' ? 'আইনগত কাঠামোর অধীনে সুদৃঢ় সুরক্ষা' : 'Institutional corporate protection'}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
