import { useQuery } from "@tanstack/react-query";
import React from "react";
import discountedProducts from "@src/api/discountedProducts";

const usedDiscountedProducts = () => {
  const { data: discountedProductsData, isLoading } = useQuery({
    queryKey: ["DiscountedProducts"],
    queryFn: discountedProducts,
  });

  return {
    discountedProductsData,
    isLoading,
  };
};

export default usedDiscountedProducts;
