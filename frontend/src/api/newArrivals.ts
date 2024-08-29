import React from "react";
import axiosInstance from "./index";

interface NewArrivalsResponse {
  status: string;
  totalProducts: number;
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

const newArrivals = async () => {
  const url = "/products/newArrivals";

  return axiosInstance.get<NewArrivalsResponse>(url).then((res) => res.data);
};

export default newArrivals;
