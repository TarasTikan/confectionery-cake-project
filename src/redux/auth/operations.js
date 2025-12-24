import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const initAuth = createAsyncThunk(
  "auth/initAuth",
  async (_, thunkAPI) => {
    try {
      const { data } = await superbase.auth.getSession();
      return data.session ?? null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const { data } = await superbase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await superbase.auth.signInWithPassword({
        email,
        password,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkAPI) => {
    try {
      const { error } = await superbase.auth.signOut();
      if (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
