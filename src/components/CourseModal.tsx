import React from 'react';
import { X, CheckCircle, Clock, Laptop, Award, Briefcase, GraduationCap } from 'lucide-react';
import { CourseItem } from '../data/academyData';

interface CourseModalProps {
  course: CourseItem | null;
  onClose: () => void;
  onApply: (courseId: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose, onApply }) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
              <span>{course.category} Track</span>
              <span>·</span>
              <span>{course.mode}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">{course.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Overview</h4>
            <p className="text-slate-700 leading-relaxed">{course.summary}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 font-medium">Program Duration:</span>
              <div className="font-bold text-slate-900 mt-0.5">{course.duration}</div>
            </div>
            <div>
              <span className="text-slate-500 font-medium">Delivery Mode:</span>
              <div className="font-bold text-emerald-700 mt-0.5">{course.mode} Practical Sessions</div>
            </div>
          </div>

          {/* Detailed Syllabus Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
              Curriculum Core Modules & Hands-On Labs
            </h4>
            <div className="space-y-2">
              {course.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50/70 rounded-lg border border-slate-100">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-slate-800">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Certification */}
          <div className="space-y-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Candidate Eligibility
              </span>
              <p className="text-xs sm:text-sm text-slate-700">{course.eligibility}</p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Career Roles & Employment Opportunities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {course.careerRoles.map((role, i) => (
                  <span key={i} className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-md font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Issued Credential
              </span>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-900">
                <Award className="w-4 h-4 text-amber-600" />
                <span>{course.certifications}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onApply(course.id);
            }}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm"
          >
            Apply for this Course
          </button>
        </div>

      </div>
    </div>
  );
};
