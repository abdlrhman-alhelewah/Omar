import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';

export const BrandMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Brands & Organizations Scaled Across Egypt, the Gulf & Europe
        </p>

        {/* Clean Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3.5 items-center">
          {CLIENT_LOGOS.map((client) => (
            <div
              key={client.name}
              className="p-3 bg-white border border-slate-200/90 rounded-xl shadow-xs flex flex-col items-center justify-center text-center hover:border-emerald-500 hover:shadow-sm transition-all duration-200 h-24"
            >
              <div className="h-11 w-full flex items-center justify-center mb-1 overflow-hidden">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-[88%] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[11px] font-bold text-slate-800 truncate max-w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
