import React from "react";
import axiosInstance from "./index";

interface LimitedEditionResponse {
  id: string;
  name: string;
  description: string;
}

const limitedEdition = async () => {
  const url = "/products/limitedEdition";

  return axiosInstance.get<LimitedEditionResponse>(url).then((res) => res.data);
};

export default limitedEdition;
