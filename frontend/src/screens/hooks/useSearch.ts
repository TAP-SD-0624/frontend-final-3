import { useQuery } from "@tanstack/react-query";
import search from "@src/api/search";
import React from "react";

const useSearch = (name: string) => {
  const { data: searchData } = useQuery({
    queryKey: ["Search", name],
    queryFn: () => search(name),
  });

  return {
    searchData,
  };
};

export default useSearch;
