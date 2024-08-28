import newArrivals from "@src/api/newArrivals";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useNewArrivals = () => {
  const { data: newArrivalsData } = useQuery({
    queryKey: ["NewArrivals"],
    queryFn: newArrivals,
  });

  return {
    newArrivalsData,
  };
};

export default useNewArrivals;
