import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  form: JSON.parse(localStorage.getItem("form")) || "",
  size: JSON.parse(localStorage.getItem("size")) || "",
  taste: JSON.parse(localStorage.getItem("taste")) || "",
  designElements: JSON.parse(localStorage.getItem("designElements")) || [],
  comment: JSON.parse(localStorage.getItem("comment")) || "",
};
export const customProductSlice = createSlice({
  name: "customProduct",
  initialState,
  reducers: {
    setForm(state, action) {
      state.form = action.payload;
      localStorage.setItem("form", JSON.stringify(action.payload));
    },
    setSize(state, action) {
      state.size = action.payload;
      localStorage.setItem("size", JSON.stringify(action.payload));
    },
    setTaste(state, action) {
      state.taste = action.payload;
      localStorage.setItem("taste", JSON.stringify(action.payload));
    },
    setDesignElements(state, action) {
      state.designElements = state.designElements.includes(action.payload)
        ? state.designElements.filter((item) => item !== action.payload)
        : [...state.designElements, action.payload];

      localStorage.setItem("designElements", JSON.stringify(action.payload));
    },
    setComment(state, action) {
      state.comment = action.payload;
      localStorage.setItem("comment", JSON.stringify(action.payload));
    },
  },
});

export const { setForm, setSize, setTaste, setDesignElements, setComment } =
  customProductSlice.actions;
export const customProductReducer = customProductSlice.reducer;
