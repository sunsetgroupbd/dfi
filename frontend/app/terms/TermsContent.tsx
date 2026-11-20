'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';

export const TermsContent: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="py-12 sm:py-20">
      <Container size="narrow">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2E7D32]">
          {lang === 'bn' ? 'আইনি ও নীতিমালা' : 'Legal & Compliance'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight mt-2 mb-8">
          {t.footer.termsOfService}
        </h1>

        <div className="bg-white border border-[#E5E7EB] p-8 rounded-[4px] space-y-6 text-sm text-[#4B5563] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '১. প্রকল্পের স্বত্ব ও প্রাতিষ্ঠানিক পরিচয়' : '1. Corporate Identity & Governance'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'ঢাকা ফ্যান্টাসি আইল্যান্ড (ইকো হোটেল এন্ড রিসোর্ট) সানসেট কুয়াকাটা হোটেল এন্ড রিসোর্ট লিমিটেডের অধীনে বাস্তবায়িত একটি প্রকল্প, যা কোম্পানি আইন ১৯৯৪ এর অধীন গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের রেজিস্টার অব জয়েন্ট স্টক কোম্পানিজ অ্যান্ড ফার্মস (RJSC) দ্বারা নিবন্ধিত।'
                : 'Dhaka Fantasy Island (Eco Hotel & Resort) is an asset initiative governed by Sunset Kuakata Hotel & Resort Limited, incorporated under the Company Act 1994 and registered with RJSC Bangladesh.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '২. শেয়ার ও সাফ-কবলা মালিকানা চুক্তি' : '2. Share Allocation & Deed of Agreement'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'ওয়েবসাইটে প্রদর্শিত প্যাকেজের মূল্য ও পরিমাপ প্রাথমিক বিবরণী। ডাউন পেমেন্ট পরিশোধের পর শেয়ারহোল্ডার এবং কোম্পানির মধ্যে একটি আনুষ্ঠানিক ‘ডিড অব এগ্রিমেন্ট’ সম্পাদিত হবে। সম্পূর্ণ মূল্য পরিশোধের পরই কেবল সরকার নির্ধারিত রেজিস্ট্রি প্রক্রিয়ার মাধ্যমে জমির সাফ-কবলা দলিল হস্তান্তর করা হবে।'
                : 'All figures and share specifications presented on this site are illustrative. Following down payment, a legally binding Deed of Agreement is executed. Permanent freehold Saf-Kabala land deeds are formally transferred solely upon full payment.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '৩. বাৎসরিক অবস্থান সুবিধা' : '3. Annual Accommodation Privileges'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'প্যাকেজে বর্ণিত বাৎসরিক থাকার দিনগুলো রিসোর্টের আতিথেয়তা সেবা হিসেবে প্রদত্ত। এগুলো কোনো নগদ লভ্যাংশ বা নগদ রিটার্ন হিসেবে রূপান্তরযোগ্য নয়।'
                : 'Annual stay days designated within packages constitute personal hospitality amenities and cannot be claimed or converted as liquid monetary dividends.'}
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E5E7EB]">
            <h2 className="text-base font-bold text-[#111827]">
              {lang === 'bn' ? '৪. হস্তান্তর ও বিক্রয় অধিকার' : '4. Transfer & Resale Bylaws'}
            </h2>
            <p>
              {lang === 'bn'
                ? 'সাফ-কবলা দলিল রেজিস্ট্রেশন সম্পন্ন হওয়ার পরই কেবল একজন শেয়ারহোল্ডার কোম্পানির শেয়ার হস্তান্তর নীতিমালা অনুসরণ করে শেয়ার হস্তান্তর বা বিক্রয়ের অধিকার লাভ করবেন।'
                : 'Shareholders obtain statutory rights to transfer, assign, or liquidate shareholdings exclusively subsequent to the registration and execution of their Saf-Kabala deed.'}
            </p>
          </section>

          <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] text-xs text-[#111827] rounded-[3px] mt-6">
            <strong>{lang === 'bn' ? 'সংবিধিবদ্ধ বিজ্ঞপ্তি:' : 'Statutory Notice:'}</strong> {t.footer.legalNotice}
          </div>
        </div>
      </Container>
    </div>
  );
};
