import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Car, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface HeroProps {
  onExploreVehicles: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreVehicles, onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background Image with Cinematic Golden Hour Highway */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'easeOut' }}
          src={BUSINESS_INFO.heroImage}
          alt="Manikanta Travels highway journey from Medchal Hyderabad"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/45" />
        <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating subtle ambient particles */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location Badge (Text & Pin) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-sm"
        >
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.08] text-balance max-w-4xl"
        >
          Travel Comfortably. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
            Travel With Confidence.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed text-balance"
        >
          Reliable travel and vehicle rental services from Medchal for local, outstation, family and group journeys.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <button
            type="button"
            onClick={onExploreVehicles}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          >
            <Car className="w-5 h-5 text-slate-950" />
            <span>🚗 Explore Vehicles</span>
            <ArrowRight className="w-4 h-4 ml-0.5" />
          </button>

          {/* Secondary Dual Call Buttons */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <a
              href={BUSINESS_INFO.phone1Href}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-100 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/50 rounded-xl backdrop-blur-md transition-all duration-200 shadow-sm whitespace-nowrap"
              title="Call Primary Number: 96666 11263"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>📞 96666 11263</span>
            </a>
            <a
              href={BUSINESS_INFO.phone2Href}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-bold text-slate-100 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/50 rounded-xl backdrop-blur-md transition-all duration-200 shadow-sm whitespace-nowrap"
              title="Call Booking Number: 83098 90901"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
              <span>📞 83098 90901</span>
            </a>
          </div>
        </motion.div>

        {/* Trust Badges - zero pill, clean text metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Clean & Maintained Vehicles</span>
          </div>
          <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Transparent Quotations</span>
          </div>
          <span aria-hidden="true" className="text-slate-600 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span>Direct WhatsApp & Call Booking</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
