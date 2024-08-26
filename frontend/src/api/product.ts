import React from "react";
import axiosInstance from "./index";

interface ProductResponse {
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

const product = async (id: string) => {
  const url = `/products/${id}`;
  return axiosInstance.get<ProductResponse>(url).then((res) => res.data);
};

export default product;
