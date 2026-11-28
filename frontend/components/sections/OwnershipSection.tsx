'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
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
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-[#111827] border-b border-[#E5E7EB]">
      <Container size="wide">
        {/* Section Heading */}
        <FadeIn direction="up" className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
            {lang === 'bn' ? 'মালিকানা প্রক্রিয়া' : 'OWNERSHIP PROCESS'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2F1D] tracking-tight mt-1 leading-tight">
            {lang === 'bn'
              ? 'সহজ। নিরাপদ। শরীয়াহ সম্মত।'
              : 'Simple. Secure. Shariah Compliant.'}
          </h2>
          <p className="text-xs sm:text-sm text-[#6B7280] mt-2 leading-relaxed">
            {lang === 'bn'
              ? 'আইনগত কাঠামোর অধীনে বুকিং থেকে সাফ-কবলা দলিল রেজিস্ট্রি পর্যন্ত প্রতিটি ধাপ সুনির্দিষ্ট, স্বচ্ছ ও নিরাপদ।'
              : 'A transparent step-by-step statutory process from initial booking to deed execution.'}
          </p>
        </FadeIn>

        {/* 3 Step Cards Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-8 sm:mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.number} className="h-full">
                <div className="h-full relative overflow-hidden bg-[#F9FAFB] hover:bg-white border border-[#E5E7EB] hover:border-[#1E7C46] p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-lg group">
                  <div>
                    {/* Top Row: Number badge + Step Phase Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] text-[#1E7C46] font-bold text-base flex items-center justify-center shadow-xs font-sans">
                        {step.number}
                      </div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-[#1E7C46] bg-white border border-[#E5E7EB] px-3 py-1 rounded-full shadow-2xs">
                        {lang === 'bn' ? step.stepLabelBn : step.stepLabelEn}
                      </span>
                    </div>

                    {/* Step Title & Icon */}
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 text-[#1E7C46]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
                        {lang === 'bn' ? step.titleBn : step.titleEn}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed mt-2">
                      {lang === 'bn' ? step.descBn : step.descEn}
                    </p>
                  </div>

                  {/* Bottom Deliverable Badge */}
                  <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center gap-2 text-xs font-semibold text-[#1E7C46]">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span className="truncate">
                      {lang === 'bn' ? step.deliverableBn : step.deliverableEn}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom Reassurance Strip (Exit Policy & ERP Software) */}
        <FadeIn direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Exit Policy Card */}
            <div className="p-5 sm:p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl flex items-start gap-4 shadow-2xs hover:border-[#1E7C46]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0 text-[#1E7C46]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#111827] tracking-tight">
                  {lang === 'bn' ? 'হস্তান্তর ও বিক্রয় নীতিমালা (Exit Policy)' : 'Exit & Transfer Policy'}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {lang === 'bn'
                    ? 'সাফ-কবলা দলিল রেজিস্ট্রেশনের পর শেয়ারহোল্ডার অর্জিত শেয়ার বা জমি সম্পূর্ণ আইনি অধিকারে অবাধে বিক্রয়, হস্তান্তর বা উত্তরাধিকারীদের মাঝে বণ্টন করতে পারবেন।'
                    : 'Following registered title handover, shareholders retain full statutory authority to transfer, sell, or bequeath deeded holdings.'}
                </p>
              </div>
            </div>

            {/* ERP Software Card */}
            <div className="p-5 sm:p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl flex items-start gap-4 shadow-2xs hover:border-[#1E7C46]/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#E8F5E9] border border-[#C8E6C9] flex items-center justify-center shrink-0 text-[#1E7C46]">
                <Laptop className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-[#111827] tracking-tight">
                  {lang === 'bn' ? 'রিসোর্ট ইআরপি সফটওয়্যার নজরদারি' : 'Cloud ERP Management'}
                </h4>
                <p className="text-xs text-[#6B7280] leading-relaxed">
                  {lang === 'bn'
                    ? 'প্রতিটি শেয়ারহোল্ডারের জন্য থাকছে ডেডিকেটেড অনলাইন পোর্টাল, যার মাধ্যমে দৈনিক রুম বুকিং, আয়-ব্যয় এবং মুনাফা সরাসরি লাইভ ট্র্যাক করা যাবে।'
                    : 'A dedicated investor portal offering transparent live tracking of room occupancy, revenues, and quarterly halal dividends.'}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
