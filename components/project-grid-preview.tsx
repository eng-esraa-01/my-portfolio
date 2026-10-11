'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ExternalLink, Laptop } from 'lucide-react';
import { Project } from '@/lib/types';
import { ProjectHeroPreview } from './project-hero-preview';

interface ProjectGridPreviewProps {
  project: Project;
  isAr: boolean;
  onOpenMockup: () => void;
}

export function ProjectGridPreview({ project, isAr, onOpenMockup }: ProjectGridPreviewProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden group/preview">
      {project.previewImage && !imageFailed ? (
        <Image
          src={project.previewImage}
          alt={isAr ? `لقطة من واجهة ${project.titleAr}` : `${project.titleEn} homepage screenshot`}
          width={1200}
          height={750}
          loading="eager"
          unoptimized
          onError={() => setImageFailed(true)}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <ProjectHeroPreview project={project} isAr={isAr} onOpenMockup={onOpenMockup} />
      )}
      <div className="absolute inset-0 bg-[#162724]/85 backdrop-blur-xs opacity-0 group-hover/preview:opacity-100 group-focus-within/preview:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-3 p-3">
        <div className="text-xs font-bold text-white text-center">{isAr ? project.titleAr : project.titleEn}</div>
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenMockup}
            className="px-3 py-1.5 text-xs font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl inline-flex items-center gap-1.5 cursor-pointer"
          >
            <Laptop className="w-3.5 h-3.5" />
            {isAr ? 'محاكي الشاشات' : 'Device Preview'}
          </button>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 rounded-xl inline-flex items-center gap-1.5"
          >
            {isAr ? 'زيارة الموقع' : 'Visit Site'}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
