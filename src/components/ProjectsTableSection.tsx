import React, { useState, useMemo } from 'react';
import { Building2, Search, Filter, Users, CheckCircle2, Download, ArrowUpDown } from 'lucide-react';
import { PROJECTS_RECORD, ProjectRecord } from '../data/academyData';

export const ProjectsTableSection: React.FC = () => {
  const [partnerFilter, setPartnerFilter] = useState<string>('all');
  const [programFilter, setProgramFilter] = useState<string>('all');
  const [modeFilter, setModeFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortField, setSortField] = useState<'studentsCount' | 'partner' | 'course'>('studentsCount');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  // Distinct partners for filter
  const partnersList = useMemo(() => {
    const set = new Set<string>();
    PROJECTS_RECORD.forEach(p => set.add(p.partner));
    return Array.from(set);
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS_RECORD.filter(proj => {
      const matchPartner = partnerFilter === 'all' || proj.partner === partnerFilter;
      const matchProgram = programFilter === 'all' || proj.programType.toLowerCase().includes(programFilter.toLowerCase());
      const matchMode = modeFilter === 'all' || proj.mode.toLowerCase().includes(modeFilter.toLowerCase());
      const matchSearch = 
        proj.partner.toLowerCase().includes(searchTerm.toLowerCase()) ||
        proj.course.toLowerCase().includes(searchTerm.toLowerCase());
      return matchPartner && matchProgram && matchMode && matchSearch;
    }).sort((a, b) => {
      let comparison = 0;
      if (sortField === 'studentsCount') {
        comparison = a.studentsCount - b.studentsCount;
      } else if (sortField === 'partner') {
        comparison = a.partner.localeCompare(b.partner);
      } else {
        comparison = a.course.localeCompare(b.course);
      }
      return sortAsc ? comparison : -comparison;
    });
  }, [partnerFilter, programFilter, modeFilter, searchTerm, sortField, sortAsc]);

  const totalFilteredStudents = useMemo(() => {
    return filteredProjects.reduce((sum, item) => sum + item.studentsCount, 0);
  }, [filteredProjects]);

  const handleSort = (field: 'studentsCount' | 'partner' | 'course') => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(false);
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              Verifiable Track Record · Pages 6 & 7
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
              List of Flagship Projects & Engagements
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Government organizations, CSR entities, and skilling bodies that have partnered with Ilakku Tech Skills Academy to mobilize, train, and place thousands of candidates.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-3 rounded-xl shrink-0">
            <div>
              <div className="text-xs text-slate-500 font-medium">Total Documented</div>
              <div className="text-xl sm:text-2xl font-black text-slate-900 font-display tabular-nums">
                8,890 Trainees
              </div>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div>
              <div className="text-xs text-slate-500 font-medium">Projects Recorded</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-700 font-display tabular-nums">
                18 Programs
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 mb-6 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search course or partner..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Partner Dropdown */}
            <div>
              <select
                value={partnerFilter}
                onChange={(e) => setPartnerFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Partners / Clients</option>
                {partnersList.map((p, i) => (
                  <option key={i} value={p}>{p}</option>
                ))}
              </select>
            </div>

            {/* Program Type Filter */}
            <div>
              <select
                value={programFilter}
                onChange={(e) => setProgramFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Program Objectives</option>
                <option value="placement">Training & Placement</option>
                <option value="training">Training Only</option>
                <option value="mobilization">Mobilization</option>
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <select
                value={modeFilter}
                onChange={(e) => setModeFilter(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              >
                <option value="all">All Modes (Offline & Online)</option>
                <option value="offline">Offline Mode (Campus/Center)</option>
                <option value="online">Online Mode (Virtual Live)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>
              Showing <strong className="text-slate-800 font-semibold">{filteredProjects.length}</strong> of 18 records · <strong className="text-slate-800 font-semibold">{totalFilteredStudents.toLocaleString()}</strong> students
            </span>
            {(partnerFilter !== 'all' || programFilter !== 'all' || modeFilter !== 'all' || searchTerm) && (
              <button
                onClick={() => {
                  setPartnerFilter('all');
                  setProgramFilter('all');
                  setModeFilter('all');
                  setSearchTerm('');
                }}
                className="text-amber-700 hover:text-amber-800 font-semibold underline cursor-pointer"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Tabular View (Page 6 & 7 Layout) */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs bg-white">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white font-semibold">
                <th className="py-3.5 px-4 sm:px-6 w-12 text-center text-slate-400 font-mono">#</th>
                <th 
                  onClick={() => handleSort('partner')}
                  className="py-3.5 px-4 sm:px-6 cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Project From / Client</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('course')}
                  className="py-3.5 px-4 sm:px-6 cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-1.5">
                    <span>Course Name</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </th>
                <th 
                  onClick={() => handleSort('studentsCount')}
                  className="py-3.5 px-4 sm:px-6 text-right cursor-pointer hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center justify-end gap-1.5">
                    <span>No. of Students</span>
                    <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 sm:px-6">Program Type</th>
                <th className="py-3.5 px-4 sm:px-6">Delivery Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
              {filteredProjects.map((row, idx) => (
                <tr key={row.id} className="hover:bg-amber-50/40 transition-colors">
                  <td className="py-3.5 px-4 sm:px-6 text-center text-slate-400 font-mono tabular-nums text-xs">
                    {idx + 1}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 font-semibold text-slate-900">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{row.partner}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-slate-800">
                    {row.course}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6 text-right font-mono font-bold text-slate-900 tabular-nums">
                    {row.studentsCount.toLocaleString()}
                  </td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <span className={`inline-block text-xs font-medium ${
                      row.programType.includes('placement') 
                        ? 'text-emerald-700 font-semibold' 
                        : row.programType.includes('Mobilization')
                        ? 'text-amber-700 font-semibold'
                        : 'text-slate-600'
                    }`}>
                      {row.programType}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 sm:px-6">
                    <span className="text-xs text-slate-600">
                      {row.mode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Total Row */}
            <tfoot>
              <tr className="bg-slate-50 font-bold text-slate-900 border-t-2 border-slate-200">
                <td colSpan={3} className="py-4 px-4 sm:px-6 text-right uppercase tracking-wider text-xs text-slate-600">
                  Total Enrolled Candidates (Filtered View)
                </td>
                <td className="py-4 px-4 sm:px-6 text-right font-mono text-base font-black text-slate-950 tabular-nums">
                  {totalFilteredStudents.toLocaleString()}
                </td>
                <td colSpan={2} className="py-4 px-4 sm:px-6 text-xs text-slate-500 font-normal">
                  Reflects verified corporate & government skilling batches
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    </section>
  );
};
