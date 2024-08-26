import { useQuery } from "@tanstack/react-query";
import category from "@src/api/category";
import React from "react";


const useCategory = (name: string) => {
  const { data: categoryData } = useQuery({
    queryKey: ["Category", name],
    queryFn: () => category(name),
  });

  return {
    categoryData,
  };
};

export default useCategory;
