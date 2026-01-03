import { createSelector } from "@reduxjs/toolkit";

export const getProducts = (state) => state.products.productItem;
export const getProductsPopular = (state) => state.products.productPopularItem;

export const getProductById = createSelector(
  [getProducts, (_, id) => id],
  (products, id) => products.find((item) => item.id === id)
);
