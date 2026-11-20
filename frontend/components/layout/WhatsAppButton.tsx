'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { FaWhatsapp } from 'react-icons/fa6';

export const WhatsAppButton: React.FC = () => {
  const { lang } = useLanguage();
  const whatsappUrl = 'https://wa.me/8801325074535';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={lang === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি যোগাযোগ' : 'Chat on WhatsApp'}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 bg-[#165B33] text-white px-4 py-3 rounded-full border border-[#124A2A] hover:bg-[#124A2A] transition-colors focus-visible:outline-none select-none shadow-lg"
    >
      <span className="relative flex h-2 w-2">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86EFAC]"></span>
      </span>
      <FaWhatsapp className="w-4 h-4 text-white" />
      <span className="text-xs font-semibold tracking-wide uppercase hidden sm:inline-block">
        {lang === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}
      </span>
    </a>
  );
};
