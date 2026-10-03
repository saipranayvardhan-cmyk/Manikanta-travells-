import React, { useState, useEffect } from 'react';
import { X, Send, Phone, MessageSquare, Car, Calendar, MapPin, Users } from 'lucide-react';
import { FLEET_DATA, BUSINESS_INFO } from '../data/travelData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultVehicle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultVehicle
}) => {
  const [vehicle, setVehicle] = useState(defaultVehicle || 'Toyota Innova (7 Seater)');
  const [pickup, setPickup] = useState('Near Ramalingeshwara Temple, Medchal');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('4');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (defaultVehicle) {
      setVehicle(defaultVehicle);
    }
  }, [defaultVehicle]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      customerName: name,
      customerPhone: phone,
      vehicle,
      pickupLocation: pickup,
      destination: destination || 'To be specified',
      travelDate: date || 'Flexible',
      passengers,
      message: notes || 'Enquiry initiated from quote modal'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            Instant Quote & Booking
          </span>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white mt-0.5">
            Request Trip Quotation
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Manikanta Travels · Near Ramalingeshwara Temple, Medchal
          </p>
        </div>

        {/* Quick Call Strip */}
        <div className="mt-4 p-3 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <span className="text-slate-300">Need instant confirmation?</span>
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <a
              href={BUSINESS_INFO.phone1Href}
              className="hover:text-amber-300 flex items-center gap-1 underline"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>96666 11263</span>
            </a>
            <span className="text-slate-600">/</span>
            <a
              href={BUSINESS_INFO.phone2Href}
              className="hover:text-amber-300 flex items-center gap-1 underline"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>83098 90901</span>
            </a>
          </div>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 text-xs">
          {/* Selected Vehicle */}
          <div>
            <label className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              Selected Vehicle
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
            >
              {FLEET_DATA.map((v) => (
                <option key={v.id} value={`${v.name} (${v.capacity})`}>
                  {v.name} — {v.capacity}
                </option>
              ))}
              <option value="Need Advice on Fleet Sizing">Need Advice on Fleet Sizing</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Pickup */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Pickup Location *
              </label>
              <input
                type="text"
                required
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="e.g. Medchal, Kompally"
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Destination */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                Destination *
              </label>
              <input
                type="text"
                required
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="e.g. Yadadri, RGIA Airport, Goa"
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Travel Date */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Travel Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400 [color-scheme:dark]"
              />
            </div>

            {/* Passengers */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                Passengers
              </label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value="1 to 4">1 - 4 Passengers</option>
                <option value="5 to 7">5 - 7 Passengers</option>
                <option value="8 to 15">8 - 15 Passengers</option>
                <option value="16 to 34">16 - 34 Passengers</option>
                <option value="35 to 50">35 - 50 Passengers</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Name */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 block">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Optional"
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="font-semibold text-slate-300 mb-1 block">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Optional"
                className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-slate-300 mb-1 block">
              Trip Notes / Special Requests
            </label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. 2-day round trip, extra luggage, night pickup"
              className="w-full bg-slate-900 border border-slate-750 rounded-xl px-3.5 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Send WhatsApp Quote Request</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
