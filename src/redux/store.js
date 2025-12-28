import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { filtersReducer } from "./filter/filtersSlice";
import { cartReducer } from "./cartSlice";
import { authReducer } from "./auth/authSlice";
import { tastesReducer } from "./tastes/tastesSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    categoryProducts: filtersReducer,
    cart: cartReducer,
    auth: authReducer,
    tastes: tastesReducer,
  },
});
