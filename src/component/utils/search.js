import axios from "axios"

export const getSearch = async(query)=>{
    const response = await axios.get(`http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`)
    return response?.data
}
