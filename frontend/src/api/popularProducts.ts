import React from "react";
import axiosInstance from "./index";

interface PopularProductsResponse {
  id: string;
  name: string;
  description: string;
}

const popularProducts = async () => {
  const url = "/products/popularProducts";

  return axiosInstance.get<PopularProductsResponse>(url).then((res) => res.data);
};

export default popularProducts;
