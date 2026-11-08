import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, GraduationCap, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_LIST, CV_RESPONSIBILITIES, CV_SKILLS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const text = `
${PERSONAL_INFO.fullName}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.secondaryEmail} / ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phoneDisplay} (${PERSONAL_INFO.phone})
LinkedIn: ${PERSONAL_INFO.linkedinUrl}
Address: ${PERSONAL_INFO.location}
Date of Birth: ${PERSONAL_INFO.dateOfBirth} | Nationality: Egyptian | Status: Single

SUMMARY:
${PERSONAL_INFO.summary}

EDUCATION:
Bachelor of Science: Faculty of Information system and Management
From 2016 to 2020 Thebes Academy El Maadi
Graduation Project: Hospital Management System (A+ Grade)

CERTIFICATES:
- Diploma Digital Marketing - Media Buyer
- English Course B1

LANGUAGES:
- Arabic: Native language
- English: Good command of both written and spoken English

WORK EXPERIENCE:
${WORK_EXPERIENCE.map(e => `${e.title} at ${e.company} (${e.location}) [${e.period}]\n- ${e.description}\n- ${e.achievements.join('\n- ')}`).join('\n\n')}

JOB RESPONSIBILITIES:
${CV_RESPONSIBILITIES.map(r => `- ${r}`).join('\n')}

SKILLS:
${CV_SKILLS.map(s => `- ${s}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPdfPath;
    link.download = 'CV_Omar_Mohamed_Elsayed_ElBasstawisy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Curriculum Vitae (CV)
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                {PERSONAL_INFO.name} · Media Buyer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left bg-white">
          {/* Header Contact Block */}
          <div className="pb-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {PERSONAL_INFO.fullName}
              </h1>
              <p className="text-sm font-bold text-emerald-800 mt-0.5">
                {PERSONAL_INFO.title}
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
              <p><strong>Email:</strong> {PERSONAL_INFO.secondaryEmail}</p>
              <p><strong>Phone:</strong> {PERSONAL_INFO.phoneDisplay}</p>
              <p><strong>LinkedIn:</strong> <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#0A66C2] hover:underline">omar-basstawisy</a></p>
              <p><strong>Location:</strong> {PERSONAL_INFO.location}</p>
              <p><strong>DOB:</strong> {PERSONAL_INFO.dateOfBirth} · Egyptian · Single</p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education & Certificates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-700" />
                <span>Education</span>
              </h4>
              <p className="text-xs font-bold text-slate-900">Bachelor of Science: Faculty of Information system and Management</p>
              <p className="text-xs text-emerald-800 mt-0.5 font-medium">From 2016 to 2020 Thebes Academy El Maadi</p>
              <p className="text-xs text-slate-600 mt-1">Graduation Project: Hospital Management System (A+ Grade)</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Certificates</span>
              </h4>
              <ul className="text-xs text-slate-700 space-y-1.5">
                <li>• Diploma Digital Marketing - Media Buyer</li>
                <li>• English Course B1</li>
              </ul>
              <div className="mt-2.5 pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <strong>Languages:</strong> Arabic (Native) · English (Good command)
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-emerald-700" />
              <span>Work Experience</span>
            </h4>
            <div className="space-y-3.5">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 mb-1">
                    <div>
                      <span className="text-sm font-bold text-slate-900">{exp.title}</span>
                      <span className="text-emerald-800 ml-2 font-semibold">@ {exp.company} ({exp.location})</span>
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{exp.period}</span>
                  </div>
                  <p className="text-slate-600 mb-2 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1 text-slate-600">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-600 mt-0.5">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Job Responsibilities */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Job Responsibilities (CV)
            </h4>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs text-slate-600">
              {CV_RESPONSIBILITIES.map((r, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">✔</span>
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 font-mono">
            Source: CV_Omar_Mohamed_Elsayed_ElBasstawisy_cee73ba6.pdf
          </span>
          <button
            onClick={handleDownloadPdf}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
