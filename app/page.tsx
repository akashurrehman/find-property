import AddedValueServices from "@/src/components/AddedValueServices";
import BookAViewingForm from "@/src/components/BookAViewingForm";
import HeroSection from "@/src/components/HeroSection";
import PropertyListing from "@/src/components/PropertyListing";
import RealEstateServices from "@/src/components/RealEstateServices";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PropertyListing />
      <AddedValueServices />
      <RealEstateServices/>
      <BookAViewingForm/>
    </>
  );
}
