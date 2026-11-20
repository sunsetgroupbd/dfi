'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQAccordionProps {
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const { lang } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const qText = lang === 'bn' ? item.questionBn : item.question;
        const aText = lang === 'bn' ? item.answerBn : item.answer;

        return (
          <div
            key={item.id}
            className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#1E7C46] shadow-md ring-1 ring-[#1E7C46]/20'
                : 'bg-[#F9FAFB] hover:bg-white border-[#E5E7EB] hover:border-[#1E7C46]/50 shadow-xs'
            }`}
          >
            <button
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none"
            >
              <div className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-[#1E7C46] shrink-0 mt-0.5">
                  0{idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#111827] leading-snug">
                  {qText}
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#1E7C46] shrink-0 transition-transform duration-180 mt-1 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#F3F4F6] mt-1 pl-10 sm:pl-11">
                    <p>{aText}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
