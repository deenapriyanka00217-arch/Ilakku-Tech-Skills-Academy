import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare, ExternalLink } from 'lucide-react';
import { ACADEMY_INFO, COURSES_DATA } from '../data/academyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: COURSES_DATA[0].id,
    mode: 'in-person',
    inquiryType: 'student',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Get In Touch · PDF Page 21
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
            Contact Ilakku Tech Skills Academy
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Visit our training center in Aminjikarai, call our admissions desk, or send an enquiry for student enrollment or corporate CSR partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Phone / WhatsApp</div>
                <a 
                  href={`tel:${ACADEMY_INFO.phoneRaw}`}
                  className="text-base sm:text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors font-mono block mt-0.5"
                >
                  {ACADEMY_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">Available Mon–Sat from 9:00 AM to 6:30 PM IST</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Official Email</div>
                <a 
                  href={`mailto:${ACADEMY_INFO.email}`}
                  className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-600 transition-colors break-all block mt-0.5"
                >
                  {ACADEMY_INFO.email}
                </a>
                <p className="text-xs text-slate-500 mt-1">Admissions, CSR collaborations & recruiter tie-ups</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Campus Address (Chennai)</div>
                <address className="not-italic text-sm font-semibold text-slate-900 mt-1 leading-snug">
                  {ACADEMY_INFO.address.building},<br />
                  {ACADEMY_INFO.address.street},<br />
                  {ACADEMY_INFO.address.city}, {ACADEMY_INFO.address.state} - {ACADEMY_INFO.address.pincode}
                </address>
                <div className="mt-2 text-xs text-slate-500">
                  Landmark: On Poonamallee High Road near Aminjikarai market & Shenoy Nagar Metro.
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-slate-800 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-slate-950">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Training Batch Timings:</span>
              </div>
              <p className="text-slate-600">
                Morning: 09:30 AM – 01:30 PM · Afternoon: 02:00 PM – 06:00 PM · Weekend batches available for working professionals.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Admission & Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Enquiry Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for contacting Ilakku Tech Skills Academy. Our admissions counselor will call you back at <strong className="text-slate-900">{formData.phone}</strong> shortly.
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        course: COURSES_DATA[0].id,
                        mode: 'in-person',
                        inquiryType: 'student',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
                  >
                    Submit Another Enquiry
                  </button>
                  <a
                    href={`https://wa.me/91${ACADEMY_INFO.phoneRaw}?text=Hello%20Ilakku%20Academy,%20I%20am%20interested%20in%20courses.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    Course Enquiry & Registration Desk
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill in your details for course syllabus, fee subsidies, or CSR mobilization.
                  </p>
                </div>

                {/* Inquiry Type Segmented Control */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: 'student' })}
                    className={`py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                      formData.inquiryType === 'student' ? 'bg-slate-900 text-white' : 'hover:text-slate-900'
                    }`}
                  >
                    Student Admission
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: 'corporate' })}
                    className={`py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                      formData.inquiryType === 'corporate' ? 'bg-slate-900 text-white' : 'hover:text-slate-900'
                    }`}
                  >
                    CSR / Corporate
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: 'recruiter' })}
                    className={`py-1.5 px-2 rounded-lg transition-colors cursor-pointer ${
                      formData.inquiryType === 'recruiter' ? 'bg-slate-900 text-white' : 'hover:text-slate-900'
                    }`}
                  >
                    Hiring / Placement
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sundaram"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Mobile Number (+91) *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="e.g. 9159150364"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Course of Interest *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    >
                      {COURSES_DATA.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Preferred Mode
                    </label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    >
                      <option value="in-person">Offline (Aminjikarai Campus, Chennai)</option>
                      <option value="online">Online Live Classes</option>
                      <option value="hybrid">Hybrid (Weekend Campus + Weekday Online)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Status
                    </label>
                    <select
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    >
                      <option value="student">Student / Fresh Graduate</option>
                      <option value="jobseeker">Job Seeker</option>
                      <option value="homemaker">Homemaker / Aspiring Entrepreneur</option>
                      <option value="working">Working Professional</option>
                      <option value="corporate_rep">Company / CSR Representative</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Message / Specific Query (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your educational background, timing requirements, or CSR skilling scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Application / Enquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
