'use client';

import React from 'react';
import { Project } from '@/lib/types';
import {
  ExternalLink,
  Laptop,
  Lock,
  Sparkles,
  ShoppingBag,
  Play,
  Volume2,
  TrendingUp,
  Package,
  Layers,
  Terminal,
  ShieldCheck,
  CheckCircle,
  Film,
  Smartphone,
  Tag,
  Calendar,
  Compass,
} from 'lucide-react';

interface ProjectHeroPreviewProps {
  project: Project;
  isAr: boolean;
  onOpenMockup?: () => void;
}

export function ProjectHeroPreview({ project, isAr, onOpenMockup }: ProjectHeroPreviewProps) {
  const cleanDomain = project.url
    .replace('https://', '')
    .replace('http://', '')
    .replace('/home', '')
    .replace('/en', '')
    .replace(/\/$/, '');

  // Render individual realistic hero preview based on project.id
  const renderHeroContent = () => {
    switch (project.id) {
      case 'dwam-tech':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#0c1824] via-[#102233] to-[#152e42] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Top Mini Nav */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-cyan-400">
                <span className="w-2 h-2 rounded-xs bg-cyan-400" />
                <span>DWAM TECH</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-slate-300">
                <span>{isAr ? 'الرئيسية' : 'Home'}</span>
                <span>{isAr ? 'حلولنا' : 'Solutions'}</span>
                <span>{isAr ? 'من نحن' : 'About'}</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#465E59] text-white text-[8px] font-bold">
                {isAr ? 'ابدأ الآن' : 'Start'}
              </span>
            </div>
            {/* Hero Body */}
            <div className="space-y-1.5 my-auto">
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[8px] font-medium border border-cyan-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                {isAr ? 'حلول برمجية سحابية متقدمة' : 'Cloud Enterprise Software'}
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                {isAr ? 'نصنع حلولاً برمجية تقود أعمالك للمستقبل' : 'Software Solutions Powering Your Future'}
              </h4>
              <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'منظومة تقنية متكاملة تواكب التحول الرقمي بأعلى معايير الجودة والأمان.'
                  : 'Scalable cloud architectures built for speed, performance and enterprise security.'}
              </p>
            </div>
            {/* Bottom Chips */}
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
              <span className="text-cyan-400 font-mono">99.9% Uptime</span>
              <span className="font-mono text-[#a3bfb9]">Clean Architecture</span>
            </div>
          </div>
        );

      case 'store-dwam-tech':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-slate-900 via-[#1e2e2b] to-[#122320] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Store Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-[#a3bfb9]">
                <ShoppingBag className="w-3 h-3 text-[#729d94]" />
                <span>DWAM STORE</span>
              </div>
              <div className="flex items-center gap-1.5 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">
                  {isAr ? 'خصم 25%' : '25% OFF'}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">🛒 3</span>
              </div>
            </div>
            {/* Store Hero */}
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-[#729d94] uppercase tracking-wider">
                {isAr ? 'المتجر الرقمي المعتمد' : 'Official Software Store'}
              </span>
              <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                {isAr ? 'متجر البرمجيات والحلول الرقمية الجاهزة' : 'Ready-to-Deploy Enterprise Software'}
              </h4>
              <div className="grid grid-cols-3 gap-1 pt-0.5 text-center">
                <div className="bg-white/10 rounded p-1">
                  <div className="text-[7px] text-slate-300">ERP Suite</div>
                  <div className="text-[8px] font-bold text-[#a3bfb9]">$299</div>
                </div>
                <div className="bg-white/10 rounded p-1">
                  <div className="text-[7px] text-slate-300">Store Core</div>
                  <div className="text-[8px] font-bold text-[#a3bfb9]">$199</div>
                </div>
                <div className="bg-white/10 rounded p-1">
                  <div className="text-[7px] text-slate-300">API Hub</div>
                  <div className="text-[8px] font-bold text-[#a3bfb9]">$149</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px]">
              <span className="text-emerald-400">✓ Instant License</span>
              <span className="text-slate-300">Secure Payment</span>
            </div>
          </div>
        );

      case 'innovators-sa':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#102b23] via-[#16382e] to-[#0c1f19] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-amber-300">
                <span className="text-[10px]">🇸🇦</span>
                <span>INNOVATORS SA</span>
              </div>
              <span className="text-[8px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {isAr ? 'رؤية 2030' : 'Vision 2030'}
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-amber-400">
                {isAr ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
              </span>
              <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                {isAr ? 'منصة رواد الابتكار للاستشارات وتطوير الأعمال' : 'Strategic Business Consulting & Innovation'}
              </h4>
              <p className="text-[9px] text-emerald-100 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'شريكك الاستراتيجي في تحقيق التحول المؤسسي وبناء مشاريع استثمارية رائدة.'
                  : 'Empowering enterprise growth and sustainable ventures in the Gulf region.'}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-emerald-300">
              <span>{isAr ? 'جلسات استشارية معتمدة' : 'Accredited Advisory'}</span>
              <span className="text-amber-300 font-bold">{isAr ? 'احجز جلستك' : 'Book Session'}</span>
            </div>
          </div>
        );

      case 'albakry':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#141d26] via-[#1a2733] to-[#203140] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-slate-100">
                <span className="w-2 h-2 bg-amber-400 rounded-full" />
                <span>AL-BAKRY GROUP</span>
              </div>
              <span className="text-[8px] text-amber-400 font-mono">EST. 1984</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                {isAr ? 'الاستثمار والتطوير العقاري' : 'Real Estate & Investment'}
              </span>
              <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight">
                {isAr ? 'مجموعة البكري القابضة للاستثمار العقاري' : 'Al-Bakry Group - Premier Investment Hub'}
              </h4>
              <div className="flex items-center gap-2 pt-1 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-amber-300 font-bold">
                  {isAr ? '+40 عام خبرة' : '40+ Yrs Legacy'}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-mono">
                  {isAr ? '35+ مشروعاً' : '35+ Projects'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
              <span>{isAr ? 'المحفظة الاستثمارية' : 'Investment Portfolio'}</span>
              <span className="text-slate-200">{isAr ? 'عرض المشاريع ➔' : 'View Projects ➔'}</span>
            </div>
          </div>
        );

      case 'aande-trading':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#1e252b] via-[#242d35] to-[#1a2026] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-slate-200">
                <span>🇯🇵 A&E TRADING CO., LTD.</span>
              </div>
              <span className="text-[8px] font-mono text-cyan-400">TOKYO • OSAKA</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-cyan-300">
                {isAr ? 'تجارة دولية وسلاسل إمداد' : 'Global Supply Chain & Freight'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'التجارة الدولية والاستيراد والتصدير - اليابان' : 'Cross-Border International Trade & Logistics'}
              </h4>
              <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                Connecting Japanese precision manufacturing with worldwide consumer markets.
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
              <span className="text-cyan-400 font-mono">Port Delivery</span>
              <span className="text-slate-300">ISO Certified</span>
            </div>
          </div>
        );

      case 'talip-tr':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#141b24] via-[#1c2736] to-[#0e131a] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Top Corporate Logistics Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px] relative z-10">
              <div className="flex items-center gap-1.5 font-black text-rose-400">
                <span className="text-[11px] leading-none">🇹🇷</span>
                <span className="tracking-wider">TALIP TR LOGISTICS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[8px] text-slate-300">
                <span>{isAr ? 'الخدمات' : 'Services'}</span>
                <span>{isAr ? 'الشحن الدولي' : 'Global Freight'}</span>
                <span>{isAr ? 'التخليص الجمركي' : 'Customs'}</span>
              </div>
              <span className="text-[8px] px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-bold">
                {isAr ? 'إسطنبول - تركيا' : 'Istanbul • Global'}
              </span>
            </div>

            {/* Logistics Hero Center */}
            <div className="space-y-1.5 my-auto relative z-10">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-950/60 text-cyan-300 border border-cyan-800/40 text-[8px] font-semibold">
                <Package className="w-2.5 h-2.5 text-cyan-400" />
                <span>{isAr ? 'خدمات التجارة والوساطة والشحن الدولي' : 'International Commerce, Sourcing & Cargo Agency'}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                {isAr ? 'حلول شحن ولوجستيات ذكية تربط تركيا بالعالم العربي' : 'Seamless Supply Chains & Freight Forwarding Across Borders'}
              </h4>
              <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'إدارة شحنات متكاملة، تخليص جمركي موثوق، وتوريد تجاري مباشر من المصانع التركية.'
                  : 'End-to-end cargo logistics, container tracking, and verified factory direct sourcing across Turkey.'}
              </p>
            </div>

            {/* Shipment Tracker Bar */}
            <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[8px] relative z-10">
              <div className="flex items-center gap-1.5 bg-black/40 px-2 py-1 rounded text-slate-200 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>TR-99824 • IN TRANSIT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400 font-mono">AIR & SEA</span>
                <span className="px-2 py-0.5 rounded bg-rose-600 text-white font-bold text-[8px]">
                  {isAr ? 'طلب تسعير' : 'Get Quote'}
                </span>
              </div>
            </div>
          </div>
        );

      case 'aal-alashab':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#1a2824] via-[#223530] to-[#16221f] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-[#a3bfb9]">
                <Layers className="w-3 h-3 text-[#729d94]" />
                <span>{isAr ? 'آل الأعشب الرقمية' : 'Aal Al-Ashab'}</span>
              </div>
              <span className="text-[8px] text-emerald-400">Cloud Web</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-[#729d94]">
                {isAr ? 'بنية رقمية وحلول مؤسسية' : 'Digital Platform Architecture'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'مؤسسة آل الأعشب للخدمات والحلول الرقمية' : 'Modern Enterprise Web Platform'}
              </h4>
              <p className="text-[9px] text-emerald-100 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'نقدم بنية رقمية حديثة وحلولاً مبتكرة ترتقي بتجربة عملائك.'
                  : 'Delivering scalable digital presence with clean component separation.'}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-300">
              <span className="text-[#a3bfb9]">{isAr ? 'واجهات متطورة' : 'Modern UI'}</span>
              <span>{isAr ? 'استكشف المزيد ➔' : 'Explore ➔'}</span>
            </div>
          </div>
        );

      case 'ushia':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#12161f] via-[#1a202c] to-[#0d1117] text-white p-3.5 flex flex-col justify-between overflow-hidden font-mono">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-cyan-400">
                <Terminal className="w-3 h-3" />
                <span>USHIA.NET</span>
              </div>
              <span className="text-[8px] text-slate-400 font-sans">v2.4 Core</span>
            </div>
            <div className="space-y-1 my-auto">
              <span className="text-[8px] text-cyan-300 font-sans font-bold">
                {isAr ? 'منصة الحلول البرمجية' : 'Digital Innovation Platform'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white font-sans leading-tight">
                {isAr ? 'أوشيا للحلول والمنتجات الرقمية الذكية' : 'Ushia - Smart Digital Solutions'}
              </h4>
              <div className="bg-black/40 rounded p-1.5 text-[8px] text-emerald-400 flex items-center justify-between">
                <span>$ npx create-ushia-app</span>
                <span className="text-slate-500 font-sans text-[7px]">⚡ fast</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400 font-sans">
              <span className="text-cyan-400">Modular Components</span>
              <span>Docs & APIs</span>
            </div>
          </div>
        );

      case 'englink':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#15232e] via-[#1b2d3b] to-[#121d26] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-cyan-300">
                <Compass className="w-3 h-3 text-cyan-400" />
                <span>ENGLINK</span>
              </div>
              <span className="text-[8px] text-slate-300">{isAr ? 'شبكة المهندسين' : 'Engineering Hub'}</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-cyan-400">
                {isAr ? 'المجتمع الهندسي والمهني' : 'Professional Engineering Community'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'الشبكة المهنية الأولى للمهندسين والخبراء' : 'Professional Engineering Network'}
              </h4>
              <div className="flex items-center gap-2 pt-0.5 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">
                  {isAr ? '12,000+ مهندس' : '12,000+ Engineers'}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                  {isAr ? '50+ تخصصاً' : '50+ Majors'}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
              <span className="text-cyan-400">{isAr ? 'مشاريع وفرص' : 'Projects & Feeds'}</span>
              <span className="text-slate-200">{isAr ? 'انضم للمجتمع' : 'Join Network'}</span>
            </div>
          </div>
        );

      case 'allah-names':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#102b20] via-[#173d2e] to-[#0d2119] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-amber-300">
                <span>🕌 {isAr ? 'أسماء الله الحسنى' : 'Asma Allah'}</span>
              </div>
              <span className="text-[8px] text-emerald-300 font-mono">99 NAMES</span>
            </div>
            <div className="space-y-1 my-auto text-center">
              <span className="text-[8px] text-amber-300 font-serif">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
              <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                {isAr ? 'منصة شروحات وتدبر أسماء الله الحسنى' : 'Interactive Hub of The Divine Names'}
              </h4>
              <div className="bg-black/30 rounded p-1.5 text-[8px] text-amber-200 flex items-center justify-center gap-2">
                <Volume2 className="w-2.5 h-2.5 text-amber-400" />
                <span>الرَّحْمَنُ • الرَّحِيمُ • الْمَلِكُ • الْقُدُّوسُ</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-emerald-300">
              <span>{isAr ? 'معاني وتلاوات صوتية' : 'Audio & Meanings'}</span>
              <span className="text-amber-300 font-bold">{isAr ? 'ابدأ التدبر ➔' : 'Explore ➔'}</span>
            </div>
          </div>
        );

      case 'al-khashabah':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#1c0f0d] via-[#2a130f] to-[#120807] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            {/* Theatrical Curtain & Header Glow */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 opacity-80" />
            
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px] relative z-10">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <span className="text-base leading-none">🎭</span>
                <span className="tracking-wide">AL-KHASHABAH</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[8px] text-amber-200/80">
                <span>{isAr ? 'عن المؤسسة' : 'About'}</span>
                <span>{isAr ? 'الأرشيف المسرحي' : 'Archive'}</span>
                <span>{isAr ? 'الورش والفعاليات' : 'Workshops'}</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[8px] font-bold">
                {isAr ? 'موسم 2025' : 'Season 2025'}
              </span>
            </div>

            {/* Stage Hero Body */}
            <div className="space-y-1.5 my-auto relative z-10">
              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-rose-950/60 text-rose-300 border border-rose-800/40 text-[8px] font-semibold">
                <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                <span>{isAr ? 'مؤسسة الخشبة للفنون المسرحية والثقافية' : 'Performing Arts & Theater Foundation'}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-white leading-tight">
                {isAr ? 'حيث يلتقي سحر الخشبة بروح الإبداع المسرحي' : 'Where Stage Magic Meets Contemporary Artistic Vision'}
              </h4>
              <p className="text-[9px] text-amber-100/90 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'منصة رقمية متكاملة لتوثيق الأرشيف المسرحي، جداول العروض الحية، والورش الفنية المتخصصة.'
                  : 'Documenting theatrical heritage, staging contemporary plays, and fostering creative talents across the region.'}
              </p>
            </div>

            {/* Live Play Showcase Ribbon */}
            <div className="flex items-center justify-between pt-1.5 border-t border-white/10 text-[8px] relative z-10">
              <div className="flex items-center gap-2 text-amber-300">
                <span className="flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  <span>{isAr ? 'العرض المسرحي القادم' : 'Upcoming Stage Play'}</span>
                </span>
                <span className="text-slate-400 font-mono">18 OCT</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500 text-black font-extrabold text-[8px]">
                {isAr ? 'حجز التذاكر' : 'Book Tickets'}
              </span>
            </div>
          </div>
        );

      case 'french-movie':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#121217] via-[#1c1c24] to-[#0a0a0d] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-rose-400">
                <Film className="w-3 h-3" />
                <span>FRENCH MOVIE</span>
              </div>
              <span className="text-[8px] font-mono text-cyan-400">4K HDR</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-rose-400">
                {isAr ? 'سينما الفيلم الفرنسي' : 'Cinema & Film Critique'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'بوابة السينما والفيلم الفرنسي العالمية' : 'French Cinema Streaming & Showcase Hub'}
              </h4>
              <div className="flex items-center gap-2 pt-0.5 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">Cannes Laureates</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-slate-300">Nouvelle Vague</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-400">
              <span className="text-rose-400">▶ Watch Trailers</span>
              <span className="text-slate-300">Reviews & Cast</span>
            </div>
          </div>
        );

      case 'nasmasr':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#162724] via-[#1c332e] to-[#101c1a] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-emerald-300">
                <Smartphone className="w-3 h-3 text-emerald-400" />
                <span>NAS MASR</span>
              </div>
              <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                {isAr ? 'تطبيق مجتمعي' : 'Mobile App'}
              </span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-emerald-400">
                {isAr ? 'خدمات محلية وحرفيون' : 'Community & Local Services'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'بوابة وتطبيق ناس مصر: كل الخدمات حولك' : 'Nas Masr - Local Services & Community App'}
              </h4>
              <div className="flex items-center gap-1.5 text-[8px] text-slate-300">
                <span>Google Play</span>
                <span>•</span>
                <span>App Store</span>
                <span>•</span>
                <span className="text-emerald-300 font-mono">PWA Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-emerald-300">
              <span>{isAr ? 'تثبيت التطبيق' : 'Install PWA'}</span>
              <span className="text-white font-bold">{isAr ? 'استكشف الخدمات' : 'Explore'}</span>
            </div>
          </div>
        );

      case 'kittanhome':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#292622] via-[#332f2a] to-[#1f1c19] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-bold text-amber-200">
                <span>🌿 KITTAN HOME</span>
              </div>
              <span className="text-[8px] text-amber-300 font-mono">WOOCOMMERCE</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-amber-300">
                {isAr ? 'مفروشات ومنسوجات طبيعية' : 'Pure Linen Home & Textiles'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                {isAr ? 'كتان هوم: فخامة المنسوجات والمفروشات الطبيعية' : 'Kittan Home - Luxury Natural Textiles'}
              </h4>
              <div className="flex items-center gap-2 pt-0.5 text-[8px]">
                <span className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-bold">
                  {isAr ? 'خصم 20% صيفي' : '20% Summer Sale'}
                </span>
                <span className="text-slate-300">100% Organic Linen</span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-amber-300">
              <span>{isAr ? 'أطقم السرير والستائر' : 'Bedding & Curtains'}</span>
              <span className="text-white font-bold">{isAr ? 'تسوق الآن ➔' : 'Shop Now ➔'}</span>
            </div>
          </div>
        );

      case 'kittaan':
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-[#242629] via-[#2c2f33] to-[#1b1c1e] text-white p-3.5 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[9px]">
              <div className="flex items-center gap-1 font-serif font-bold text-slate-100 tracking-widest">
                <span>KITTAAN</span>
              </div>
              <span className="text-[8px] text-amber-300">NEW 2025</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <span className="text-[8px] font-bold text-slate-300 uppercase tracking-widest">
                {isAr ? 'أزياء الكتان الطبيعي' : 'Pure Organic Linen Fashion'}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white leading-tight font-serif">
                {isAr ? 'كتان: الأصالة والراحة في أزياء الكتان الطبيعي' : 'Kittaan - Contemporary Pure Linen Brand'}
              </h4>
              <p className="text-[9px] text-slate-300 line-clamp-2 leading-relaxed">
                {isAr
                  ? 'أزياء عصرية راقية مصممة من ألياف الكتان النقية لتجربة استثنائية كل يوم.'
                  : 'Minimalist luxury linen garments crafted with pure natural fibers.'}
              </p>
            </div>
            <div className="flex items-center justify-between pt-1 border-t border-white/10 text-[8px] text-slate-300">
              <span>{isAr ? 'اللوك بوك الجديد' : 'Spring Lookbook'}</span>
              <span className="text-amber-300 font-bold">{isAr ? 'اكتشف المجموعة' : 'Discover'}</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative h-full w-full bg-gradient-to-br from-slate-900 to-[#122320] text-white p-3.5 flex flex-col justify-between">
            <div className="text-[9px] font-bold text-[#a3bfb9]">{cleanDomain}</div>
            <h4 className="text-xs font-bold">{isAr ? project.titleAr : project.titleEn}</h4>
            <div className="text-[8px] text-slate-400">Live Production Web Platform</div>
          </div>
        );
    }
  };

  return (
    <div className="relative w-full h-44 sm:h-48 group/hero overflow-hidden bg-slate-950">
      {/* Live Realistic Hero Web Interface */}
      {renderHeroContent()}

      {/* Subtle Live Web Corner Watermark */}
      <div className="absolute top-2 end-2 z-10 pointer-events-none opacity-80 group-hover/hero:opacity-0 transition-opacity">
        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-black/60 text-emerald-400 backdrop-blur-xs border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          WEB PREVIEW
        </span>
      </div>

      {/* Interactive Hover Overlay with Instant Actions */}
      <div className="absolute inset-0 bg-[#162724]/85 backdrop-blur-xs opacity-0 group-hover/hero:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-3 z-20">
        <div className="text-center text-white mb-0.5">
          <div className="text-xs font-bold leading-tight line-clamp-1">{isAr ? project.titleAr : project.titleEn}</div>
          <div className="text-[10px] text-[#a3bfb9] font-mono">{cleanDomain}</div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenMockup && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenMockup();
              }}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl shadow-md inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>{isAr ? 'معاينة الشاشات' : 'Device Preview'}</span>
            </button>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md inline-flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span>{isAr ? 'زيارة الموقع' : 'Visit Live'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#465E59]" />
          </a>
        </div>
      </div>
    </div>
  );
}
