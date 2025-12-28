import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const fetchTaste = createAsyncThunk("tastes/fetchTaste", async (_, thunkAPI) => {
    try {
        const {data, error} = await superbase.from("tastes").select("*")
        if (error) throw new Error("don't find taste");
        return data;    
    } 
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})