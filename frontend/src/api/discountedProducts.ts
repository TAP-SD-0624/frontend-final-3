import React from "react";
import axiosInstance from "./index";

interface DiscountedProductsResponse {
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

const discountedProducts = async () => {
  const url = "/products/discountedProducts";

  return axiosInstance
    .get<DiscountedProductsResponse>(url)
    .then((res) => res.data);
};

export default discountedProducts;
