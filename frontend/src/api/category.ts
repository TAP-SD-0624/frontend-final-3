import React from "react";
import axiosInstance from "./index";

interface CategoryResponse {
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
      ProductImages: [
        {
          path: string;
        }
      ];
    }
  ];
}

const category = async (name: string) => {
  const url = `/products?category=${name}`;
  return axiosInstance.get<CategoryResponse>(url).then((res) => res.data);
};

export default category;
