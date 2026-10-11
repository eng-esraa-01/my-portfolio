'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/language-context';
import { PROFILE_INFO } from '@/lib/data';
import {
  ArrowDown,
  Award,
  ShieldCheck,
  MessageSquare,
  Copy,
  Check,
  Layers,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<'lead' | 'design' | 'teach'>('lead');

  const whatsappMessage = encodeURIComponent(
    isAr
      ? 'السلام عليكم ورحمة الله وبركاته م/ إسراء، اطلعت على معرض أعمالك وأود التواصل معك.'
      : 'Hello Eng. Esraa, I reviewed your portfolio and would like to connect with you.'
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const roleDetails = {
    lead: {
      titleAr: 'قيادة فريق الواجهات بشركة دوام',
      titleEn: 'Frontend Team Lead at Dwam Tech',
      descAr: 'إدارة مشاريع الواجهات البرمجية، مراجعة الكود، وفرض أعلى معايير الـ Clean Code لتسليم منصات إنتاجية خالية من الأخطاء.',
      descEn: 'Architecting frontend platforms, conducting rigorous code audits, and enforcing Clean Code standards across high-scale applications.',
      icon: Layers,
    },
    design: {
      titleAr: 'تصميم وتنفيذ الواجهات (UI/UX + Code)',
      titleEn: 'Complete UI/UX Design & Architecture',
      descAr: 'تصميم الهوية وتجربة المستخدم على Figma ثم برمجتها مباشرة بدقة متناهية وسرعة فائقة باستخدام Next.js و TypeScript.',
      descEn: 'Designing design systems in Figma and translating them into modular, high-performance Next.js and TypeScript web applications.',
      icon: Code2,
    },
    teach: {
      titleAr: 'تدريس وتدريب تقني لأكثر من 3 سنوات',
      titleEn: '3+ Years Computer Science Mentorship',
      descAr: 'تدريب أكثر من 500 طالب وطالبة بمختلف المراحل العمرية (من 7 حتى 25 سنة) على التفكير المنطقي وهندسة الويب.',
      descEn: 'Lecturing and mentoring 500+ aspiring engineers across diverse ages (7 to 25) in computational thinking and full-stack web basics.',
      icon: GraduationCap,
    },
  };

  const currentRole = roleDetails[activeTab];
  const CurrentIcon = currentRole.icon;

  return (
    <section className="relative pt-8 pb-14 md:pt-12 md:pb-18 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Soft Lighting - Prominent Brand Green #465E59 & Crisp White */}
      <div className="absolute top-0 start-1/4 w-[550px] h-[550px] bg-[#465E59]/15 dark:bg-[#465E59]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 end-10 w-96 h-96 bg-[#465E59]/10 dark:bg-[#465E59]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#465E59_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.08] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content Column */}
          <div className="lg:col-span-7 space-y-6 text-start">
            {/* Year 2025 Ideal Engineer Accolade Badge with Brand Green */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#465E59]/10 text-[#465E59] dark:bg-[#465E59]/20 dark:text-[#a3bfb9] border border-[#465E59]/30 shadow-2xs"
            >
              <Award className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{isAr ? 'حاصلة على درع المهندسة المثالية لعام 2025' : 'Honored with Ideal Engineer Trophy 2025'}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-2"
            >
              <div className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400">
                {t.hero.greeting}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.25]">
                <span>
                  {isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                </span>
                <span className="block text-[#465E59] dark:text-[#729d94] text-xl sm:text-2xl md:text-3xl font-extrabold mt-1">
                  {isAr ? 'قائدة فريق الواجهات وهندسة تجربة المستخدم' : 'Lead Frontend Engineer & UI/UX Architect'}
                </span>
              </h1>
              <p className="text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300 pt-1 leading-relaxed">
                {t.hero.tagline}
              </p>
            </motion.div>

            {/* Interactive Role Switcher Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 w-fit">
                <button
                  onClick={() => setActiveTab('lead')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'lead'
                      ? 'bg-[#465E59] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isAr ? 'قائدة فريق' : 'Team Lead'}
                </button>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'design'
                      ? 'bg-[#465E59] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isAr ? 'تصميم وتنفيذ (UI/UX)' : 'UI/UX & Code'}
                </button>
                <button
                  onClick={() => setActiveTab('teach')}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === 'teach'
                      ? 'bg-[#465E59] text-white shadow-xs'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isAr ? 'تدريس وتدريب (3+ سنين)' : 'CS Mentorship'}
                </button>
              </div>

              {/* Dynamic Feature Spotlight Box with Green #465E59 Accents */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#465E59]/15 dark:bg-[#465E59]/25 text-[#465E59] dark:text-[#a3bfb9] flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {isAr ? currentRole.titleAr : currentRole.titleEn}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {isAr ? currentRole.descAr : currentRole.descEn}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {/* Primary in Brand Green #465E59: Explore Projects with Devices */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl shadow-md shadow-[#465E59]/25 hover:shadow-lg transition-all cursor-pointer"
              >
                <span>{isAr ? 'معاينة المشاريع والشاشات' : 'Explore Projects & Web Previews'}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* WhatsApp direct */}
              <a
                href={`https://wa.me/${PROFILE_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#465E59] dark:text-[#a3bfb9] bg-[#465E59]/10 hover:bg-[#465E59]/20 border border-[#465E59]/30 rounded-xl transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#465E59]" />
                <span>{isAr ? 'تواصل عبر واتساب' : 'WhatsApp'}</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all cursor-pointer"
                title={PROFILE_INFO.email}
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#465E59]" />
                    <span className="text-[#465E59] font-bold">{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>{isAr ? 'نسخ الإيميل' : 'Copy Email'}</span>
                  </>
                )}
              </button>
            </motion.div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 relative flex justify-center px-3 sm:px-5 py-5">
            <div className="relative isolate w-full max-w-sm sm:max-w-md">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5 rotate-3 rounded-[2rem] bg-gradient-to-br from-[#719990] via-[#465E59] to-[#2d3e3a] dark:from-[#88b0a7] dark:via-[#57746e] dark:to-[#394d49] shadow-xl shadow-[#465E59]/20"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-2 -rotate-3 rounded-[2rem] border border-[#719990]/30 dark:border-[#a3bfb9]/25 pointer-events-none"
              />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border-2 border-white/70 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-xl shadow-[#465E59]/15"
            >
              <Image
                src={PROFILE_INFO.avatarImage}
                alt={isAr ? PROFILE_INFO.nameAr : PROFILE_INFO.nameEn}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                referrerPolicy="no-referrer"
                className="object-cover object-center"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Overlays */}
              <div className="absolute top-4 start-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-[#465E59]/20 bg-white/95 px-2.5 py-1.5 text-xs shadow-sm backdrop-blur-md dark:border-[#a3bfb9]/25 dark:bg-slate-900/95">
                <BriefcaseBusiness aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#465E59] dark:text-[#a3bfb9]" />
                <span className="font-extrabold text-[#465E59] dark:text-[#a3bfb9]" dir="ltr">3+</span>
                <span className="font-semibold text-slate-600 dark:text-slate-300">{isAr ? 'سنوات خبرة' : 'Years of Experience'}</span>
              </div>

              <div className="absolute bottom-4 start-4 end-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#465E59]" />
                  <span className="font-bold">{isAr ? 'تصميم متقن وتجربة سلسة على كل الشاشات' : 'Thoughtful Design & Seamless Experiences'}</span>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
