import React, { useState } from 'react';
import { Phone, MessageSquare, Car, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/travelData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const [showCallPicker, setShowCallPicker] = useState(false);

  return (
    <>
      {/* Call Picker Sheet on Mobile */}
      {showCallPicker && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-end p-4">
          <div className="w-full max-w-sm mx-auto bg-slate-900 border border-slate-700 rounded-2xl p-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase text-amber-400">
                Call Manikanta Travels
              </span>
              <button
                type="button"
                onClick={() => setShowCallPicker(false)}
                className="p-1 text-slate-400 hover:text-white"
                aria-label="Close call options"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-amber-500/40 text-white font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 fill-current" />
                  <span>96666 11263</span>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold">Primary</span>
              </a>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-amber-500/40 text-white font-bold text-sm"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400 fill-current" />
                  <span>83098 90901</span>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold">Booking</span>
              </a>
            </div>
            <p className="mt-3 text-[11px] text-slate-400 text-center">
              📍 Near Ramalingeshwara Temple, Medchal
            </p>
          </div>
        </div>
      )}

      <aside aria-label="Quick mobile booking actions" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 shadow-2xl px-3 py-2">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call button opens dual dialer */}
          <button
            type="button"
            onClick={() => setShowCallPicker(true)}
            className="flex items-center justify-center gap-1.5 h-11 bg-slate-900 border border-slate-700 hover:border-amber-400 rounded-xl text-slate-100 text-xs font-bold active:bg-slate-800 transition-colors"
            aria-label="Call Manikanta Travels"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>CALL</span>
          </button>

          {/* WhatsApp button */}
          <a
            href={BUSINESS_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 h-11 bg-emerald-950/80 border border-emerald-600/60 rounded-xl text-emerald-300 text-xs font-bold active:bg-emerald-900 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WHATSAPP</span>
          </a>

          {/* Book button */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-1.5 h-11 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl text-slate-950 text-xs font-black active:opacity-90 shadow transition-opacity"
            aria-label="Book or Request Quote"
          >
            <Car className="w-3.5 h-3.5 text-slate-950" />
            <span>BOOK</span>
          </button>
        </div>
      </aside>
    </>
  );
};
