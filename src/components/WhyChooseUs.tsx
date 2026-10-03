import React from 'react';
import { Car, Users, Compass, PhoneCall } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Car,
      title: "Multiple Vehicle Options",
      description: "From 4-seater cars to 50-seater buses, choose the exact seating layout you need for your trip.",
      detail: "Swift Dzire, Innova, Innova Crysta, Tempo Traveller, SML Bus"
    },
    {
      icon: Users,
      title: "Perfect for Groups",
      description: "Dedicated fleet vehicles tailored for family vacations, reunions, weddings, and group excursions.",
      detail: "Comfortable seating, pushback seats, and ample luggage space"
    },
    {
      icon: Compass,
      title: "Local & Outstation",
      description: "Convenient travel originating from Medchal to twin cities Hyderabad-Secunderabad and all across Telangana & interstate.",
      detail: "Airport transfers, temple visits, weekend tours & multi-day trips"
    },
    {
      icon: PhoneCall,
      title: "Easy Booking",
      description: "No tedious registrations or apps. Call or WhatsApp directly to check vehicle availability and obtain transparent pricing.",
      detail: "Instant response on +91 96666 11263"
    }
  ];

  return (
    <section className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Medchal's Preferred Travel Service
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            WHY CHOOSE MANIKANTA TRAVELS
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Focused on passenger comfort, flexible vehicle sizes, and direct personal customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={index}
                className="bg-slate-950/90 border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-800 text-xs text-amber-400/90 font-medium">
                  {feat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
