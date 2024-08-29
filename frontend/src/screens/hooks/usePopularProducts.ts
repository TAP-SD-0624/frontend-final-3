import popularProducts from "@src/api/popularProducts";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const usePopularProducts = () => {
  const { data: popularProductsData, isLoading } = useQuery({
    queryKey: ["PopularProducts"],
    queryFn: popularProducts,
  });

  return {
    popularProductsData,
    isLoading,
  };
};

export default usePopularProducts;
