import React from 'react';
import { Phone, MessageSquare, MapPin, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-850 pt-16 pb-24 md:pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Car className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                MANIKANTA TRAVELS
              </span>
            </div>
            <p className="text-sm text-slate-300 font-medium">
              Comfortable travel. Flexible vehicles. Easy booking.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Serving Medchal, Hyderabad, and outstation travelers with Swift Dzire, Innova, Innova Crysta, Tempo Traveller, and SML Bus options.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Available Fleet Summary */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Our Fleet
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Swift Dzire (4 Seater)</li>
              <li>Toyota Innova (7 Seater)</li>
              <li>Innova Crysta (6 & 7 Seater)</li>
              <li>Tempo Traveller (12 & 15 Seater)</li>
              <li>SML Bus (24, 34, 44 & 50 Seater)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs uppercase font-bold text-white tracking-wider mb-4">
              Contact & Booking
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri, Telangana - 501401
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <a href={BUSINESS_INFO.phone1Href} className="text-white hover:text-amber-400 font-bold">
                    +91 96666 11263 (Primary)
                  </a>
                  <a href={BUSINESS_INFO.phone2Href} className="text-white hover:text-amber-400 font-bold">
                    +91 83098 90901 (Booking)
                  </a>
                </div>
              </div>
            </div>

            {/* Call | WhatsApp buttons */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex-1 min-w-[90px] py-2 px-2.5 text-[11px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                title="Call 96666 11263"
              >
                <Phone className="w-3 h-3 fill-current" />
                <span>96666 11263</span>
              </a>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="flex-1 min-w-[90px] py-2 px-2.5 text-[11px] font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                title="Call 83098 90901"
              >
                <Phone className="w-3 h-3 fill-current" />
                <span>83098 90901</span>
              </a>
              <a
                href={BUSINESS_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs font-semibold text-emerald-300 bg-slate-900 border border-emerald-600/40 hover:bg-slate-850 rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Manikanta Travels. All Rights Reserved.</p>
          <p>Local & Outstation Passenger Vehicle Rental · Medchal, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
};
