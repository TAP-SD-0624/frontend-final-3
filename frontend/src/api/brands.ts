import React from "react";
import axiosInstance from "./index";

interface BrandsResponse {
  token: string;
}

const brands = async () => {
  const url = "/brands";

  return axiosInstance.get<void>(url).then((res) => res.data);
};

export default brands;
