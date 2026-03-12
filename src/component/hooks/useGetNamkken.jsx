import { useQuery } from "@tanstack/react-query";

import { getNamkeens } from "../utils/getAllcategory";

const useGetNamkeen = () => {
  return useQuery({
    queryKey: ["namkeen"],
    queryFn: getNamkeens,
  });
};
export { useGetNamkeen };
