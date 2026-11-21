'use client';

import React from 'react';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/Button';
import { CardShapePattern } from '@/components/svg/CardShapePattern';
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
  const { lang } = useLanguage();

  return (
    <div
      className={`relative overflow-hidden bg-white border p-3.5 sm:p-7 flex flex-col justify-between rounded-xl sm:rounded-2xl transition-all duration-200 shadow-sm hover:shadow-lg ${pkg.isPlatinum
          ? 'border-[#1E7C46] ring-2 ring-[#1E7C46]/20 bg-gradient-to-b from-[#F0FDF4]/50 to-white'
          : 'border-[#E5E7EB] hover:border-[#1E7C46]'
        }`}
    >
      {/* Decorative App Card Watermark SVG Solid Half-Shape */}
      <CardShapePattern
        variant={pkg.isPlatinum ? 'rings' : 'circle'}
        color={pkg.isPlatinum ? '#DCFCE7' : '#E5E7EB'}
        className="w-24 h-24 sm:w-40 sm:h-40 opacity-80"
      />

      {/* Top Best Value Badge for Platinum */}
      {pkg.isPlatinum && (
        <div className="absolute -top-0 right-3 sm:right-6">
          <span className="inline-block px-2 sm:px-3.5 py-0.5 sm:py-1 bg-[#1E7C46] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-normal rounded-b-lg shadow-sm">
            {lang === 'bn' ? 'সেরা মান' : 'BEST VALUE'}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Package Header */}
        <div className="pb-2.5 sm:pb-4 border-b border-[#F3F4F6]">
          <div className="inline-block px-2 py-0.5 rounded-md bg-[#F3F4F6] text-[#4B5563] text-[10px] sm:text-[11px] font-bold uppercase tracking-normal mb-1.5 sm:mb-2">
            {lang === 'bn' ? pkg.nameBn : pkg.name}
          </div>
          {/* Price */}
          <div className="mt-0.5 sm:mt-1">
            <span className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#111827] tracking-tight leading-tight block">
              {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
            </span>
          </div>
        </div>

        {/* Breakdown specs list in an app-like container */}
        <div className="py-2.5 sm:py-4 space-y-1.5 sm:space-y-2.5 text-[11px] sm:text-xs text-[#4B5563]">
          {/* Booking */}
          <div className="flex justify-between items-center py-0.5 sm:py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'বুকিং:' : 'Booking:'}</span>
            <span className="font-bold text-[#111827]">
              {lang === 'bn' ? pkg.bookingFormattedBn : pkg.bookingFormatted}
            </span>
          </div>

          {/* Area Formula: Land + Build = Total */}
          <div className="flex justify-between items-center py-0.5 sm:py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'জমি:' : 'Land:'}</span>
            <span className="font-semibold text-[#111827]">
              {pkg.landArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center py-0.5 sm:py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'নির্মাণ:' : 'Build:'}</span>
            <span className="font-semibold text-[#111827]">
              {pkg.buildArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center px-2 py-1 sm:px-3 sm:py-2 bg-[#F9FAFB] rounded-lg sm:rounded-xl border border-[#E5E7EB]/70">
            <span className="font-semibold text-[#111827]">{lang === 'bn' ? 'মোট:' : 'Total:'}</span>
            <span className="font-bold text-[#1E7C46] text-xs sm:text-sm">
              {pkg.totalArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          {/* Accommodation Days */}
          <div className="flex justify-between items-center py-0.5 sm:py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'থাকা:' : 'Stay:'}</span>
            <span className="font-bold text-[#111827]">
              {pkg.accommodationDays} {lang === 'bn' ? 'দিন' : 'days'}
            </span>
          </div>

          {/* Restaurant & Extra Days Discount */}
          <div className="flex justify-between items-center py-0.5 sm:py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'ছাড়:' : 'Discount:'}</span>
            <span className="font-bold text-[#1E7C46]">
              {pkg.restaurantDiscount}%
            </span>
          </div>
        </div>
      </div>

      {/* Enquire CTA Button */}
      <div className="relative z-10 pt-2 space-y-1.5 sm:space-y-2">
        <Button
          variant="primary"
          size="sm"
          className="w-full text-center bg-[#1E7C46] text-white hover:bg-[#176337] rounded-lg sm:rounded-xl py-2 sm:py-2.5 text-xs sm:text-sm font-semibold shadow-xs"
          onClick={() => onSelectForInquiry(pkg.id)}
        >
          {lang === 'bn' ? 'অনুসন্ধান' : 'Enquire'}
        </Button>

        <button
          onClick={() => onOpenDetails(pkg)}
          className="w-full text-center text-[10px] sm:text-[11px] text-[#6B7280] hover:text-[#1E7C46] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1"
        >
          <span>{lang === 'bn' ? 'বিস্তারিত হিস্যা' : 'Breakdown'}</span>
          <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
        </button>
      </div>
    </div>
  );
};
