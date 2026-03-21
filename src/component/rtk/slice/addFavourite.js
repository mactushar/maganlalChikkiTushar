import { createSlice } from "@reduxjs/toolkit";

const addFavouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    list: [],
  },
  reducers: {
    addFav: (state, action) => {
      const id = action.payload.id;
      const existingItem = state.list.find((product) => product.id === id);

      if (!existingItem) {
        state.list.push(action.payload);
      }
    },
    removeFav: (state, action) => {
      const id = action.payload;

      state.list = state.list.filter((el) => el.id !== id);
    },
  },
});

export const { addFav, removeFav } = addFavouriteSlice.actions;
export default addFavouriteSlice.reducer;
