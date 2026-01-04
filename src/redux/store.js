import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { filtersReducer } from "./filter/filtersSlice";
import { cartReducer } from "./cart/cartSlice";
import { authReducer } from "./auth/authSlice";
import { tastesReducer } from "./tastes/tastesSlice";
import { paginationReducer } from "./pagination/paginationSlice";
import { customProductReducer } from "./customProduct/customProductSlice";
export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
    auth: authReducer,
    tastes: tastesReducer,
    pagination: paginationReducer,
    customProduct: customProductReducer
  },
});
