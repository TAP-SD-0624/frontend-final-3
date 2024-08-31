import React from "react";
import axiosInstance from "./index";

interface ProductResponse {
  product: {
  isLimitedEdition: boolean;
  totalReviews: number;
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
  ProductImages: [{
    path: string;
  }]
}};

const getOrder = async (id: string) => {
  const url = `/orders/${id}`;
  return axiosInstance.get<ProductResponse>(url).then((res) => res.data);
};

export default getOrder;
