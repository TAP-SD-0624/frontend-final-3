import React from "react";
import axiosInstance from "./index";

interface CarousalResponse {
  status: string;
  totalSlides: number;
  carouselSlides: [
    {
      title: string;
      description: string;
      slideOrder: number;
      imagePath: string;
      category: string;
      brand: string;
    }
  ];
}

const carousal = async () => {
  const url = "/carouselSlides";

  return axiosInstance.get<CarousalResponse>(url).then((res) => res.data);
};

export default carousal;
