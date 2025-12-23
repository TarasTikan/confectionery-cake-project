import { createSlice } from "@reduxjs/toolkit";
import { initAuth, loginUser, registerUser } from "./operations";
const initialState = {
  session: null,
  user: null,
  isLoading: false,
  error: null,
  isInitialized: false, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.session = action.payload?.session;
        state.user = action.payload?.user ?? null;
      })
        .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.session = action.payload?.session;
            state.user = action.payload?.user ?? null;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addCase(initAuth.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(initAuth.fulfilled, (state, action) => {
            state.isLoading = false;
            state.session = action.payload?.session;
            state.user = action.payload?.user ?? null;
            state.isInitialized = true;
        })
        .addCase(initAuth.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.isInitialized = true;
        });
  },
});

export const authReducer = authSlice.reducer;