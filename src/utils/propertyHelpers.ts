import { PropertyItem } from "../types/propertyItem";

export type SortOption =
  | "price-high-low"
  | "price-low-high"
  | "bed-high-low"
  | "bed-low-high";

export interface FilterValues {
  postCode: string;
  minPrice: string;
  maxPrice: string;
  minBed: string;
  maxBed: string;
}

export const applyFilters = (
  properties: PropertyItem[],
  filters: FilterValues
): PropertyItem[] => {
  return properties.filter((property) => {
    const price = parseInt(property.price.replace(/[£,]/g, ""), 10);
    const minPrice = parseInt(filters.minPrice, 10) || 0;
    const maxPrice = parseInt(filters.maxPrice, 10) || Infinity;
    const minBed = parseInt(filters.minBed, 10) || 0;
    const maxBed = parseInt(filters.maxBed, 10) || Infinity;

    return (
      (!filters.postCode || property.streetName.includes(filters.postCode)) &&
      price >= minPrice &&
      price <= maxPrice &&
      property.bedrooms >= minBed &&
      property.bedrooms <= maxBed
    );
  });
};

export const applySorting = (
  properties: PropertyItem[],
  sortBy: SortOption
): PropertyItem[] => {
  return [...properties].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[£,]/g, ""), 10);
    const priceB = parseInt(b.price.replace(/[£,]/g, ""), 10);

    switch (sortBy) {
      case "price-high-low":
        return priceB - priceA;
      case "price-low-high":
        return priceA - priceB;
      case "bed-high-low":
        return b.bedrooms - a.bedrooms;
      case "bed-low-high":
        return a.bedrooms - b.bedrooms;
      default:
        return 0;
    }
  });
};
