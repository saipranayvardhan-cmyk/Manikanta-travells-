import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickBookingBar } from './components/QuickBookingBar';
import { FleetSection } from './components/FleetSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { AboutSection } from './components/AboutSection';
import { ComparisonSection } from './components/ComparisonSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (vehicleName?: string) => {
    setSelectedVehicle(vehicleName);
    setQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setQuoteModalOpen(false);
  };

  const handleExploreVehicles = () => {
    const el = document.getElementById('vehicles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenQuoteModal(`Enquiry for ${serviceTitle}`);
  };

  const handleOpenBooking = () => {
    handleOpenQuoteModal();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Sticky Navbar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreVehicles={handleExploreVehicles}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* Quick Booking Bar floating directly below hero */}
        <QuickBookingBar />

        {/* Fleet Section (Swift Dzire, Innova, Innova Crysta, Tempo Traveller, SML Bus) */}
        <FleetSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose Manikanta Travels */}
        <WhyChooseUs />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Travel Destinations */}
        <DestinationsSection />

        {/* About Manikanta Travels */}
        <AboutSection />

        {/* Vehicle Capacity Comparison */}
        <ComparisonSection onSelectVehicle={(v) => handleOpenQuoteModal(v)} />

        {/* Gallery */}
        <GallerySection />

        {/* Testimonials (Clearly labeled sample testimonials) */}
        <TestimonialsSection />

        {/* Contact / Booking Section */}
        <ContactSection preselectedVehicle={selectedVehicle} />

        {/* Google Maps Embed for Medchal */}
        <MapSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Bar for 1-tap Call / WhatsApp / Book */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Instant Quote Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultVehicle={selectedVehicle}
      />
    </div>
  );
}
