"use client";

import React, { useState, useEffect, useMemo } from "react";
import useSWR from "swr";
import { motion, AnimatePresence } from "framer-motion";
import {
  Container,
  FiltersBar,
  FilterInput,
  FilterSelect,
  SortContainer,
  SortSelect,
  PropertiesGrid,
  ViewMoreButton,
} from "./style";

import {
  applyFilters,
  applySorting,
  FilterValues,
  SortOption,
} from "../../utils/propertyHelpers";

import PropertyCardItem from "../PropertyCard";
import SkeletonCard from "../PropertySkeleton";
import { PropertyItem } from "@/src/types/propertyItem";


const fetcher = () =>
  new Promise<PropertyItem[]>((resolve) => {
    setTimeout(() => {
      import("@/src/utils/sampleProperties").then((mod) =>
        resolve(mod.sampleProperties)
      );
    }, 1200); 
  });

const PropertyListing: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>("price-high-low");
  const [filters, setFilters] = useState<FilterValues>({
    postCode: "",
    minPrice: "",
    maxPrice: "",
    minBed: "",
    maxBed: "",
  });

  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const { data: properties, error, isLoading } = useSWR("/api/properties", fetcher);

  useEffect(() => {
    if (properties && properties.length > 0) {
      const initialIndex = properties.reduce((acc, property) => {
        acc[property.id] = 0;
        return acc;
      }, {} as Record<number, number>);
      setCurrentImageIndex(initialIndex);
    }
  }, [properties]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const goToImage = (propertyId: number, index: number) => {
    setCurrentImageIndex((prev) => ({ ...prev, [propertyId]: index }));
  };

  const filteredAndSorted = useMemo(() => {
    if (!properties) return [];
    const filtered = applyFilters(properties, filters);
    return applySorting(filtered, sortBy);
  }, [properties, filters, sortBy]);

  if (error) return <div>Failed to load properties. Please try again later.</div>;

  return (
    <div>
    <Container
      as={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <FiltersBar>
        <FilterInput
          type="text"
          placeholder="Post Code"
          value={filters.postCode}
          onChange={(e) => handleFilterChange("postCode", e.target.value)}
        />
        <FilterInput
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange("minPrice", e.target.value)}
        />
        <FilterInput
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
        />
        <FilterSelect
          value={filters.minBed}
          onChange={(e) => handleFilterChange("minBed", e.target.value)}
        >
          <option value="">Min Bed</option>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n.toString()}>
              {n}+
            </option>
          ))}
        </FilterSelect>
        <FilterSelect
          value={filters.maxBed}
          onChange={(e) => handleFilterChange("maxBed", e.target.value)}
        >
          <option value="">Max Bed</option>
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n.toString()}>
              {n}+
            </option>
          ))}
        </FilterSelect>
      </FiltersBar>

    </Container>
      {/* Sorting */}
      <SortContainer>
        <SortSelect value={sortBy} onChange={handleSortChange}>
          <option value="price-high-low">SORT BY: PRICE HIGH-LOW</option>
          <option value="price-low-high">SORT BY: PRICE LOW-HIGH</option>
          <option value="bed-high-low">SORT BY: BEDS HIGH-LOW</option>
          <option value="bed-low-high">SORT BY: BEDS LOW-HIGH</option>
        </SortSelect>
      </SortContainer>

    
      {/* Properties */}
      <PropertiesGrid>
        <AnimatePresence>
          {isLoading &&
            Array.from({ length: 6 }).map((_, idx) => (
              <motion.div key={idx} exit={{ opacity: 0 }}>
                <SkeletonCard />
              </motion.div>
            ))}

          {!isLoading &&
            filteredAndSorted.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <PropertyCardItem
                  property={property}
                  currentImageIndex={currentImageIndex[property.id] || 0}
                  onDotClick={(idx) => goToImage(property.id, idx)}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </PropertiesGrid>

      {!isLoading && filteredAndSorted.length > 0 && (
        <ViewMoreButton>VIEW MORE</ViewMoreButton>
      )}
    </div>
  );
};

export default PropertyListing;
