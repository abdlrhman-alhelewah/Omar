import React from 'react';
import { ArrowUp, ArrowUpRight, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2.5">
            <a href="#overview" className="text-base font-bold text-slate-900 tracking-tight hover:text-emerald-700 transition-colors">
              {PERSONAL_INFO.name}
            </a>
            <p className="text-xs text-slate-600 max-w-sm leading-relaxed">
              Results-driven Media Buyer & Digital Marketer. Planning, launching, and optimizing performance campaigns across Meta, TikTok, and Google Ads.
            </p>
            <div className="text-[11px] text-slate-500 font-mono">
              Available for full-time media buying roles & paid acquisition contracts.
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Navigation
            </p>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>
                <a href="#overview" className="hover:text-emerald-700 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-emerald-700 transition-colors">Client Case Studies</a>
              </li>
              <li>
                <a href="#platform-data" className="hover:text-emerald-700 transition-colors">Audited Platform Data</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-700 transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-700 transition-colors">Education & Skills</a>
              </li>
              <li>
                <button
                  onClick={onOpenCvModal}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-left"
                >
                  Curriculum Vitae (PDF)
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-3 space-y-2">
            <p className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Verified Contacts
            </p>
            <div className="space-y-1.5 text-xs text-slate-600">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-800 hover:text-[#0A66C2] font-medium transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn: omar-basstawisy</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 font-medium transition-colors"
              >
                <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 text-slate-800 hover:text-emerald-700 transition-colors break-all"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </a>
              <p className="text-slate-500 text-[11px] pt-1">
                {PERSONAL_INFO.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All portfolio materials and verified campaign figures reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-emerald-600" />
          </button>
        </div>
      </div>
    </footer>
  );
};
