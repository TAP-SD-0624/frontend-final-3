import React from "react";
import axiosInstance from "./index";

interface DiscountedProductsResponse {
  id: string;
  name: string;
  description: string;
}

const discountedProducts = async () => {
  const url = "/products/discountedProducts";

  return axiosInstance
    .get<DiscountedProductsResponse>(url)
    .then((res) => res.data);
};

export default discountedProducts;
