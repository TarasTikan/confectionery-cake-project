import { createSlice } from "@reduxjs/toolkit";
const storegeCart = {isOpenCart: false, cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []}
const cartSlice = createSlice({
  name: "cart",
  initialState: storegeCart,
  reducers: {
    toggleCart: (state, action) => {
      state.isOpenCart = action.payload
    },
    addCart: (state, action) => {
      const product = action.payload;

      const findProduct = state.cartItem.find((item) => item.id === product.id);

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.cartItem.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    deleteCart: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    incrementQuantity: (state, action) => {
      const findProduct = state.cartItem.find((item) => item.id === action.payload.id);
      if(findProduct) {
       findProduct.quantity += 1
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    decrementQuantity: (state, action) => {
      const findProduct = state.cartItem.find((item) => item.id === action.payload.id);
      if(findProduct) {
       findProduct.quantity -= 1
      }
      if(findProduct.quantity === 0) {
        state.cartItem.splice(state.cartItem.indexOf(findProduct), 1)
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    clearCart: (state) => {
      state.cartItem = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    }
  },
});

export const { addCart, changeCartQuantity,incrementQuantity,decrementQuantity,toggleCart,clearCart,deleteCart} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
