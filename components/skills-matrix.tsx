'use client';

import React from 'react';
import { SKILL_CATEGORIES } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';
import { Code2, Palette, ShieldCheck, GraduationCap, Wrench, Check } from 'lucide-react';

export function SkillsMatrix() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const icons = [Code2, Palette, ShieldCheck, GraduationCap, Wrench];

  return (
    <section className="py-16 md:py-20 relative bg-gradient-to-b from-[#3d534e] via-[#465E59] to-[#364944] text-white border-y border-[#57746e] shadow-md overflow-hidden">
      {/* Decorative engineering grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        <div className="max-w-2xl space-y-2 text-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs">
            <Wrench className="w-3.5 h-3.5 text-emerald-200" />
            <span>{isAr ? 'المهارات والترسانة التقنية' : 'Technical Arsenal'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xs">
            {isAr ? 'الترسانة البرمجية وأدوات العمل' : 'Engineering Arsenal & Tools'}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/85">
            {isAr
              ? 'أحدث أطر العمل والتقنيات الهندسية المستخدمة لبناء تطبيقات ويب عالية الأداء وقابلة للتوسع.'
              : 'Production-ready tech stack and modern engineering tools leveraged to build high-performance web systems.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 backdrop-blur-md shadow-md hover:border-white/30 transition-all duration-200 text-start group ${
                  idx >= 3 ? 'md:col-span-3' : 'md:col-span-2'
                }`}
              >
                <div className="flex items-center gap-3 mb-3 pb-2.5 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4 text-emerald-200" />
                  </div>
                  <h3 className="text-sm font-bold text-white">
                    {isAr ? category.categoryAr : category.categoryEn}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 text-xs font-medium text-emerald-50/90"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
