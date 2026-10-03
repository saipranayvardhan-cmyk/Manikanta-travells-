import React from 'react';
import { Quote, AlertCircle, Star } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Explicit disclaimer badge as strictly required */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/90 border border-slate-700 text-amber-400 text-xs font-medium mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Sample Testimonials (Preview Layout)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            CUSTOMER EXPERIENCES
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Structure for passenger feedback on local Medchal pickups, outstation journeys, and group rentals.
          </p>
          <p className="text-xs text-slate-400 mt-1 italic">
            * Note: These are placeholder reviews for presentation layout. Authentic customer reviews will be displayed upon ongoing season feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-950 border border-slate-850 rounded-2xl p-6 flex flex-col justify-between shadow-md relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-700" />
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-850">
                <h4 className="text-sm font-bold text-white">{t.author}</h4>
                <p className="text-xs text-amber-400/90">{t.role}</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{t.trip}</span>
                  <span className="font-medium text-slate-400">{t.vehicleUsed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
