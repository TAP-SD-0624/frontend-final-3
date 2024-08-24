import HeroSection from "@components/items/HeroSection";
import ItemsSection from "@components/items/ItemsSection";
import { useLocation } from "react-router-dom";
import useCategory from "./hooks/useCategory";

export default function Items() {
  const location = useLocation();
  const categoryId = location?.state?.categoryId;
  console.log(categoryId);

  const { categoryData } = useCategory("9554252e-27f8-4be0-bde9-b50913443e65");
  console.log(categoryData);

  return (
    <div>
      <HeroSection />
      <ItemsSection />
    </div>
  );
}
