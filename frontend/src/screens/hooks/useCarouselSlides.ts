import { useQuery } from "@tanstack/react-query";
import carousal from "@src/api/carousal";
import React from "react";

const useCarouselSlides = () => {
  const { data: carousalData, isLoading } = useQuery({
    queryKey: ["Carousal"],
    queryFn: carousal,
  });

  return {
    carousalData,
    isLoading,
  };
};

export default useCarouselSlides;
