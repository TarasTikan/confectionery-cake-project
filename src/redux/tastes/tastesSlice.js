import { createSlice } from "@reduxjs/toolkit";
import {fetchTaste} from "./operations";
const tastesSlice = createSlice({
  name: "tastes",
  initialState: {
    isLoading: false,
    error: null,
    taste: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaste.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(fetchTaste.fulfilled, (state, action) => {
      state.taste = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchTaste.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload ?? action.error?.message;
    })
  },
});

export const tastesReducer = tastesSlice.reducer;
