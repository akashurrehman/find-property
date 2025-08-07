"use client";

import React, { useCallback } from "react";
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
import { ServiceCardProps } from "@/src/types/ServiceCard";
import { services } from "@/src/utils/serviceData";

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkText,
  href = "#",
}) => {
  return (
    <Card role="group" tabIndex={-1} aria-label={`Service: ${title}`}>
      <ImageContainer aria-hidden="true" />

      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardLink
          href={href}
          aria-label={`${linkText} for ${title}`}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {linkText}
          <ChevronRight aria-hidden="true" focusable="false" />
        </CardLink>
      </CardContent>
    </Card>
  );
};

const RealEstateServices: React.FC = () => {
  return (
    <Container>
      <CardsGrid>
        {services.map(({ title, description, linkText, href }, index) => (
          <ServiceCard
            key={title + index}
            title={title}
            description={description}
            linkText={linkText}
            href={href}
          />
        ))}
      </CardsGrid>
    </Container>
  );
};

export default RealEstateServices;
