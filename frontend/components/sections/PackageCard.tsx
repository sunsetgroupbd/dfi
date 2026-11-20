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
      className={`relative overflow-hidden bg-white border p-6 sm:p-7 flex flex-col justify-between rounded-2xl transition-all duration-200 shadow-sm hover:shadow-lg ${pkg.isPlatinum
          ? 'border-[#165B33] ring-2 ring-[#165B33]/20 bg-gradient-to-b from-[#F0FDF4]/50 to-white'
          : 'border-[#E5E7EB] hover:border-[#165B33]'
        }`}
    >
      {/* Decorative App Card Watermark SVG Solid Half-Shape */}
      <CardShapePattern
        variant={pkg.isPlatinum ? 'rings' : 'circle'}
        color={pkg.isPlatinum ? '#DCFCE7' : '#E5E7EB'}
        className="w-40 h-40 opacity-80"
      />

      {/* Top Best Value Badge for Platinum */}
      {pkg.isPlatinum && (
        <div className="absolute -top-0 right-6">
          <span className="inline-block px-3.5 py-1 bg-[#165B33] text-white text-[10px] font-extrabold uppercase tracking-wider rounded-b-lg shadow-sm">
            {lang === 'bn' ? 'সর্বোচ্চ সুবিধা' : 'BEST VALUE'}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Package Header */}
        <div className="pb-4 border-b border-[#F3F4F6]">
          <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#F3F4F6] text-[#4B5563] text-[11px] font-bold uppercase tracking-wider mb-2">
            {lang === 'bn' ? pkg.nameBn : pkg.name}
          </div>
          {/* Price */}
          <div className="mt-1">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#111827] font-mono tabular-nums">
              {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
            </span>
          </div>
        </div>

        {/* Breakdown specs list in an app-like container */}
        <div className="py-4 space-y-2.5 text-xs text-[#4B5563]">
          {/* Booking */}
          <div className="flex justify-between items-center py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'বুকিং মানি:' : 'Booking:'}</span>
            <span className="font-bold text-[#111827] font-mono tabular-nums">
              {lang === 'bn' ? pkg.bookingFormattedBn : pkg.bookingFormatted}
            </span>
          </div>

          {/* Area Formula: Land + Build = Total */}
          <div className="flex justify-between items-center py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'জমির হিস্যা:' : 'Land Share:'}</span>
            <span className="font-semibold text-[#111827] font-mono">
              {pkg.landArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'নির্মাণ হিস্যা:' : 'Build Share:'}</span>
            <span className="font-semibold text-[#111827] font-mono">
              {pkg.buildArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          <div className="flex justify-between items-center px-3 py-2 bg-[#F9FAFB] rounded-xl border border-[#E5E7EB]/70">
            <span className="font-semibold text-[#111827]">{lang === 'bn' ? 'মোট হিস্যা:' : 'Total Share:'}</span>
            <span className="font-extrabold text-[#165B33] font-mono text-sm">
              {pkg.totalArea} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
            </span>
          </div>

          {/* Accommodation Days */}
          <div className="flex justify-between items-center py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'বাৎসরিক অবস্থান:' : 'Annual Stay:'}</span>
            <span className="font-bold text-[#111827] font-mono">
              {pkg.accommodationDays} {lang === 'bn' ? 'দিন' : 'days'}
            </span>
          </div>

          {/* Restaurant & Extra Days Discount */}
          <div className="flex justify-between items-center py-1">
            <span className="text-[#6B7280]">{lang === 'bn' ? 'রেস্টুরেন্ট ছাড়:' : 'Restaurant Discount:'}</span>
            <span className="font-bold text-[#165B33] font-mono">
              {pkg.restaurantDiscount}%
            </span>
          </div>
        </div>
      </div>

      {/* Enquire CTA Button */}
      <div className="relative z-10 pt-2 space-y-2">
        <Button
          variant="primary"
          size="md"
          className="w-full text-center bg-[#165B33] text-white hover:bg-[#124A2A] rounded-xl py-2.5 font-semibold shadow-sm"
          onClick={() => onSelectForInquiry(pkg.id)}
        >
          {lang === 'bn' ? 'অনুসন্ধান করুন' : 'Enquire Now'}
        </Button>

        <button
          onClick={() => onOpenDetails(pkg)}
          className="w-full text-center text-[11px] text-[#6B7280] hover:text-[#165B33] font-medium transition-colors cursor-pointer flex items-center justify-center gap-1"
        >
          <span>{lang === 'bn' ? 'বিস্তারিত হিস্যা দেখুন' : 'View full breakdown'}</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
