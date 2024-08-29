import React from "react";
import axiosInstance from "./index";

interface UserResponse {
  status: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
  };
}

const user = async (id: string) => {
  const url = `/users/${id}`;
  return axiosInstance.get<UserResponse>(url).then((res) => res.data);
};

export default user;
