"use client";
import React, { useState, useEffect } from "react";
import { propertyData } from "../../utils/propertyData";
import Image from "next/image";
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
const PropertyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const totalSlides = propertyData.length;


  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoRotating) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [totalSlides, isAutoRotating]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 10000);
  };

  
  const prevImageIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  const nextImageIndex = (currentIndex + 1) % totalSlides;

  return (
    <CarouselContainer>
      <Title>Featured Properties</Title>

      <CarouselWrapper>
        <SideImage $isLeft onClick={goToPrevSlide}>
          <Image
            src={propertyData[prevImageIndex].image}
            alt={`Property preview ${prevImageIndex}`}
            layout="fill"
            objectFit="cover"
            priority={prevImageIndex === 0}
          />
        </SideImage>

        <MainCarousel>
          {propertyData.map((property, index) => (
            <CarouselImage key={index} $isActive={index === currentIndex}>
              <Image
                src={property.image}
                alt={`Property image ${index}`}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
              />
              <SlideCounter>
                {index + 1} / {totalSlides}
              </SlideCounter>
            </CarouselImage>
          ))}

          <NavButton onClick={goToPrevSlide} aria-label="Previous slide">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#2c3e50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavButton>

          <NavButton onClick={goToNextSlide} aria-label="Next slide">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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

        <SideImage onClick={goToNextSlide}>
          <Image
            src={propertyData[nextImageIndex].image}
            alt={`Property preview ${nextImageIndex}`}
            layout="fill"
            objectFit="cover"
          />
        </SideImage>
      </CarouselWrapper>

      <ContentSection>
        <PropertyInfo>
          <PropertyName>{propertyData[currentIndex].name}</PropertyName>
          <PropertyDescription>
            {propertyData[currentIndex].description}
          </PropertyDescription>
        </PropertyInfo>
      </ContentSection>

      <DotsContainer>
        {propertyData.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            onClick={() => goToSlide(index)}
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
