'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Project } from '@/lib/types';
import { ProjectHeroPreview } from './project-hero-preview';
import { ExternalLink, RefreshCw, AlertCircle, Laptop, Eye, Globe } from 'lucide-react';

interface LiveHeroPreviewProps {
  project: Project;
  isAr: boolean;
  onOpenMockup?: () => void;
}

export function LiveHeroPreview({ project, isAr, onOpenMockup }: LiveHeroPreviewProps) {
  const [iframeStatus, setIframeStatus] = useState<'loading' | 'loaded' | 'blocked'>('loading');
  const [mode, setMode] = useState<'live' | 'snapshot'>('live');
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(0.32);

  const cleanDomain = project.url
    .replace('https://', '')
    .replace('http://', '')
    .replace('/home', '')
    .replace('/en', '')
    .replace(/\/$/, '');

  // Calculate dynamic scale factor based on container width so 1200px fits seamlessly
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1200);
        }
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  // Safety timeout: if iframe cannot load or is blocked by CSP after 5s, fallback gracefully
  useEffect(() => {
    const timer = setTimeout(() => {
      setIframeStatus((prev) => (prev === 'loading' ? 'blocked' : prev));
    }, 5000);

    return () => clearTimeout(timer);
  }, [project.url]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden group/live select-none"
    >
      {/* 1. Live iframe Viewport (Directly from link with responsive scale) */}
      {/* Keep the iframe mounted so scrolling and mode changes preserve its loaded page. */}
      <div className={`absolute inset-0 w-full h-full overflow-hidden bg-slate-900 pointer-events-none ${mode === 'snapshot' ? 'invisible' : ''}`}>
        <div
          className="origin-top-left absolute top-0 left-0"
          style={{
            width: '1200px',
            height: '700px',
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
          }}
        >
          <iframe
            key={project.url}
            src={project.url}
            title={`${project.titleEn} Live Hero`}
            loading="eager"
            sandbox="allow-scripts allow-same-origin allow-forms"
            onLoad={() => {
              setIframeStatus('loaded');
            }}
            onError={() => {
              setIframeStatus('blocked');
            }}
            className="w-[1200px] h-[700px] border-0 bg-white"
          />
        </div>
      </div>

      {/* 2. Fallback / Snapshot Hero Preview (if blocked or if user chooses snapshot) */}
      {(mode === 'snapshot' || iframeStatus === 'blocked') && (
        <div className="absolute inset-0 w-full h-full">
          <ProjectHeroPreview
            project={project}
            isAr={isAr}
            onOpenMockup={onOpenMockup}
          />
        </div>
      )}

      {/* 3. Loading shimmer if live iframe is fetching */}
      {mode === 'live' && iframeStatus === 'loading' && (
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xs flex items-center justify-center z-10">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 text-xs font-mono shadow-md">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#465E59]" />
            <span>{isAr ? 'جاري تحميل الهيرو الحقيقي...' : 'Fetching Live Hero from URL...'}</span>
          </div>
        </div>
      )}

      {/* 4. Live URL badge on top left */}
      <div className="absolute top-2 start-2 z-20 flex items-center gap-1.5">
        {mode === 'live' && iframeStatus === 'loaded' && (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950/80 text-emerald-400 border border-emerald-500/40 shadow-xs backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            LIVE LINK PREVIEW
          </span>
        )}

        {(mode === 'snapshot' || iframeStatus === 'blocked') && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold bg-slate-950/85 text-[#a3bfb9] border border-[#465E59]/40 shadow-xs backdrop-blur-xs">
            <AlertCircle className="w-2.5 h-2.5 text-[#465E59]" />
            <span>{isAr ? 'عرض متطابق للواجهة' : 'High-Fi Mirror'}</span>
          </span>
        )}
      </div>

      {/* Mode toggle button on top right */}
      <div className="absolute top-2 end-2 z-20 flex items-center gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMode(mode === 'live' ? 'snapshot' : 'live');
          }}
          title={isAr ? 'تبديل وضع العرض' : 'Toggle view mode'}
          className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-black/75 hover:bg-black text-white border border-white/20 backdrop-blur-xs cursor-pointer flex items-center gap-1 transition-colors"
        >
          {mode === 'live' ? <Eye className="w-2.5 h-2.5 text-[#a3bfb9]" /> : <Globe className="w-2.5 h-2.5 text-emerald-400" />}
          <span>{mode === 'live' ? (isAr ? 'واجهة بديلة' : 'Mirror') : (isAr ? 'رابط حي' : 'Live Link')}</span>
        </button>
      </div>

      {/* 5. Interactive Hover Overlay */}
      <div className="absolute inset-0 bg-[#162724]/85 backdrop-blur-xs opacity-0 group-hover/live:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2.5 p-3 z-30">
        <div className="text-center text-white mb-0.5 max-w-xs">
          <div className="text-xs font-bold leading-tight line-clamp-1">{isAr ? project.titleAr : project.titleEn}</div>
          <div className="text-[10px] text-[#a3bfb9] font-mono truncate">{cleanDomain}</div>
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
              <span>{isAr ? 'محاكي الشاشات' : 'Device Preview'}</span>
            </button>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="px-3.5 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl shadow-md inline-flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <span>{isAr ? 'فتح الرابط الأصلي' : 'Visit Site'}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#465E59]" />
          </a>
        </div>
      </div>
    </div>
  );
}
