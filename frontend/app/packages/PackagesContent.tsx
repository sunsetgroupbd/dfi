'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { PackageCard } from '@/components/sections/PackageCard';
import { PackageDrawer } from '@/components/sections/PackageDrawer';
import { PackageComparisonTable } from '@/components/sections/PackageComparisonTable';
import { ShieldCheck, Calendar, CreditCard } from 'lucide-react';

export const PackagesContent: React.FC = () => {
  const router = useRouter();
  const { lang, t } = useLanguage();
  const [selectedPkg, setSelectedPkg] = useState<PackageItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleOpenDetails = (pkg: PackageItem) => {
    setSelectedPkg(pkg);
    setIsDrawerOpen(true);
  };

  const handleSelectForInquiry = (packageId: string) => {
    router.push(`/contact?pkg=${packageId}`);
  };

  return (
    <div className="py-12 sm:py-20">
      {/* Page Header */}
      <Container className="mb-14">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#2E7D32]">
          {t.packages.tag}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E3B24] tracking-normal mt-2 max-w-3xl leading-tight">
          {t.packages.title}
        </h1>
        <p className="text-base sm:text-lg text-[#5A625D] mt-4 max-w-2xl leading-relaxed">
          {t.packages.subtitle}
        </p>

        {/* View Switcher Bar */}
        <div className="mt-8 flex items-center justify-between border-b border-[#E5E7EB] pb-4">
          <div className="text-xs text-[#4B5563]">
            {lang === 'bn' ? '৪টি নির্দিষ্ট প্যাকেজ হিস্যা' : '4 Defined Share Proportions'}
          </div>
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="px-4 py-2 text-xs font-semibold rounded-[3px] border border-[#1E7C46] text-[#1E7C46] hover:bg-[#F9FAFB] transition-colors cursor-pointer"
          >
            {showComparison
              ? lang === 'bn' ? 'কার্ড গ্রিড দেখুন' : 'Switch to Cards'
              : lang === 'bn' ? 'তুলনামূলক টেবিল দেখুন' : 'Compare All Packages'}
          </button>
        </div>
      </Container>

      {/* Main Packages Display (2 in a row on mobile, 4 on desktop) */}
      <Container className="mb-16">
        {!showComparison ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
            {t.packages.items.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onOpenDetails={handleOpenDetails}
                onSelectForInquiry={handleSelectForInquiry}
              />
            ))}
          </div>
        ) : (
          <PackageComparisonTable
            packages={t.packages.items}
            onSelectForInquiry={handleSelectForInquiry}
          />
        )}

        {/* Informational Policy Banner */}
        <div className="mt-10 p-6 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[4px] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#111827]">
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-[#1E7C46] shrink-0" />
            <div>
              <strong className="block text-sm text-[#111827] mb-1">
                {lang === 'bn' ? 'কিস্তি ও এককালীন সুবিধা' : 'Payment Flexibility'}
              </strong>
              <p className="text-[#4B5563]">
                {t.packages.lumpSumNote}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#1E7C46] shrink-0" />
            <div>
              <strong className="block text-sm text-[#111827] mb-1">
                {lang === 'bn' ? 'আতিথেয়তা সেবা' : 'Hospitality Days'}
              </strong>
              <p className="text-[#4B5563]">
                {t.packages.daysNotProfitNote}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#1E7C46] shrink-0" />
            <div>
              <strong className="block text-sm text-[#111827] mb-1">
                {lang === 'bn' ? 'সাফ-কবলা নিশ্চয়তা' : 'Saf-Kabala Deed'}
              </strong>
              <p className="text-[#4B5563]">
                {lang === 'bn'
                  ? 'সম্পূর্ণ অর্থ পরিশোধের পর সরকার নির্ধারিত রেজিস্ট্রির মাধ্যমে দলিল হস্তান্তর।'
                  : 'Freehold land registration and official deed handover upon full payment.'}
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Package Detail Drawer */}
      <PackageDrawer
        pkg={selectedPkg}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </div>
  );
};
