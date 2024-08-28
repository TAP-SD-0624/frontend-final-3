import React from "react";
import axiosInstance from "./index";

interface OrdersResponse {
  id: string;
  name: string;
  description: string;
}

const orders = async () => {
  const url = "/orders";

  return axiosInstance.get<OrdersResponse>(url).then((res) => res.data);
};

export default orders;
