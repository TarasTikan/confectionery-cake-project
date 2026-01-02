import { createSlice } from "@reduxjs/toolkit";
import { initAuth, loginUser, logoutUser, registerUser } from "./operations";
const initialState = {
  session: null,
  user: null,
  isLoading: false,
  error: null,
  profile: null,
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
        state.profile = action.payload?.profile ?? null;
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
        state.profile = action.payload?.profile ?? null;
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

        state.profile = action.payload?.profile ?? null;
      })
      .addCase(initAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(logoutUser.fulfilled, (state) => {
        state.session = null;
        state.user = null;
        state.profile = null;
      });
  },
});

export const authReducer = authSlice.reducer;