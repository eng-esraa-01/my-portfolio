'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { PROFILE_INFO } from '@/lib/data';
import { Globe, Users, GraduationCap, CheckCircle2, Award } from 'lucide-react';

export function StatsStrip() {
  const { t } = useLanguage();

  const stats = [
    {
      num: PROFILE_INFO.projectsCount,
      title: t.stats.projectsTitle,
      desc: t.stats.projectsDesc,
      icon: Globe,
      accent: 'text-[#465E59] dark:text-[#a3bfb9]',
    },
    {
      num: PROFILE_INFO.studentsCount,
      title: t.stats.studentsTitle,
      desc: t.stats.studentsDesc,
      icon: Users,
      accent: 'text-[#465E59] dark:text-[#a3bfb9]',
    },
    {
      num: PROFILE_INFO.teachingYears,
      title: t.stats.teachingTitle,
      desc: t.stats.teachingDesc,
      icon: GraduationCap,
      accent: 'text-[#465E59] dark:text-[#a3bfb9]',
    },
    {
      num: '100%',
      title: t.stats.cleanCodeTitle,
      desc: t.stats.cleanCodeDesc,
      icon: CheckCircle2,
      accent: 'text-[#465E59] dark:text-[#a3bfb9]',
    },
    {
      num: '2025',
      title: t.about.awardTitle,
      desc: t.about.awardDesc,
      icon: Award,
      accent: 'text-amber-500',
    },
  ];

  return (
    <section className="relative py-8 md:py-10 bg-gradient-to-r from-[#3c524d] via-[#465E59] to-[#364944] text-white border-y border-[#57746e] shadow-md overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute -top-12 -start-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -end-12 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-4 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/15 hover:border-white/25 transition-all duration-200 group"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <IconComponent className="w-4 h-4 text-emerald-200" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black tracking-tight text-white tabular-nums drop-shadow-xs">
                    {stat.num}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-emerald-50 leading-snug">
                  {stat.title}
                </h3>
                <p className="text-[11px] text-emerald-100/80 mt-1 line-clamp-1">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
