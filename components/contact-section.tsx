'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { PROFILE_INFO } from '@/lib/data';
import {
  MessageSquare,
  Mail,
  Send,
  Copy,
  Check,
  MapPin,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';

export function ContactSection() {
  const { language, t } = useLanguage();
  const isAr = language === 'ar';

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSent, setFormSent] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');

  const whatsappMessage = encodeURIComponent(
    isAr
      ? `السلام عليكم ورحمة الله وبركاته م/ إسراء الشيخ. أود التواصل معك.`
      : `Hello Eng. Esraa Elshiekh, I would like to connect with you.`
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setProjectType('');
      setMessage('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-gradient-to-b from-[#3d534e] via-[#465E59] to-[#364944] text-white border-t border-[#57746e] shadow-md overflow-hidden">
      {/* Ambient decorative glow */}
      <div className="absolute -top-20 -start-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -end-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Header */}
        <div className="max-w-2xl space-y-2 text-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/25 backdrop-blur-xs">
            <Mail className="w-3.5 h-3.5 text-emerald-200" />
            <span>{t.contact.kicker}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-xs">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-emerald-100/85">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Split: Clean Channels & Message Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Channels Cards */}
          <div className="lg:col-span-5 space-y-3.5 text-start">
            {/* WhatsApp Card */}
            <div className="p-5 rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.contact.whatsappBoxTitle}
                  </h3>
                  <p className="text-xs text-emerald-100/80">
                    {t.contact.whatsappBoxDesc}
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${PROFILE_INFO.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-md cursor-pointer hover:scale-101"
              >
                <span>{t.contact.whatsappBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <a
              href={`tel:+${PROFILE_INFO.whatsapp}`}
              className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-between gap-3 text-sm text-white hover:bg-white/20 transition-colors"
            >
              <span>{isAr ? 'اتصال هاتفي' : 'Phone'}</span>
              <span dir="ltr" className="font-mono">{PROFILE_INFO.phone}</span>
            </a>

            {/* Email Direct Card */}
            <div className="p-5 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-md space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">
                    {t.contact.emailBoxTitle}
                  </h3>
                  <p className="text-xs text-emerald-100/80 font-mono">
                    {PROFILE_INFO.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold text-white bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-300" />
                      <span className="text-emerald-200 font-bold">{isAr ? 'تم النسخ!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-200" />
                      <span>{isAr ? 'نسخ الإيميل' : 'Copy Email'}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-102"
                >
                  <span>{isAr ? 'مراسلة' : 'Compose'}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#465E59]" />
                </a>
              </div>
            </div>

            {/* Location Pill */}
            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-center gap-3 text-xs text-emerald-100/90 shadow-sm">
              <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
              <span>{isAr ? PROFILE_INFO.locationAr : PROFILE_INFO.locationEn}</span>
            </div>
          </div>

          {/* Contact Dispatch Form */}
          <div className="lg:col-span-7 bg-white/12 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 text-start shadow-xl">
            {formSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/20 text-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isAr ? 'تم إرسال الرسالة بنجاح' : 'Message Sent Successfully'}
                </h3>
                <p className="text-xs text-emerald-100/80 max-w-sm mx-auto">
                  {t.contact.sentSuccess}
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="px-5 py-2.5 text-xs font-bold text-slate-900 bg-white hover:bg-emerald-50 rounded-xl cursor-pointer shadow-md transition-transform hover:scale-102"
                >
                  {isAr ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-emerald-100 mb-1.5">
                      {t.contact.nameInput} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isAr ? 'اسمك الكريم' : 'Your Name'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-all shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-emerald-100 mb-1.5">
                      {t.contact.emailInput} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-emerald-100 mb-1.5">
                    {t.contact.projectTypeInput}
                  </label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-[#3a4e49] text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all shadow-inner"
                  >
                    <option value="" className="bg-[#3a4e49] text-white">{isAr ? 'اختر نوع الاستفسار أو المشروع' : 'Select topic or project type'}</option>
                    <option value="corporate" className="bg-[#3a4e49] text-white">{isAr ? 'تطوير موقع شركة / منصة أعمال' : 'Corporate / Business Platform'}</option>
                    <option value="ecommerce" className="bg-[#3a4e49] text-white">{isAr ? 'متجر إلكتروني / تجارة رقمية' : 'E-Commerce / Digital Store'}</option>
                    <option value="frontend" className="bg-[#3a4e49] text-white">{isAr ? 'استشارة واجهات أمامية أو UI/UX' : 'Frontend / UI/UX Architecture'}</option>
                    <option value="training" className="bg-[#3a4e49] text-white">{isAr ? 'تدريب أو ورش عمل برمجية' : 'Code Mentorship & Workshops'}</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-emerald-100 mb-1.5">
                    {t.contact.messageInput} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isAr ? 'تفاصيل رسالتك أو استفسارك...' : 'Your inquiry or message details...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-white/20 bg-white/10 text-white placeholder-emerald-100/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:bg-white/15 transition-all shadow-inner resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-7 py-3 font-bold text-slate-900 bg-white hover:bg-emerald-50 rounded-xl inline-flex items-center gap-2 cursor-pointer shadow-lg transition-transform hover:scale-102"
                  >
                    <Send className="w-3.5 h-3.5 text-[#465E59]" />
                    <span>{t.contact.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
