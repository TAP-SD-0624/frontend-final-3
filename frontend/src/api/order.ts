import React from "react";
import axiosInstance from "@src/api";

export interface OrderRequestBody {
  itemsList: {
    id: string;
    quantity: number;
  }[];
  address: {
    state: string;
    city: string;
    street: string;
    pin: string;
  };
  phoneNumber: string;
  orderOwner: string;
  cardNumber: string;
}


export interface OrderResponse {
  message: string;
  token: string;
}

const order = async (body: OrderRequestBody) => {
  const url = "/orders";
  return axiosInstance.post<OrderResponse>(url, body).then((res) => res.data);
};

export default order;
