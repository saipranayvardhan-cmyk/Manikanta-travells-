import React from 'react';
import { MapPin, ArrowUpRight, Compass, Info } from 'lucide-react';
import { DESTINATIONS_DATA } from '../data/travelData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const DestinationsSection: React.FC = () => {
  const handleDestinationQuote = (destName: string) => {
    openWhatsAppEnquiry({
      pickupLocation: 'Medchal, Hyderabad',
      destination: destName,
      tripType: 'Outstation Trip',
      message: `Enquiring for vehicle availability and quote for trip to ${destName}.`
    });
  };

  return (
    <section id="destinations" className="py-24 bg-slate-900/50 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Explore Telangana & Beyond
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            TRAVEL DESTINATIONS
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Popular routes and pilgrimage circuits easily reachable with our comfortable fleet from Medchal.
          </p>
        </div>

        {/* Notice to comply with requirement: "Do not claim fixed routes, availability or prices unless provided by the business." */}
        <div className="mb-10 max-w-2xl mx-auto bg-slate-950/80 border border-slate-800 rounded-xl px-4 py-3 flex items-start gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-slate-200">Note:</strong> Destinations shown are popular traveler routes originating from Medchal & Hyderabad. Exact itinerary, multi-day packages, toll charges, and vehicle availability are customized upon direct enquiry.
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS_DATA.map((dest) => (
            <div
              key={dest.id}
              className="group bg-slate-950 border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1 text-amber-400/90 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {dest.state}
                  </span>
                  <span className="tabular-nums font-mono text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                    {dest.distanceApprox}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs font-medium text-amber-400/80 mt-0.5">
                  {dest.tagline}
                </p>

                <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                  {dest.popularFor}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Outstation / Darshan</span>
                <button
                  type="button"
                  onClick={() => handleDestinationQuote(dest.name)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 focus:outline-none focus-visible:underline"
                >
                  <span>Plan Trip</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
