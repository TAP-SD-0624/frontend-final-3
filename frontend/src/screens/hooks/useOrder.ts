import { useQuery } from "@tanstack/react-query";
import React from "react";
import getOrder from "@src/api/getOrder";

const useOrder = (id: string) => {
  const { data: orderData } = useQuery({
    queryKey: ["Order", id],
    queryFn: () => getOrder(id),
  });

  return {
    orderData,
  };
};

export default useOrder;
