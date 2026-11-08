import React from 'react';
import { BarChart3, Eye, ShieldCheck } from 'lucide-react';
import { PLATFORM_DASHBOARDS } from '../data/portfolioData';

interface CampaignPerformanceSectionProps {
  onSelectProofSlide: (slideUrl: string, caption: string) => void;
}

export const CampaignPerformanceSection: React.FC<CampaignPerformanceSectionProps> = ({ onSelectProofSlide }) => {
  return (
    <section id="platform-data" className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-700 tracking-wider uppercase mb-2">
            Multi-Platform Analytics
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Audited Ad Manager Performance by Channel
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Aggregated conversion metrics extracted directly from active campaign dashboards across Meta, TikTok, Snapchat, and LinkedIn.
          </p>
        </div>

        {/* 2x2 Clean Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLATFORM_DASHBOARDS.map((dash) => (
            <div
              key={dash.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-base font-bold text-slate-900">
                      {dash.platform}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Audited
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {dash.summary}
                </p>

                {/* Metrics 2x2 */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {dash.stats.map((stat, i) => (
                    <div key={i} className="p-3 bg-slate-50 border border-slate-100 rounded-xl">
                      <p className="text-[11px] text-slate-500 font-medium">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-900 font-mono mt-0.5">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal trigger button */}
              <button
                onClick={() => onSelectProofSlide(dash.proofImage, dash.proofTitle)}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <Eye className="w-3.5 h-3.5 text-emerald-700" />
                <span>View Ad Manager Screenshot</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
