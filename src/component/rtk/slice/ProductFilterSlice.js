import { createSlice } from "@reduxjs/toolkit";

const filterSLice = createSlice({
  name: "filter",
  initialState: {
    data: [],
    filter: [],
    checkbox: [],
    search: "",
    priceRange: [1, 1000],
   
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },

    setCheckBox: (state, action) => {
      const id = String(action.payload);

      const exist = state.checkbox.includes(id);
      if (!exist) {
        state.checkbox.push(id);
      } else {
        state.checkbox = state.checkbox.filter((d) => String(d) !== id);
      }
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    applyFilters: (state) => {
      let filtered = [...state.data];

      if (state.search) {
        filtered = filtered.filter((item) =>
          item.title.toLowerCase().includes(state.search.toLowerCase()),
        );
      }

      if (state.checkbox.length > 0) {
        filtered = filtered.filter((item) =>
          state.checkbox.includes(item.category_id),
        );
      }

      filtered = filtered.filter(
        (item) =>
          item.price >= state.priceRange[0] &&
          item.price <= state.priceRange[1],
      );

      state.filter = filtered;
    },
  },
});

export const {
  setData,
  setCheckBox,
  setSearch,
  setPriceRange,
  setRating,
  applyFilters,
} = filterSLice.actions;

export default filterSLice.reducer;
