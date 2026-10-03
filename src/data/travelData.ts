import swiftDzireImg from '../assets/images/fleet_swift_dzire_1791010775500.jpg';
import innovaCrystaImg from '../assets/images/fleet_innova_crysta_1791010792838.jpg';
import tempoTravellerImg from '../assets/images/fleet_tempo_traveller_1791010809849.jpg';
import luxuryBusImg from '../assets/images/fleet_sml_luxury_bus_1791011589837.jpg';
import heroHighwayImg from '../assets/images/hero_travel_highway_1791010758082.jpg';

import { Vehicle, ServiceItem, DestinationItem, TestimonialItem } from '../types/fleet';

export const BUSINESS_INFO = {
  name: "Manikanta Travels",
  tagline: "Travel Comfortably. Travel With Confidence.",
  subheading: "Reliable travel and vehicle rental services from Medchal for local, outstation, family and group journeys.",
  location: "Medchal, Medchal-Malkajgiri, Hyderabad, Telangana",
  address: "Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri",
  fullAddress: "Near Ramalingeshwara Temple, Medchal, Medchal-Malkajgiri District, Telangana - 501401",
  landmark: "Near Ramalingeshwara Temple",
  phone1: "9666611263",
  phone1Display: "96666 11263",
  phone1Href: "tel:+919666611263",
  phone2: "8309890901",
  phone2Display: "83098 90901",
  phone2Href: "tel:+918309890901",
  phone: "9666611263",
  phoneDisplay: "96666 11263",
  phoneHref: "tel:+919666611263",
  phones: [
    { number: "96666 11263", href: "tel:+919666611263", label: "Primary" },
    { number: "83098 90901", href: "tel:+918309890901", label: "Booking" }
  ],
  whatsappNumber: "919666611263",
  whatsappHref: "https://wa.me/919666611263",
  whatsapp2Href: "https://wa.me/918309890901",
  mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Ramalingeswara+Temple,+Medchal,+Medchal-Malkajgiri,+Telangana",
  mapsEmbedUrl: "https://maps.google.com/maps?q=Ramalingeswara+Temple,+Medchal,+Medchal-Malkajgiri,+Telangana&t=&z=14&ie=UTF8&iwloc=&output=embed",
  heroImage: heroHighwayImg,
};

export const FLEET_DATA: Vehicle[] = [
  {
    id: "swift-dzire",
    name: "Swift Dzire",
    categoryName: "Compact Sedan",
    capacity: "4 Seater",
    seatsCount: "4 + 1 Driver",
    bestFor: "Small families, airport transfers, local/outstation trips",
    description: "Comfortable and economical choice for small groups and city trips.",
    features: [
      "AC Cabin",
      "Comfortable Seating",
      "Ample Boot Space for Luggage",
      "Smooth Highway Cruising"
    ],
    image: swiftDzireImg,
    recommendedTrips: "City commutes, Rajiv Gandhi International Airport transfers, quick weekend trips"
  },
  {
    id: "toyota-innova",
    name: "Toyota Innova",
    categoryName: "Multi-Utility Vehicle (MUV)",
    capacity: "7 Seater",
    seatsCount: "7 + 1 Driver",
    bestFor: "Family trips, comfortable long-distance travel",
    description: "Spacious and reliable for family and outstation journeys across Telangana and beyond.",
    features: [
      "Dual AC Vents",
      "Plush Captain / Bench Seating",
      "Generous Legroom & Luggage Space",
      "Proven Long-Distance Reliability"
    ],
    image: innovaCrystaImg,
    recommendedTrips: "Temple tours, family vacations, long outstation journeys"
  },
  {
    id: "innova-crysta",
    name: "Innova Crysta",
    categoryName: "Executive Luxury MPV",
    capacity: "6 & 7 Seater",
    seatsCount: "6 or 7 + 1 Driver",
    bestFor: "Premium family travel and comfortable long-distance journeys",
    description: "Premium comfort for family and executive travel with superior ride dynamics.",
    features: [
      "Automatic Climate Control",
      "Superior Cushioning & Reclining Seats",
      "Smooth Highway Suspension",
      "Executive Travel Ambiance"
    ],
    image: innovaCrystaImg,
    recommendedTrips: "Executive travel, VIP transfers, premium wedding and family road trips"
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller",
    categoryName: "Luxury Passenger Van",
    capacity: "12 & 15 Seater",
    seatsCount: "12 / 15 + 1 Driver",
    bestFor: "Group tours, family functions, pilgrimages and outstation trips",
    description: "Perfect for group tours, functions and pilgrimages with high-roof comfort and spacious aisle.",
    features: [
      "Pushback Reclining Seats",
      "High Ceiling with Individual AC Vents",
      "Dedicated Luggage Carrier",
      "Wide Panoramic Windows"
    ],
    image: tempoTravellerImg,
    recommendedTrips: "Pilgrimage groups to Yadadri, Srisailam, Tirupati; wedding guests"
  },
  {
    id: "sml-bus",
    name: "SML Bus",
    categoryName: "Deluxe Group Coach",
    capacity: "24, 34, 44 & 50 Seater",
    seatsCount: "24 / 34 / 44 / 50 Passenger Capacity",
    bestFor: "Large groups, school/college trips, corporate events, functions and tours",
    description: "Ideal for large groups, events, tours and functions with maximum passenger comfort.",
    features: [
      "Heavy-Duty Suspension",
      "Spacious Wide Seats & Aisle",
      "Substantial Overhead & Belly Luggage Storage",
      "Built for High-Capacity Group Touring"
    ],
    image: luxuryBusImg,
    recommendedTrips: "Marriage functions, corporate team outings, college industrial tours, large pilgrimages"
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "local-travel",
    title: "Local Travel",
    shortDesc: "Medchal & Twin Cities",
    description: "Convenient transportation around Medchal and Hyderabad for shopping, visits, and city commutes.",
    iconName: "Compass",
    suitableFleet: "Swift Dzire, Innova"
  },
  {
    id: "outstation-trips",
    title: "Outstation Trips",
    shortDesc: "Telangana & Inter-State",
    description: "Comfortable vehicles for long-distance journeys across Telangana, Andhra Pradesh, and neighbouring states.",
    iconName: "MapPin",
    suitableFleet: "All Fleet Options"
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    shortDesc: "Timely RGIA Transit",
    description: "Convenient pickup and drop services between Medchal and Rajiv Gandhi International Airport (RGIA).",
    iconName: "Plane",
    suitableFleet: "Swift Dzire, Innova Crysta"
  },
  {
    id: "family-tours",
    title: "Family Tours",
    shortDesc: "Comfort & Space",
    description: "Spacious vehicles for family vacations where everyone travels together in comfort.",
    iconName: "Users",
    suitableFleet: "Innova, Innova Crysta, Tempo Traveller"
  },
  {
    id: "pilgrimage-trips",
    title: "Pilgrimage Trips",
    shortDesc: "Sacred Darshan Tours",
    description: "Comfortable transportation for temple and pilgrimage tours to Yadadri, Vemulawada, Srisailam, and Tirupati.",
    iconName: "Sun",
    suitableFleet: "Innova, Tempo Traveller, SML Bus"
  },
  {
    id: "group-tours",
    title: "Group Tours",
    shortDesc: "Travel Together",
    description: "Tempo Travellers and deluxe buses suited for reunions, youth tours, and holiday groups.",
    iconName: "Users2",
    suitableFleet: "Tempo Traveller (12/15S), SML Bus"
  },
  {
    id: "functions-events",
    title: "Functions & Events",
    shortDesc: "Weddings & Ceremonies",
    description: "Reliable guest transportation for marriage ceremonies, engagements, and special family gatherings.",
    iconName: "PartyPopper",
    suitableFleet: "Innova Crysta, Tempo Traveller, SML Bus"
  },
  {
    id: "corporate-travel",
    title: "Corporate Travel",
    shortDesc: "Business & Company Outings",
    description: "Professional transportation for company events, offsite meetings, and employee group travel.",
    iconName: "Briefcase",
    suitableFleet: "Innova Crysta, SML Bus"
  }
];

export const DESTINATIONS_DATA: DestinationItem[] = [
  {
    id: "hyderabad",
    name: "Hyderabad Sightseeing",
    tagline: "Historic Monuments & Modern Hubs",
    state: "Telangana",
    distanceApprox: "Local / 25-45 km",
    popularFor: "Charminar, Golconda Fort, Ramoji Film City, Birla Mandir",
    image: heroHighwayImg
  },
  {
    id: "yadadri",
    name: "Yadadri",
    tagline: "Sri Lakshmi Narasimha Swamy Temple",
    state: "Telangana",
    distanceApprox: "~75 km from Medchal",
    popularFor: "Sacred hill shrine pilgrimage, family darshan trips",
    image: heroHighwayImg
  },
  {
    id: "vemulawada",
    name: "Vemulawada",
    tagline: "Sri Raja Rajeshwara Swamy Temple",
    state: "Telangana",
    distanceApprox: "~135 km from Medchal",
    popularFor: "Popular pilgrimage temple dedicated to Lord Shiva",
    image: heroHighwayImg
  },
  {
    id: "warangal",
    name: "Warangal",
    tagline: "Kakatiya Heritage & Architecture",
    state: "Telangana",
    distanceApprox: "~150 km from Medchal",
    popularFor: "Thousand Pillar Temple, Warangal Fort, Ramappa Temple",
    image: heroHighwayImg
  },
  {
    id: "srisailam",
    name: "Srisailam",
    tagline: "Mallikarjuna Jyotirlinga",
    state: "Andhra Pradesh",
    distanceApprox: "~245 km from Medchal",
    popularFor: "Sacred Jyotirlinga darshan, Krishna river ghats, scenic ghat roads",
    image: heroHighwayImg
  },
  {
    id: "vijayawada",
    name: "Vijayawada",
    tagline: "Kanaka Durga Temple & Krishna River",
    state: "Andhra Pradesh",
    distanceApprox: "~285 km from Medchal",
    popularFor: "Goddess Durga temple darshan, business travel, family visits",
    image: heroHighwayImg
  },
  {
    id: "tirupati",
    name: "Tirupati",
    tagline: "Sri Venkateswara Temple, Tirumala",
    state: "Andhra Pradesh",
    distanceApprox: "~575 km from Medchal",
    popularFor: "World-renowned pilgrimage darshan, multi-day family trips",
    image: heroHighwayImg
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Coastal Road Trip & Leisure",
    state: "Goa",
    distanceApprox: "~680 km from Medchal",
    popularFor: "Group vacations, scenic highway road trip, holiday leisure",
    image: heroHighwayImg
  }
];

export const COMPARISON_TABLE = [
  {
    vehicle: "Swift Dzire",
    capacity: "4 Seater",
    suitableFor: "Small families, airport transfers, city commutes",
    luggage: "2 Medium Bags + Hand luggage",
    comfort: "Standard Sedan Comfort, AC"
  },
  {
    vehicle: "Toyota Innova",
    capacity: "7 Seater",
    suitableFor: "Family trips, medium groups, outstation tours",
    luggage: "3-4 Bags + Roof carrier option",
    comfort: "Spacious Cabin, Dual AC"
  },
  {
    vehicle: "Innova Crysta",
    capacity: "6–7 Seater",
    suitableFor: "Premium family travel, executive tours",
    luggage: "3-4 Bags + Rear cargo room",
    comfort: "Superior Plush Reclining, Executive AC"
  },
  {
    vehicle: "Tempo Traveller",
    capacity: "12–15 Seater",
    suitableFor: "Group tours, pilgrimage groups, family functions",
    luggage: "Full Dedicated Luggage Boot/Rack",
    comfort: "High Roof, Pushback Recliner Seats"
  },
  {
    vehicle: "SML Bus",
    capacity: "24–50 Seater",
    suitableFor: "Large groups, marriages, college & corporate events",
    luggage: "Underbelly Coach Storage & Overhead Bins",
    comfort: "Deluxe Coach Seating, Wide Aisle"
  }
];

export const SAMPLE_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "sample-1",
    author: "R. Sharma",
    role: "Medchal Resident",
    trip: "Family Trip to Yadadri",
    vehicleUsed: "Toyota Innova (7 Seater)",
    comment: "Prompt pickup in Medchal early in the morning for our temple darshan. The Innova was neat and the journey was very smooth for our senior parents."
  },
  {
    id: "sample-2",
    author: "K. Venkatesh",
    role: "Family Function Organizer",
    trip: "Wedding Guest Transit in Hyderabad",
    vehicleUsed: "Tempo Traveller (15 Seater)",
    comment: "Arranged a 15-seater Tempo Traveller for our out-of-town wedding guests. Great coordination over WhatsApp and clean vehicle throughout the weekend."
  },
  {
    id: "sample-3",
    author: "M. Rajesh",
    role: "Group Tour Coordinator",
    trip: "Pilgrimage to Srisailam",
    vehicleUsed: "SML Bus (34 Seater)",
    comment: "Hired an SML bus for our colony pilgrimage tour. The driver handled the ghat road comfortably, and booking directly with Manikanta Travels was simple."
  }
];
