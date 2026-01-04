import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCartAuth,
  clearCartAuth,
  fetchCartItems,
  getOrCreateCart,
  initModeCart,
  removeItemFromCartAuth,
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
  reducers: {
    toggleCart: (state, action) => {
      state.isOpenCart = action.payload;
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
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    incrementQuantity: (state, action) => {
      const findProduct = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    decrementQuantity: (state, action) => {
      const findProduct = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity -= 1;
      }
      if (findProduct.quantity === 0) {
        state.cartItem.splice(state.cartItem.indexOf(findProduct), 1);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    clearCart: (state) => {
      state.cartItem = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItem));
    },
    resetCart: (state) => {
      state.mode = "guest";
      state.cartId = null;
      state.error = null;
      state.isLoading = false;
      state.cartItem = JSON.parse(localStorage.getItem("cart") || []);
    },
  },
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
      .addCase(clearCartAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCartAuth.fulfilled, (state, action) => {
        state.cartItem = action.payload;
      })
      .addCase(clearCartAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const {
  addCart,
  resetCart,
  changeCartQuantity,
  incrementQuantity,
  decrementQuantity,
  toggleCart,
  clearCart,
  deleteCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
