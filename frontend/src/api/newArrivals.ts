import React from "react";
import axiosInstance from "./index";

interface NewArrivalsResponse {
  id: string;
  name: string;
  description: string;
}

const newArrivals = async () => {
  const url = "/products/newArrivals";

  return axiosInstance.get<NewArrivalsResponse>(url).then((res) => res.data);
};

export default newArrivals;
