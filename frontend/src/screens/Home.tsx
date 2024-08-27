import Brands from "@components/home/Brands";
import Handpicked from "@components/home/Handpicked";
import HeroSection from "@components/home/HeroSection";
import Makeup from "@components/home/Makeup";
import NewArrivals from "@components/home/NewArrivals";
import React from "react";
import useCategories from "./hooks/useCategories";
import useBrands from "./hooks/useBrands";
import useProducts from "./hooks/useProducts";
import useOrders from "./hooks/useOrders";

export default function Home() {
  const { categoriesData } = useCategories();
  const { brandsData } = useBrands();
  const { productsData } = useProducts();
  const { } = useOrders();
  
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
