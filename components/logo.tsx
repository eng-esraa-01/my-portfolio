'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export function Logo({ size = 'md', showSubtitle = true }: LogoProps) {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Brand Icon: Engineered Monogram in Primary Sage Green #465E59 & Crisp White */}
      <div
        className={`relative ${iconSizes[size]} rounded-xl flex items-center justify-center bg-gradient-to-br from-[#465E59] via-[#3a4f4b] to-[#2d3e3a] text-white shadow-md shadow-[#465E59]/20 border border-[#465E59]/40 group-hover:scale-105 transition-transform duration-200 shrink-0`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
        >
          {/* Engineering Bracket Left */}
          <path
            d="M12 10L6 20L12 30"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />
          {/* Engineering Monogram E */}
          <path
            d="M18 13H28M18 20H25M18 27H28M18 13V27"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Engineering Bracket Right */}
          <path
            d="M28 10L34 20L28 30"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80"
          />
        </svg>

        {/* Small Golden Badge Dot for Ideal Engineer 2025 */}
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-white dark:border-slate-900 shadow-xs" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-start">
        <span className={`font-bold tracking-tight text-slate-800 dark:text-white leading-tight ${textSizes[size]}`}>
          {isAr ? 'م/ إسراء الشيخ' : 'Eng. Esraa Elshiekh'}
        </span>
        {showSubtitle && (
          <span className="text-[11px] font-medium text-[#465E59] dark:text-[#729d94] tracking-wide leading-none mt-0.5">
            {isAr ? 'قائدة واجهات أمامية · مصممة UI/UX' : 'Lead Frontend · UI/UX Architect'}
          </span>
        )}
      </div>
    </div>
  );
}
