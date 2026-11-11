import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/portfolioData';

interface BrandMarqueeProps {
  onSelectProject?: (projectId: string) => void;
}

export const BrandMarquee: React.FC<BrandMarqueeProps> = ({ onSelectProject }) => {
  const handleClick = (projectId: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      const el = document.getElementById(`project-${projectId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Brands & Organizations Scaled Across Egypt, the Gulf & Europe
          </p>
          <span className="text-[11px] text-emerald-800 font-medium hidden sm:inline-flex items-center gap-1">
            <span>Click any brand to jump to its audited case study</span>
            <span aria-hidden="true">↓</span>
          </span>
        </div>

        {/* Clean Clickable Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3.5 items-center">
          {CLIENT_LOGOS.map((client) => (
            <a
              key={client.name}
              href={`#project-${client.projectId}`}
              onClick={(e) => handleClick(client.projectId, e)}
              className="p-3 bg-white border border-slate-200/90 rounded-xl shadow-xs flex flex-col items-center justify-center text-center hover:border-emerald-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 h-24 cursor-pointer group relative"
              title={`Jump to ${client.name} Case Study`}
            >
              <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div className="h-11 w-full flex items-center justify-center mb-1 overflow-hidden">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-[88%] object-contain group-hover:scale-105 transition-transform duration-200"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-800 group-hover:text-emerald-800 transition-colors truncate max-w-full">
                {client.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
