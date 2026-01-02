import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    category: "allProducts",
    priceRange: 0,
    selectTastes: "",
  },
  reducers: {
    categoryProducts: (state, action) => {
      state.category = action.payload;
    },
    selectedPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    selectedTastes(state, action) {
      state.selectTastes = action.payload;
    },
    clearFilter(state) {
      state.category = "allProducts";
      state.priceRange = 0;
      state.selectTastes = "";
    },
  },
});

export const { categoryProducts,selectedPriceRange,selectedTastes,clearFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
