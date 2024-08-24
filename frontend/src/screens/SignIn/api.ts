import React from 'react'
import axiosInstance from '@src/api';
import { User } from "src/types";

export interface LoginRequestBody {
    email: string;
    password: string;
  }
  

export interface LoginResponse {
  message: string;
  token: string;
}


export const login = async (body: LoginRequestBody) => {
    const url = "/auth/login";
    return axiosInstance.post<LoginResponse>(url, body).then(res => res.data);
  };
