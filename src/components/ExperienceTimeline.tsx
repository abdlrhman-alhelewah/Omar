import React from 'react';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            Career Timeline
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Work Experience
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Chronological employment history documented with official titles, companies, and responsibilities from the CV.
          </p>
        </div>

        <div className="space-y-5 max-w-4xl">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 text-xs font-semibold text-emerald-700 mt-0.5">
                    <span>{exp.company}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-1.5 mb-4">
                {exp.achievements.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tools & Skills */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Competencies:</span>
                {exp.skills.map((s, idx) => (
                  <React.Fragment key={s}>
                    <span className="text-slate-600">{s}</span>
                    {idx < exp.skills.length - 1 && <span aria-hidden="true" className="text-slate-300">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
