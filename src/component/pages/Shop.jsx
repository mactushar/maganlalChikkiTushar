import React from 'react'
import ShopeNavbar from '../layout/ShopeNavbar'
import { useQuery } from '@tanstack/react-query'
import { getCategory } from '../utils/getAllProducts'



const Shop = () => {
 const { data, isFetching } = useQuery({
     queryKey: ["caty"],
     queryFn: getCategory,
   });
  return (
   <>
  
   <ShopeNavbar data = {data}/>
   
   </>
  )
}

export default Shop