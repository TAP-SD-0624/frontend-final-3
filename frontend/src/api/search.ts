import React from "react";
import axiosInstance from "./index";

interface SearchResponse {}

const search = async (name: string) => {
  const url = `/products/search?name=${name}`;
  return axiosInstance.get<SearchResponse>(url).then((res) => res.data);
};

export default search;
