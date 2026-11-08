import React from 'react';
import { ArrowDown, Download, CheckCircle2, ShieldCheck, ArrowUpRight, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, CORE_METRICS } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenCvModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-36 md:pb-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-3 tracking-wide uppercase">
              <span>Performance Media Buyer</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>B2B & B2C Acquisition</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Data-Driven ROI</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
              {PERSONAL_INFO.name}
            </h1>

            {/* Headline */}
            <p className="text-lg md:text-xl text-slate-700 font-semibold mb-5 leading-snug">
              Scaling Businesses Across Egypt, the Gulf Region & Europe Through Strategic Paid Media
            </p>

            {/* Concise Summary from CV & Portfolio */}
            <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Results-driven Media Buyer with 2 years of hands-on experience in planning, launching, and optimizing performance campaigns across Meta Ads, TikTok Ads, Google Ads, Snapchat, and LinkedIn. Proven track record generating <strong>4,480+ conversions</strong> and engineering cost-effective acquisition funnels for <strong>7+ B2B and B2C brands</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#case-studies"
                className="px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 rounded-lg transition-all duration-200 shadow-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-[#0A66C2] hover:text-white hover:bg-[#0A66C2] bg-blue-50/80 border border-blue-200 rounded-lg transition-colors flex items-center gap-2 group"
                title="Open Omar's LinkedIn profile in new tab"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="px-4 py-3 text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-700" />
                <span>CV (PDF)</span>
              </button>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust and Key Channels */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Meta Ads (Facebook & IG)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>TikTok & Snapchat Ads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Egypt · Saudi Arabia · UAE · Europe</span>
              </div>
            </div>
          </div>

          {/* Right Column: Omar's Real Photo in Clean Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-3 shadow-lg">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-100 group">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt={`${PERSONAL_INFO.name} - Media Buyer`}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="eager"
                  decoding="sync"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-slate-200/90 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Media Buying</span>
                </div>
              </div>

              {/* Verified Snapshot Badge */}
              <div className="p-4 mt-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    Documented Conversion Output
                  </p>
                  <p className="text-base font-bold text-slate-900 font-mono">
                    4,485+ Conversions · 98.2M+ Views
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-md">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Proof Row (Below the Split) */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CORE_METRICS.map((metric, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900 font-mono tabular-nums tracking-tight mb-1">
                {metric.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mb-0.5">
                {metric.label}
              </span>
              <span className="text-xs text-slate-500 leading-snug">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
