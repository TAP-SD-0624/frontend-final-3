import React from "react";
import axiosInstance from "@src/api";

export interface OrderRequest {
  status: string;
  order: {
    subtotal: number;
    totalDiscount: number;
    deliveryFees: number;
    grandtotal: number;
    phoneNumber: string;
    paymentDetails: string;
    Address: {
      state: string;
      city: string;
      street: string;
      pin: number;
    };
    OrderItems: [
      {
        quantity: number;
        unitPrice: number;
        totalPrice: number;
        Product: {
          id: string;
          name: string;
          brief: string;
          ProductImages: [
            {
              path: string;
            }
          ];
        };
      }
    ];
  };
}

const order = async (body: OrderRequest) => {
  const url = `/orders`;
  return axiosInstance.post(url, body).then((res) => res.data);
};

export default order;
