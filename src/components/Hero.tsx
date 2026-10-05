import React from 'react';
import { ArrowRight, CheckCircle2, Building, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ACADEMY_INFO, ACADEMY_IMAGES } from '../data/academyData';

interface HeroProps {
  onOpenEnrollModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollModal }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-slate-50/60 pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-200/60">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proposition & Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker - Zero-Pill clean typography */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Govt. Recognized MSME Centre
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600 font-mono">UDYAM-TN-24-0108582</span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-600">Established 2018</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-950 font-display leading-[1.15]" style={{ textWrap: 'balance' }}>
              Empowering Individuals with <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-emerald-700">Industry-Ready Skills</span> for a Brighter Future
            </h1>

            {/* Body Prose */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Ilakku Tech Skills Academy is a vertical of <strong className="text-slate-900 font-semibold">Ilakku Tech Solutions (est. 2018)</strong>. 
              We specialize in delivering high-quality, practical training programs in IT, Data Science, AI, Beautician, Tailoring, and Aari Work that bridge the gap between education and employment.
            </p>

            {/* Micro value proofs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">8,890+ Candidates</strong> trained & mobilized</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">18+ Major Projects</strong> with TNSDC, CIEL & PMKVY</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">100% Practical Labs</strong> & Vocational Workshops</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong className="text-slate-900 font-semibold">Campus Placements</strong> & Post-Training Support</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenEnrollModal}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Enroll in Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#programs"
                className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors flex items-center gap-2"
              >
                <span>View All 12 Courses</span>
              </a>

              <a
                href="#gallery"
                className="px-4 py-3.5 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Classroom & Studio Photos</span>
              </a>
            </div>

            {/* Address kicker */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Kamaraj Bhavan, Poonamallee High Rd, Aminjikarai, Chennai - 600029</span>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/80 group">
              <img
                src={ACADEMY_IMAGES.heroClassroom}
                onError={(e) => { e.currentTarget.src = ACADEMY_IMAGES.heroClassroomStatic; }}
                alt="Ilakku Tech Skills Academy Modern Computer Classroom in Chennai"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              {/* Contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-amber-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    <span>Aminjikarai Campus Lab · Chennai</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Practical Hands-On Computer Training
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    Equipped with high-performance desktop systems, interactive presentation screens, and dedicated industry instructors for software and data skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating proof card below hero image */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-black text-slate-900 font-display tabular-nums">8,890+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Students Trained</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-black text-emerald-700 font-display tabular-nums">18+</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Govt & CSR Projects</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="text-2xl font-black text-amber-600 font-display tabular-nums">2018</div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">Established Year</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
