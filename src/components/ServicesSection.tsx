import React from 'react';
import {
  Compass,
  MapPin,
  Plane,
  Users,
  Sun,
  Users2,
  PartyPopper,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import { SERVICES_DATA } from '../data/travelData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-amber-400" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-amber-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-amber-400" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-400" />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-amber-400" />;
      case 'PartyPopper':
        return <PartyPopper className="w-6 h-6 text-amber-400" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-amber-400" />;
      default:
        return <Compass className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Tailored Passenger Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            OUR SERVICES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            From quick airport rides to multi-day group tours and wedding transit across Telangana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="group bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-amber-500/40 transition-colors">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-400/80">
                    {srv.shortDesc}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Fleet: <span className="text-slate-200 font-medium">{srv.suitableFleet}</span>
                </span>
                <button
                  type="button"
                  onClick={() => onSelectService(srv.title)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform focus:outline-none focus-visible:underline"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
