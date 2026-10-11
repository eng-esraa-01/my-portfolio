import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { AppProviders } from '@/components/app-providers';

export const metadata: Metadata = {
  title: 'م/ إسراء الشيخ | Eng. Esraa Elshiekh - Lead Frontend Engineer & UI/UX Architect',
  description:
    'الموقع الرسمي ومعرض الأعمال للمهندسة إسراء الشيخ - قائدة فريق تطوير الواجهات الأمامية وتجربة المستخدم بشركة دوام للبرمجيات، وحاصلة على درع المهندسة المثالية لعام 2025.',
  openGraph: {
    title: 'م/ إسراء الشيخ | Eng. Esraa Elshiekh - Portfolio & Lead Frontend Engineer',
    description:
      'معرض أعمال م/ إسراء الشيخ - مهندسة برمجيات وتجربة مستخدم، قائدة فريق الواجهات، ومدربة برمجية.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'م/ إسراء الشيخ | Eng. Esraa Elshiekh',
    description: 'Portfolio of Lead Frontend Engineer & UI/UX Architect Eng. Esraa Elshiekh.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 antialiased min-h-screen selection:bg-[#465E59] selection:text-white"
        suppressHydrationWarning
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
