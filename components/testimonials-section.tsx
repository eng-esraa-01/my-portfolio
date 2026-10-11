'use client';

import React, { useState } from 'react';
import { Testimonial } from '@/lib/types';
import { TESTIMONIALS } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';
import {
  Star,
  Quote,
  ShieldCheck,
  PlusCircle,
  X,
  Send,
  Copy,
  Check,
} from 'lucide-react';

export function TestimonialsSection() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('user_testimonials');
        if (stored) {
          const parsed: Testimonial[] = JSON.parse(stored);
          return [...TESTIMONIALS, ...parsed];
        }
      } catch {
        // ignore
      }
    }
    return TESTIMONIALS;
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('');
  const [authorRating, setAuthorRating] = useState(5);
  const [authorComment, setAuthorComment] = useState('');

  const handleCopyQuote = (quote: string, id: string) => {
    navigator.clipboard.writeText(quote);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorComment.trim()) return;

    const newTestimonial: Testimonial = {
      id: `custom-${Date.now()}`,
      authorAr: authorName,
      authorEn: authorName,
      roleAr: authorRole || 'عميل معتمد',
      roleEn: authorRole || 'Verified Client',
      companyAr: 'تقييم جديد عبر الموقع',
      companyEn: 'Direct Web Submission',
      quoteAr: authorComment,
      quoteEn: authorComment,
      rating: authorRating,
      date: '2025',
      verified: true,
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);

    try {
      const customOnly = updated.filter((item) => item.id.startsWith('custom-'));
      localStorage.setItem('user_testimonials', JSON.stringify(customOnly));
    } catch {
      // ignore
    }

    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setModalOpen(false);
      setAuthorName('');
      setAuthorRole('');
      setAuthorComment('');
      setAuthorRating(5);
    }, 1500);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 relative bg-gradient-to-b from-[#3d534e] via-[#465E59] to-[#364944] text-white border-t border-[#57746e] shadow-md overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-0 end-1/4 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2 text-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-200" />
              <span>{t.testimonials.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xs">
              {t.testimonials.title}
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/85">
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Add Review Button */}
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-emerald-50 rounded-xl shadow-lg transition-all cursor-pointer self-start md:self-end whitespace-nowrap hover:scale-102"
          >
            <PlusCircle className="w-4 h-4 text-[#465E59]" />
            <span>{t.testimonials.addReviewBtn}</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((review) => (
            <div
              key={review.id}
              className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 backdrop-blur-md shadow-md hover:border-white/30 transition-all duration-200 space-y-4 text-start group"
            >
              {/* Stars & Quote */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating ? 'fill-amber-300 text-amber-300' : 'text-white/20'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopyQuote(isAr ? review.quoteAr : review.quoteEn, review.id)}
                    className="p-1 text-emerald-200/70 hover:text-white transition-colors cursor-pointer"
                    title="Copy quote"
                  >
                    {copiedId === review.id ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <div className="p-1.5 rounded-lg bg-white/15 text-white">
                    <Quote className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-medium">
                &ldquo;{isAr ? review.quoteAr : review.quoteEn}&rdquo;
              </p>

              {/* Attribution */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
                <div>
                  <div className="font-bold text-white">
                    {isAr ? review.authorAr : review.authorEn}
                  </div>
                  <div className="text-emerald-100/75 text-[11px]">
                    {isAr ? review.roleAr : review.roleEn}
                    {review.companyAr && (
                      <span className="ms-1 text-emerald-200/90 font-medium">
                        · {isAr ? review.companyAr : review.companyEn}
                      </span>
                    )}
                  </div>
                </div>

                {review.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-200 bg-white/10 px-2 py-0.5 rounded-full border border-white/15 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{t.testimonials.verifiedReview}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl text-start">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 end-5 p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
              {t.addReviewModal.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              {t.addReviewModal.subtitle}
            </p>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-2 text-[#465E59] dark:text-[#a3bfb9]">
                <Check className="w-10 h-10 mx-auto" />
                <div className="font-bold text-base">
                  {t.addReviewModal.successMessage}
                </div>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.addReviewModal.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder={t.addReviewModal.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#465E59]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.addReviewModal.roleLabel}
                  </label>
                  <input
                    type="text"
                    value={authorRole}
                    onChange={(e) => setAuthorRole(e.target.value)}
                    placeholder={t.addReviewModal.rolePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#465E59]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.addReviewModal.ratingLabel}
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setAuthorRating(star)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= authorRating ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    {t.addReviewModal.commentLabel} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={authorComment}
                    onChange={(e) => setAuthorComment(e.target.value)}
                    placeholder={t.addReviewModal.commentPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#465E59] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    {t.addReviewModal.cancelBtn}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 font-bold text-white bg-[#465E59] hover:bg-[#384c47] rounded-xl inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.addReviewModal.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
