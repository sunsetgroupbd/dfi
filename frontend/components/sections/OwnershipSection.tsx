'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { FileText, Laptop } from 'lucide-react';

export const OwnershipSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-[#0A2617] text-white border-b border-[#18422A] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1E7C46]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="mb-12 sm:mb-14">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Horizontal Steps in modern rounded cardviews (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Step 1 */}
              <div className="relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 p-6 rounded-2xl transition-all duration-200 group">
                <CardShapePattern variant="arch" color="#86EFAC" className="w-24 h-24 opacity-20" />
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0A2617] font-bold font-mono text-sm flex items-center justify-center shadow-md">
                    1
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                    {lang === 'bn' ? 'প্রাথমিক বুকিং' : 'Step 1'}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white">
                    {lang === 'bn' ? 'মানি রিসিট প্রদান' : 'Money Receipt'}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed mt-2">
                    {lang === 'bn'
                      ? 'সানসেটের নামে জমা অর্থের অফিশিয়াল মানি রিসিট প্রদান, যেখানে ওনারশিপ নম্বর স্পষ্টভাবে উল্লেখ থাকবে।'
                      : 'Money receipt from Sunset for deposited amount, showing ownership ID.'}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 p-6 rounded-2xl transition-all duration-200 group">
                <CardShapePattern variant="wave" color="#86EFAC" className="w-24 h-24 opacity-20" />
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0A2617] font-bold font-mono text-sm flex items-center justify-center shadow-md">
                    2
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                    {lang === 'bn' ? 'আইনি চুক্তি' : 'Step 2'}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white">
                    {lang === 'bn' ? 'ডিড অব এগ্রিমেন্ট' : 'Deed of Agreement'}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed mt-2">
                    {lang === 'bn'
                      ? 'ডাউন পেমেন্টের পর শেয়ারহোল্ডার ও কোম্পানির মধ্যে চুক্তি সম্পাদন, যাতে সুবিধা ও শর্তাবলী অন্তর্ভুক্ত থাকবে।'
                      : 'Formal Deed of Agreement with details, benefits, share-transfer rules and terms.'}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative overflow-hidden bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 p-6 rounded-2xl transition-all duration-200 group">
                <CardShapePattern variant="crest" color="#86EFAC" className="w-24 h-24 opacity-20" />
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0A2617] font-bold font-mono text-sm flex items-center justify-center shadow-md">
                    3
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#86EFAC] tracking-normal">
                    {lang === 'bn' ? 'স্থায়ী রেজিস্ট্রি' : 'Final Step'}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="text-base font-bold text-white">
                    {lang === 'bn' ? 'সাফ-কবলা হস্তান্তর' : 'Saf-Kabala Handover'}
                  </h3>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed mt-2">
                    {lang === 'bn'
                      ? 'শেয়ারের সমুদয় মূল্য সম্পূর্ণ পরিশোধের পর সরকার নির্ধারিত রেজিস্ট্রির মাধ্যমে সাফ-কবলা দলিল হস্তান্তর।'
                      : "After full payment, the land's registered saf-kabala is officially handed over."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Exit Policy & ERP updates boxes in modern rounded cardviews (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Exit Policy Card */}
            <div className="relative overflow-hidden p-5 bg-white/[0.04] border border-white/10 rounded-2xl space-y-2 group">
              <CardShapePattern variant="leaf" color="#86EFAC" className="w-24 h-24 opacity-20" />
              <div className="relative z-10 flex items-center gap-2.5 text-[#86EFAC]">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <FileText className="w-4 h-4 shrink-0" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-normal text-white">
                  {lang === 'bn' ? 'হস্তান্তর ও বিক্রয় নীতিমালা (Exit Policy)' : 'Exit Policy'}
                </h4>
              </div>
              <p className="relative z-10 text-xs text-[#CBD5E1] leading-relaxed">
                {lang === 'bn'
                  ? 'সাফ-কবলা রেজিস্ট্রেশন সম্পন্ন হওয়ার পর শেয়ারহোল্ডার তার অর্জিত শেয়ার ও জমির হিস্যা নিয়ম অনুযায়ী বিক্রয় বা হস্তান্তর করতে পারবেন।'
                  : 'After saf-kabala registration, a shareholder may transfer or sell their ownership share.'}
              </p>
            </div>

            {/* ERP Software Card */}
            <div className="relative overflow-hidden p-5 bg-white/[0.04] border border-white/10 rounded-2xl space-y-2 group">
              <CardShapePattern variant="grid" color="#86EFAC" className="w-24 h-24 opacity-20" />
              <div className="relative z-10 flex items-center gap-2.5 text-[#86EFAC]">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Laptop className="w-4 h-4 shrink-0" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-normal text-white">
                  {lang === 'bn' ? 'ইআরপি সফটওয়্যার পর্যবেক্ষণ' : 'ERP Updates'}
                </h4>
              </div>
              <p className="relative z-10 text-xs text-[#CBD5E1] leading-relaxed">
                {lang === 'bn'
                  ? 'প্রকল্পের বাস্তব অগ্রগতি ও হিসাব নিকাশ ইআরপি সফটওয়্যারের মাধ্যমে দেখার ব্যবস্থা পরিকল্পনাধীন।'
                  : 'Shareholders will be able to see verified project updates on the ERP software portal.'}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
