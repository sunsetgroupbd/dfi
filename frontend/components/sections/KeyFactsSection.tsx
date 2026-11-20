'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { FaHouseChimney, FaMoneyBillWave, FaClock, FaCalendarCheck } from 'react-icons/fa6';

export const KeyFactsSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Accent (3.5 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-normal text-[#1E7C46]">
              {lang === 'bn' ? 'মূল পরিসংখ্যান' : 'KEY FACTS'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827] tracking-normal">
              {lang === 'bn' ? 'এক নজরে DFI' : 'DFI At A Glance'}
            </h2>
            <div className="w-12 h-1 bg-[#1E7C46] rounded-full mt-2"></div>
            <p className="text-xs sm:text-sm text-[#4B5563] pt-2">
              {lang === 'bn'
                ? 'আইনগত কাঠামোর অধীনে সুনির্দিষ্ট ও স্বচ্ছ বিনিয়োগ পরিসংখ্যান।'
                : 'Verified statutory framework and institutional investment facts.'}
            </p>
          </div>

          {/* Right Column: 4 App-style Metric Cards (8 cols) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Stat Card 1 */}
            <div className="bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="w-11 h-11 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] group-hover:bg-white group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs mb-4">
                <FaHouseChimney className="w-4.5 h-4.5 text-[#1E7C46]" />
              </div>
              <div>
                <span className="block text-3xl font-bold text-[#111827] font-mono leading-none">
                  {lang === 'bn' ? '৪টি' : '4'}
                </span>
                <span className="text-xs text-[#111827] font-bold block mt-2">
                  {lang === 'bn' ? 'প্রিমিয়াম প্যাকেজ' : 'Premium Packages'}
                </span>
                <span className="text-[11px] text-[#6B7280] block mt-0.5">
                  {lang === 'bn' ? 'ব্রোঞ্জ থেকে প্ল্যাটিনাম' : 'Bronze to Platinum'}
                </span>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="w-11 h-11 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] group-hover:bg-white group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs mb-4">
                <FaMoneyBillWave className="w-4.5 h-4.5 text-[#1E7C46]" />
              </div>
              <div>
                <span className="text-2xl font-bold text-[#111827] font-mono leading-tight block">
                  {lang === 'bn' ? '৳ ৩,৫০,০০০' : '৳ 350,000'}
                </span>
                <span className="text-xs text-[#111827] font-bold block mt-2">
                  {lang === 'bn' ? 'প্রারম্ভিক শেয়ার মূল্য' : 'Starting Share Price'}
                </span>
                <span className="text-[11px] text-[#6B7280] block mt-0.5">
                  {lang === 'bn' ? 'সাফ-কবলা জমি সহ' : 'With Saf-Kabala Deed'}
                </span>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="w-11 h-11 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] group-hover:bg-white group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs mb-4">
                <FaClock className="w-4.5 h-4.5 text-[#1E7C46]" />
              </div>
              <div>
                <span className="block text-2xl font-bold text-[#111827] font-mono leading-none">
                  {lang === 'bn' ? '১৯ মিনিট' : '19 Min'}
                </span>
                <span className="text-xs text-[#111827] font-bold block mt-2">
                  {lang === 'bn' ? 'অফিস থেকে দূরত্ব' : 'From Corporate Office'}
                </span>
                <span className="text-[11px] text-[#6B7280] block mt-0.5">
                  {lang === 'bn' ? 'ধানমন্ডি ২৭ শপ্তক স্কয়ার' : 'Dhanmondi 27'}
                </span>
              </div>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-white hover:bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#1E7C46] rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group">
              <div className="w-11 h-11 rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] group-hover:bg-white group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs mb-4">
                <FaCalendarCheck className="w-4.5 h-4.5 text-[#1E7C46]" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#1E7C46] font-mono leading-tight block">
                  {lang === 'bn' ? '৳ ৪,৯৯০ /মাস' : '৳ 4,990 /mo'}
                </span>
                <span className="text-xs text-[#111827] font-bold block mt-2">
                  {lang === 'bn' ? 'সহজ কিস্তি সুবিধা' : 'Flexible Installments'}
                </span>
                <span className="text-[11px] text-[#6B7280] block mt-0.5">
                  {lang === 'bn' ? 'মাসিক কিস্তিতে পরিশোধযোগ্য' : 'Monthly Payment Plans'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
