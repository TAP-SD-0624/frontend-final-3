import { useQuery } from "@tanstack/react-query";
import brand from "@src/api/brand";
import React from "react";

const useBrand = (name: string) => {
  const { data: brandData } = useQuery({
    queryKey: ["Brand", name],
    queryFn: () => brand(name),
  });

  return {
    brandData,
  };
};

export default useBrand;
