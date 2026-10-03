import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, Car } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface NavbarProps {
  onOpenQuoteModal: (vehicleName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Services', href: '#services' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3.5'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single element Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
            <Car className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
            MANIKANTA TRAVELS
          </span>
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-amber-400 transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold tracking-wide text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-750 hover:border-emerald-500/50 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            title="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <div className="flex items-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 p-0.5 shadow-sm">
            <a
              href={BUSINESS_INFO.phone1Href}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-300/60 rounded-md transition-colors whitespace-nowrap"
              title="Call Primary Number: 96666 11263"
            >
              <Phone className="w-3 h-3 fill-current" />
              <span>{BUSINESS_INFO.phone1Display}</span>
            </a>
            <span className="text-slate-950/40 text-xs select-none">|</span>
            <a
              href={BUSINESS_INFO.phone2Href}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-300/60 rounded-md transition-colors whitespace-nowrap"
              title="Call Booking Number: 83098 90901"
            >
              <span>{BUSINESS_INFO.phone2Display}</span>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BUSINESS_INFO.phone1Href}
            className="p-2 text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Call Manikanta Travels"
          >
            <Phone className="w-4 h-4 fill-current" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800/90 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2.5 text-base font-medium text-slate-200 hover:text-amber-400 hover:bg-slate-900/60 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-2">
            <span className="text-xs text-slate-400 font-medium px-1">Direct Call Booking:</span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>96666 11263</span>
              </a>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>83098 90901</span>
              </a>
            </div>
            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-700/50 hover:bg-emerald-900/40 rounded-lg transition-colors mt-1"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat (+91 96666 11263)</span>
            </a>
            <div className="px-1 text-[11px] text-slate-400 text-center mt-1">
              📍 Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri
            </div>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-sm font-medium text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:border-amber-500/40 transition-colors"
            >
              Quick Online Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
