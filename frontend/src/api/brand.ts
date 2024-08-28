import React from "react";
import axiosInstance from "./index";

interface BrandResponse {
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

const brand = async (name: string) => {
  const url = `/products?brand=${name}`;
  return axiosInstance.get<BrandResponse>(url).then((res) => res.data);
};

export default brand;
