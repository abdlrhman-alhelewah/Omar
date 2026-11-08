import React, { useState } from 'react';
import { ExternalLink, Eye, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProofSlide: (slideUrl: string, caption: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProofSlide }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'b2b' | 'b2c'>('all');

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'b2b') return p.type.includes('B2B');
    if (activeFilter === 'b2c') return p.type.includes('B2C');
    return true;
  });

  return (
    <section id="case-studies" className="py-20 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
              Audited Case Studies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Documented Client Campaigns & Performance Output
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Real advertising throughput, targeting strategies, and verified campaign economics extracted directly from audited accounts.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveFilter('b2b')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'b2b'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              B2B Lead Gen
            </button>
            <button
              onClick={() => setActiveFilter('b2c')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeFilter === 'b2c'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              B2C & E-Commerce
            </button>
          </div>
        </div>

        {/* Executive Case Study Grid (Brand Logos, Data, and On-Demand Proof Modal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top: Brand Logo & Segment Badge */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
                  <div className="h-10 w-28 bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.logo}
                      alt={`${project.client} Logo`}
                      className="max-h-full max-w-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {project.type}
                  </span>
                </div>

                {/* Client & Industry */}
                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                  {project.client}
                </h3>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {project.industry}
                </p>

                {/* Highlight Metric Banner */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                  <span className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums block">
                    {project.headlineMetric}
                  </span>
                  <span className="text-xs font-semibold text-emerald-800">
                    {project.headlineMetricLabel}
                  </span>
                </div>

                {/* Objective */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {project.objective}
                </p>

                {/* Verified Key Results */}
                <div className="space-y-2 mb-6">
                  {project.keyResults.map((res, i) => (
                    <div key={i} className="flex items-start justify-between gap-2 text-xs py-1 border-b border-slate-50">
                      <span className="text-slate-500">{res.label}:</span>
                      <span className="font-bold text-slate-900 font-mono text-right">{res.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Platforms */}
                <div className="flex flex-wrap items-center gap-1.5 mb-4">
                  {project.platforms.map((plat) => (
                    <span
                      key={plat}
                      className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                    >
                      {plat}
                    </span>
                  ))}
                </div>

                {/* Inspect Proof Modal Button */}
                <button
                  onClick={() => onSelectProofSlide(project.proofSlide, project.proofTitle)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Inspect Ad Manager Proof</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
