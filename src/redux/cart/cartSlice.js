import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCartAuth,
  addItemToCartGuest,
  clearCartAuth,
  clearCartGuest,
  decrementQuantityGuest,
  fetchCartItems,
  getOrCreateCart,
  incrementQuantityGuest,
  initModeCart,
  removeItemFromCartAuth,
  removeItemFromCartGuest,
  toggleCart,
  updateCartItemQtyAuth,
} from "./operations";
const storegeCart = {
  mode: "guest",
  cartId: null,
  isLoading: false,
  error: null,
  isOpenCart: false,
  cartItem: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: storegeCart,
  extraReducers: (builder) => {
    builder
      .addCase(initModeCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(initModeCart.fulfilled, (state, action) => {
        state.mode = action.payload;
        state.isLoading = false;
      })
      .addCase(initModeCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getOrCreateCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getOrCreateCart.fulfilled, (state, action) => {
        state.cartId = action.payload.id;
        state.isLoading = false;
      })
      .addCase(getOrCreateCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.cartItem = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addItemToCartAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addItemToCartAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const item = action.payload;

        const idx = state.cartItem.findIndex((i) => i.id === item.id);

        if (idx !== -1) {
          state.cartItem[idx] = item;
        } else {
          state.cartItem.push(item);
        }
      })
      .addCase(addItemToCartAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addItemToCartGuest.fulfilled, (state, action) => {
        state.cartItem = action.payload;
      })
      .addCase(removeItemFromCartAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeItemFromCartAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cartItem = state.cartItem.filter(
          (item) => item.id !== action.payload.productId
        );
      })
      .addCase(removeItemFromCartAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeItemFromCartGuest.fulfilled, (state, action) => {
        state.cartItem = action.payload;
      })

      .addCase(updateCartItemQtyAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItemQtyAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const item = action.payload;

        const idx = state.cartItem.findIndex((i) => i.id === item.id);

        if (idx !== -1) {
          state.cartItem[idx] = item;
        }
      })
      .addCase(updateCartItemQtyAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(decrementQuantityGuest.fulfilled, (state, action) => {
        state.cartItem = action.payload;
      })

      .addCase(incrementQuantityGuest.fulfilled, (state, action) => {
        state.cartItem = action.payload;
      })
      .addCase(clearCartGuest.fulfilled, (state) => {
        state.cartItem = []
      })
      .addCase(clearCartAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(clearCartAuth.fulfilled, (state) => {
        state.cartItem = []
      })
       .addCase(clearCartAuth.rejected, (state, action) => {
           state.isLoading = false;
        state.error = action.payload
      })
      .addCase(toggleCart.fulfilled, (state, action) => {
        state.isOpenCart = action.payload
      })
  },
});

export const cartReducer = cartSlice.reducer;
