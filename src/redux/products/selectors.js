import { createSelector } from "@reduxjs/toolkit";

export const getProducts = (state) => state.products.productItem;
export const getIsLoading = (state) => state.products.isLoading;
export const getProductsPopular = (state) => state.products.productPopularItem;

export const getProductById = createSelector(
  [getProducts, (_, id) => id],
  (products, id) => products.find((item) => item.id === id)
);

export const getRelatedProducts = createSelector([getProducts, (_, product) => product], (products, product) => products
  .filter(
    (item) => item.category === product.category && item.id !== product.id
  )
  .slice(0, 4))