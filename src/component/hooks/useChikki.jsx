import { useQuery } from "@tanstack/react-query";

import { getChikki } from "../utils/getAllcategory";

const useGetChikki = () => {
  return useQuery({
    queryKey: ["chikki"],
    queryFn: getChikki,
  });
};
export { useGetChikki };
