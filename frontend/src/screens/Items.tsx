import HeroSection from "@components/items/HeroSection";
import ItemsSection from "@components/items/ItemsSection";
import { useLocation } from "react-router-dom";
import useCategory from "./hooks/useCategory";
import useBrand from "./hooks/useBrand";

export default function Items() {

  return (
    <div>
      <HeroSection />
      <ItemsSection />
    </div>
  );
}
