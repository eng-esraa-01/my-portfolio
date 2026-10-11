'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { useTheme } from '@/lib/theme-context';
import { Logo } from './logo';
import { Globe, Moon, Sun, Menu, X, MessageSquare } from 'lucide-react';

export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#award', label: t.nav.award },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#cv', label: t.nav.cv },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <div className="sticky top-0 z-50 w-full pt-2 sm:pt-3 px-3 sm:px-6">
      {/* Scroll Progress Line in Brand Green #465E59 */}
      <div
        className="fixed top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#465E59] via-[#61857e] to-[#a3bfb9] z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Glass Dock Header with White & Gray Border */}
      <header className="max-w-6xl mx-auto rounded-2xl backdrop-blur-xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-200 px-4 sm:px-6 py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Wordmark */}
          <a href="#" className="whitespace-nowrap shrink-0">
            <Logo size="sm" showSubtitle={false} />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#465E59] dark:hover:text-[#a3bfb9] hover:bg-[#465E59]/10 dark:hover:bg-[#465E59]/20 transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions & Toggles */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language Switch */}
            <button
              onClick={toggleLanguage}
              title={language === 'ar' ? 'Switch to English' : 'التحويل للعربية'}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#465E59]/15 hover:text-[#465E59] dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-[#465E59]/30"
            >
              <Globe className="w-3.5 h-3.5 text-[#465E59] dark:text-[#a3bfb9]" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Dark/Light Switch */}
            <button
              onClick={toggleTheme}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Contact CTA in Brand Green #465E59 */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl shadow-xs transition-colors whitespace-nowrap cursor-pointer shadow-[#465E59]/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-slate-100 dark:border-slate-800 mt-2 space-y-1 animate-in slide-in-from-top duration-150">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-[#465E59]/10 hover:text-[#465E59] dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{t.nav.contact}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
