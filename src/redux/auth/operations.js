import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const initAuth = createAsyncThunk(
  "auth/initAuth",
  async (_, thunkAPI) => {
    try {
      const { data } = await superbase.auth.getSession();
      const session = data.session;
      if (!session) return { session: null, user: null, profile: null };
      const user = session.user;

      const { data: profileData, error: profileError } = await superbase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .maybeSingle();
      if (profileError) throw profileError;
      return { session, user, profile: profileData };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ email, password, name }, thunkAPI) => {
    try {
      const { data, error } = await superbase.auth.signUp({
        email,
        password,
        options: { data: { name } },
      });
      if (error) throw error;
      const user = data.user;
      if (!user) {
        throw new Error("User was not created");
      }

      const { error: profileError, data: profileData } = await superbase
        .from("profiles")
        .insert({
          id: user.id,
          name,
          email,
        })
        .select("*")
        .single();
      if (profileError) throw profileError;
      return {
        user,
        session: data.session ?? null,
        profile: profileData,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data, error } = await superbase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      const user = data.user;

      if (!user) {
        throw new Error("User was not created");
      }

      const { data: profileData } = await superbase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      const dataWithProfile = { ...data, profile: profileData };
      return dataWithProfile;
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
