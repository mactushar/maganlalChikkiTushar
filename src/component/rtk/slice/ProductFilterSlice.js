import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    data: [],
    filter: [],
    checkbox: [], // ["1","2"]
    search: "",
    priceRange: [1, 1000],
  },

  reducers: {
    // ✅ SET ALL DATA
    setData: (state, action) => {
      state.data = action.payload;
      state.filter = action.payload;
    },

    // ✅ CHECKBOX (STRING SAFE)
    setCheckBox: (state, action) => {
      const id = String(action.payload);

      const exist = state.checkbox.includes(id);

      if (!exist) {
        state.checkbox.push(id);
      } else {
        state.checkbox = state.checkbox.filter((d) => d !== id);
      }
    },

    // ✅ SEARCH
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    // ✅ PRICE
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    // ✅ MAIN FILTER LOGIC
    applyFilters: (state) => {
      let filtered = [...state.data];

      // 🔥 CATEGORY FILTER (STRING MATCH)
      if (state.checkbox.length > 0) {
        filtered = filtered.filter((item) =>
          state.checkbox.includes(String(item.category_id))
        );
      }

      // 🔥 PRICE FILTER
      filtered = filtered.filter(
        (item) =>
          Number(item.price) >= state.priceRange[0] &&
          Number(item.price) <= state.priceRange[1]
      );

      // 🔥 SEARCH FILTER
      if (state.search.trim()) {
        const search = state.search.toLowerCase();

        filtered = filtered.filter((item) =>
          item.title?.toLowerCase().includes(search)
        );
      }

      // ✅ FINAL RESULT
      state.filter = filtered;
    },
  },
});

export const {
  setData,
  setCheckBox,
  setSearch,
  setPriceRange,
  applyFilters,
} = filterSlice.actions;

export default filterSlice.reducer;