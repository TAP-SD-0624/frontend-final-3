import React from "react";
import axiosInstance from "./index";

interface BrandsResponse {
  id: string;
  name: string;
  imagePath: string
}

const brands = async () => {
  const url = "/brands";

  return axiosInstance.get<BrandsResponse>(url).then((res) => res.data);
};

export default brands;
