import React from 'react';
import { Award, UserCheck, Laptop, TrendingUp, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            Institutional Excellence · PDF Page 21
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white font-display">
            Why Choose Ilakku Tech Skills Academy?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Our systematic skilling framework bridges the divide between theoretical degree syllabi and actual corporate workplace requirements.
          </p>
        </div>

        {/* 4 Pillars Grid (Page 21) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACADEMY_INFO.whyChooseUs.map((pillar, idx) => {
            const icons = [Award, UserCheck, Laptop, TrendingUp];
            const IconComponent = icons[idx % icons.length];
            return (
              <div 
                key={idx}
                className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-amber-400 font-mono">
                  Benchmark 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chennai Campus Infrastructure Advantages */}
        <div className="bg-slate-800/50 rounded-2xl p-6 sm:p-8 border border-slate-700/60">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Prime Central Location</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                Aminjikarai, Poonamallee High Road
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Easily accessible via Chennai Metro (Shenoy Nagar / Nehru Park), MTC bus routes, and local suburban rail stations.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Govt. Verified Standards</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                MSME Registered Centre
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Udyam Registration Number <span className="font-mono text-slate-200">{ACADEMY_INFO.udyamRegNumber}</span> recognized by the Ministry of MSME, Government of India.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>Alumni Network</span>
              </div>
              <h4 className="text-lg font-bold font-display text-white">
                8,890+ Successful Graduates
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                A thriving community of working software developers, beauticians, tailors, data analysts, and entrepreneurs across South India.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
