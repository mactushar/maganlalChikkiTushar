import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../slice/addFavourite"

export const store = configureStore({
    reducer:{
        fav:favReducer

    }
})

