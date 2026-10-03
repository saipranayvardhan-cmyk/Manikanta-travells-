import React from 'react';
import { COMPARISON_TABLE } from '../data/travelData';
import { ArrowUpRight, Check, Users } from 'lucide-react';

interface ComparisonSectionProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onSelectVehicle }) => {
  return (
    <section className="py-20 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Quick Sizing Guide
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            VEHICLE CAPACITY COMPARISON
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Compare passenger seating, luggage capabilities, and ideal use cases to match your travel plan.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/90 text-xs uppercase font-bold text-amber-400 tracking-wider">
                <th className="py-4 px-6">Vehicle</th>
                <th className="py-4 px-6">Capacity</th>
                <th className="py-4 px-6">Suitable For</th>
                <th className="py-4 px-6">Luggage & Comfort</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 text-sm">
              {COMPARISON_TABLE.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                    {row.vehicle}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className="font-semibold text-amber-400 font-mono">
                      {row.capacity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    {row.suitableFor}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-400">
                    <div>{row.luggage}</div>
                    <div className="text-slate-300 font-medium mt-0.5">{row.comfort}</div>
                  </td>
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <button
                      type="button"
                      onClick={() => onSelectVehicle(`${row.vehicle} (${row.capacity})`)}
                      className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors inline-flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                    >
                      <span>Get Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {COMPARISON_TABLE.map((row, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">{row.vehicle}</h3>
                  <span className="text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {row.capacity}
                  </span>
                </div>

                <div className="space-y-2 text-xs mt-3">
                  <div>
                    <span className="text-slate-400 block font-medium">Suitable For:</span>
                    <span className="text-slate-200 font-semibold">{row.suitableFor}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Luggage Capacity:</span>
                    <span className="text-slate-300">{row.luggage}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Comfort Level:</span>
                    <span className="text-slate-300">{row.comfort}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-850 flex items-center justify-between">
                <span className="text-xs text-slate-400">Available from Medchal</span>
                <button
                  type="button"
                  onClick={() => onSelectVehicle(`${row.vehicle} (${row.capacity})`)}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1"
                >
                  <span>Get Quote</span>
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
