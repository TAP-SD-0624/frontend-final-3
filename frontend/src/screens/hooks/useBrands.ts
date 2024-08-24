import brands from "@src/api/brands";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useBrands = () => {

  const { data: brandsData } = useQuery({
    queryKey: ["Brands"],
    queryFn: brands,
  });

  return {
    brandsData,
  };
};

export default useBrands;
