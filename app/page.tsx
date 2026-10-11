import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { StatsStrip } from '@/components/stats-strip';
import { AboutAward } from '@/components/about-award';
import { SkillsMatrix } from '@/components/skills-matrix';
import { ProjectsGallery } from '@/components/projects-gallery';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CvSection } from '@/components/cv-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { FloatingAction } from '@/components/floating-action';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 overflow-x-clip">
      <Navbar />
      <Hero />
      <StatsStrip />
      <AboutAward />
      <SkillsMatrix />
      <ProjectsGallery />
      <TestimonialsSection />
      <CvSection />
      <ContactSection />
      <Footer />
      <FloatingAction />
    </main>
  );
}
