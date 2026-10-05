import React from 'react';
import { Briefcase, Building, CheckCircle2, TrendingUp, Users, Award, ExternalLink } from 'lucide-react';

interface PlacementSectionProps {
  onOpenEnrollModal: () => void;
}

export const PlacementSection: React.FC<PlacementSectionProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Placement Evidence */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img
                src="/src/assets/images/placement_drive_interviews_1791203563079.jpg"
                alt="Corporate campus placement drive at Ilakku Tech Skills Academy"
                referrerPolicy="no-referrer"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Documented on PDF Page 20
                </span>
                <h4 className="text-lg font-bold font-display text-white mt-0.5">
                  On-Campus Corporate Recruitment Drives
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Visiting HR panels conducting technical evaluations and one-on-one hiring rounds at Kamaraj Bhavan campus.
                </p>
              </div>
            </div>

            {/* Recruiter highlights */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-slate-500" />
                <span>Featured Recruiters: <strong>Causeve Sense & Compute, CIEL, Star Skills & BFSI Partners</strong></span>
              </div>
              <span className="font-semibold text-emerald-700">Immediate Offers</span>
            </div>
          </div>

          {/* Right Column: Placement Ecosystem */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                Career Starts Here · 100% Placement Assistance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
                Dedicated Placement Cell & Corporate Connect
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                At Ilakku Tech Skills Academy, training concludes only when the candidate transitions into verified employment, an apprenticeship, or self-sustaining entrepreneurship.
              </p>
            </div>

            {/* 4-Step Pathway */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                  1
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Practical Domain Skilling & Live Capstone</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Hands-on lab training mirroring actual workplace toolsets and standard operating procedures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                  2
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Soft Skills, Resume & Aptitude Drills</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Grooming sessions, interview simulations, communication coaching, and professional portfolio creation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                  3
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Campus Recruitment Drives</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Direct hiring interviews with visiting corporate partners, retail chains, and IT companies in Chennai.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-xs shrink-0 font-mono">
                  4
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Post-Training Mentorship & Support</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Continuous job tracking for 6 months, upskilling modules, and entrepreneurial guidance for artisan trainees.</p>
                </div>
              </div>
            </div>

            {/* Placement CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenEnrollModal}
                className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
              >
                Join Upcoming Placement Batch
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Hire from Ilakku Academy
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
