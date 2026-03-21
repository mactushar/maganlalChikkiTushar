import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../slice/addFavourite"
import cartReducer from '../slice/cartSlice'
import filterReducer from "../slice/ProductFilterSlice"

export const store = configureStore({
    reducer:{
        fav:favReducer,
        cart:cartReducer,
        filter:filterReducer

    }
})

