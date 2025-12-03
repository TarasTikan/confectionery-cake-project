import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    category: "allProducts",
  },
  reducers: {
    categoryProducts: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { categoryProducts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
