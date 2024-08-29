import limitedEdition from "@src/api/limitedEdition";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useLimitedEdition = () => {
  const { data: limitedEditionData, isLoading } = useQuery({
    queryKey: ["LimitedEdition"],
    queryFn: limitedEdition,
  });

  return {
    limitedEditionData,
    isLoading,
  };
};

export default useLimitedEdition;
