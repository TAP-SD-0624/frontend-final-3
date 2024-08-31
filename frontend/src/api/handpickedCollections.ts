import React from "react";
import axiosInstance from "./index";

interface HandpickedCollectionsResponse {
  status: string;
  totalCategories: number;
  categories: [
    {
      id: string;
      name: string;
      description: string;
      imagePath: string;
      createdAt: string;

      products: [
        {
          isLimitedEdition: boolean;
          id: string;
          name: string;
          brief: string;
          description: string;
          price: number;
          stock: number;
          discountRate: number;
          rating: number;
          createdAt: string;
          Category: {
            name: string;
            id: string;
          };
          Brand: {
            name: string;
            id: string;
          };
        }
      ];
    }
  ];
}

const handpickedCollections = async () => {
  const url = "/products/handpickedCollections";

  return axiosInstance
    .get<HandpickedCollectionsResponse>(url)
    .then((res) => res.data);
};

export default handpickedCollections;
