 import { useQuery } from "@tanstack/react-query";
import { getGallry } from "../utils/chikiaxios";
 
 const useSlider = ()=>{
    return useQuery(
        {
            queryKey:["slider"],
            queryFn:getGallry,
            
        }
    )

    
 }
 export {useSlider}