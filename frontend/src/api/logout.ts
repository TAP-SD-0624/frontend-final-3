import React from "react";
import axiosInstance from ".";

const logout = async () => {
  const url = "/auth/logout";

  return axiosInstance.get<void>(url).then((res) => res.data);
};

export default logout;
