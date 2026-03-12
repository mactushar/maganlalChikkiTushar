import { useQuery } from "@tanstack/react-query";

import { getDryfruit } from "../utils/getAllcategory";

const useGetDryFriut = () => {
  return useQuery({
    queryKey: ["dryfriut"],
    queryFn: getDryfruit,
  });
};
export { useGetDryFriut };
