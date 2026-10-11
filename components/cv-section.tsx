'use client';

import React from 'react';
import { useLanguage } from '@/lib/language-context';
import { EXPERIENCES, EDUCATION, AWARDS, PROFILE_INFO } from '@/lib/data';
import {
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Printer,
  Download,
  CheckCircle,
  FileText,
} from 'lucide-react';

export function CvSection() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="cv" className="py-16 md:py-24 relative bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2 text-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#465E59]/10 text-[#465E59] dark:bg-[#465E59]/20 dark:text-[#a3bfb9] border border-[#465E59]/30">
              <FileText className="w-3.5 h-3.5" />
              <span>{t.cv.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t.cv.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {t.cv.subtitle}
            </p>
          </div>

          {/* CV Actions */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span>{t.cv.printCv}</span>
            </button>

            <a
              href={`mailto:${PROFILE_INFO.email}?subject=Request%20CV%20-%20Eng.%20Esraa%20Elshiekh`}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl shadow-md shadow-[#465E59]/20 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{t.cv.downloadPdf}</span>
            </a>
          </div>
        </div>

        {/* CV Document Card */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 sm:p-10 space-y-10 text-start">
          {/* Header Summary */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                </h3>
                <div className="text-sm font-bold text-[#465E59] dark:text-[#a3bfb9] mt-0.5">
                  {isAr ? PROFILE_INFO.titleAr : PROFILE_INFO.titleEn}
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400 space-y-0.5">
                <div>{PROFILE_INFO.email}</div>
                <div>{isAr ? PROFILE_INFO.locationAr : PROFILE_INFO.locationEn}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
              {isAr ? PROFILE_INFO.bioAr : PROFILE_INFO.bioEn}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 dark:text-white">
              <Briefcase className="w-4 h-4 text-[#465E59]" />
              <span>{t.cv.experienceHeading}</span>
            </div>

            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="p-5 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-2 hover:border-[#465E59]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {isAr ? exp.titleAr : exp.titleEn}
                    </h4>
                    <span className="text-xs font-mono text-[#465E59] dark:text-[#a3bfb9] font-semibold">
                      {isAr ? exp.periodAr : exp.periodEn}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    {isAr ? exp.companyAr : exp.companyEn}
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {(isAr ? exp.descriptionAr : exp.descriptionEn).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        <CheckCircle className="w-3.5 h-3.5 text-[#465E59] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honor Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800">
            {/* Education */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <GraduationCap className="w-4 h-4 text-[#465E59]" />
                <span>{t.cv.educationHeading}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800 space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {isAr ? EDUCATION.degreeAr : EDUCATION.degreeEn}
                </div>
                <div className="text-xs text-slate-500">
                  {isAr ? EDUCATION.institutionAr : EDUCATION.institutionEn}
                </div>
                <div className="text-[11px] font-mono text-slate-600 dark:text-slate-400 pt-1">
                  {isAr ? EDUCATION.periodAr : EDUCATION.periodEn}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  {isAr ? EDUCATION.detailsAr : EDUCATION.detailsEn}
                </p>
              </div>
            </div>

            {/* Honors & 2025 Shield */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{isAr ? 'الجوائز والتكريم الرسمي' : 'Awards & Recognition'}</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 space-y-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{isAr ? AWARDS.titleAr : AWARDS.titleEn}</span>
                  <span className="font-mono text-amber-600 dark:text-amber-400 font-bold">2025</span>
                </div>
                <div className="text-xs text-slate-500">
                  {isAr ? AWARDS.organizationAr : AWARDS.organizationEn}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                  {isAr ? AWARDS.descriptionAr : AWARDS.descriptionEn}
                </p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
              <Languages className="w-4 h-4 text-[#465E59]" />
              <span>{t.cv.languagesHeading}</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                {isAr ? 'اللغة العربية (اللغة الأم - Native)' : 'Arabic (Native)'}
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                {isAr ? 'اللغة الإنجليزية (إتقان تام - Fluent)' : 'English (Professional Fluent)'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
