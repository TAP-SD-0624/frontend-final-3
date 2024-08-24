import categories from "@src/api/categories";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useCategories = () => {
  const { data: categoriesData, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: categories,
  });

  return {
    categoriesData,
    isLoading,
  };
};

export default useCategories;
