import { useQuery } from "@tanstack/react-query";
import React from "react";
import reviews from "@src/api/reviews";

const useReviews = (id: string) => {
  const { data: reviewsData } = useQuery({
    queryKey: ["Reviews", id],
    queryFn: () => reviews(id),
  });

  return {
    reviewsData,
  };
};

export default useReviews;
