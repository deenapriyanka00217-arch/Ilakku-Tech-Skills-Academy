import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Phone, Mail, MessageSquare, Send } from 'lucide-react';
import { COURSES_DATA, ACADEMY_INFO } from '../data/academyData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  defaultCourseId
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: defaultCourseId || COURSES_DATA[0].id,
    mode: 'Offline',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  useEffect(() => {
    if (defaultCourseId) {
      setFormData(prev => ({ ...prev, course: defaultCourseId }));
    }
  }, [defaultCourseId]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ILK-${Math.floor(100000 + Math.random() * 900000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const selectedCourseObj = COURSES_DATA.find(c => c.id === formData.course);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
              Admissions & Enrollment
            </span>
            <h3 className="text-lg font-bold font-display text-white">
              Apply for Skill Training Batch
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-950 font-display">
                Registration Confirmed!
              </h4>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <div className="text-slate-500">Your Provisional Application ID:</div>
                <div className="text-base font-black font-mono text-amber-600">{appId}</div>
                <div className="text-slate-600 pt-1">Course: <strong>{selectedCourseObj?.title}</strong></div>
              </div>
              <p className="text-xs text-slate-600">
                Our counselor will contact you at <strong className="text-slate-900">{formData.phone}</strong> for document verification and batch slot timing.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`https://wa.me/91${ACADEMY_INFO.phoneRaw}?text=Hi%20Ilakku%20Academy,%20my%20application%20ID%20is%20${appId}%20for%20${encodeURIComponent(selectedCourseObj?.title || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Phone (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="10-digit number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Choose Course *
                </label>
                <select
                  value={formData.course}
                  onChange={e => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                >
                  {COURSES_DATA.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Training Mode
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <label className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="Offline"
                      checked={formData.mode === 'Offline'}
                      onChange={() => setFormData({ ...formData, mode: 'Offline' })}
                    />
                    <span>Offline (Aminjikarai Lab)</span>
                  </label>
                  <label className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200 cursor-pointer">
                    <input
                      type="radio"
                      name="mode"
                      value="Online"
                      checked={formData.mode === 'Online'}
                      onChange={() => setFormData({ ...formData, mode: 'Online' })}
                    />
                    <span>Online Live Batch</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Educational Qualification / Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12th Pass / B.Sc / Looking for immediate placement"
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Enrollment Application</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
