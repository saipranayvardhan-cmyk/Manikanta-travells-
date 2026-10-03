import React, { useState } from 'react';
import { Users, CheckCircle2, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/travelData';
import { Vehicle } from '../types/fleet';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface FleetSectionProps {
  onOpenQuoteModal: (vehicleName?: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sedan' | 'suv' | 'group'>('all');

  const filteredVehicles = FLEET_DATA.filter((v) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'sedan') return v.id === 'swift-dzire';
    if (activeFilter === 'suv') return v.id === 'toyota-innova' || v.id === 'innova-crysta';
    if (activeFilter === 'group') return v.id === 'tempo-traveller' || v.id === 'sml-bus';
    return true;
  });

  const handleGetQuote = (vehicle: Vehicle) => {
    // Open quick modal or direct WhatsApp
    onOpenQuoteModal(`${vehicle.name} (${vehicle.capacity})`);
  };

  const handleDirectWhatsApp = (vehicle: Vehicle) => {
    openWhatsAppEnquiry({
      vehicle: `${vehicle.name} (${vehicle.capacity})`,
      pickupLocation: 'Medchal, Hyderabad',
      message: `Enquiring about rental quote for ${vehicle.name} (${vehicle.capacity}).`
    });
  };

  return (
    <section id="vehicles" className="py-24 bg-slate-950 relative">
      {/* Background ambient decorative glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Medchal Passenger Fleet
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            OUR FLEET
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            Choose the right vehicle for your journey. Clean, well-maintained vehicles with experienced drivers.
          </p>

          {/* Interactive Filter Segmented Control */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Vehicles ({FLEET_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('sedan')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'sedan'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Sedan (4 Seater)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('suv')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'suv'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Innova & Crysta (6-7S)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('group')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeFilter === 'group'
                  ? 'bg-amber-400 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tempo & Buses (12-50S)
            </button>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="group flex flex-col bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Vehicle Image Container with Manikanta Travels Branding */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={`Manikanta Travels ${vehicle.name} passenger rental in Medchal Hyderabad`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Windshield / Top Visor Livery Decal on Vehicle */}
                <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-slate-950/95 via-slate-950/75 to-transparent pt-2.5 pb-4 px-3 flex items-center justify-between z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5 bg-slate-950/90 border border-amber-500/40 px-2 py-0.5 rounded text-[10px] font-black tracking-wider text-amber-300 uppercase shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>MANIKANTA TRAVELS</span>
                  </div>
                  <div className="bg-slate-950/90 border border-slate-700/80 px-2 py-0.5 rounded text-[10px] font-bold text-slate-300">
                    MEDCHAL
                  </div>
                </div>

                {/* Vehicle Front Plate / Bumper Brand Decal */}
                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <div className="px-2.5 py-0.5 rounded bg-black/85 border border-amber-400/50 shadow-md text-[9px] font-extrabold tracking-widest text-amber-300 whitespace-nowrap flex items-center gap-1">
                    <span>MANIKANTA TRAVELS</span>
                    <span className="text-white/40">·</span>
                    <span className="text-slate-300 font-mono">TELANGANA</span>
                  </div>
                </div>

                {/* Capacity badge over image */}
                <div className="absolute top-10 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 px-2.5 py-0.5 rounded-lg text-xs font-bold text-amber-400 flex items-center gap-1.5 shadow">
                  <Users className="w-3.5 h-3.5 text-amber-400" />
                  <span>{vehicle.capacity}</span>
                </div>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-medium text-slate-300">{vehicle.categoryName}</span>
                  <span className="text-amber-400 font-semibold">{vehicle.seatsCount}</span>
                </div>
              </div>

              {/* Vehicle Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase text-amber-400 tracking-wider block">
                        Manikanta Travels Fleet
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {vehicle.name}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full shrink-0">
                      {vehicle.capacity}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Best For block */}
                  <div className="mt-4 p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl">
                    <span className="text-xs uppercase font-bold text-amber-400 block mb-1">
                      Best For:
                    </span>
                    <p className="text-xs text-slate-300 leading-normal">
                      {vehicle.bestFor}
                    </p>
                  </div>

                  {/* Features list */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    {vehicle.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/90 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {/* Primary Get Quote Button */}
                    <button
                      type="button"
                      onClick={() => handleGetQuote(vehicle)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-4 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      <span>Get Quote</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {/* WhatsApp Quick Button */}
                    <button
                      type="button"
                      onClick={() => handleDirectWhatsApp(vehicle)}
                      className="p-2.5 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-800/60 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                      title="Enquire on WhatsApp"
                      aria-label={`Enquire about ${vehicle.name} on WhatsApp`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>

                    {/* Dual Call for Price dropdown / direct links */}
                    <a
                      href={BUSINESS_INFO.phone1Href}
                      className="p-2.5 text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                      title="Call 96666 11263 for Price"
                      aria-label={`Call 96666 11263 for price for ${vehicle.name}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="text-center flex items-center justify-center gap-2 text-[11px] text-slate-400">
                    <span>Call for instant price:</span>
                    <a href={BUSINESS_INFO.phone1Href} className="text-amber-400 hover:underline font-bold">96666 11263</a>
                    <span>/</span>
                    <a href={BUSINESS_INFO.phone2Href} className="text-amber-400 hover:underline font-bold">83098 90901</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Consultation Banner */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/40 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Not sure which vehicle fits your passenger count?
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Tell us your group size and luggage needs. We will suggest the most comfortable and cost-effective option for your itinerary.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={BUSINESS_INFO.phone1Href}
              className="px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 96666 11263</span>
            </a>
            <a
              href={BUSINESS_INFO.phone2Href}
              className="px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 83098 90901</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 text-xs sm:text-sm font-semibold text-emerald-300 bg-slate-950 border border-emerald-600/50 hover:bg-emerald-950/40 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
