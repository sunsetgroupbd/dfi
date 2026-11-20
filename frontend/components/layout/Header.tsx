'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';
import { DFILogo } from '@/components/svg/DFILogo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/overview', label: t.nav.overview },
    { href: '/packages', label: t.nav.packages },
    { href: '/ownership', label: t.nav.ownership },
    { href: '/why-invest', label: t.nav.whyInvest },
    { href: '/location', label: t.nav.location },
    { href: '/gallery', label: t.nav.gallery },
  ];

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-white transition-colors duration-150 ${
          isScrolled
            ? 'border-b border-[#E5E7EB]'
            : 'border-b border-[#E5E7EB]'
        }`}
      >
        <Container className="flex items-center justify-between h-20">
          {/* Brand Logo on Left */}
          <Link
            href="/"
            aria-label="Dhaka Fantasy Island - Home"
            className="flex items-center shrink-0 focus-visible:outline-none group"
          >
            <DFILogo variant="header" className="group-hover:opacity-90 transition-opacity" />
          </Link>

          {/* Desktop Navigation in Center */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0"
          >
            {navLinks.map((link) => {
              const active = isCurrent(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13.5px] px-3.5 py-2 rounded-xl transition-colors whitespace-nowrap font-medium ${
                    active
                      ? 'text-[#1E7C46] font-semibold bg-[#F3F4F6]'
                      : 'text-[#4B5563] hover:text-[#1E7C46] hover:bg-[#F9FAFB]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Elements: Language toggle + Enquire CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label={
                lang === 'bn'
                  ? 'Switch language to English'
                  : 'বাংলায় রূপান্তর করুন'
              }
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl border border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F9FAFB] transition-colors cursor-pointer select-none shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-[#1E7C46]" />
              <span className={lang === 'bn' ? 'font-bold text-[#1E7C46]' : 'text-[#6B7280]'}>
                বাংলা
              </span>
              <span className="text-[#D1D5DB]">/</span>
              <span className={lang === 'en' ? 'font-bold text-[#1E7C46]' : 'text-[#6B7280]'}>
                EN
              </span>
            </button>

            {/* Enquire Now CTA Button */}
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="text-xs font-semibold px-4 py-2 rounded-xl"
            >
              {t.common.enquireNow}
            </Button>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg border border-[#E5E7EB] bg-white text-[#111827]"
            >
              <span>{lang === 'bn' ? 'EN' : 'বাং'}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              className="p-2 text-[#111827] hover:bg-[#F3F4F6] rounded-xl border border-[#E5E7EB] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 top-20 z-30 bg-[#0D2F1D] text-white flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            <div className="space-y-6">
              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-2 pt-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2.5 border-b border-[#1A452E] ${
                    pathname === '/' ? 'text-[#D97706] font-semibold' : 'text-white'
                  }`}
                >
                  {lang === 'bn' ? 'হোমপেজ' : 'Home'}
                </Link>
                {navLinks.map((link) => {
                  const active = isCurrent(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-lg font-medium py-2.5 border-b border-[#1A452E] ${
                        active ? 'text-[#D97706] font-semibold' : 'text-white hover:text-[#F3F4F6]'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full text-center bg-[#1E7C46] text-white border-[#1E7C46]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.common.enquireNow}
                </Button>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="border-t border-[#1A452E] pt-6 space-y-3 text-xs text-[#E5E7EB]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706]" />
                <a href="tel:+8801325074535" className="hover:underline font-mono">
                  +8801325074535
                </a>
              </div>
              <p className="text-[#9CA3AF] text-[11px] leading-relaxed">
                {t.hero.subheadline} — {t.common.companyActNotice}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
