import React from 'react';
import { MapPin, ExternalLink, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const MapSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Base of Operations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            FIND US IN MEDCHAL-MALKAJGIRI
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri, Telangana · Convenient vehicle dispatch across the region.
          </p>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Map Header Bar */}
          <div className="p-4 sm:px-6 bg-slate-900/90 border-b border-slate-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-bold text-white block">Manikanta Travels Base Hub</span>
                <span className="text-xs text-slate-300">
                  Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri District, Telangana — 501401
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex-1 sm:flex-none text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 px-3.5 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                title="Call 96666 11263"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
                <span>96666 11263</span>
              </a>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="flex-1 sm:flex-none text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 px-3.5 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                title="Call 83098 90901"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
                <span>83098 90901</span>
              </a>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-4 py-2 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Embedded Google Maps */}
          <div className="relative w-full h-[380px] sm:h-[440px] bg-slate-950">
            <iframe
              title="Manikanta Travels Medchal Location Near Ramalingeshwara Temple"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.05) brightness(0.95)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={BUSINESS_INFO.mapsEmbedUrl}
            />
          </div>

          <div className="p-4 bg-slate-900/60 text-xs text-slate-400 text-center border-t border-slate-800">
            Doorstep pickup available across Medchal, Kompally, Secunderabad, Suchitra, and all areas in Hyderabad.
          </div>
        </div>
      </div>
    </section>
  );
};
