import React, { useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  slideUrl: string;
  caption: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  slideUrl,
  caption,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50 text-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
              Verified Screenshot
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <p className="text-xs font-bold text-slate-900 truncate max-w-lg">
              {caption}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={slideUrl}
              download="ad_manager_proof.png"
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
              title="Download image"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* High-Res Image Container */}
        <div className="relative w-full aspect-[16/9] max-h-[75vh] bg-slate-950 flex items-center justify-center overflow-hidden">
          <img
            src={slideUrl}
            alt={caption}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Caption Bar */}
        <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>Official Campaign Record · Omar Mohamed ElBasstawisy</span>
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
};
