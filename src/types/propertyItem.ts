export interface PropertyItem {
  id: number;
  name: string;
  streetName: string;
  type: 'Freehold' | 'Leasehold'; // restrict to known values
  price: string;
  images: string[];
  bedrooms: number;
  bathrooms?: number; // Optional because one entry is missing it
}