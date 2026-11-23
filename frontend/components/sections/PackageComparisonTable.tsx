'use client';

import React from 'react';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';

interface PackageComparisonTableProps {
  packages: PackageItem[];
  onSelectForInquiry: (packageId: string) => void;
}

export const PackageComparisonTable: React.FC<PackageComparisonTableProps> = ({
  packages,
  onSelectForInquiry,
}) => {
  const { lang, t, formatNumber } = useLanguage();

  return (
    <div className="w-full overflow-x-auto border border-[#E5E7EB] bg-white rounded-[4px]">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        <thead>
          <tr className="bg-[#0D2F1D] text-white">
            <th className="p-4 font-semibold text-xs uppercase tracking-normal min-w-[170px]">
              {lang === 'bn' ? 'প্যাকেজ বৈশিষ্ট্য' : 'Package Feature'}
            </th>
            {packages.map((pkg) => (
              <th
                key={pkg.id}
                className={`p-4 font-bold text-center min-w-[130px] ${
                  pkg.isPlatinum ? 'bg-[#081E13] text-[#86EFAC]' : ''
                }`}
              >
                {lang === 'bn' ? pkg.nameBn : pkg.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E5E7EB] text-[#111827]">
          {/* Price */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-semibold text-[#111827]">
              {t.packages.priceLabel}
            </td>
            {packages.map((pkg) => (
              <td
                key={pkg.id}
                className="p-4 text-center font-bold text-[#111827]"
              >
                {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
              </td>
            ))}
          </tr>

          {/* Booking */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-medium text-[#4B5563]">
              {t.packages.bookingLabel}
            </td>
            {packages.map((pkg) => (
              <td
                key={pkg.id}
                className="p-4 text-center text-[#1E7C46] font-semibold"
              >
                {lang === 'bn' ? pkg.bookingFormattedBn : pkg.bookingFormatted}
              </td>
            ))}
          </tr>

          {/* Land Area */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-medium text-[#4B5563]">
              {lang === 'bn' ? 'জমির অনুপাত' : 'Land Area'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center">
                {formatNumber(pkg.landArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
              </td>
            ))}
          </tr>

          {/* Build Area */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-medium text-[#4B5563]">
              {lang === 'bn' ? 'নির্মাণ অনুপাত' : 'Built Area'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center">
                {formatNumber(pkg.buildArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
              </td>
            ))}
          </tr>

          {/* Total Formula Area */}
          <tr className="bg-[#F9FAFB] font-semibold">
            <td className="p-4 text-[#111827]">
              {lang === 'bn' ? 'মোট অনুপাত (জমির + নির্মাণ)' : 'Total Formula Area'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center text-[#1E7C46]">
                {formatNumber(pkg.totalArea)} {lang === 'bn' ? 'বর্গফুট' : 'sft'}
              </td>
            ))}
          </tr>

          {/* Accommodation Days */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-semibold text-[#111827]">
              {t.packages.stayLabel}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center font-bold text-[#111827]">
                {formatNumber(pkg.accommodationDays)} {t.packages.daysUnit}
                {pkg.isPlatinum && '*'}
              </td>
            ))}
          </tr>

          {/* Dining Discount */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-medium text-[#4B5563]">
              {lang === 'bn' ? 'রেস্টুরেন্ট বিল ছাড়' : 'Dining Discount'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center font-medium">
                {formatNumber(pkg.restaurantDiscount)}%
              </td>
            ))}
          </tr>

          {/* Extra Stay Discount */}
          <tr className="hover:bg-[#F9FAFB]">
            <td className="p-4 font-medium text-[#4B5563]">
              {lang === 'bn' ? 'অতিরিক্ত দিনে ছাড়' : 'Extra Stay Discount'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center font-medium">
                {formatNumber(pkg.extraDaysDiscount)}%
              </td>
            ))}
          </tr>

          {/* Action Row */}
          <tr className="bg-[#F9FAFB]">
            <td className="p-4 font-semibold text-xs uppercase text-[#6B7280]">
              {lang === 'bn' ? 'পদক্ষেপ' : 'Action'}
            </td>
            {packages.map((pkg) => (
              <td key={pkg.id} className="p-4 text-center">
                <button
                  onClick={() => onSelectForInquiry(pkg.id)}
                  className="px-3.5 py-1.5 text-xs font-semibold bg-[#1E7C46] text-white rounded-[3px] hover:bg-[#176337] transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'নির্বাচন করুন' : 'Select'}
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
