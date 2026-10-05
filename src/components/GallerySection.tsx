import React, { useState } from 'react';
import { 
  Camera, 
  Maximize2, 
  X, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { GALLERY_ITEMS, PDF_PHOTO_SERIES, GalleryPhoto } from '../data/academyData';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'classrooms' | 'beautician' | 'tailoring' | 'embroidery' | 'placement' | 'archive'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<typeof PDF_PHOTO_SERIES[0] | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (activeTab === 'all') return true;
    if (activeTab === 'classrooms') return item.category === 'classroom';
    if (activeTab === 'beautician') return item.category === 'beautician';
    if (activeTab === 'tailoring') return item.category === 'tailoring';
    if (activeTab === 'embroidery') return item.category === 'embroidery';
    if (activeTab === 'placement') return item.category === 'placement';
    return true;
  });

  return (
    <section id="gallery" className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            Campus Tour & Training Labs · Pages 8-20
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-950 font-display">
            Photo Gallery: Infrastructure, Studios & Student Life
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            Real training in action across our air-conditioned computer labs, professional beauty cosmetology studio, industrial tailoring floors, Aari embroidery workshops, and campus placement drives.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/80 rounded-xl mb-10 overflow-x-auto shadow-2xs">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Featured Highlights
          </button>
          <button
            onClick={() => setActiveTab('classrooms')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'classrooms'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Classrooms & IT Labs (pp. 8-10)
          </button>
          <button
            onClick={() => setActiveTab('beautician')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'beautician'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Beautician & Bridal Studio (pp. 11-12)
          </button>
          <button
            onClick={() => setActiveTab('tailoring')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'tailoring'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Tailoring Workshop (p. 13)
          </button>
          <button
            onClick={() => setActiveTab('embroidery')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'embroidery'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Aari & Hand Embroidery (pp. 14-15)
          </button>
          <button
            onClick={() => setActiveTab('placement')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'placement'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Placement Drives (p. 20)
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'archive'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            All 13 PDF Documentation Series
          </button>
        </div>

        {/* Featured High-Res Visual Grid */}
        {activeTab !== 'archive' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-amber-400 shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setSelectedPhoto(item)}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Subtle top metadata */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {item.tag}
                  </div>
                  <div className="absolute top-3 right-3 bg-amber-400/90 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-md">
                    PDF Page {item.pdfPage}
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedPhoto(item); }}
                    className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-900 rounded-lg shadow-sm transition-all"
                    title="Enlarge photograph"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Ilakku Academy Chennai</span>
                    <button
                      onClick={() => setSelectedPhoto(item)}
                      className="font-semibold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Full Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Complete 13 Photo Series from Company Profile PDF (Pages 8-20) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Archival Record
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                Company Profile Complete Visual Documentation (Pages 8 – 20)
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
              13 Documented Training Batches
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PDF_PHOTO_SERIES.map((series, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedSeries(series)}
                className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-mono font-bold text-amber-700">PDF Page {series.page}</span>
                    <span className="text-slate-400">·</span>
                    <span className="text-slate-600 font-medium">{series.category}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-display group-hover:text-amber-700 transition-colors">
                    {series.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {series.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {series.features.map((feat, fidx) => (
                      <span key={fidx} className="text-[11px] bg-slate-50 text-slate-700 px-2 py-0.5 rounded border border-slate-100">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                  <span className="text-emerald-700 font-semibold">{series.count}</span>
                  <span className="text-slate-400 group-hover:text-slate-900 transition-colors flex items-center gap-0.5">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Photo Inspection */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[90vh]">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  PDF Page {selectedPhoto.pdfPage} Documentation
                </span>
                <h3 className="text-base sm:text-lg font-bold font-display">{selectedPhoto.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto">
              <div className="aspect-16/10 bg-slate-950 overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Activity Context & Equipment Details
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {selectedPhoto.details}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                  <span>Location: <strong>Kamaraj Bhavan, Aminjikarai, Chennai</strong></span>
                  <span className="font-semibold text-emerald-700">{selectedPhoto.tag}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal for PDF Series inspection */}
      {selectedSeries && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  PDF Page {selectedSeries.page} · {selectedSeries.category}
                </span>
                <h3 className="text-xl font-bold text-slate-950 font-display mt-1">
                  {selectedSeries.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSeries(null)}
                className="p-1 text-slate-400 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedSeries.description}
            </p>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Batch Highlights & Facilities
              </div>
              <div className="grid grid-cols-2 gap-2">
                {selectedSeries.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Batch Scale: <strong className="text-slate-800">{selectedSeries.count}</strong></span>
              <button
                onClick={() => setSelectedSeries(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-semibold"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
