import React, { useState } from 'react';
import { MapPin, Calendar, Car, Navigation, Send, Phone } from 'lucide-react';
import { openWhatsAppEnquiry } from '../utils/whatsapp';
import { BUSINESS_INFO } from '../data/travelData';

export const QuickBookingBar: React.FC = () => {
  const [pickupLocation, setPickupLocation] = useState('Near Ramalingeshwara Temple, Medchal');
  const [travelDate, setTravelDate] = useState('');
  const [vehicle, setVehicle] = useState('Toyota Innova (7 Seater)');
  const [tripType, setTripType] = useState('Outstation Trip');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppEnquiry({
      pickupLocation,
      travelDate: travelDate || 'Flexible / To be confirmed',
      vehicle,
      tripType,
      message: 'Quick quote request from website booking bar'
    });
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-amber-500/25 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-black/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Quick Trip Enquiry & Rate Card
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Select your trip details to immediately generate your WhatsApp quotation with Manikanta Travels.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span>Direct phone enquiries:</span>
            <div className="flex items-center gap-2 font-bold text-amber-400">
              <a
                href={BUSINESS_INFO.phone1Href}
                className="hover:text-amber-300 flex items-center gap-1 focus:outline-none focus-visible:underline"
                title="Call 96666 11263"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>96666 11263</span>
              </a>
              <span className="text-slate-600">/</span>
              <a
                href={BUSINESS_INFO.phone2Href}
                className="hover:text-amber-300 flex items-center gap-1 focus:outline-none focus-visible:underline"
                title="Call 83098 90901"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>83098 90901</span>
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
          {/* Pickup Location */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="quick-pickup" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Pickup Location
            </label>
            <input
              id="quick-pickup"
              type="text"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              placeholder="e.g. Medchal, Kompally, Hyderabad"
              required
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>

          {/* Travel Date */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="quick-date" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              Travel Date
            </label>
            <input
              id="quick-date"
              type="date"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors [color-scheme:dark]"
            />
          </div>

          {/* Vehicle / Seater */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="quick-vehicle" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              Vehicle / Seater
            </label>
            <select
              id="quick-vehicle"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            >
              <option value="Swift Dzire (4 Seater)">Swift Dzire (4 Seater)</option>
              <option value="Toyota Innova (7 Seater)">Toyota Innova (7 Seater)</option>
              <option value="Innova Crysta (6 & 7 Seater)">Innova Crysta (6 & 7 Seater)</option>
              <option value="Tempo Traveller (12 & 15 Seater)">Tempo Traveller (12 & 15 Seater)</option>
              <option value="SML Bus (24, 34, 44 & 50 Seater)">SML Bus (24-50 Seater)</option>
            </select>
          </div>

          {/* Trip Type */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="quick-triptype" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              Trip Type
            </label>
            <select
              id="quick-triptype"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            >
              <option value="Outstation Trip">Outstation Trip</option>
              <option value="Local Travel / Hyderabad">Local Travel / City Ride</option>
              <option value="Airport Transfer (RGIA)">Airport Transfer (RGIA)</option>
              <option value="Pilgrimage Darshan Tour">Pilgrimage Darshan Tour</option>
              <option value="Marriage / Function Transit">Marriage / Event Transit</option>
              <option value="Corporate / College Outing">Corporate / College Outing</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>GET A QUOTE</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
