import Brands from "@components/home/Brands";
import Handpicked from "@components/home/Handpicked";
import HeroSection from "@components/home/HeroSection";
import Makeup from "@components/home/Makeup";
import NewArrivals from "@components/home/NewArrivals";
import React from "react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <Handpicked />
      <Brands />
      <Makeup />
    </>
  );
}
