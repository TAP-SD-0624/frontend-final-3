import orders from "@src/api/orders";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useOrders = () => {
  const { data: ordersData, isLoading } = useQuery({
    queryKey: ["Orders"],
    queryFn: orders,
  });

  return {
    ordersData,
    isLoading,
  };
};

export default useOrders;
