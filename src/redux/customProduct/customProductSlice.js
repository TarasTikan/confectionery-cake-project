import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  form: JSON.parse(localStorage.getItem("form")) || "",
  size: JSON.parse(localStorage.getItem("size")) || "",
  taste: JSON.parse(localStorage.getItem("taste")) || "",
  designElements: JSON.parse(localStorage.getItem("designElements")) || [],
  comment: JSON.parse(localStorage.getItem("comment")) || "",
  title: JSON.parse(localStorage.getItem("title")) || "",
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
    setTitleCustom(state, action) {
      state.title = action.payload;
      localStorage.setItem("title", JSON.stringify(action.payload));
    },
    clearCustomProduct(state) {
      state.form = "";
      state.size = "";
      state.taste = "";
      state.designElements = [];
      state.comment = "";
      state.title = "";
      localStorage.removeItem("form");
      localStorage.removeItem("size");
      localStorage.removeItem("taste");
      localStorage.removeItem("designElements");
      localStorage.removeItem("comment");
      localStorage.removeItem("title");
    }
  },
});

export const { setForm, setSize, setTaste, setDesignElements, setComment, clearCustomProduct, setTitleCustom } =
  customProductSlice.actions;
export const customProductReducer = customProductSlice.reducer;
