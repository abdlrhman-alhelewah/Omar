import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Platform Data', href: '#platform-data' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top scroll progress indicator bar fixed at the very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-100 z-50">
        <div
          className="h-full bg-emerald-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs py-3.5 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Wordmark */}
          <a
            href="#overview"
            className="text-slate-900 hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
          >
            <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
              Media Buyer
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-emerald-600 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#0A66C2] bg-blue-50/70 border border-blue-200 rounded-lg hover:bg-[#0A66C2] hover:text-white transition-colors whitespace-nowrap shrink-0"
              title="View LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-300 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Review CV</span>
            </button>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-emerald-700 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            >
              <span>Direct WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-[#0A66C2] hover:text-blue-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenCvModal}
              className="p-1.5 text-slate-700 hover:text-slate-900"
              aria-label="View CV"
            >
              <FileText className="w-5 h-5 text-emerald-600" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-700 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-700 hover:text-emerald-700 text-sm font-medium py-2 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#0A66C2] bg-blue-50 border border-blue-200 rounded-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCvModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-300 rounded-lg"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>Curriculum Vitae</span>
                </button>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-lg"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
