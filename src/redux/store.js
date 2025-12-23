import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { filtersReducer } from "./filtersSlice";
import { cartReducer } from "./cartSlice";
import { authReducer } from "./auth/authSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categoryProducts: filtersReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});
