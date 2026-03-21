import { createSlice } from "@reduxjs/toolkit";

const filterSLice = createSlice({
    name:"filter",
    initialState:{
        data:[]
    },
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload
        }
    }
})

export const {setData} =filterSLice.actions
export default filterSLice.reducer