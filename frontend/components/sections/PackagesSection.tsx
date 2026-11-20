'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PackageItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { PackageCard } from './PackageCard';
import { PackageDrawer } from './PackageDrawer';
import { PackageComparisonTable } from './PackageComparisonTable';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface PackagesSectionProps {
  showComparisonInitially?: boolean;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  showComparisonInitially = false,
}) => {
  const router = useRouter();
  const { lang, t } = useLanguage();
  const [selectedPkg, setSelectedPkg] = useState<PackageItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(showComparisonInitially);

  const handleOpenDetails = (pkg: PackageItem) => {
    setSelectedPkg(pkg);
    setIsDrawerOpen(true);
  };

  const handleSelectForInquiry = (packageId: string) => {
    router.push(`/contact?pkg=${packageId}`);
  };

  return (
    <section id="packages-section" className="py-16 sm:py-24 bg-white border-b border-[#E5E7EB]">
      <Container>
        {/* Section Header with Right View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-normal text-[#6B7280]">
              {lang === 'bn' ? 'আমাদের প্যাকেজসমূহ' : 'OUR PACKAGES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827] tracking-normal mt-1">
              {lang === 'bn' ? 'আপনার পছন্দের অংশীদারিত্ব বেছে নিন' : 'Choose Your Share of Paradise'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs font-semibold text-[#1E7C46] hover:underline cursor-pointer"
            >
              {showComparison
                ? lang === 'bn' ? 'কার্ড দেখুন' : 'View Cards'
                : lang === 'bn' ? 'তুলনা দেখুন' : 'Compare Table'}
            </button>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E7C46] hover:underline"
            >
              <span>{lang === 'bn' ? 'সকল প্যাকেজ' : 'View All Packages'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* View Mode: Cards (2 in a row on mobile, 4 on desktop) or Comparison Table */}
        {!showComparison ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
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

        {/* Minimal Micro Note Strip below packages */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-[#6B7280]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7C46]" />
            {lang === 'bn' ? 'সহজ কিস্তি সুবিধা' : 'Installments available'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7C46]" />
            {lang === 'bn' ? 'এককালীন পরিশোধে সর্বোচ্চ ছাড়' : 'Highest discount on lump-sum payment'}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1E7C46]" />
            {lang === 'bn' ? 'শর্তাবলী প্রযোজ্য' : 'Terms apply'}
          </span>
        </div>
      </Container>

      {/* Package Detail Drawer */}
      <PackageDrawer
        pkg={selectedPkg}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </section>
  );
};
