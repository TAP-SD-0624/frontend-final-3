import React from "react";
import axiosInstance from "./index";

interface LimitedEditionResponse {
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

const limitedEdition = async () => {
  const url = "/products/limitedEdition";

  return axiosInstance.get<LimitedEditionResponse>(url).then((res) => res.data);
};

export default limitedEdition;
