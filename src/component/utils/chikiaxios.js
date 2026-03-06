import axios from "axios"


const getAbout = async()=>{
    try {

    const response =await axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/about")
    
  return response.data

        
    } catch (error) {

        
    }

}

const getBanner = async() =>{
    try {
        
   const response = await axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/banner_image")
   
        return response.data
    } catch (error) {
        
    }


}
const getGallry = async() =>{
    try {
        
   const response = await axios.get("https://appy.trycatchtech.com/v3/maganlalchikki/home_image_gallery")
   
        return response.data
    } catch (error) {
        
    }


}

export {getAbout,getBanner,getGallry}