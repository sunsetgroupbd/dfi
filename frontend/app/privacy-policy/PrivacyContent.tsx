'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';

export const PrivacyContent: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#2E7D32]">
          {lang === 'bn' ? 'আইনি ও নীতিমালা' : 'Legal & Compliance'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-normal mt-2 mb-8">
          {t.footer.privacyPolicy}
        </h1>

        <div className="bg-white border border-[#E5E7EB] p-8 rounded-[4px] space-y-6 text-sm text-[#4B5563] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '১. তথ্যের সংগ্রহ ও উদ্দেশ্য' : '1. Information Collection & Purpose'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'ঢাকা ফ্যান্টাসি আইল্যান্ড (একটি সানসেট গ্রুপ প্রকল্প) আপনার গোপনীয়তাকে সম্মান করে। আমাদের ওয়েবসাইটে অনুসন্ধান ফর্মের মাধ্যমে সংগৃহীত নাম, মোবাইল নম্বর এবং ইমেইল কেবল প্রকল্পের শেয়ার বুকিং, আইনি নথিপত্র প্রেরণ ও পরামর্শ প্রদানের কাজে ব্যবহৃত হয়।'
                : 'Dhaka Fantasy Island, a project of Sunset Group, respects your confidentiality. Information gathered via our investor enquiry forms (including full name, phone number, and email) is utilized solely for consultation, share bookings, and official correspondence.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '২. ডেটা নিরাপত্তা ও গোপনীয়তা' : '2. Data Security & Storage'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'আপনার ব্যক্তিগত ও আর্থিক তথ্য কোনো তৃতীয় পক্ষের কাছে বিক্রয় বা বাণিজ্যিক উদ্দেশ্যে হস্তান্তর করা হয় না। সকল তথ্য প্রাতিষ্ঠানিক গোপনীয়তা নীতিমালার অধীনে সংরক্ষিত থাকে।'
                : 'Your personal and financial records are never leased, sold, or shared with unauthorized commercial third parties. All submissions remain strictly confidential under institutional protocols.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '৩. কুকিজ ও প্রিফারেন্স' : '3. Cookies & Language Preference'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'আমাদের ওয়েবসাইট ব্যবহারকারীর ভাষা পছন্দ (বাংলা বা ইংরেজি) মনে রাখার উদ্দেশ্যে স্ট্যান্ডার্ড কার্যকরী কুকি ব্যবহার করে। এটি কোনো ব্যক্তিগত ট্র্যাকিং ডেটা সংরক্ষণ করে না।'
                : 'Our website utilizes standard functional cookies solely to remember your preferred viewing language (Bangla or English). No invasive advertising tracking cookies are deployed.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '৪. যোগাযোগ ও জিজ্ঞাসা' : '4. Inquiries & Updates'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'আমাদের গোপনীয়তা নীতি সংক্রান্ত কোনো প্রশ্নের জন্য সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিমিটেডের প্রধান কার্যালয়ে যোগাযোগ করুন: ২৭ শপ্তক স্কয়ার, লেভেল-১১, ধানমন্ডি ২৭, ঢাকা-১২০৯।'
                : 'For inquiries regarding data records or privacy rights, contact Sunset Kuakata Hotel & Resort Limited at: 27 Shaptak Square, Level-11, Dhanmondi 27, Dhaka-1209.'}
            </p>
          </section>

          <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] text-xs text-[#111827] rounded-[3px] mt-6">
            <strong>{lang === 'bn' ? 'বিধিবদ্ধ সতর্কতা:' : 'Mandatory Notice:'}</strong> {t.footer.legalNotice}
          </div>
        </div>
      </Container>
    </div>
  );
};
