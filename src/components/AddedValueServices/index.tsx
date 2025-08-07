"use client";
import React, { useCallback } from "react";

import {
  ServicesContainer,
  ContentWrapper,
  Title,
  Description,
  FindOutMoreButton,
} from "./style";

const AddedValueServices: React.FC = () => {
  // Memoize click handler for potential future logic (analytics, navigation)
  const handleClick = useCallback(() => {
    console.log("Find out more clicked");
  }, []);

  return (
    <ServicesContainer role="region" aria-labelledby="added-value-services-title">
      <ContentWrapper>
        <Title id="added-value-services-title">Added-Value Services</Title>
        <Description>
          We’re always thinking ahead for you. At Druce, our added-value
          services transcend traditional property buying and selling, constantly
          anticipating and providing comprehensive solutions for all of your
          current and future household needs.
        </Description>
        <FindOutMoreButton
          type="button"
          onClick={handleClick}
          aria-label="Find out more about added-value services"
        >
          FIND OUT MORE
        </FindOutMoreButton>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default AddedValueServices;
