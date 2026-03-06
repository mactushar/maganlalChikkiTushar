import { useQuery } from "@tanstack/react-query";

import { getAbout } from "../utils/chikiaxios";

const useGetAbout = () => {
  return useQuery({
    queryKey: ["about"],
    queryFn: getAbout,
  });
};
export { useGetAbout };
