import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface NavbarProps {
  onOpenEnrollModal: (courseId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnrollModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro bar for govt registration and direct phone */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-slate-200">MSME Registered Training Centre</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-400 hidden sm:inline">Udyam: {ACADEMY_INFO.udyamRegNumber}</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${ACADEMY_INFO.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{ACADEMY_INFO.phone}</span>
            </a>
            <span className="text-slate-600 hidden md:inline">·</span>
            <a 
              href={`mailto:${ACADEMY_INFO.email}`} 
              className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{ACADEMY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation - Strict 3-zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Zone 1: Single text wordmark with archer motif */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-400 flex items-center justify-center shadow-sm text-slate-950 font-black text-xl tracking-tighter">
            <svg 
              className="w-6 h-6 text-slate-950" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* Bow and Arrow Archer Motif representing ILAKKU (Target/Goal) */}
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
              <path d="M12 2a10 10 0 0 1 10 10" />
              <path d="M18 6l-9 9" />
              <path d="M18 10V6h-4" />
              <path d="M7 17l2-2" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors font-display">
              Ilakku Tech Skills Academy
            </span>
            <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
              Skill Training & Placement · Chennai
            </span>
          </div>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#about" className="hover:text-slate-950 transition-colors">About Us</a>
          <a href="#programs" className="hover:text-slate-950 transition-colors">Training Programs</a>
          <a href="#projects" className="hover:text-slate-950 transition-colors">Projects & Partners</a>
          <a href="#gallery" className="hover:text-slate-950 transition-colors">Photo Gallery</a>
          <a href="#why-us" className="hover:text-slate-950 transition-colors">Why Choose Us</a>
          <a href="#contact" className="hover:text-slate-950 transition-colors">Contact</a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenEnrollModal()}
            className="px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer active:scale-95"
          >
            <span>Apply for Training</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-slate-300 rounded-lg"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-xl space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
            <a 
              href="#about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              About Us
            </a>
            <a 
              href="#programs" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              Training Programs
            </a>
            <a 
              href="#projects" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              Projects & Govt Schemes
            </a>
            <a 
              href="#gallery" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              Photo Gallery & Labs
            </a>
            <a 
              href="#why-us" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              Why Choose Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-slate-50 hover:text-slate-900"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEnrollModal();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm"
            >
              Apply for Training / CSR Enquiry
            </button>
            <a
              href={`tel:${ACADEMY_INFO.phoneRaw}`}
              className="w-full py-2 px-4 text-center text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-slate-600" />
              Call: {ACADEMY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
