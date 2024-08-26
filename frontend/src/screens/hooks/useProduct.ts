import { useQuery } from "@tanstack/react-query";
import product from "@src/api/product";
import React from "react";


const useProduct = (id: string) => {
  const { data: productData } = useQuery({
    queryKey: ["Product", id],
    queryFn: () => product(id),
  });

  return {
    productData,
  };
};

export default useProduct;
