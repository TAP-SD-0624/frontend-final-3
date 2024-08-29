import { useQuery } from "@tanstack/react-query";
import user from "@src/api/user";
import React from "react";

const useUserData = (id: string) => {
  const { data: userData } = useQuery({
    queryKey: ["User", id],
    queryFn: () => user(id),
  });

  return {
    userData,
  };
};

export default useUserData;
