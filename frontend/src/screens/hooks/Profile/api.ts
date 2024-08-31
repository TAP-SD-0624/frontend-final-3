import React from "react";
import axiosInstance from "@src/api";
import { User } from "src/types";

export interface UpdateUserDataRequestBody {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  currentPassword?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UpdateUserDataResponse {
  message: string;
}

export const updateUserData = async (
  id: string,
  body: UpdateUserDataRequestBody
) => {
  const url = `/users/${id}`;
  return axiosInstance
    .put<UpdateUserDataResponse>(url, body)
    .then((res) => res.data);
};
