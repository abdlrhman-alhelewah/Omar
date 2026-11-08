import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight, Copy, Check, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$1,000 – $3,000 / mo',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            Direct Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with Omar Mohamed ElBasstawisy
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Available for full-time media buying roles, high-yield ad campaigns, and commercial B2B/B2C marketing contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Verified Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp / Call */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all duration-200 block group shadow-xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <Phone className="w-4 h-4" />
                  <span>Call / WhatsApp (Direct)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 transition-colors" />
              </div>
              <p className="text-xl font-extrabold text-slate-900 font-mono tracking-tight">
                {PERSONAL_INFO.phone}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Direct phone & WhatsApp as listed on the CV (0111 817 3848).
              </p>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/90 hover:border-[#0A66C2] hover:bg-blue-50 transition-all duration-200 block group shadow-xs"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A66C2]">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn Professional Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-blue-400 group-hover:text-[#0A66C2] transition-colors" />
              </div>
              <p className="text-base font-extrabold text-slate-900 tracking-tight">
                omar-basstawisy
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Connect for full-time media buying roles, client recommendations & endorsements.
              </p>
            </a>

            {/* Email 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                  <Mail className="w-4 h-4" />
                  <span>Primary Email</span>
                </div>
                <button
                  onClick={() => handleCopyEmail(PERSONAL_INFO.email)}
                  className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-slate-900 font-mono tracking-tight hover:text-emerald-700 transition-colors block break-all"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Official portfolio inquiry email.
              </p>
            </div>

            {/* Address */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 mb-1.5">
                <MapPin className="w-4 h-4" />
                <span>Location (from CV)</span>
              </div>
              <p className="text-sm font-bold text-slate-900">
                {PERSONAL_INFO.location}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Available for remote and on-site media buying across Egypt, Saudi Arabia, UAE & Europe.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-700">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.name}</span>. 
                  Omar will review your brief and follow up via <span className="font-mono text-emerald-800 font-semibold">{formData.email}</span> promptly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Michael Smith"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="michael@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Global Trade Corp"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Estimated Monthly Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
                    >
                      <option value="Under $1,000 / mo">&lt; $1,000 / mo (&lt; 50,000 EGP)</option>
                      <option value="$1,000 – $3,000 / mo">$1,000 – $3,000 / mo (50k - 150k EGP)</option>
                      <option value="$3,000 – $10,000 / mo">$3,000 – $10,000 / mo (150k - 500k EGP)</option>
                      <option value="$10,000+ / mo">$10,000+ / mo (Enterprise / Regional)</option>
                      <option value="Full-Time Hiring Role">Full-Time Employer Role / Recruiter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Scope & Objectives *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your target markets, advertising channels, and primary goals (e.g. B2B lead generation on Meta, lowering CPA on TikTok, etc.)..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-xs cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to Omar</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
