import React from "react";
import axiosInstance from "./index";

interface CategoriesResponse {
  categories: [
    {
      id: string;
      name: string;
      description: string;
      imagePath: string;
    }
  ];
}

const categories = async () => {
  const url = "/categories";

  return axiosInstance.get<CategoriesResponse>(url).then((res) => res.data);
};

export default categories;
