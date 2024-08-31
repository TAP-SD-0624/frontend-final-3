import React from "react";
import axiosInstance from "@src/api";
import { BaseResponse, User } from "src/types";

export interface SignUpRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


export interface SignUpResponse{
  message: string;
  status: string;
}

export const signup = async (body: SignUpRequestBody) => {
  const url = "/auth/signup";
  return axiosInstance.post<SignUpResponse>(url, body).then((res) => res.data);
};
