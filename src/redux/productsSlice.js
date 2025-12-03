import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/data";

const productsSlice = createSlice({
  name: "products",
  initialState: products,
  reducers: {},
});

export const productsReducer = productsSlice.reducer;
