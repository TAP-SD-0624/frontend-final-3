import { useQuery } from "@tanstack/react-query";
import category from "@src/api/category";
import React from "react";

const useCategory = (id: string) => {
  const { data: categoryData } = useQuery({
    queryKey: ["Category", id],
    queryFn: () => category(id),
  });

  return {
    categoryData,
  };
};

export default useCategory;
