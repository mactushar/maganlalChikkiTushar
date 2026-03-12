import { useQuery } from "@tanstack/react-query";

import { getFudge } from "../utils/getAllcategory";

const useGetFudge = () => {
  return useQuery({
    queryKey: ["fudge"],
    queryFn: getFudge,
  });
};
export { useGetFudge };
