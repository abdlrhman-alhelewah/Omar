import React from 'react';
import { GraduationCap, Award, Languages, CheckCircle2, Cpu } from 'lucide-react';
import { EDUCATION_LIST, CV_SKILLS, CV_RESPONSIBILITIES } from '../data/portfolioData';

export const EducationSkillsSection: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            Qualifications & Core Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic Background, Certificates & Skills
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Formal education, professional media buying certifications, and verified workplace skills documented in the CV.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education & Diplomas (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Education & Certifications
            </h3>

            {EDUCATION_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2">
                    {item.type === 'Degree' ? (
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Award className="w-4 h-4 text-emerald-600" />
                    )}
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs font-semibold text-emerald-800 mb-1">
                  {item.institution}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>
            ))}

            {/* Languages */}
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <Languages className="w-4 h-4 text-emerald-600" />
                <h4 className="text-sm font-bold text-slate-900">Languages</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <p>• <strong>Arabic:</strong> Native language</p>
                <p>• <strong>English:</strong> Good command of written & spoken (B1)</p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Skills from CV (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Skills (Direct from CV)
            </h3>

            <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs space-y-3">
              <ul className="space-y-2.5">
                {CV_SKILLS.map((skill, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Responsibilities summary box */}
            <div className="p-5 bg-emerald-50/70 border border-emerald-200/80 rounded-xl">
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-700" />
                <span>Media & Budget Execution</span>
              </h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Proven track record managing campaign budgets, allocating ad spend across testing and scaling sets, and delivering low CPA for B2B and B2C clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
