export interface Vehicle {
  id: string;
  name: string;
  categoryName: string;
  capacity: string;
  seatsCount: string;
  bestFor: string;
  description: string;
  features: string[];
  image: string;
  recommendedTrips: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  suitableFleet: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  tagline: string;
  state: string;
  distanceApprox: string;
  popularFor: string;
  image: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  trip: string;
  comment: string;
  vehicleUsed: string;
}
