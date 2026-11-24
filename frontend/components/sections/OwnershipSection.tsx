'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
import { 
  FileSignature, 
  Award, 
  ShieldCheck, 
  Laptop, 
  CheckCircle2 
} from 'lucide-react';
import { TbCurrencyTaka } from 'react-icons/tb';

export const OwnershipSection: React.FC = () => {
  const { lang } = useLanguage();

  const steps = [
    {
      number: '1',
      stepLabelBn: 'ধাপ ০১: বুকিং',
      stepLabelEn: 'Step 01: Booking',
      titleBn: 'অফিসিয়াল মানি রিসিট',
      titleEn: 'Official Money Receipt',
      descBn: 'সানসেট গ্রুপের নির্ধারিত ব্যাংক অ্যাকাউন্টে বুকিং মানি জমা সম্পন্ন হলে তাৎক্ষণিক প্রাতিষ্ঠানিক মানি রিসিট ও স্বতন্ত্র শেয়ারহোল্ডার আইডি প্রদান করা হয়।',
      descEn: 'Upon deposit of booking funds to Sunset Group designated corporate account, an official money receipt with unique shareholder ID is issued.',
      deliverableBn: 'মানি রিসিট ও শেয়ারহোল্ডার আইডি',
      deliverableEn: 'Money Receipt & Shareholder ID',
      icon: TbCurrencyTaka,
      pattern: 'arch' as const,
    },
    {
      number: '2',
      stepLabelBn: 'ধাপ ০২: চুক্তি',
      stepLabelEn: 'Step 02: Agreement',
      titleBn: 'ডিড অব এগ্রিমেন্ট সম্পাদন',
      titleEn: 'Deed of Agreement Execution',
      descBn: 'ডাউন পেমেন্ট পরিশোধের পর কোম্পানির সাথে আইনগত ডিড অব এগ্রিমেন্ট স্বাক্ষরিত হয়, যাতে শেয়ার বরাদ্দ, শর্তাবলী ও অধিকার স্পষ্টভাবে সন্নিবেশিত থাকে।',
      descEn: 'Following down payment, a legally binding Deed of Agreement is formally executed outlining allocation ratios, privileges, and investor covenants.',
      deliverableBn: 'স্ট্যাম্পযুক্ত আইনি চুক্তিপত্র',
      deliverableEn: 'Executed Statutory Agreement',
      icon: FileSignature,
      pattern: 'wave' as const,
    },
    {
      number: '3',
      stepLabelBn: 'ধাপ ০৩: চূড়ান্ত মালিকানা',
      stepLabelEn: 'Step 03: Final Handover',
      titleBn: 'সাফ-কবলা দলিল হস্তান্তর',
      titleEn: 'Registered Saf-Kabala Handover',
      descBn: 'শেয়ারের সমুদয় মূল্য পরিশোধের পর সরকার নির্ধারিত সাব-রেজিস্ট্রি অফিসের মাধ্যমে স্থায়ী সাফ-কবলা দলিল সম্পাদন ও আনুষ্ঠানিকভাবে হস্তান্তর সম্পন্ন হয়।',
      descEn: 'Upon full completion of payment, the permanent freehold Saf-Kabala land deed is legally registered at the sub-registry office and handed over.',
      deliverableBn: 'সরকারি সাফ-কবলা মালিকানা দলিল',
      deliverableEn: 'Deeded Freehold Saf-Kabala Title',
      icon: Award,
      pattern: 'crest' as const,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A2617] text-white border-b border-[#18422A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E7C46]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#165B33]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <FadeIn direction="up" className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#86EFAC]">
            {lang === 'bn' ? 'মালিকানা প্রক্রিয়া' : 'OWNERSHIP PROCESS'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-normal mt-1.5 leading-tight">
            {lang === 'bn'
              ? 'সহজ। নিরাপদ। শরীয়াহ সম্মত।'
              : 'Simple. Secure. Shariah Compliant.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-2.5 leading-relaxed">
            {lang === 'bn'
              ? 'আইনগত কাঠামোর অধীনে বুকিং থেকে সাফ-কবলা দলিল রেজিস্ট্রি পর্যন্ত প্রতিটি ধাপ সুনির্দিষ্ট, স্বচ্ছ ও নিরাপদ।'
              : 'A transparent step-by-step statutory process from initial booking to deed execution.'}
          </p>
        </FadeIn>

        {/* 3 Step Cards Grid - Full Width & Balanced */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8 sm:mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number} className="h-full">
                <div className="h-full relative overflow-hidden bg-[#0D2E1C]/90 hover:bg-[#103722] border border-[#1E5C38] hover:border-[#4ADE80]/50 p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                  <CardShapePattern
                    variant={step.pattern}
                    color="#86EFAC"
                    className="w-24 h-24 sm:w-32 sm:h-32 opacity-15"
                  />

                  <div className="relative z-10">
                    {/* Top Row: Number badge + Step Phase Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#86EFAC] text-[#0A2617] font-bold text-base flex items-center justify-center shadow-md font-sans">
                        {step.number}
                      </div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#86EFAC] bg-[#164E2E] border border-[#86EFAC]/25 px-3 py-1 rounded-full">
                        {lang === 'bn' ? step.stepLabelBn : step.stepLabelEn}
                      </span>
                    </div>

                    {/* Step Title & Icon */}
                    <div className="flex items-start gap-2.5 mb-2.5">
                      <Icon className="w-5 h-5 text-[#86EFAC] shrink-0 mt-0.5" />
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {lang === 'bn' ? step.titleBn : step.titleEn}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed">
                      {lang === 'bn' ? step.descBn : step.descEn}
                    </p>
                  </div>

                  {/* Bottom Deliverable Badge */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-[#1E5C38]/80 flex items-center gap-2 text-xs font-semibold text-[#86EFAC]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#86EFAC]" />
                    <span className="truncate">
                      {lang === 'bn' ? step.deliverableBn : step.deliverableEn}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Institutional Reassurance Strip (Exit Policy & ERP Software) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Exit Policy Card */}
            <div className="p-5 sm:p-6 bg-[#0D2E1C]/60 border border-[#1E5C38] rounded-2xl flex items-start gap-4 shadow-sm hover:border-[#4ADE80]/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#164E2E] border border-[#86EFAC]/20 flex items-center justify-center shrink-0 text-[#86EFAC]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-normal">
                  {lang === 'bn' ? 'হস্তান্তর ও বিক্রয় নীতিমালা (Exit Policy)' : 'Exit & Transfer Policy'}
                </h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {lang === 'bn'
                    ? 'সাফ-কবলা দলিল রেজিস্ট্রেশনের পর শেয়ারহোল্ডার অর্জিত শেয়ার বা জমি সম্পূর্ণ আইনি অধিকারে অবাধে বিক্রয়, হস্তান্তর বা উত্তরাধিকারীদের মাঝে বণ্টন করতে পারবেন।'
                    : 'Following registered title handover, shareholders retain full statutory authority to transfer, sell, or bequeath deeded holdings.'}
                </p>
              </div>
            </div>

            {/* ERP Software Card */}
            <div className="p-5 sm:p-6 bg-[#0D2E1C]/60 border border-[#1E5C38] rounded-2xl flex items-start gap-4 shadow-sm hover:border-[#4ADE80]/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#164E2E] border border-[#86EFAC]/20 flex items-center justify-center shrink-0 text-[#86EFAC]">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white tracking-normal">
                  {lang === 'bn' ? 'ইআরপি সফটওয়্যার পর্যবেক্ষণ (ERP Updates)' : 'ERP Investor Tracking Portal'}
                </h4>
                <p className="text-xs text-[#CBD5E1] leading-relaxed">
                  {lang === 'bn'
                    ? 'বিনিয়োগকারীগণ নিজস্ব ডিজিটাল আইডি দিয়ে ইআরপি সফটওয়্যারে লগইন করে প্রকল্পের বাস্তব অগ্রগতি, হিসাব-নিকাশ ও অডিট রিপোর্ট সার্বক্ষণিক পর্যবেক্ষণ করতে পারবেন।'
                    : 'Investors access real-time construction milestones, financial audits, and governance statements through the dedicated ERP portal.'}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
