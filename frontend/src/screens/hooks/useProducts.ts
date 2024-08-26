import { useQuery } from "@tanstack/react-query";
import products from "@src/api/products";
import React from "react";

const useProducts = () => {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ["Products"],
    queryFn: products,
  });

  return {
    productsData,
    isLoading,
  };
};

export default useProducts;
