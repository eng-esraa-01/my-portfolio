'use client';

import React, { useState, useMemo } from 'react';
import { Project } from '@/lib/types';
import { PROJECTS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';
import { DeviceMockupModal } from './device-mockup-modal';
import { ProjectGridPreview } from './project-grid-preview';
import { LiveHeroPreview } from './live-hero-preview';
import {
  ExternalLink,
  Laptop,
  Tablet,
  Smartphone,
  Search,
  CheckCircle2,
  Globe2,
  Star,
  Copy,
  Check,
  Lock,
  LayoutGrid,
  Monitor,
  List,
  X,
} from 'lucide-react';

type ViewMode = 'grid' | 'spotlight' | 'compact';

export function ProjectsGallery() {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [spotlightProject, setSpotlightProject] = useState<Project>(PROJECTS[0]);
  const [spotlightDevice, setSpotlightDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: isAr ? 'كافة المشاريع' : 'All Projects', count: 15 },
    { id: 'corporate', label: isAr ? 'شركات وحلول تقنية' : 'Enterprise & Solutions', count: 7 },
    { id: 'ecommerce', label: isAr ? 'متاجر وتجارة إلكترونية' : 'E-Commerce', count: 1 },
    { id: 'cultural', label: isAr ? 'منصات معرفية ومجتمعية' : 'Community & Cultural', count: 5 },
    { id: 'wordpress', label: isAr ? 'مواقع ووردبريس' : 'WordPress Sites', count: 2 },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((item) => {
      const matchesCategory = filter === 'all' || item.category === filter;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const title = (isAr ? item.titleAr : item.titleEn).toLowerCase();
      const desc = (isAr ? item.descriptionAr : item.descriptionEn).toLowerCase();
      const tech = item.techStack.join(' ').toLowerCase();
      const url = item.url.toLowerCase();

      return (
        matchesCategory &&
        (title.includes(q) || desc.includes(q) || tech.includes(q) || url.includes(q))
      );
    });
  }, [filter, searchQuery, isAr]);

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div>
          <div className="max-w-2xl space-y-3 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#465E59]/10 text-[#465E59] dark:bg-[#465E59]/20 dark:text-[#a3bfb9] border border-[#465E59]/30">
              <Globe2 className="w-3.5 h-3.5" />
              <span>{isAr ? 'معرض الأعمال الحية ومعاينة الهيرو سكشن' : 'Live Platforms & Web Previews'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              {isAr ? 'مشاريع حقيقية ومنصات كبرى' : 'Production Web Platforms'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {isAr
                ? 'استكشف 15 موقعاً حياً مع عرض الهيرو سكشن الفعلي لكل مشروع كبريفيو واقعي، بالإضافة إلى إمكانية المعاينة داخل شاشات الماك والآيباد والآيفون.'
                : 'Explore 15 live platforms featuring authentic hero section web previews, interactive tech filters, and multi-device viewport testing.'}
            </p>
          </div>
        </div>

          {/* Quick Search & View Mode Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 shadow-sm">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-5 h-5 text-[#465E59] dark:text-[#a3bfb9] absolute start-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن اسم الموقع أو التقنية...' : 'Search project or tech...'}
                aria-label={isAr ? 'البحث في المشاريع' : 'Search projects'}
                className="w-full h-12 ps-12 pe-12 text-sm font-medium rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#719990] focus:border-[#719990] transition-shadow shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label={isAr ? 'مسح البحث' : 'Clear search'}
                  className="absolute end-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div role="group" aria-label={isAr ? 'طريقة عرض المشاريع' : 'Project view'} className="grid grid-cols-3 gap-1 p-1 bg-slate-200/60 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl md:shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                title={isAr ? 'عرض الشبكة التفاعلية' : 'Grid View'}
                aria-pressed={viewMode === 'grid'}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 h-10 text-xs font-bold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#719990] ${
                  viewMode === 'grid'
                    ? 'bg-[#465E59] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4 shrink-0" />
                <span>{isAr ? 'شبكة' : 'Grid'}</span>
              </button>

              <button
                onClick={() => setViewMode('spotlight')}
                title={isAr ? 'عرض الشاشة التفاعلية' : 'Spotlight Preview'}
                aria-pressed={viewMode === 'spotlight'}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 h-10 text-xs font-bold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#719990] ${
                  viewMode === 'spotlight'
                    ? 'bg-[#465E59] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4 shrink-0" />
                <span>{isAr ? 'معاينة' : 'Live View'}</span>
              </button>

              <button
                onClick={() => setViewMode('compact')}
                title={isAr ? 'قائمة سريعة' : 'Compact List'}
                aria-pressed={viewMode === 'compact'}
                className={`flex items-center justify-center gap-2 px-3 sm:px-4 h-10 text-xs font-bold rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#719990] ${
                  viewMode === 'compact'
                    ? 'bg-[#465E59] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <List className="w-4 h-4 shrink-0" />
                <span>{isAr ? 'قائمة' : 'List'}</span>
              </button>
            </div>
          </div>

        {/* Filter Tabs Bar with Brand Green Active State */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  filter === tab.id
                    ? 'bg-[#465E59] text-white shadow-md shadow-[#465E59]/25'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[10px] font-mono ${
                    filter === tab.id
                      ? 'bg-black/20 text-white'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search Result Fallback */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 text-slate-500 space-y-3">
            <Globe2 className="w-10 h-10 mx-auto text-slate-400 stroke-1" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
              {isAr ? 'لم يتم العثور على مشاريع تطابق البحث' : 'No projects found matching your search'}
            </p>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl cursor-pointer"
            >
              {isAr ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
            </button>
          </div>
        )}

        {/* 1. GRID VIEW MODE: High-Fidelity Browser Window Cards with Authentic Hero Preview */}
        {viewMode === 'grid' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => {
              const isFeatured = project.featured;

              return (
                <div
                  key={project.id}
                  className={`group flex flex-col justify-between rounded-2xl border transition-all duration-200 overflow-hidden bg-white dark:bg-slate-900 ${
                    isFeatured
                      ? 'border-slate-300 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-[#465E59] dark:hover:border-[#465E59]'
                      : 'border-slate-200 dark:border-slate-800 shadow-2xs hover:shadow-lg hover:border-[#465E59]/60 dark:hover:border-[#465E59]/60'
                  }`}
                >
                  {/* Top Browser Window Chrome */}
                  <div className="flex items-center justify-between px-3.5 py-2 bg-slate-100 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-[11px] text-slate-500">
                    {/* Window Controls */}
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-rose-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-amber-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-emerald-400 transition-colors" />
                    </div>

                    {/* URL Domain Pill with Lock */}
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 truncate max-w-[190px]">
                      <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                      <span className="truncate">
                        {project.url.replace('https://', '').replace('http://', '').replace('/home', '')}
                      </span>
                    </div>

                    {/* Static preview indicator */}
                    <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>{isAr ? 'معاينة' : 'PREVIEW'}</span>
                    </div>
                  </div>

                  {/* Local hero screenshot: no external pages load in the grid. */}
                  <div className="border-b border-slate-100 dark:border-slate-800">
                    <ProjectGridPreview
                      project={project}
                      isAr={isAr}
                      onOpenMockup={() => setModalProject(project)}
                    />
                  </div>

                  {/* Card Main Body */}
                  <div className="p-5 sm:p-6 space-y-3.5 text-start">
                    {/* Category Label */}
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#465E59] dark:text-[#a3bfb9]">
                        {isAr ? project.categoryLabelAr : project.categoryLabelEn}
                      </span>
                      {isFeatured && (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-2 py-0.5 rounded-full">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{isAr ? 'مميز' : 'Featured'}</span>
                        </span>
                      )}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {isAr ? project.titleAr : project.titleEn}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {isAr ? project.descriptionAr : project.descriptionEn}
                    </p>

                    {/* Delivered Engineering Role */}
                    <div className="pt-1 text-xs">
                      <span className="font-bold text-slate-700 dark:text-slate-300">
                        {isAr ? 'الدور المنجز: ' : 'Delivered Role: '}
                      </span>
                      <span className="text-[#465E59] dark:text-[#a3bfb9] font-medium">
                        {isAr ? project.roleAr : project.roleEn}
                      </span>
                    </div>

                    {/* Highlights Bullets */}
                    <div className="space-y-1 pt-1">
                      {(isAr ? project.highlightsAr : project.highlightsEn).slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#465E59] shrink-0" />
                          <span className="truncate">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Tags with Green Accent */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#465E59]/10 text-[#465E59] dark:bg-[#465E59]/20 dark:text-[#a3bfb9] border border-[#465E59]/20 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons (Device Mockup, Direct Visit, Copy Link) */}
                  <div className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                    {/* Device Mockup Button */}
                    <button
                      onClick={() => setModalProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-[#465E59]/10 hover:text-[#465E59] dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xs transition-colors cursor-pointer"
                    >
                      <Laptop className="w-3.5 h-3.5 text-[#465E59] dark:text-[#a3bfb9]" />
                      <span>{isAr ? 'معاينة في الشاشات' : 'Device Mockup'}</span>
                    </button>

                    {/* Copy Link Button */}
                    <button
                      onClick={() => handleCopy(project.url, project.id)}
                      title={isAr ? 'نسخ رابط الموقع' : 'Copy URL'}
                      className="p-2 text-slate-500 hover:text-[#465E59] dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl transition-colors cursor-pointer"
                    >
                      {copiedId === project.id ? (
                        <Check className="w-3.5 h-3.5 text-[#465E59]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    {/* Direct Visit Button in Brand Green #465E59 */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl shadow-2xs transition-colors cursor-pointer shrink-0"
                      title="Visit Live Site"
                    >
                      <span>{isAr ? 'الموقع' : 'Visit'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 2. SPOTLIGHT VIEW MODE: Split Live Interactive Preview */}
        {viewMode === 'spotlight' && filteredProjects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Scrollable List of Projects */}
            <div className="lg:col-span-5 space-y-3 max-h-[720px] overflow-y-auto pe-1">
              {filteredProjects.map((project) => {
                const isSelected = spotlightProject.id === project.id;

                return (
                  <button
                    key={project.id}
                    onClick={() => setSpotlightProject(project)}
                    className={`w-full text-start p-4 rounded-2xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 border-[#465E59] shadow-md ring-2 ring-[#465E59]'
                        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className="text-[#465E59] dark:text-[#a3bfb9]">
                        {isAr ? project.categoryLabelAr : project.categoryLabelEn}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE
                      </span>
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {isAr ? project.titleAr : project.titleEn}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-1">
                      {isAr ? project.roleAr : project.roleEn}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Live Interactive Canvas Frame */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg p-5 sm:p-6 space-y-5 sticky top-24">
              {/* Header with Device Switcher and Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="space-y-0.5 text-start">
                  <div className="text-xs font-bold text-[#465E59] dark:text-[#a3bfb9]">
                    {isAr ? spotlightProject.categoryLabelAr : spotlightProject.categoryLabelEn}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {isAr ? spotlightProject.titleAr : spotlightProject.titleEn}
                  </h3>
                </div>

                {/* Device Switcher */}
                <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  <button
                    onClick={() => setSpotlightDevice('desktop')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      spotlightDevice === 'desktop'
                        ? 'bg-[#465E59] text-white shadow-2xs'
                        : 'text-slate-500'
                    }`}
                    title="Desktop"
                  >
                    <Laptop className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSpotlightDevice('tablet')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      spotlightDevice === 'tablet'
                        ? 'bg-[#465E59] text-white shadow-2xs'
                        : 'text-slate-500'
                    }`}
                    title="Tablet"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSpotlightDevice('mobile')}
                    className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                      spotlightDevice === 'mobile'
                        ? 'bg-[#465E59] text-white shadow-2xs'
                        : 'text-slate-500'
                    }`}
                    title="Mobile"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Simulated Device Frame Container with Authentic Hero Section */}
              <div className="flex justify-center items-center py-4 bg-slate-100/70 dark:bg-slate-950/70 rounded-2xl p-3 border border-slate-200/80 dark:border-slate-800 min-h-[380px]">
                <div
                  className={`transition-all duration-300 bg-white dark:bg-slate-900 border-4 border-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col ${
                    spotlightDevice === 'desktop'
                      ? 'w-full h-[360px]'
                      : spotlightDevice === 'tablet'
                      ? 'w-[420px] max-w-full h-[380px]'
                      : 'w-[260px] h-[400px]'
                  }`}
                >
                  {/* Browser Chrome Header */}
                  <div className="px-3 py-1.5 bg-slate-900 text-[10px] text-slate-300 flex items-center justify-between shrink-0 font-mono">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate max-w-[180px]">{spotlightProject.url}</span>
                    <Lock className="w-2.5 h-2.5 text-emerald-400" />
                  </div>

                  {/* Authentic Hero Section Web Preview from Real Link */}
                  <div className="flex-1 w-full overflow-hidden flex flex-col justify-between">
                    <LiveHeroPreview
                      project={spotlightProject}
                      isAr={isAr}
                      onOpenMockup={() => setModalProject(spotlightProject)}
                    />

                    {/* Bottom Action Strip */}
                    <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setModalProject(spotlightProject)}
                        className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#465E59]/10 hover:text-[#465E59] rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Laptop className="w-3.5 h-3.5 text-[#465E59]" />
                        <span>{isAr ? 'فتح المحاكي الكامل' : 'Full Simulator'}</span>
                      </button>

                      <a
                        href={spotlightProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{isAr ? 'زيارة الموقع الحي' : 'Visit Live Site'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Architecture & Engineering Highlights */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2 text-start">
                <div className="text-xs font-bold text-[#465E59] dark:text-[#a3bfb9]">
                  {isAr ? 'الدور المنجز ومعايير الجودة:' : 'Delivered Engineering Role & Quality Standards:'}
                </div>
                <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {isAr ? spotlightProject.roleAr : spotlightProject.roleEn}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                  {(isAr ? spotlightProject.highlightsAr : spotlightProject.highlightsEn).map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#465E59] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. COMPACT LIST VIEW MODE: Quick Table / Catalog */}
        {viewMode === 'compact' && filteredProjects.length > 0 && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xs divide-y divide-slate-100 dark:divide-slate-800">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors text-start"
              >
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white truncate">
                      {isAr ? project.titleAr : project.titleEn}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#465E59]/10 text-[#465E59] dark:bg-[#465E59]/20 dark:text-[#a3bfb9] shrink-0 font-bold">
                      {isAr ? project.categoryLabelAr : project.categoryLabelEn}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-mono truncate">
                    {project.url}
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => setModalProject(project)}
                    className="px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-[#465E59]/10 hover:text-[#465E59] rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <Laptop className="w-3.5 h-3.5 text-[#465E59]" />
                    <span>{isAr ? 'معاينة في الشاشات' : 'Mockup'}</span>
                  </button>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{isAr ? 'زيارة الموقع' : 'Visit'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dedicated Interactive Multi-Device Mockup Modal */}
      {modalProject && (
        <DeviceMockupModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </section>
  );
}
