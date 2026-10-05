import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Scissors, 
  Wrench, 
  Briefcase, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Search,
  BookOpen
} from 'lucide-react';
import { COURSES_DATA, CourseItem } from '../data/academyData';

interface ProgramsSectionProps {
  onSelectCourse: (course: CourseItem) => void;
  onOpenEnrollModal: (courseId?: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectCourse, onOpenEnrollModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredCourses = COURSES_DATA.filter(course => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.highlights.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              What We Do · Training Programs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
              Industry-Aligned Skill Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              High-impact practical curricula designed for direct employment, freelance mastery, and micro-entrepreneurship.
            </p>
          </div>

          {/* Search bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-900 placeholder-slate-400 shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/80 rounded-xl mb-8 overflow-x-auto shadow-2xs max-w-full">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            All Courses ({COURSES_DATA.length})
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'technical'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Technical & Digital IT
          </button>
          <button
            onClick={() => setActiveCategory('vocational')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'vocational'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Vocational & Women Empowerment
          </button>
          <button
            onClick={() => setActiveCategory('industrial')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'industrial'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Industrial Trades
          </button>
          <button
            onClick={() => setActiveCategory('professional')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'professional'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Professional & Corporate
          </button>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400/90 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between p-6 group"
            >
              <div>
                {/* Meta details header */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span className="text-emerald-700 font-semibold">{course.mode}</span>
                  <span className="text-slate-300">·</span>
                  <span className="capitalize text-slate-500">{course.category}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {course.summary}
                </p>

                {/* Key Syllabus Highlights */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Modules</div>
                  {course.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-1 h-1 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Career Roles */}
                <div className="mt-4 text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Career Paths: </span>
                  <span>{course.careerRoles.slice(0, 2).join(', ')}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectCourse(course)}
                  className="text-xs font-semibold text-slate-800 hover:text-amber-600 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Curriculum Details</span>
                </button>

                <button
                  onClick={() => onOpenEnrollModal(course.id)}
                  className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No courses matching &ldquo;{searchQuery}&rdquo; in this category.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-amber-600 underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Corporate & Bespoke Training Banner (from PDF Page 5) */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Corporate & CSR Skilling Partnerships
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Customized Corporate Training & Mobilization Drives
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design bespoke training programs to align with organizational goals, CSR commitments, and government skilling benchmarks. Fully equipped labs, trainers, and placement tracking.
            </p>
          </div>
          <button
            onClick={() => onOpenEnrollModal()}
            className="px-5 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer shrink-0"
          >
            Request Corporate Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
