'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/language-context';
import { PROFILE_INFO } from '@/lib/data';
import { MessageSquare, ArrowUp } from 'lucide-react';

export function FloatingAction() {
  const { language, isRTL } = useLanguage();
  const isAr = language === 'ar';
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    isAr
      ? 'السلام عليكم ورحمة الله وبركاته م/ إسراء الشيخ، أود التواصل معك.'
      : 'Hello Eng. Esraa, I would like to connect with you.'
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-5 ${
        isRTL ? 'left-5' : 'right-5'
      } z-40 flex flex-col items-center gap-2.5 animate-in fade-in duration-200`}
    >
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 shadow-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer hover:-translate-y-1"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating WhatsApp Quick Action */}
      <a
        href={`https://wa.me/${PROFILE_INFO.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:scale-105 cursor-pointer"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-5 h-5 shrink-0" />
        <span className="hidden sm:inline text-xs font-bold whitespace-nowrap">
          {isAr ? 'واتساب مباشر' : 'WhatsApp'}
        </span>
      </a>
    </div>
  );
}
