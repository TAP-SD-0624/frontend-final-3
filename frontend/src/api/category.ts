import React from "react";
import axiosInstance from "./index";

interface CategoryResponse {}

const category = async (id: string) => {
  const url = `/categories/${id}`;
  return axiosInstance.get<CategoryResponse>(url).then((res) => res.data);
};

export default category;
