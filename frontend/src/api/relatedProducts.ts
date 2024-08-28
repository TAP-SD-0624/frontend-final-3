import React from "react";
import axiosInstance from "./index";

interface RelatedProductsResponse {
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

const relatedProducts = async (productName: string) => {
  const url = `/products/relatedProducts/${productName}`;
  return axiosInstance
    .get<RelatedProductsResponse>(url)
    .then((res) => res.data);
};

export default relatedProducts;
