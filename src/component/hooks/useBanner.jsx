import { useQuery } from "@tanstack/react-query"
import { getBanner } from "../utils/chikiaxios"
const useBanner =()=>{
    return useQuery({
        queryKey:["banner"],
        queryFn:getBanner
    })

   
}
 export {useBanner}