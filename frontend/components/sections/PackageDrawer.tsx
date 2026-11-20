'use client';

import React from 'react';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/Button';
import { X, Check, ShieldCheck, Building2, Calendar, Percent } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PackageDrawerProps {
  pkg: PackageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForInquiry: (packageId: string) => void;
}

export const PackageDrawer: React.FC<PackageDrawerProps> = ({
  pkg,
  isOpen,
  onClose,
  onSelectForInquiry,
}) => {
  const { lang, t } = useLanguage();

  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-none cursor-pointer"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.22 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white border-l border-[#E5E7EB] flex flex-col justify-between overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#E5E7EB] bg-[#F9FAFB] flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#165B33]">
                  {lang === 'bn' ? 'প্যাকেজ বিবরণী' : 'Package Specification'}
                </span>
                <h3 className="text-xl font-bold text-[#111827]">
                  {lang === 'bn' ? pkg.nameBn : pkg.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close details"
                className="p-2 text-[#4B5563] hover:text-[#111827] hover:bg-[#E5E7EB] rounded-[3px] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body Content */}
            <div className="p-6 space-y-6 flex-1">
              {/* Pricing Overview */}
              <div className="p-4 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[4px] space-y-2.5">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-medium uppercase text-[#6B7280]">
                    {t.packages.priceLabel}
                  </span>
                  <span className="text-2xl font-bold text-[#111827] tabular-nums font-mono">
                    {lang === 'bn' ? pkg.priceFormattedBn : pkg.priceFormatted}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-[#E5E7EB]">
                  <span className="text-xs font-medium uppercase text-[#6B7280]">
                    {t.packages.bookingLabel}
                  </span>
                  <span className="text-sm font-semibold text-[#165B33] tabular-nums font-mono">
                    {lang === 'bn' ? pkg.bookingFormattedBn : pkg.bookingFormatted}
                  </span>
                </div>
              </div>

              {/* Area Breakdown: Land + Build = Total */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#165B33]" />
                  {t.packages.areaBreakdown}
                </h4>
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="p-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[3px]">
                    <span className="block text-[11px] text-[#6B7280]">
                      {lang === 'bn' ? 'জমি' : 'Land'}
                    </span>
                    <span className="text-base font-bold text-[#111827] tabular-nums">
                      {pkg.landArea} sft
                    </span>
                  </div>
                  <div className="p-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[3px]">
                    <span className="block text-[11px] text-[#6B7280]">
                      {lang === 'bn' ? 'নির্মাণ' : 'Build'}
                    </span>
                    <span className="text-base font-bold text-[#111827] tabular-nums">
                      {pkg.buildArea} sft
                    </span>
                  </div>
                  <div className="p-3 bg-[#E0F2FE] border border-[#BAE6FD] rounded-[3px]">
                    <span className="block text-[11px] text-[#0369A1] font-semibold">
                      {lang === 'bn' ? 'মোট অনুপাত' : 'Total'}
                    </span>
                    <span className="text-base font-bold text-[#0369A1] tabular-nums">
                      {pkg.totalArea} sft
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#6B7280] italic">
                  {lang === 'bn'
                    ? `ভূমি ${pkg.landArea} বর্গফুট + নির্মাণ ${pkg.buildArea} বর্গফুট = মোট ${pkg.totalArea} বর্গফুট অংশীদারিত্ব।`
                    : `Land ${pkg.landArea} sft + Build ${pkg.buildArea} sft = Total ${pkg.totalArea} sft deeded proportion.`}
                </p>
              </div>

              {/* Hospitality Privileges */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#165B33]" />
                  {t.packages.stayLabel}
                </h4>
                <div className="p-3.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[3px] flex items-center justify-between">
                  <span className="text-sm text-[#111827]">
                    {lang === 'bn' ? 'বাৎসরিক থাকার দিন' : 'Annual Stay Allowance'}
                  </span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#165B33]">
                      {pkg.accommodationDays} {t.packages.daysUnit}
                    </span>
                    {pkg.accommodationDaysNote && (
                      <span className="block text-[10px] text-[#D97706] font-medium">
                        {pkg.accommodationDaysNote}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-[11px] text-[#6B7280]">
                  {t.packages.daysNotProfitNote}
                </p>
              </div>

              {/* Discounts & Perks */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#111827] flex items-center gap-1.5">
                  <Percent className="w-4 h-4 text-[#165B33]" />
                  {lang === 'bn' ? 'রিসোর্ট সুবিধা ও ছাড়' : 'Resort Privileges & Discounts'}
                </h4>
                <ul className="space-y-2 text-xs text-[#374151]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#165B33]" />
                    <span>
                      {lang === 'bn'
                        ? `রেস্টুরেন্ট বিলের উপর ${pkg.restaurantDiscount}% ছাড়`
                        : `${pkg.restaurantDiscount}% discount on resort dining`}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#165B33]" />
                    <span>
                      {lang === 'bn'
                        ? `অতিরিক্ত রুম বুকিংয়ের উপর ${pkg.extraDaysDiscount}% ছাড়`
                        : `${pkg.extraDaysDiscount}% discount on additional stay days`}
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#165B33]" />
                    <span>
                      {lang === 'bn'
                        ? 'রেজিস্ট্রেশনের পর হস্তান্তর ও বিক্রয়যোগ্য'
                        : 'Fully transferable & sellable post-registration'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Legal Note Box */}
              <div className="p-3.5 bg-[#F0FDF4] border border-[#BBF7D0] text-xs text-[#166534] space-y-1 rounded-[3px]">
                <div className="flex items-center gap-1.5 font-semibold text-[#165B33]">
                  <ShieldCheck className="w-4 h-4 text-[#165B33]" />
                  <span>{lang === 'bn' ? 'আইনগত স্বত্ব' : 'Legal Ownership'}</span>
                </div>
                <p className="leading-relaxed">
                  {lang === 'bn'
                    ? 'সম্পূর্ণ মূল্য পরিশোধের পর সরকার অনুমোদিত সাফ-কবলা দলিল আনুষ্ঠানিকভাবে হস্তান্তর করা হবে।'
                    : 'Deeded freehold Saf-Kabala title will be formally registered and handed over upon full payment.'}
                </p>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-6 border-t border-[#E5E7EB] bg-[#F9FAFB] space-y-2">
              <Button
                variant="primary"
                size="lg"
                className="w-full text-center bg-[#165B33] text-white"
                onClick={() => {
                  onSelectForInquiry(pkg.id);
                  onClose();
                }}
              >
                {t.packages.ctaBook}
              </Button>
              <p className="text-[11px] text-[#6B7280] text-center">
                {t.packages.lumpSumNote}
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
