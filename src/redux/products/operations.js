import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts", async (_, thunkAPI) => {
    try {
      const { data, error }  = await superbase.from("products").select("*");
      if (error) throw error;
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const fetchPopularProducts = createAsyncThunk(
  "products/fetchPopularProducts", async (_, thunkAPI) => {
    try {
      const { data, error }  = await superbase.from("productsPopular").select("*");
      if (error) throw error;
      return data;
    }catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

