import HeroSection from "@components/items/HeroSection";
import ItemsSection from "@components/items/ItemsSection";
import { useLocation } from "react-router-dom";
import useCategory from "./hooks/useCategory";

export default function Items() {
  const location = useLocation();
  const categoryId = location?.state?.categoryId;
  console.log(categoryId);

  const { categoryData } = useCategory("5d04caf2-d94e-47de-b9f5-60030fac13e1");
  console.log(categoryData);

  return (
    <div>
      <HeroSection />
      <ItemsSection />
    </div>
  );
}
