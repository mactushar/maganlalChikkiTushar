import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "./utils/getAllProducts";
import AllProducts from "./AllProducts";

const Products = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["caty"],
    queryFn: getCategory,
  });

  return (
    <>
      {data?.map((product) => {
        return <AllProducts key={data.id} data={product} />;
      })}
    </>
  );
};

export default Products;
