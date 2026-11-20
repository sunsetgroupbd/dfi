'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
import { Button } from '@/components/ui/Button';
import { Check, Clock, Building2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Address & Commute Pills (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-normal text-[#1E7C46]">
                {lang === 'bn' ? 'কৌশলগত অবস্থান' : 'PRIME LOCATION'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-normal mt-1.5">
                {lang === 'bn'
                  ? 'শান্ত প্রকৃতির সান্নিধ্যে, যোগাযোগের কেন্দ্রবিন্দুতে'
                  : 'Peaceful Yet Perfectly Connected'}
              </h2>
              <div className="w-12 h-1 bg-[#1E7C46] rounded-full mt-2"></div>
            </div>

            {/* Checklist */}
            <div className="space-y-3 text-xs sm:text-sm text-[#374151]">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F0FDF4] border border-[#86EFAC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#1E7C46]" />
                </div>
                <span>Mohammadpur Planned Area, Dhaka</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F0FDF4] border border-[#86EFAC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#1E7C46]" />
                </div>
                <span>Off Basila Garden City Avenue Road (40 ft Avenue)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#F0FDF4] border border-[#86EFAC] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-[#1E7C46]" />
                </div>
                <span>Near Bosila CNG Stand &amp; Bosila Bridge</span>
              </div>
            </div>

            {/* Commute Time Badges (2 in a row on mobile and desktop) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 pt-1">
              <div className="relative overflow-hidden p-3 sm:p-4 bg-white hover:bg-white border border-[#E5E7EB] hover:border-[#1E7C46] rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 transition-all duration-200 shadow-xs group">
                <CardShapePattern variant="rings" color="#E5E7EB" className="w-16 h-16 sm:w-24 sm:h-24 opacity-80" />
                <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F9FAFB] group-hover:bg-white border border-[#E5E7EB] group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E7C46]" />
                </div>
                <div className="relative z-10">
                  <span className="block text-sm sm:text-base font-bold text-[#111827] font-mono leading-none">
                    {lang === 'bn' ? '২০ মিনিট' : '20 Min'}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#6B7280] block mt-1 leading-tight">
                    {lang === 'bn' ? 'সংসদ ভবন থেকে' : 'From Parliament House'}
                  </span>
                </div>
              </div>

              <div className="relative overflow-hidden p-3 sm:p-4 bg-white hover:bg-white border border-[#E5E7EB] hover:border-[#1E7C46] rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-3.5 transition-all duration-200 shadow-xs group">
                <CardShapePattern variant="circle" color="#E5E7EB" className="w-16 h-16 sm:w-24 sm:h-24 opacity-80" />
                <div className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F9FAFB] group-hover:bg-white border border-[#E5E7EB] group-hover:border-[#1E7C46]/30 flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E7C46]" />
                </div>
                <div className="relative z-10">
                  <span className="block text-sm sm:text-base font-bold text-[#111827] font-mono leading-none">
                    {lang === 'bn' ? '১৯ মিনিট' : '19 Min'}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#6B7280] block mt-1 leading-tight">
                    {lang === 'bn' ? 'শপ্তক স্কয়ার থেকে' : 'From Shaptak Square'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button href="/location" variant="secondary" size="md" className="rounded-xl px-5">
                {lang === 'bn' ? 'ম্যাপে বিস্তারিত দেখুন' : 'View on Map'}
              </Button>
            </div>
          </div>

          {/* Right Column: Direct Interactive Google Map Without Cardview Border (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/11] min-h-[380px] sm:min-h-[440px] w-full shadow-md bg-[#F3F4F6]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14607.744186591024!2d90.3396783!3d23.7505037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4e366113b5%3A0xe5a3666b618cfba!2sBosila%20Garden%20City%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1716200000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dhaka Fantasy Island Location Map - Bosila Garden City, Mohammadpur"
                className="w-full h-full block"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
