import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./utils/getAllProducts";
import SingleProduct from "./SingleProduct";

const AllProducts = ({ data }) => {
    const {data:products,isFetcing}=useQuery({
        queryKey:["product",data?.id],
        queryFn:()=>getProducts(data?.id),
        enabled:!!data?.id
    })

    
  
  return (
    <>
    <SingleProduct name ={data?.cat_name} categoryId ={data?.id} data={products}/>

    </>
  )
};

export default AllProducts;
