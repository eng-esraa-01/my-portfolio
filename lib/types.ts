export type Language = 'ar' | 'en';

export interface Project {
  id: string;
  titleAr: string;
  titleEn: string;
  category: 'all' | 'corporate' | 'ecommerce' | 'cultural' | 'wordpress';
  categoryLabelAr: string;
  categoryLabelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  url: string;
  previewImage?: string;
  roleAr: string;
  roleEn: string;
  techStack: string[];
  featured?: boolean;
  type: 'nextjs' | 'react' | 'wordpress';
  highlightsAr: string[];
  highlightsEn: string[];
}

export interface Testimonial {
  id: string;
  authorAr: string;
  authorEn: string;
  roleAr: string;
  roleEn: string;
  companyAr?: string;
  companyEn?: string;
  quoteAr: string;
  quoteEn: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface ExperienceItem {
  id: string;
  titleAr: string;
  titleEn: string;
  companyAr: string;
  companyEn: string;
  periodAr: string;
  periodEn: string;
  roleType: 'leadership' | 'frontend' | 'instruction';
  descriptionAr: string[];
  descriptionEn: string[];
}

export interface EducationItem {
  degreeAr: string;
  degreeEn: string;
  institutionAr: string;
  institutionEn: string;
  periodAr: string;
  periodEn: string;
  detailsAr: string;
  detailsEn: string;
}

export interface AwardItem {
  titleAr: string;
  titleEn: string;
  organizationAr: string;
  organizationEn: string;
  year: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}
