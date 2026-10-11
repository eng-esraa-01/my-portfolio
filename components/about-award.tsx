'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { AWARDS } from '@/lib/data';
import { Award, Compass, Users, GraduationCap, Code2, ShieldCheck } from 'lucide-react';

export function AboutAward() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const pillars = isAr
    ? [
        {
          title: 'تصميم وتنفيذ متكامل (UI/UX + Code)',
          desc: 'تصميم أنظمة Figma UI/UX المتقدمة ثم هندستها مباشرة بكود Next.js نظيف وسريع.',
          icon: Compass,
        },
        {
          title: 'قيادة فرق الواجهات (Team Leader)',
          desc: 'إدارة وتوجيه فريق الواجهات بشركة دوام، مراجعة الأكواد، وفرض معايير Clean Code.',
          icon: Users,
        },
        {
          title: 'تدريس وتدريب تقني (3+ سنوات)',
          desc: 'تدريب أكثر من 500 طالب وطالبة بمختلف المراحل العمرية (7 إلى 25 سنة) على البرمجة.',
          icon: GraduationCap,
        },
        {
          title: 'خريجة حاسبات ومعلومات قناة السويس',
          desc: 'أساس أكاديمي راسخ في هندسة البرمجيات وتصميم النظم المعقدة (دفعة 2023 - 2024).',
          icon: Code2,
        },
      ]
    : [
        {
          title: 'End-to-End Design & Build',
          desc: 'Crafting Figma UI/UX systems and translating them into modular Next.js production code.',
          icon: Compass,
        },
        {
          title: 'Frontend & UI/UX Team Leader',
          desc: 'Directing frontend engineering teams at Dwam Tech with relentless code quality reviews.',
          icon: Users,
        },
        {
          title: '3+ Years Tech Mentorship',
          desc: 'Coaching 500+ learners spanning ages 7 to 25 in real-world web engineering.',
          icon: GraduationCap,
        },
        {
          title: 'Suez Canal CS Graduate',
          desc: 'Strong Computer Science & software architecture foundation (Class of 2024).',
          icon: Code2,
        },
      ];

  return (
    <section id="award" className="py-16 md:py-24 relative bg-slate-50/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Ambient background decoration with #465E59 */}
      <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#465E59]/10 dark:bg-[#465E59]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3 text-start">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#465E59] text-white shadow-sm border border-[#57746e]">
            <Award className="w-4 h-4 text-amber-300" />
            <span>{isAr ? 'التكريم والقيادة التقنية' : 'Recognition & Engineering Leadership'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {isAr ? 'درع المهندسة المثالية لعام 2025' : 'Ideal Engineer Shield & Honor 2025'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {isAr
              ? 'تكريم قيادي رسمي من شركة دوام للبرمجيات لعام 2025 تقديراً للأداء الاستثنائي، هندسة الكود النظيف، وقيادة الفريق بكفاءة عالية.'
              : 'Official leadership accolade awarded by Dwam Tech in 2025 in recognition of architectural excellence and clean code delivery.'}
          </p>
        </div>

        {/* Feature Plaque Showcase Card with Deep #465E59 Accents */}
        <div className="relative rounded-3xl border-2 border-[#465E59]/30 dark:border-[#57746e]/60 bg-gradient-to-br from-white via-[#f4f7f6] to-[#e7ecea] dark:from-slate-900 dark:via-slate-800 dark:to-[#1e2a27] p-6 sm:p-8 md:p-10 shadow-xl dark:shadow-black/30 overflow-hidden group">
          {/* Top highlight bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-[#465E59] to-amber-400" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Trophy Display with Green/Gold Framing */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#465E59]/40 dark:border-[#57746e] shadow-lg bg-slate-950 group-hover:shadow-2xl transition-all duration-300">
                <Image
                  src={AWARDS.image}
                  alt={isAr ? AWARDS.titleAr : AWARDS.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-[#465E59]/20 to-transparent" />
                
                {/* Top Badge on Image */}
                <div className="absolute top-3 start-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#465E59]/90 text-white backdrop-blur-md border border-white/20 shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                    <span>HONOR 2025</span>
                  </span>
                </div>

                {/* Bottom Overlay on Image */}
                <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white text-xs font-bold bg-slate-950/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="flex items-center gap-1.5 truncate">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="truncate">{isAr ? AWARDS.organizationAr : AWARDS.organizationEn}</span>
                  </span>
                  <span className="font-mono text-amber-300 font-black text-sm shrink-0 ms-2">2025</span>
                </div>
              </div>
            </div>

            {/* Shield Details & Story */}
            <div className="lg:col-span-7 space-y-5 text-start">
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#465E59] text-white shadow-xs">
                  <Award className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isAr ? 'تكريم رسمي 2025' : 'Official Accolade 2025'}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  <span>★ {isAr ? 'درع القيادة والتميز' : 'Leadership & Excellence Shield'}</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-snug">
                {isAr ? AWARDS.titleAr : AWARDS.titleEn}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {isAr ? AWARDS.descriptionAr : AWARDS.descriptionEn}
              </p>

              {/* Technical Milestones Box with #465E59 Theme */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 dark:bg-slate-950/60 border border-[#465E59]/20 dark:border-[#57746e]/50 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-black text-[#465E59] dark:text-[#a3bfb9] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#465E59] dark:bg-[#a3bfb9]" />
                  <span>{isAr ? 'أسباب الاستحقاق والتفوق القيادي:' : 'Merit & Technical Milestones:'}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#465E59]/5 dark:bg-[#465E59]/15 border border-[#465E59]/10">
                    <ShieldCheck className="w-4 h-4 text-[#465E59] dark:text-[#88b0a7] shrink-0" />
                    <span className="font-semibold">{isAr ? 'معايير Clean Code بنسبة 100%' : '100% Clean Code Audit'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#465E59]/5 dark:bg-[#465E59]/15 border border-[#465E59]/10">
                    <ShieldCheck className="w-4 h-4 text-[#465E59] dark:text-[#88b0a7] shrink-0" />
                    <span className="font-semibold">{isAr ? 'توجيه فريق وتدريب الكفاءات' : 'Mentoring Junior Engineers'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#465E59]/5 dark:bg-[#465E59]/15 border border-[#465E59]/10">
                    <ShieldCheck className="w-4 h-4 text-[#465E59] dark:text-[#88b0a7] shrink-0" />
                    <span className="font-semibold">{isAr ? 'سرعة إنجاز منصات الإنتاج' : 'Rapid Production Delivery'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-[#465E59]/5 dark:bg-[#465E59]/15 border border-[#465E59]/10">
                    <ShieldCheck className="w-4 h-4 text-[#465E59] dark:text-[#88b0a7] shrink-0" />
                    <span className="font-semibold">{isAr ? 'دمج احترافي للتصميم والبرمجة' : 'Unified UI/UX & Code Fusion'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid with Elegant Green Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 hover:border-[#465E59] dark:hover:border-[#719990] hover:shadow-md dark:hover:bg-slate-800 transition-all duration-300 space-y-3 text-start relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#465E59] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#465E59] dark:group-hover:text-[#a3bfb9] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
                <div className="w-8 h-0.5 bg-[#465E59]/30 dark:bg-[#719990]/60 rounded-full group-hover:w-16 group-hover:bg-[#465E59] dark:group-hover:bg-[#a3bfb9] transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
