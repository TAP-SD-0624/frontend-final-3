import {AxiosError, AxiosResponse} from "axios";

export interface productType {
  img: string;
  name: string;
  price: number;
  slug: string;
  marka: string;
  isFavorite: boolean;
  rating?: number;
  numReviews?: number;
  originalPrice: number;
  discount: number;
}

export interface BaseResponse {
  success: boolean;
  status: number;
  message: string;
  data: any;
}

export interface AxiosBaseError extends AxiosError<BaseResponse> {}

export interface User {
  userId?: string;
  name?: string;
  username?: string;
  email?: string;
  roleId?: number;
  permissions?: any[];
}

