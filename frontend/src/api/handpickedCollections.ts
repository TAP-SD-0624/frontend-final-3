import React from "react";
import axiosInstance from "./index";

interface HandpickedCollectionsResponse {
  id: string;
  name: string;
  description: string;
}

const handpickedCollections = async () => {
  const url = "/products/handpickedCollections";

  return axiosInstance.get<HandpickedCollectionsResponse>(url).then((res) => res.data);
};

export default handpickedCollections;
