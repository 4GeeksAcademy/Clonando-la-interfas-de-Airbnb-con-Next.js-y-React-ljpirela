export interface Amenity {
  icon: string;
  label: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  hostName: string;
  hostYears: number;
  hostAvatar: string;
  maxGuests: number;
  description: string;
  amenities: Amenity[];
}