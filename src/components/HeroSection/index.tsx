"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { propertyData } from "../../utils/propertyData";
import {
  CarouselContainer,
  Title,
  CarouselWrapper,
  SideImage,
  MainCarousel,
  CarouselImage,
  PropertyInfo,
  ContentSection,
  PropertyName,
  PropertyDescription,
  DotsContainer,
  NavButton,
  BookButton,
  SlideCounter,
  Dot,
} from "./style";


const AUTO_ROTATE_INTERVAL = 5000;
const AUTO_ROTATE_RESUME_DELAY = 10000;

const PropertyCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const totalSlides = propertyData.length;

  const pauseAutoRotate = useCallback(() => {
    setIsAutoRotating(false);
    const timeout = setTimeout(() => {
      setIsAutoRotating(true);
    }, AUTO_ROTATE_RESUME_DELAY);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTO_ROTATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoRotating, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoRotate();
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    pauseAutoRotate();
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    pauseAutoRotate();
  };

  const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextIndex = (currentIndex + 1) % totalSlides;

  const currentProperty = propertyData[currentIndex];

  return (
    <CarouselContainer aria-label="Featured Property Carousel">
      <Title>Featured Properties</Title>

      <CarouselWrapper>
        <SideImage $isLeft onClick={goToPrevSlide} role="button" aria-label="Previous Slide">
          <Image
            src={propertyData[prevIndex].image}
            alt={`Preview of ${propertyData[prevIndex].name}`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </SideImage>

        <MainCarousel>
          {propertyData.map((property, index) => (
            <CarouselImage key={index} $isActive={index === currentIndex} role="group">
              <Image
                src={property.image}
                alt={`Image of ${property.name}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              {index === currentIndex && (
                <SlideCounter aria-live="polite">
                  {index + 1} / {totalSlides}
                </SlideCounter>
              )}
            </CarouselImage>
          ))}

          <NavButton onClick={goToPrevSlide} aria-label="Previous Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="#2c3e50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavButton>

          <NavButton onClick={goToNextSlide} aria-label="Next Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="#2c3e50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavButton>
        </MainCarousel>

        <SideImage onClick={goToNextSlide} role="button" aria-label="Next Slide">
          <Image
            src={propertyData[nextIndex].image}
            alt={`Preview of ${propertyData[nextIndex].name}`}
            layout="fill"
            objectFit="cover"
          />
        </SideImage>
      </CarouselWrapper>

      <ContentSection>
        <PropertyInfo>
          <PropertyName>{currentProperty.name}</PropertyName>
          <PropertyDescription>{currentProperty.description}</PropertyDescription>
        </PropertyInfo>
      </ContentSection>

      <DotsContainer role="tablist" aria-label="Carousel Navigation">
        {propertyData.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </DotsContainer>

      <div style={{ textAlign: "center" }}>
        <BookButton>BOOK A VIEWING</BookButton>
      </div>
    </CarouselContainer>
  );
};

export default PropertyCarousel;
