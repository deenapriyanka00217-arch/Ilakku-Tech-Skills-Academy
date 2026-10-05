import React from 'react';
import { Target, Compass, Award, Building2, Users2, Check, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Company Profile & History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
            About Ilakku Tech Skills Academy
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Recognized by the Ministry of Micro, Small and Medium Enterprises, Government of India.
          </p>
        </div>

        {/* Narrative & Institutional Credential Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed">
            <p>
              <strong className="text-slate-900 font-semibold">ILAKKU TECH SKILLS ACADEMY</strong> is a dynamic skills training and development organization committed to empowering individuals and organizations with the tools and knowledge they need to thrive in a competitive world.
            </p>
            <p className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-lg text-slate-900 font-medium">
              &ldquo;Ilakku Tech Skills Academy is a vertical of Ilakku Tech Solutions, which was established in 2018&rdquo;. We specialize in delivering high-quality, practical training programs that bridge the gap between education and employment.
            </p>
            <p>
              Operating from our dedicated training campus at Kamaraj Bhavan on Poonamallee High Road in Aminjikarai, Chennai, the academy has trained over 8,890 students across emerging tech, industrial trades, and women-centric vocational crafts like Aari needlework and professional beauty cosmetology.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Government Affiliation</div>
                <div className="mt-1 text-sm font-bold text-slate-900">Ministry of MSME, Govt. of India</div>
                <div className="text-xs font-mono text-emerald-700 mt-0.5">Udyam: {ACADEMY_INFO.udyamRegNumber}</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Parent Foundation</div>
                <div className="mt-1 text-sm font-bold text-slate-900">{ACADEMY_INFO.parentOrg}</div>
                <div className="text-xs text-slate-600 mt-0.5">Established & Active since 2018</div>
              </div>
            </div>
          </div>

          {/* Right Column: Vision & Focus Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg space-y-6">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Our Vision</span>
              </div>
              <blockquote className="mt-3 text-base sm:text-lg font-medium text-slate-200 leading-snug">
                &ldquo;{ACADEMY_INFO.vision}&rdquo;
              </blockquote>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                Key Academy Focus Areas
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Youth Employability & Job Readiness</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Women Empowerment & Self-Employment Crafts</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Govt. Schemes (PMKVY, TNSDC, DDU-GKY)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>Corporate CSR Skilling Partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Mission Pillars (from PDF Page 4) */}
        <div>
          <div className="max-w-2xl mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
              <Compass className="w-4 h-4 text-amber-600" />
              <span>Mission Statement 2025</span>
            </div>
            <h3 className="mt-1 text-xl sm:text-2xl font-bold text-slate-950 font-display">
              Four Core Commitments to Every Trainee
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACADEMY_INFO.mission.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-xl p-5 border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all group"
              >
                <div className="text-xs font-mono font-bold text-amber-700 mb-2">
                  0{idx + 1}. Pillar
                </div>
                <h4 className="text-base font-bold text-slate-950 font-display group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
