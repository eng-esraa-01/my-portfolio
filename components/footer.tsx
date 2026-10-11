'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { Logo } from './logo';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="pt-12 pb-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Logo size="md" />

          {/* Quick Nav Anchors */}
          <nav className="flex flex-wrap items-center gap-6 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#about" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.about}
            </a>
            <a href="#projects" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.projects}
            </a>
            <a href="#award" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.award}
            </a>
            <a href="#testimonials" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.testimonials}
            </a>
            <a href="#cv" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.cv}
            </a>
            <a href="#contact" className="hover:text-[#465E59] dark:hover:text-[#a3bfb9] transition-colors">
              {t.nav.contact}
            </a>
          </nav>

        </div>

        <div className="pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-500 dark:text-slate-400">
          <div>{t.footer.rights}</div>
        </div>
      </div>
    </footer>
  );
}
