import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BrandMarquee } from './components/BrandMarquee';
import { ProjectsSection } from './components/ProjectsSection';
import { CampaignPerformanceSection } from './components/CampaignPerformanceSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSkillsSection } from './components/EducationSkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ImageLightbox } from './components/ImageLightbox';
import { FloatingBackToTop } from './components/FloatingBackToTop';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [highlightedProjectId, setHighlightedProjectId] = useState<string | null>(null);
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    slideUrl: string;
    caption: string;
  }>({
    isOpen: false,
    slideUrl: '',
    caption: ''
  });

  const handleSelectProject = (projectId: string) => {
    setHighlightedProjectId(projectId);
    setTimeout(() => {
      setHighlightedProjectId(null);
    }, 2500);
  };

  const handleOpenProofSlide = (slideUrl: string, caption: string) => {
    setLightboxState({
      isOpen: true,
      slideUrl,
      caption
    });
  };

  const handleCloseLightbox = () => {
    setLightboxState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Fixed Navigation with Real-Time Scroll Progress Indicator */}
      <Navbar onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Main Streamlined Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 2. Brand Logos Showcase (Clickable links to case studies) */}
        <BrandMarquee onSelectProject={handleSelectProject} />

        {/* 3. Featured Client Case Studies with Brand Logos & On-Demand Proof */}
        <ProjectsSection
          onSelectProofSlide={handleOpenProofSlide}
          highlightedProjectId={highlightedProjectId}
        />

        {/* 4. Audited Multi-Platform Performance (Meta, TikTok, Snapchat, LinkedIn) */}
        <CampaignPerformanceSection onSelectProofSlide={handleOpenProofSlide} />

        {/* 5. Professional Work Experience (Exact from CV) */}
        <ExperienceTimeline />

        {/* 6. Education, Diplomas & Core Skills (Thebes Academy A+ Grade, Media Buyer Diploma, CV Skills) */}
        <EducationSkillsSection />

        {/* 7. Direct Contact & Consultation Inquiry Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setCvModalOpen(true)} />

      {/* Interactive CV Modal with Original Download */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* Verified Ad Manager Screenshot Modal */}
      <ImageLightbox
        isOpen={lightboxState.isOpen}
        slideUrl={lightboxState.slideUrl}
        caption={lightboxState.caption}
        onClose={handleCloseLightbox}
      />

      {/* Floating Back to Top Button Fixed with Scroll */}
      <FloatingBackToTop />
    </div>
  );
}
