"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import {
  Card,
  ImageContainer,
  CardTitle,
  CardContent,
  CardLink,
  CardDescription,
  Container,
  CardsGrid,
} from "./style";
interface ServiceCardProps {
  title: string;
  description: string;
  linkText: string;
  href?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkText,
  href = "#",
}) => (
  <Card>
    <ImageContainer />
    <CardContent>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink href={href}>
        {linkText}
        <ChevronRight />
      </CardLink>
    </CardContent>
  </Card>
);

const RealEstateServices: React.FC = () => {
  const services = [
    {
      title: "Selling @Druce",
      description:
        "We understand the challenges of selling a home. We provide a holistic approach thats stress-free and make selling your home a breeze with our end-to-end service.",
      linkText: "Find out more",
    },
    {
      title: "Buying @Druce",
      description:
        "Enjoy a seamless journey with our comprehensive end-to-end buying service, guiding you from your initial search all the way to completion, as well as post-purchase.",
      linkText: "Find out more",
    },
    {
      title: "Renting @Druce",
      description:
        "Finding the right tenant or the ideal property to rent can be complex, time-consuming and frustrating. Our professional lettings experts ensure that t...",
      linkText: "Find out more",
    },
  ];

  return (
    <Container>
      <CardsGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            linkText={service.linkText}
          />
        ))}
      </CardsGrid>
    </Container>
  );
};

export default RealEstateServices;
