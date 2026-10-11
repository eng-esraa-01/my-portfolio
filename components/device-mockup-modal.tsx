'use client';

import React, { useState, useEffect } from 'react';
import { Project } from '@/lib/types';
import { useLanguage } from '@/lib/language-context';
import {
  X,
  ExternalLink,
  Laptop,
  Tablet,
  Smartphone,
  RotateCw,
  Copy,
  Check,
  Layers,
  Sparkles,
  Lock,
} from 'lucide-react';

interface DeviceMockupModalProps {
  project: Project | null;
  onClose: () => void;
}

type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export function DeviceMockupModal({ project, onClose }: DeviceMockupModalProps) {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const [device, setDevice] = useState<DeviceMode>('desktop');
  const [iframeKey, setIframeKey] = useState(0);
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReload = () => {
    setIframeKey((prev) => prev + 1);
  };

  // Device geometry styles
  const deviceStyles: Record<DeviceMode, { width: string; height: string; rounded: string }> = {
    desktop: {
      width: 'w-full max-w-5xl',
      height: 'h-[580px] sm:h-[640px]',
      rounded: 'rounded-xl',
    },
    tablet: {
      width: 'w-[768px] max-w-full',
      height: 'h-[620px]',
      rounded: 'rounded-2xl',
    },
    mobile: {
      width: 'w-[375px] max-w-full',
      height: 'h-[640px]',
      rounded: 'rounded-3xl',
    },
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Container Card */}
      <div className="relative w-full max-w-6xl max-h-[96vh] flex flex-col bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-slate-800 bg-slate-950/90 shrink-0">
          {/* Project Title and Category */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#465E59]/20 border border-[#465E59]/30 text-[#a3bfb9] flex items-center justify-center shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div className="min-w-0 text-start">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {isAr ? project.titleAr : project.titleEn}
              </h3>
              <div className="text-xs text-[#a3bfb9] truncate">
                {isAr ? project.categoryLabelAr : project.categoryLabelEn}
              </div>
            </div>
          </div>

          {/* Device Switcher with Brand Green #465E59 */}
          <div className="flex items-center gap-1 p-1 bg-slate-800/90 rounded-xl border border-slate-700">
            <button
              onClick={() => setDevice('desktop')}
              title={t.mockup.desktop}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                device === 'desktop'
                  ? 'bg-[#465E59] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.mockup.desktop}</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              title={t.mockup.tablet}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                device === 'tablet'
                  ? 'bg-[#465E59] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.mockup.tablet}</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              title={t.mockup.mobile}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                device === 'mobile'
                  ? 'bg-[#465E59] text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.mockup.mobile}</span>
            </button>
          </div>

          {/* Quick Actions (Launch Live, Copy URL, Close) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleReload}
              title={t.mockup.reload}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCw className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopy}
              title={copied ? 'Copied' : 'Copy link'}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              title={t.mockup.openExternal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>{t.mockup.openExternal}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              title={t.mockup.close}
              className="p-2 text-slate-400 hover:text-white hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-colors cursor-pointer ms-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Browser Mockup Chrome Bar */}
        <div className="flex items-center gap-3 px-4 py-2 bg-slate-950 border-b border-slate-800 text-xs text-slate-400 shrink-0">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-md border border-slate-800 text-slate-300 font-mono text-xs truncate">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">{project.url}</span>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[11px] text-slate-400">
            <span>{isAr ? 'الدور:' : 'Role:'}</span>
            <span className="text-[#a3bfb9] font-medium">
              {isAr ? project.roleAr : project.roleEn}
            </span>
          </div>
        </div>

        {/* Viewport Canvas (Center with Device Frame) */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-radial from-slate-900 to-slate-950">
          <div
            className={`transition-all duration-300 ${deviceStyles[device].width} ${deviceStyles[device].height} bg-slate-950 border-4 sm:border-8 border-slate-800 ${deviceStyles[device].rounded} shadow-2xl overflow-hidden relative flex flex-col`}
          >
            {/* Dynamic Island / Mobile Camera Notch */}
            {device === 'mobile' && (
              <div className="w-full flex justify-center py-1 bg-slate-950 shrink-0">
                <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-slate-950" />
                </div>
              </div>
            )}

            {/* Embedded Live Web View */}
            <div className="relative flex-1 w-full bg-white dark:bg-slate-950 overflow-hidden">
              <iframe
                key={iframeKey}
                src={project.url}
                title={project.titleEn}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                className="w-full h-full border-0 bg-white"
              />

              {/* Bottom Notice & Direct Link */}
              <div className="absolute bottom-3 start-3 end-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-[11px]">
                    {isAr
                      ? 'يمكنك تصفح الموقع مباشرة أو فتحه في نافذة جديدة لمعاينة كاملة'
                      : 'Interact with the site or launch in a new tab for unconstrained viewing'}
                  </span>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#465E59] hover:bg-[#384c47] text-white text-[11px] font-bold flex items-center gap-1.5 transition-colors"
                >
                  <span>{isAr ? 'فتح في تبويب مستقل' : 'Open in New Tab'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
