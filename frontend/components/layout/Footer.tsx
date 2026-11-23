'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/lib/language-context';
import { DFILogo } from '@/components/svg/DFILogo';
import { Container } from '@/components/ui/Container';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn,
  FaWhatsapp 
} from 'react-icons/fa6';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const navLinks = [
    { href: '/overview', label: t.nav.overview },
    { href: '/packages', label: t.nav.packages },
    { href: '/ownership', label: t.nav.ownership },
    { href: '/why-invest', label: t.nav.whyInvest },
    { href: '/location', label: t.nav.location },
    { href: '/gallery', label: t.nav.gallery },
  ];

  return (
    <footer className="bg-[#F9FAFB] text-[#111827] border-t border-[#E5E7EB] select-text">
      {/* Upper 4-Column Grid */}
      <div className="py-14 sm:py-16 border-b border-[#E5E7EB]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Column 1: Brand Info & Socials (4.5 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="/" className="inline-flex focus-visible:outline-none group">
                <DFILogo variant="footer" className="group-hover:opacity-90 transition-opacity" />
              </Link>
              <p className="text-xs text-[#4B5563] leading-relaxed max-w-sm">
                {lang === 'bn'
                  ? 'সানসেট গ্রুপের একটি প্রিমিয়াম ইকো-হোটেল এন্ড রিসোর্ট প্রকল্প। সাফ-কবলা মালিকানা। শরীয়াহ অনুসারী। ভবিষ্যতের জন্য নির্মিত।'
                  : 'A premium eco-hotel & resort project by Sunset Group. Saf-kabala ownership. Shariah compliant. Built for the future.'}
              </p>

              {/* Social Channels with Authentic Real Icons */}
              <div className="flex items-center gap-2.5 pt-2">
                <a
                  href="https://www.facebook.com/share/1LnvD5hqVL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-white hover:bg-[#1E7C46] hover:border-[#1E7C46] shadow-2xs transition-colors"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com/sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-white hover:bg-[#1E7C46] hover:border-[#1E7C46] shadow-2xs transition-colors"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://youtube.com/@sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-white hover:bg-[#1E7C46] hover:border-[#1E7C46] shadow-2xs transition-colors"
                >
                  <FaYoutube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://bd.linkedin.com/in/sunsetkuakatahotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-white hover:bg-[#1E7C46] hover:border-[#1E7C46] shadow-2xs transition-colors"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://wa.me/8801325074535"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] shadow-2xs transition-colors"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links (2.5 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-normal text-[#111827]">
                {lang === 'bn' ? 'দ্রুত লিংক' : 'Quick Links'}
              </h4>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#4B5563] hover:text-[#1E7C46] transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal (2 cols) */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-normal text-[#111827]">
                {lang === 'bn' ? 'আইনি ও নীতিমালা' : 'Legal'}
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/privacy-policy" className="text-[#4B5563] hover:text-[#1E7C46] transition-colors block py-0.5">
                    {t.footer.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-[#4B5563] hover:text-[#1E7C46] transition-colors block py-0.5">
                    {t.footer.termsOfService}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Office Address & Contact (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-normal text-[#111827]">
                {lang === 'bn' ? 'প্রধান কার্যালয়' : 'Office Address'}
              </h4>
              <div className="space-y-3 text-xs text-[#4B5563] leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1E7C46] shrink-0 mt-0.5 stroke-[1.75]" />
                  <p>
                    27 Shaptak Square, Lift-11 (Level-11), Plot-2 (New), Road no-16, Old Dhanmondi 27, Dhanmondi, Dhaka-1209, Bangladesh
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-0.5">
                  <Phone className="w-4 h-4 text-[#1E7C46] shrink-0 stroke-[1.75]" />
                  <a href="tel:+8801325074535" className="hover:underline text-[#111827] font-semibold">
                    +880 1325 074 535
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#1E7C46] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                  </svg>
                  <a
                    href="https://wa.me/8801325074535"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-[#1E7C46] font-semibold"
                  >
                    +880 1325 074 535
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1E7C46] shrink-0 stroke-[1.75]" />
                  <a
                    href="mailto:sunsetgroupbd@gmail.com"
                    className="hover:underline text-[#111827] font-medium"
                  >
                    sunsetgroupbd@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#6B7280] pt-1">
                  <Clock className="w-4 h-4 text-[#1E7C46] shrink-0 stroke-[1.75]" />
                  <span>
                    {lang === 'bn'
                      ? 'অফিস সময়: শনি - বৃহস্পতিবার, সকাল ১০:০০ - সন্ধ্যা ৭:০০ (রবিবার বন্ধ)'
                      : 'Office Hours: Sat - Thu, 10:00 AM - 7:00 PM (Sunday Closed)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="py-5 text-xs text-[#6B7280] bg-[#F3F4F6] border-t border-[#E5E7EB]">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
            <p>© 2026 Dhaka Fantasy Island (Eco Hotel &amp; Resort). All Rights Reserved.</p>
            <p className="text-[11px] text-[#9CA3AF]">
              * Illustrative information. Terms apply. Please read the Deed of Agreement before investing.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};
