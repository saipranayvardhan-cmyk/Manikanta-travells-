import React, { useState } from 'react';
import { Camera, ZoomIn } from 'lucide-react';
import swiftDzireImg from '../assets/images/fleet_swift_dzire_1791010775500.jpg';
import innovaCrystaImg from '../assets/images/fleet_innova_crysta_1791010792838.jpg';
import tempoTravellerImg from '../assets/images/fleet_tempo_traveller_1791010809849.jpg';
import luxuryBusImg from '../assets/images/fleet_sml_luxury_bus_1791011589837.jpg';
import heroHighwayImg from '../assets/images/hero_travel_highway_1791010758082.jpg';

export const GallerySection: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<{ src: string; caption: string } | null>(null);

  const galleryItems = [
    {
      src: heroHighwayImg,
      title: "Telangana Highway Scenic Journeys",
      category: "Highway Travel",
      span: "md:col-span-2 md:row-span-2",
      aspect: "aspect-[16/10]"
    },
    {
      src: innovaCrystaImg,
      title: "Innova & Innova Crysta",
      category: "Family & Executive MUV",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]"
    },
    {
      src: swiftDzireImg,
      title: "Swift Dzire Compact Sedan",
      category: "Local & Airport Transit",
      span: "md:col-span-1 md:row-span-1",
      aspect: "aspect-[4/3]"
    },
    {
      src: tempoTravellerImg,
      title: "Tempo Traveller (12 & 15 Seater)",
      category: "Group & Pilgrimage Trips",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9]"
    },
    {
      src: luxuryBusImg,
      title: "SML Deluxe Coach (24-50 Seater)",
      category: "Large Group & Event Transport",
      span: "md:col-span-2 md:row-span-1",
      aspect: "aspect-[16/9]"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-2">
            Visual Fleet Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            FLEET & TRAVEL GALLERY
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400">
            A glimpse of our vehicles and long-distance road trips originating from Medchal.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg({ src: item.src, caption: item.title })}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-amber-500/50 cursor-pointer shadow-lg transition-all duration-300 ${item.span}`}
            >
              <div className={`w-full h-full min-h-[220px] ${item.aspect} overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Windshield / Top Visor Livery Decal on Vehicle */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <div className="flex items-center gap-1.5 bg-slate-950/90 border border-amber-500/40 px-2 py-0.5 rounded text-[9px] font-black tracking-wider text-amber-300 uppercase shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span>MANIKANTA TRAVELS</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400 block mb-0.5">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/80 text-slate-300 group-hover:text-amber-400 transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <div className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-2 relative">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/80 text-white hover:text-amber-400 flex items-center justify-center font-bold"
              aria-label="Close image preview"
            >
              ✕
            </button>
            <img
              src={selectedImg.src}
              alt={selectedImg.caption}
              className="w-full max-h-[75vh] object-contain rounded-xl"
            />
            <div className="p-4 text-center">
              <p className="text-sm font-semibold text-white">{selectedImg.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
