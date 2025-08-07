"use client";
import React from "react";

import {
  ServicesContainer,
  ContentWrapper,
  Title,
  Description,
  FindOutMoreButton,
} from "./style";

const AddedValueServices = () => {
  return (
    <ServicesContainer>
      <ContentWrapper>
        <Title>Added-Value Services</Title>
        <Description>
          We’re always thinking ahead for you. At Druce, our added-value
          services transcend traditional property buying and selling, constantly
          anticipating and providing comprehensive solutions for all of your
          current and future household needs.
        </Description>
        <FindOutMoreButton>FIND OUT MORE</FindOutMoreButton>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default AddedValueServices;
