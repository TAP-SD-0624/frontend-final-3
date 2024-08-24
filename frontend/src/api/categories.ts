import React from "react";
import axiosInstance from "./index";

interface CategoriesResponse {
  id: string;
  name: string;
  description: string;
}

const categories = async () => {
  const url = "/categories";

  return axiosInstance.get<CategoriesResponse>(url).then((res) => res.data);
};

export default categories;
