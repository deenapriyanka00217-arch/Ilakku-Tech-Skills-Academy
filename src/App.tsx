import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProgramsSection } from './components/ProgramsSection';
import { ProjectsTableSection } from './components/ProjectsTableSection';
import { GallerySection } from './components/GallerySection';
import { PlacementSection } from './components/PlacementSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { CourseItem } from './data/academyData';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const [enrollCourseId, setEnrollCourseId] = useState<string | undefined>(undefined);

  const handleOpenEnrollModal = (courseId?: string) => {
    setEnrollCourseId(courseId);
    setIsEnrollModalOpen(true);
  };

  const handleApplyFromModal = (courseId: string) => {
    setEnrollCourseId(courseId);
    setIsEnrollModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafc] text-slate-800 antialiased">
      {/* Top Navigation */}
      <Navbar onOpenEnrollModal={handleOpenEnrollModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenEnrollModal={() => handleOpenEnrollModal()} />
        <AboutSection />
        <ProgramsSection 
          onSelectCourse={(c) => setSelectedCourse(c)}
          onOpenEnrollModal={handleOpenEnrollModal}
        />
        <ProjectsTableSection />
        <GallerySection />
        <PlacementSection onOpenEnrollModal={() => handleOpenEnrollModal()} />
        <WhyChooseUsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onApply={handleApplyFromModal}
      />

      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
        defaultCourseId={enrollCourseId}
      />
    </div>
  );
}
