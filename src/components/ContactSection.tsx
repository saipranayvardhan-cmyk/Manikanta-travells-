import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, FLEET_DATA } from '../data/travelData';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface ContactSectionProps {
  preselectedVehicle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedVehicle }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupLocation: 'Near Ramalingeshwara Temple, Medchal',
    destination: '',
    travelDate: '',
    passengers: '4',
    preferredVehicle: preselectedVehicle || 'Toyota Innova (7 Seater)',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preselectedVehicle changes
  React.useEffect(() => {
    if (preselectedVehicle) {
      setFormData((prev) => ({ ...prev, preferredVehicle: preselectedVehicle }));
    }
  }, [preselectedVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    openWhatsAppEnquiry({
      customerName: formData.name,
      customerPhone: formData.phone,
      pickupLocation: formData.pickupLocation,
      destination: formData.destination || 'To be specified',
      travelDate: formData.travelDate || 'Flexible',
      passengers: formData.passengers,
      vehicle: formData.preferredVehicle,
      message: formData.message || 'Direct quote request via contact form'
    });
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Instant Availability & Quotation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            READY FOR YOUR NEXT JOURNEY?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Choose your vehicle and contact Manikanta Travels for availability and pricing.
          </p>

          {/* Direct CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={BUSINESS_INFO.phone1Href}
              className="flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/10 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 CALL 96666 11263</span>
            </a>

            <a
              href={BUSINESS_INFO.phone2Href}
              className="flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/10 transition-colors"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 CALL 83098 90901</span>
            </a>

            <a
              href={BUSINESS_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-600/50 rounded-xl transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>💬 WHATSAPP US</span>
            </a>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri, Telangana</span>
          </div>
        </div>

        {/* Contact / Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Info Card on Left */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Manikanta Travels
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reliable, clean passenger vehicles with professional drivers for local, outstation, pilgrimage and group trips.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-slate-400 font-semibold">Location / Address</span>
                  <span className="text-slate-200">
                    Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri District, Telangana - 501401
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-slate-400 font-semibold">Phone Numbers</span>
                  <div className="flex flex-col gap-1 mt-0.5">
                    <a href={BUSINESS_INFO.phone1Href} className="text-amber-400 font-bold hover:underline">
                      +91 96666 11263 (Primary)
                    </a>
                    <a href={BUSINESS_INFO.phone2Href} className="text-amber-400 font-bold hover:underline">
                      +91 83098 90901 (Booking)
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs uppercase text-slate-400 font-semibold">WhatsApp Chat</span>
                  <a
                    href={BUSINESS_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 font-medium hover:underline block"
                  >
                    +91 96666 11263 (Direct Support)
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 leading-relaxed">
              <span className="font-semibold text-white block mb-1">Simple Booking Steps:</span>
              1. Fill out your journey details below.<br />
              2. Click "SEND ENQUIRY" to launch WhatsApp with your ready-made message.<br />
              3. Receive customized vehicle availability and final quote directly.
            </div>
          </div>

          {/* Form on Right */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-1">
              Send Your Travel Enquiry
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              No account creation required. Submitting opens a direct WhatsApp enquiry to Manikanta Travels.
            </p>

            {isSubmitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/40 text-emerald-200 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your WhatsApp enquiry has been generated! You can also call directly if needed.</span>
                </div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="font-bold text-emerald-400 underline hover:text-emerald-300 ml-2 whitespace-nowrap"
                >
                  Call Now
                </a>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Pickup Location */}
                <div>
                  <label htmlFor="form-pickup" className="block text-xs font-semibold text-slate-300 mb-1">
                    Pickup Location *
                  </label>
                  <input
                    id="form-pickup"
                    type="text"
                    required
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Medchal, Kompally, Secunderabad"
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="form-dest" className="block text-xs font-semibold text-slate-300 mb-1">
                    Destination *
                  </label>
                  <input
                    id="form-dest"
                    type="text"
                    required
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    placeholder="e.g. Yadadri, Srisailam, RGIA Airport, Goa"
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Travel Date */}
                <div>
                  <label htmlFor="form-date" className="block text-xs font-semibold text-slate-300 mb-1">
                    Travel Date
                  </label>
                  <input
                    id="form-date"
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors [color-scheme:dark]"
                  />
                </div>

                {/* Number of Passengers */}
                <div>
                  <label htmlFor="form-passengers" className="block text-xs font-semibold text-slate-300 mb-1">
                    Number of Passengers
                  </label>
                  <select
                    id="form-passengers"
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  >
                    <option value="1 to 4">1 - 4 Passengers</option>
                    <option value="5 to 7">5 - 7 Passengers</option>
                    <option value="8 to 12">8 - 12 Passengers</option>
                    <option value="13 to 15">13 - 15 Passengers</option>
                    <option value="16 to 25">16 - 25 Passengers</option>
                    <option value="26 to 50">26 - 50 Passengers</option>
                  </select>
                </div>

                {/* Preferred Vehicle */}
                <div>
                  <label htmlFor="form-vehicle" className="block text-xs font-semibold text-slate-300 mb-1">
                    Preferred Vehicle
                  </label>
                  <select
                    id="form-vehicle"
                    value={formData.preferredVehicle}
                    onChange={(e) => setFormData({ ...formData, preferredVehicle: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                  >
                    {FLEET_DATA.map((v) => (
                      <option key={v.id} value={`${v.name} (${v.capacity})`}>
                        {v.name} ({v.capacity})
                      </option>
                    ))}
                    <option value="Not sure - Recommend best option">
                      Not sure - Recommend best option
                    </option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="form-message" className="block text-xs font-semibold text-slate-300 mb-1">
                  Trip Details / Message (Optional)
                </label>
                <textarea
                  id="form-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify return trip details, number of days, luggage requirements, or special timing..."
                  className="w-full bg-slate-950 border border-slate-750 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Direct inquiry to Manikanta Travels (+91 96666 11263)
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>SEND ENQUIRY</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
