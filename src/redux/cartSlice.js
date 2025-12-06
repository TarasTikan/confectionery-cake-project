import { createSlice } from "@reduxjs/toolkit";
const storegeCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const cartSlice = createSlice({
  name: "cart",
  initialState: storegeCart,
  reducers: {
    addCart: (state, action) => {
      const product = action.payload;

      const findProduct = state.find((item) => item.id === product.id);

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    incrementQuantity: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload);
      if(findProduct) {
       findProduct.quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const findProduct = state.find((item) => item.id === action.payload.id);
      if(findProduct) {
       findProduct.quantity -= 1
      }
    },
  },
});

export const { addCart, changeCartQuantity,incrementQuantity,decrementQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
