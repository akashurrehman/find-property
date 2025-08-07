import React from "react";
import Image from "next/image";
import { PropertyItem } from "../../types/propertyItem";
import {
  ActionButton,
  ActionButtons,
  ImageDot,
  ImageDots,
  PropertyAddress,
  PropertyCard,
  PropertyDetail,
  PropertyDetails,
  PropertyImage,
  PropertyImageContainer,
  PropertyImageSlider,
  PropertyInfo,
  PropertyPrice,
  PropertyTitle,
} from "./style";

interface Props {
  property: PropertyItem;
  currentImageIndex: number;
  onDotClick: (index: number) => void;
}

const PropertyCardItem: React.FC<Props> = ({
  property,
  currentImageIndex,
  onDotClick,
}) => {
  return (
    <PropertyCard>
      <PropertyImageContainer>
        <PropertyImageSlider
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {property.images.map((img, idx) => (
            <PropertyImage key={idx}>
              <Image
                src={img}
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
              $active={idx === currentImageIndex}
              onClick={() => onDotClick(idx)}
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
          <PropertyDetail>{property.bathrooms ?? "-"} Baths</PropertyDetail>
          <PropertyDetail>{property.type}</PropertyDetail>
        </PropertyDetails>
        <PropertyPrice>{property.price}</PropertyPrice>
      </PropertyInfo>
    </PropertyCard>
  );
};

export default PropertyCardItem;
