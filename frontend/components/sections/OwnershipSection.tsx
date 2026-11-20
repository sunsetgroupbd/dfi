'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { FileText, Laptop } from 'lucide-react';

export const OwnershipSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#0A2617] text-white border-b border-[#18422A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E7C46]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <FadeIn direction="up" className="mb-12 sm:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-normal text-[#86EFAC]">
            {lang === 'bn' ? 'মালিকানা প্রক্রিয়া' : 'OWNERSHIP PROCESS'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-normal mt-1">
            {lang === 'bn'
              ? 'সহজ। নিরাপদ। শরীয়াহ সম্মত।'
              : 'Simple. Secure. Shariah Compliant.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2 max-w-xl">
            {lang === 'bn'
              ? 'আইনগত কাঠামোর অধীনে বুকিং থেকে রেজিস্ট্রি পর্যন্ত প্রতিটি ধাপ সুনির্দিষ্ট ও স্বচ্ছ।'
              : 'A transparent step-by-step statutory process from initial booking to deed execution.'}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: 3 Horizontal Steps in modern rounded cardviews (3 in a row on mobile and desktop) */}
          <div className="lg:col-span-8 space-y-4">
            <StaggerContainer staggerDelay={0.1} className="grid grid-cols-3 gap-2 sm:gap-4">
              {/* Step 1 */}
              <StaggerItem>
                <div className="h-full relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] hover:-translate-y-1 border border-white/10 p-2.5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 group">
                  <CardShapePattern variant="arch" color="#86EFAC" className="w-16 h-16 sm:w-24 sm:h-24 opacity-20" />
                  <div className="relative z-10 flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#0A2617] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shadow-md">
                      1
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                      {lang === 'bn' ? 'বুকিং' : 'Step 1'}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xs sm:text-base font-bold text-white leading-tight">
                      {lang === 'bn' ? 'মানি রিসিট প্রদান' : 'Money Receipt'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-tight sm:leading-relaxed mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
                      {lang === 'bn'
                        ? 'সানসেটের নামে জমা অর্থের অফিশিয়াল মানি রিসিট প্রদান, যেখানে ওনারশিপ নম্বর স্পষ্টভাবে উল্লেখ থাকবে।'
                        : 'Money receipt from Sunset for deposited amount, showing ownership ID.'}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Step 2 */}
              <StaggerItem>
                <div className="h-full relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] hover:-translate-y-1 border border-white/10 p-2.5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 group">
                  <CardShapePattern variant="wave" color="#86EFAC" className="w-16 h-16 sm:w-24 sm:h-24 opacity-20" />
                  <div className="relative z-10 flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#0A2617] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shadow-md">
                      2
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                      {lang === 'bn' ? 'চুক্তি' : 'Step 2'}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xs sm:text-base font-bold text-white leading-tight">
                      {lang === 'bn' ? 'ডিড অব এগ্রিমেন্ট' : 'Deed of Agreement'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-tight sm:leading-relaxed mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
                      {lang === 'bn'
                        ? 'ডাউন পেমেন্টের পর শেয়ারহোল্ডার ও কোম্পানির মধ্যে চুক্তি সম্পাদন, যাতে সুবিধা ও শর্তাবলী অন্তর্ভুক্ত থাকবে।'
                        : 'Formal Deed of Agreement with details, benefits, share-transfer rules and terms.'}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              {/* Step 3 */}
              <StaggerItem>
                <div className="h-full relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] hover:-translate-y-1 border border-white/10 p-2.5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 group">
                  <CardShapePattern variant="crest" color="#86EFAC" className="w-16 h-16 sm:w-24 sm:h-24 opacity-20" />
                  <div className="relative z-10 flex items-center justify-between mb-2.5 sm:mb-4">
                    <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white text-[#0A2617] font-bold font-mono text-xs sm:text-sm flex items-center justify-center shadow-md">
                      3
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                      {lang === 'bn' ? 'রেজিস্ট্রি' : 'Final Step'}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xs sm:text-base font-bold text-white leading-tight">
                      {lang === 'bn' ? 'সাফ-কবলা হস্তান্তর' : 'Saf-Kabala Handover'}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#CBD5E1] leading-tight sm:leading-relaxed mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-none">
                      {lang === 'bn'
                        ? 'শেয়ারের সমুদয় মূল্য সম্পূর্ণ পরিশোধের পর সরকার নির্ধারিত রেজিস্ট্রির মাধ্যমে সাফ-কবলা দলিল হস্তান্তর।'
                        : "After full payment, the land's registered saf-kabala is officially handed over."}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Column: Exit Policy & ERP updates boxes (2 in a row on mobile, stacked on desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-4 w-full">
            {/* Exit Policy Card */}
            <div className="relative overflow-hidden p-3 sm:p-5 bg-white/[0.04] border border-white/10 rounded-xl sm:rounded-2xl space-y-1.5 sm:space-y-2 group">
              <CardShapePattern variant="leaf" color="#86EFAC" className="w-16 h-16 sm:w-24 sm:h-24 opacity-20" />
              <div className="relative z-10 flex items-center gap-2 text-[#86EFAC]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-normal text-white leading-tight">
                  {lang === 'bn' ? 'হস্তান্তর নীতিমালা' : 'Exit Policy'}
                </h4>
              </div>
              <p className="relative z-10 text-[10px] sm:text-xs text-[#CBD5E1] leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                {lang === 'bn'
                  ? 'সাফ-কবলা রেজিস্ট্রেশন সম্পন্ন হওয়ার পর শেয়ারহোল্ডার অর্জিত শেয়ার বিক্রয় বা হস্তান্তর করতে পারবেন।'
                  : 'After saf-kabala registration, a shareholder may transfer or sell their ownership share.'}
              </p>
            </div>

            {/* ERP Software Card */}
            <div className="relative overflow-hidden p-3 sm:p-5 bg-white/[0.04] border border-white/10 rounded-xl sm:rounded-2xl space-y-1.5 sm:space-y-2 group">
              <CardShapePattern variant="grid" color="#86EFAC" className="w-16 h-16 sm:w-24 sm:h-24 opacity-20" />
              <div className="relative z-10 flex items-center gap-2 text-[#86EFAC]">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </div>
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-normal text-white leading-tight">
                  {lang === 'bn' ? 'ইআরপি সফটওয়্যার' : 'ERP Updates'}
                </h4>
              </div>
              <p className="relative z-10 text-[10px] sm:text-xs text-[#CBD5E1] leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-none">
                {lang === 'bn'
                  ? 'প্রকল্পের বাস্তব অগ্রগতি ও হিসাব নিকাশ ইআরপি সফটওয়্যারের মাধ্যমে পর্যবেক্ষণ করা যাবে।'
                  : 'Shareholders will be able to see verified project updates on the ERP software portal.'}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
