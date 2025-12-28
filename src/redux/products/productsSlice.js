import { createSlice } from "@reduxjs/toolkit";
import {fetchProducts,fetchPopularProducts} from "./operations";

const initialState = {
 productItem: [],
 productPopularItem: [],
 isLoading: false,
 error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productItem = action.payload ?? [];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error?.message;
      }) 
      .addCase(fetchPopularProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPopularProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productPopularItem = action.payload ?? [];
      })
      .addCase(fetchPopularProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? action.error?.message;
      });
  }
})


export const productsReducer = productsSlice.reducer;
