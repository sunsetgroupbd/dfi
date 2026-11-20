'use client';

import React, { useState } from 'react';
import { GalleryItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { Container } from '@/components/ui/Container';
import { GalleryLightbox } from '@/components/sections/GalleryLightbox';
import { VideoShowcaseSection } from '@/components/sections/VideoShowcaseSection';
import Image from 'next/image';
import { ZoomIn, Image as ImageIcon } from 'lucide-react';

export const GalleryContent: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const galleryItems = t.gallery.items;

  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Header Banner */}
      <Container className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-normal text-[#1E7C46]">
          {t.nav.gallery}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-normal mt-2 max-w-3xl leading-tight">
          {t.gallery.title}
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] mt-3 max-w-2xl leading-relaxed">
          {t.gallery.subtitle}
        </p>
      </Container>

      {/* Gallery Grid - 2 columns on mobile, 3 on desktop */}
      <Container className="mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0A2617] border border-[#E5E7EB] hover:border-[#1E7C46] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1E7C46]"
            >
              {item.imageSrc ? (
                <Image
                  src={item.imageSrc}
                  alt={lang === 'bn' ? item.titleBn : item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center p-6 text-center"
                  style={{ backgroundColor: item.placeholderColor }}
                >
                  <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center text-white">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                </div>
              )}

              {/* Subtle hover overlay and zoom icon */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

              <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xl bg-white/95 text-[#1E7C46] flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-y-0 translate-y-1">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Official Project Video Walkthroughs */}
      <VideoShowcaseSection />

      {/* Lightbox Modal */}
      <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};
