import handpickedCollections from "@src/api/handpickedCollections";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useHandpickedCollections = () => {
  const { data: handpickedCollectionsData } = useQuery({
    queryKey: ["HandpickedCollections"],
    queryFn: handpickedCollections,
  });

  return {
    handpickedCollectionsData,
  };
};

export default useHandpickedCollections;
