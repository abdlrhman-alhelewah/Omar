import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const FloatingBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollTop > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  // Circular progress math: radius = 18, circumference ≈ 113.1
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed bottom-6 right-6 z-40 transition-all duration-300 ease-in-out">
      <button
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        title={`Back to top (${Math.round(scrollProgress)}% scrolled)`}
        className="group relative flex items-center justify-center w-12 h-12 bg-white/95 hover:bg-white text-slate-700 hover:text-emerald-700 rounded-full shadow-lg hover:shadow-xl border border-slate-200 hover:border-emerald-300 backdrop-blur-md transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
      >
        {/* Circular Progress Ring */}
        <svg
          className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
        >
          {/* Background circle track */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-slate-200"
            strokeWidth="2.5"
            fill="transparent"
          />
          {/* Active progress stroke */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-emerald-600 transition-all duration-150"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center Icon */}
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-slate-800 group-hover:text-emerald-700 z-10" />

        {/* Mini percentage hover tooltip badge */}
        <span className="absolute -top-8 right-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none bg-slate-900 text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded shadow whitespace-nowrap">
          Top {Math.round(scrollProgress)}%
        </span>
      </button>
    </div>
  );
};
