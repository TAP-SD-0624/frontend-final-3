import React from "react";
import axiosInstance from "./index";

interface OrdersResponse {
  status: string;
  orders: [
    {
      id: string;
      createdAt: string;
      totalDiscount: number;
      totalAmount: number;
      orderStatus: string;
    }
  ];
}

const orders = async () => {
  const url = "/orders";

  return axiosInstance.get<OrdersResponse>(url).then((res) => res.data);
};

export default orders;
