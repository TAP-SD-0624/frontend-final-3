import HeroSection from "@components/items/HeroSection";
import ItemsSection from "@components/items/ItemsSection";
import { useLocation } from "react-router-dom";
import useCategory from "./hooks/useCategory";
import useBrand from "./hooks/useBrand";

export default function Items() {
  const location = useLocation();
  const categoryName = location?.state?.categoryName;
  const brandName = location?.state?.brandName;

  if (categoryName) {
    const { categoryData } = useCategory("shirts");
  }

  if (brandName) {
    const { brandData } = useBrand("Zara");
  }

  return (
    <div>
      <HeroSection />
      <ItemsSection />
    </div>
  );
}
