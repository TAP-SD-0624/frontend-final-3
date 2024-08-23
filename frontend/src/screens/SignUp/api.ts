import React from "react";
import axiosInstance from "@src/api";
import { BaseResponse, User } from "src/types";

export interface SignUpRequestBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AccessTokenData extends User {}

export interface SignUpResponse extends BaseResponse {
  data: AccessTokenData;
  accessToken: string;
}

export const signup = async (body: SignUpRequestBody) => {
  const url = "/auth/signup";
  return axiosInstance.post<SignUpResponse>(url, body).then((res) => res.data);
};
