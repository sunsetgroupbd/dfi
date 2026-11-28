'use client';

import React from 'react';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

interface PackageCardProps {
  pkg: PackageItem;
  onOpenDetails: (pkg: PackageItem) => void;
  onSelectForInquiry: (packageId: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onOpenDetails,
  onSelectForInquiry,
}) => {
  const { lang, formatNumber } = useLanguage();

  return (
    <div
      className={`relative overflow-hidden bg-white border rounded-2xl transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1.5 p-5 sm:p-6 ${
        pkg.isPlatinum
          ? 'border-[#1E7C46] ring-2 ring-[#1E7C46]/20 bg-gradient-to-b from-[#F0FDF4]/40 to-white'
          : 'border-[#E5E7EB] hover:border-[#1E7C46]'
      }`}
    >
      <div>
        {/* Package Header: Title, Price, Booking */}
        <div className="pb-4 border-b border-[#F3F4F6]">
          <h3 className="font-bold text-base sm:text-lg text-[#111827] tracking-tight leading-snug">
            {lang === 'bn' ? pkg.nameBn : pkg.name}
          </h3>

          <div className="mt-1.5 flex items-baseline gap-1">
            <span className="text-lg sm:text-xl font-bold text-[#0D2F1D] tracking-tight">
              {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
            </span>
            <span className="text-[11px] text-[#6B7280]">
              {lang === 'bn' ? '/ শেয়ার' : '/ share'}
            </span>
          </div>

          <div className="text-xs text-[#4B5563] mt-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'বুকিং মানি: ' : 'Booking: '}</span>
            <strong className="text-[#111827]">
              {lang === 'bn' ? pkg.bookingFormattedBn : pkg.bookingFormatted}
            </strong>
          </div>
        </div>

        {/* Breakdown Specs */}
        <div className="py-4 space-y-2 text-xs text-[#4B5563]">
          {/* Area Formula: Land + Build = Total */}
          <div className="flex justify-between items-center">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'জমি হিস্যা:' : 'Land Share:'}</span>
            <span className="font-semibold text-[#111827]">
              {formatNumber(pkg.landArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'নির্মাণ হিস্যা:' : 'Build Area:'}</span>
            <span className="font-semibold text-[#111827]">
              {formatNumber(pkg.buildArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center px-3 py-1.5 bg-[#F4FBF6] rounded-xl border border-[#D1E7DD]">
            <span className="font-semibold text-[#111827]">
              {lang === 'bn' ? 'মোট অনুপাত:' : 'Total Area:'}
            </span>
            <span className="font-bold text-[#1E7C46] text-sm">
              {formatNumber(pkg.totalArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          {/* Accommodation Days */}
          <div className="flex justify-between items-center pt-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'ফ্রি অবকাশ:' : 'Free Stay:'}</span>
            <span className="font-bold text-[#111827]">
              {formatNumber(pkg.accommodationDays)} {lang === 'bn' ? 'দিন / বছর' : 'days / yr'}
            </span>
          </div>

          {/* Restaurant Discount */}
          <div className="flex justify-between items-center">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'রেস্তোরাঁ ছাড়:' : 'Discount:'}</span>
            <span className="font-bold text-[#1E7C46]">
              {formatNumber(pkg.restaurantDiscount)}%
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 space-y-2">
        <Button
          variant="primary"
          size="sm"
          className="w-full text-center bg-[#1E7C46] text-white hover:bg-[#166438] rounded-xl py-2.5 text-xs sm:text-sm font-semibold shadow-xs cursor-pointer"
          onClick={() => onSelectForInquiry(pkg.id)}
        >
          {lang === 'bn' ? 'অংশীদারিত্ব নিশ্চিত করুন' : 'Book Share'}
        </Button>

        <button
          onClick={() => onOpenDetails(pkg)}
          className="w-full text-center text-xs text-[#6B7280] hover:text-[#1E7C46] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1 py-1"
        >
          <span>{lang === 'bn' ? 'হিস্যা ও কিস্তি বিবরণী' : 'View Full Details'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
