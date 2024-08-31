import React from "react";
import axiosInstance from "@src/api";
import { User } from "src/types";

export interface UpdatePasswordRequestBody {
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UpdatePasswordDataResponse {
    message: string;
}

export const updatePassword = async (
  id: string,
  body: UpdatePasswordRequestBody
) => {
  const url = `/users/${id}/password`;
  return axiosInstance
    .put<UpdatePasswordDataResponse>(url, body)
    .then((res) => res.data);
};
