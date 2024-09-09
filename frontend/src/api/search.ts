import React from "react";
import axiosInstance from "./index";

interface SearchResponse {
  products: [
    {
      id: string;
      name: string;
      description: string;
      imagePath: string;
    }
  ];
}

const search = async (name: string) => {
  const url = `/products/search?name=${name}`;
  return axiosInstance.get<SearchResponse>(url).then((res) => res.data);
};

export default search;
