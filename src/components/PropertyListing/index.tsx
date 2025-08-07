"use client";
import React, { useState } from "react";
import Image from "next/image";
import { sampleProperties } from "@/src/utils/sampleProperties";
import {
  Container,
  FiltersBar,
  FilterInput,
  FilterSelect,
  SortSelect,
  SortContainer,
  PropertyCard,
  ActionButtons,
  ActionButton,
  PropertiesGrid,
  ViewMoreButton,
  PropertyImageContainer,
  PropertyDetail,
  ImageDots,
  ImageDot,
  PropertyImage,
  PropertyImageSlider,
  PropertyTitle,
  PropertyInfo,
  PropertyPrice,
  PropertyDetails,
  PropertyAddress,
} from "./style";
const PropertyListing = () => {
  const [sortBy, setSortBy] = useState("price-high-low");
  const [filters, setFilters] = useState({
    postCode: "",
    minPrice: "",
    maxPrice: "",
    minBed: "",
    maxBed: "",
  });
  const [currentImageIndex, setCurrentImageIndex] = useState<
    Record<number, number>
  >(
    sampleProperties.reduce(
      (acc, property) => ({ ...acc, [property.id]: 0 }),
      {}
    )
  );

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };
  const goToImage = (propertyId: number, index: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [propertyId]: index,
    }));
  };
  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const nextImage = (propertyId: number) => {
    setCurrentImageIndex((prev) => {
      const property = sampleProperties.find((p) => p.id === propertyId);
      if (!property) return prev;

      const currentIndex = prev[propertyId] || 0;
      const nextIndex = (currentIndex + 1) % property.images.length;
      return { ...prev, [propertyId]: nextIndex };
    });
  };

  const prevImage = (propertyId: number) => {
    setCurrentImageIndex((prev) => {
      const property = sampleProperties.find((p) => p.id === propertyId);
      if (!property) return prev;

      const currentIndex = prev[propertyId] || 0;
      const prevIndex =
        (currentIndex - 1 + property.images.length) % property.images.length;
      return { ...prev, [propertyId]: prevIndex };
    });
  };

  return (
    <Container>
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </FilterSelect>

        <FilterSelect
          value={filters.maxBed}
          onChange={(e) => handleFilterChange("maxBed", e.target.value)}
        >
          <option value="">Max Bed</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4+</option>
        </FilterSelect>
      </FiltersBar>

      <SortContainer>
        <SortSelect value={sortBy} onChange={handleSortChange}>
          <option value="price-high-low">SORT BY: PRICE HIGH-LOW</option>
          <option value="price-low-high">SORT BY: PRICE LOW-HIGH</option>
          <option value="bed-high-low">SORT BY: BEDS HIGH-LOW</option>
          <option value="bed-low-high">SORT BY: BEDS LOW-HIGH</option>
        </SortSelect>
      </SortContainer>

      <PropertiesGrid>
        {sampleProperties.map((property) => (
          <PropertyCard key={property.id}>
            <PropertyImageContainer>
              <PropertyImageSlider
                style={{
                  transform: `translateX(-${
                    (currentImageIndex[property.id] || 0) * 100
                  }%)`,
                }}
              >
                {property.images.map((image, idx) => (
                  <PropertyImage key={idx}>
                    <Image
                      src={image}
                      alt={`Property ${property.id} image ${idx + 1}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </PropertyImage>
                ))}
              </PropertyImageSlider>

              <ImageDots>
                {property.images.map((_, idx) => (
                  <ImageDot
                    key={idx}
                    $active={idx === currentImageIndex[property.id]}
                    onClick={() => goToImage(property.id, idx)}
                  />
                ))}
              </ImageDots>

              <ActionButtons>
                <ActionButton title="Add to favorites">♡</ActionButton>
                <ActionButton title="Share">⚹</ActionButton>
              </ActionButtons>
            </PropertyImageContainer>

            <PropertyInfo>
              <PropertyTitle>{property.name}</PropertyTitle>
              <PropertyAddress>{property.streetName}</PropertyAddress>
              <PropertyDetails>
                <PropertyDetail>{property.bedrooms} Beds</PropertyDetail>
                <PropertyDetail>{property.bathrooms} Baths</PropertyDetail>
                <PropertyDetail>{property.type}</PropertyDetail>
              </PropertyDetails>
              <PropertyPrice>{property.price}</PropertyPrice>
            </PropertyInfo>
          </PropertyCard>
        ))}
      </PropertiesGrid>

      <ViewMoreButton>VIEW MORE</ViewMoreButton>
    </Container>
  );
};

export default PropertyListing;
