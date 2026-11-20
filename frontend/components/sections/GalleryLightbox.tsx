'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { X, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ item, onClose }) => {
  const { lang, t } = useLanguage();

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#072214]/85 backdrop-blur-none cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative z-10 w-full max-w-5xl bg-black/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Top Close Bar */}
          <div className="absolute top-3 right-3 z-20">
            <button
              onClick={onClose}
              aria-label={t.gallery.closeLightbox}
              className="p-2.5 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 rounded-full backdrop-blur-md transition-colors cursor-pointer border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Visual Presentation Area - Pure Image */}
          <div className="relative w-full h-[65vh] sm:h-[75vh] bg-[#05110B] flex items-center justify-center overflow-hidden">
            {item.imageSrc ? (
              <Image
                src={item.imageSrc}
                alt={lang === 'bn' ? item.titleBn : item.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            ) : (
              <div
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
                style={{ backgroundColor: item.placeholderColor }}
              >
                <div className="w-16 h-16 rounded-full border border-white/40 flex items-center justify-center mb-4 text-white">
                  <ImageIcon className="w-8 h-8" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
