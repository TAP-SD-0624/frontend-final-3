import React from "react";
import axiosInstance from "./index";

export interface ProductsResponse {
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

const products = async () => {
  const url = "/products";

  return axiosInstance.get<ProductsResponse>(url).then((res) => res.data);
};

export default products;
