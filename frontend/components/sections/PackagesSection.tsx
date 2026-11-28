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
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/MotionWrapper';
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
    <section id="packages-section" className="py-14 sm:py-20 bg-white border-b border-[#E5E7EB]">
      <Container size="wide">
        {/* Section Header with Right View All Link */}
        <FadeIn direction="up" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1E7C46]">
              {lang === 'bn' ? 'আমাদের প্যাকেজসমূহ' : 'FEATURED PACKAGES'}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0D2F1D] tracking-tight mt-1">
              {lang === 'bn' ? 'আপনার পছন্দের অংশীদারিত্ব বেছে নিন' : 'Choose Your Share of Paradise'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="text-xs font-semibold text-[#1E7C46] hover:underline cursor-pointer"
            >
              {showComparison
                ? lang === 'bn' ? 'কার্ড ভিউ' : 'View Cards'
                : lang === 'bn' ? 'তুলনা দেখুন' : 'Compare Table'}
            </button>
            <Link
              href="/packages"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1E7C46] hover:text-[#166438] group"
            >
              <span>{lang === 'bn' ? 'সকল প্যাকেজ' : 'View all'}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* View Mode: Cards (4 across on desktop, 2 on tablet, 1 on mobile) or Comparison Table */}
        {!showComparison ? (
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {t.packages.items.map((pkg) => (
              <StaggerItem key={pkg.id}>
                <PackageCard
                  pkg={pkg}
                  onOpenDetails={handleOpenDetails}
                  onSelectForInquiry={handleSelectForInquiry}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
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
