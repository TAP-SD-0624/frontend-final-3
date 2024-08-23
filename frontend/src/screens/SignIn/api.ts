import React from 'react'
import axiosInstance from '@src/api';
import { BaseResponse, User } from "src/types";

export interface LoginRequestBody {
    email: string;
    password: string;
  }
  

export interface AccessTokenData extends User {}

export interface LoginResponse extends BaseResponse {
  data: AccessTokenData;
  accessToken: string;
}

export interface ForgetPasswordResponse extends BaseResponse {
  data: AccessTokenData;
}

export const login = async (body: LoginRequestBody) => {
    const url = "/auth/login";
    return axiosInstance.post<LoginResponse>(url, body).then(res => res.data);
  };
