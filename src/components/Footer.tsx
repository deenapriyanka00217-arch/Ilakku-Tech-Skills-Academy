import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      
      {/* Upper Footer: Core Institutional Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 flex items-center justify-center text-slate-950 font-black text-lg">
                <svg className="w-5 h-5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3"/>
                  <path d="M12 2a10 10 0 0 1 10 10" />
                  <path d="M18 6l-9 9" />
                  <path d="M18 10V6h-4" />
                </svg>
              </div>
              <div>
                <span className="text-base font-bold text-white font-display block">
                  Ilakku Tech Skills Academy
                </span>
                <span className="text-[11px] text-amber-400 font-semibold tracking-wide uppercase">
                  {ACADEMY_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              A vertical of Ilakku Tech Solutions established in 2018. Empowering youth, women, and professionals across Tamil Nadu with market-ready vocational and technical skills.
            </p>

            <div className="pt-2 p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-200 font-medium text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Govt. MSME Recognized Centre</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                Udyam Reg: {ACADEMY_INFO.udyamRegNumber}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Academy</a></li>
              <li><a href="#programs" className="hover:text-amber-400 transition-colors">Skill Programs</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Govt. & CSR Projects</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Photo Gallery & Labs</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Admissions & Contact</a></li>
            </ul>
          </div>

          {/* Core Tracks */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Popular Training Tracks
            </div>
            <ul className="space-y-2 text-xs">
              <li className="text-slate-400">Junior Software Developer (Full Stack)</li>
              <li className="text-slate-400">Data Science & Analytics / PowerBI</li>
              <li className="text-slate-400">Professional Beautician & Cosmetology</li>
              <li className="text-slate-400">Hand Embroidery & Aari Needlework</li>
              <li className="text-slate-400">Garment Construction & Tailoring</li>
              <li className="text-slate-400">AI, Digital & Financial Literacy</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Campus Location
            </div>
            <address className="not-italic space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {ACADEMY_INFO.address.building},<br />
                  {ACADEMY_INFO.address.street},<br />
                  {ACADEMY_INFO.address.city}, Tamil Nadu - {ACADEMY_INFO.address.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${ACADEMY_INFO.phoneRaw}`} className="hover:text-white font-mono">
                  {ACADEMY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.email}`} className="hover:text-white break-all">
                  {ACADEMY_INFO.email}
                </a>
              </div>
            </address>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Ilakku Tech Skills Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Career Starts Here</span>
            <span>·</span>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
