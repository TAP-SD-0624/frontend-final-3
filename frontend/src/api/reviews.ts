import React from "react";
import axiosInstance from "./index";

interface ReviewsResponse {}

const reviews = async (id: string) => {
  const url = `/reviews/${id}`;
  return axiosInstance.get<ReviewsResponse>(url).then((res) => res.data);
};

export default reviews;
