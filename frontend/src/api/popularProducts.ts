import React from "react";
import axiosInstance from "./index";

interface PopularProductsResponse {
  products: [
    {
      isLimitedEdition: boolean;
      id: string;
      name: string;
      brief: string;
      description: string;
      price: number;
      stock: number;
      discountRate: number;
      rating: number;
      createdAt: string;
      Category: {
        name: string;
        id: string;
      };
      Brand: {
        name: string;
        id: string;
      };
    }
  ];
}

const popularProducts = async () => {
  const url = "/products/popularProducts";

  return axiosInstance.get<PopularProductsResponse>(url).then((res) => res.data);
};

export default popularProducts;
