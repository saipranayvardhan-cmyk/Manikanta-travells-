import React from 'react';
import { Check, Shield, Clock, HeartHandshake, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, FLEET_DATA } from '../data/travelData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: "Comfort",
      desc: "Clean interiors, dual/individual AC vents, ergonomic seating, and smooth highway ride quality."
    },
    {
      title: "Convenience",
      desc: "Doorstep pickup across Medchal and surrounding Hyderabad areas for hassle-free start of journey."
    },
    {
      title: "Flexible Vehicle Options",
      desc: "Right-sized capacity for every need: 4-seater sedans, 7-seater MPVs, 12-15 seater tempo travellers, and up to 50-seater buses."
    },
    {
      title: "Easy Booking",
      desc: "Direct communication with the owner via Phone or WhatsApp for rapid quote turnaround and trip scheduling."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Highway and Fleet Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src={BUSINESS_INFO.heroImage}
                alt="Manikanta Travels vehicles on Telangana Highway"
                className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

              {/* Floating feature card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-500/30 text-white shadow-xl">
                <p className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                  Location & Operations
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri — serving local twin cities and all outstation routes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: About Prose and Pillars */}
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
              Our Journey & Commitment
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ABOUT MANIKANTA TRAVELS
            </h2>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Manikanta Travels provides convenient passenger transportation solutions from Medchal, Medchal-Malkajgiri, Hyderabad, with a range of vehicles suitable for individuals, families and large groups.
            </p>

            {/* Available Fleet in Prose */}
            <div className="mt-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <h3 className="text-xs uppercase font-bold text-amber-400 tracking-wider mb-2">
                Available Fleet Selection
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need a compact car or a large group coach, our fleet options include{' '}
                <strong className="text-white">Swift Dzire</strong> (4 Seater),{' '}
                <strong className="text-white">Toyota Innova</strong> (7 Seater),{' '}
                <strong className="text-white">Innova Crysta</strong> (6 & 7 Seater),{' '}
                <strong className="text-white">Tempo Traveller</strong> (12 & 15 Seater), and{' '}
                <strong className="text-white">SML Bus</strong> (24, 34, 44 & 50 Seater).
              </p>
            </div>

            {/* 4 Focus Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Contact Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 96666 11263</span>
              </a>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="px-4 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call 83098 90901</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs sm:text-sm font-semibold text-emerald-300 bg-slate-900 hover:bg-slate-800 border border-emerald-600/40 rounded-xl transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
