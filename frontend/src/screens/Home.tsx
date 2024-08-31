import React from "react";
import Brands from "@components/home/Brands";
import Handpicked from "@components/home/Handpicked";
import HeroSection from "@components/home/HeroSection";
import Makeup from "@components/home/Makeup";
import NewArrivals from "@components/home/NewArrivals";
import useCategories from "./hooks/useCategories";
import useBrands from "./hooks/useBrands";
import useProducts from "./hooks/useProducts";
import useOrders from "./hooks/useOrders";
import handpickedCollections from "@src/api/handpickedCollections";
import useHandpickedCollections from "./hooks/useHandpickedCollections";
import newArrivals from "@src/api/newArrivals";
import useNewArrivals from "./hooks/useNewArrivals";
export default function Home() {
  const { categoriesData } = useCategories();
  const { brandsData } = useBrands();
  const { productsData } = useProducts();
  const { newArrivalsData } = useNewArrivals()
  const {handpickedCollectionsData} = useHandpickedCollections();
  
  return (
    <>
      <HeroSection />
      <NewArrivals />
      <div id="handpicked">
        <Handpicked />
      </div>
      <div id="brands">
        <Brands />
      </div>
      <div id="makeup">
        <Makeup />
      </div>
    </>
  );
}
