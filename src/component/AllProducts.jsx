import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./utils/getAllProducts";
import SingleProduct from "./SingleProduct";
import { useDispatch } from "react-redux";
import { setData } from "./rtk/slice/ProductFilterSlice";

const AllProducts = ({ data }) => {
  const dispatch = useDispatch();
  console.log("datatatat", data.id);
  const { data: products, isFetcing } = useQuery({
    queryKey: ["product", data?.id],
    queryFn: () => getProducts(data?.id),
    enabled: !!data?.id,
  });

  useEffect(() => {
    if (products) {
      dispatch(setData(products));
    }
  }, [dispatch, products]);

  return (
    <>
      <SingleProduct
        name={data?.cat_name}
        categoryId={data?.id}
        catImage = {data?.cat_image}
        data={products}
      />
    </>
  );
};

export default AllProducts;
