import { getProducts } from "../products/selectors";
import { productsCategory } from "../filter/constans";
import { createSelector } from "@reduxjs/toolkit";

export const getCategory = (state) => state.filters.category;
export const getRangePrice = (state) => state.filters.priceRange;
export const getSelectTastes = (state) => state.filters.selectTastes;
export const getOpenModalFilter = (state) => state.filters.isOpenModalFilter;

export const getFilteredProducts = createSelector(
  [getProducts, getCategory],
  (products, category) => {
    switch (category) {
      case productsCategory.tarts:
        return products.filter((i) => i.type === productsCategory.tarts);

      case productsCategory.cakes:
        return products.filter((i) => i.type === productsCategory.cakes);

      case productsCategory.cupcakes:
        return products.filter((i) => i.type === productsCategory.cupcakes);

      case productsCategory.macarons:
        return products.filter((i) => i.type === productsCategory.macarons);

      default:
        return products;
    }
  }
);

export const getTastesWithProducts = createSelector(
  [getSelectTastes, getFilteredProducts],
  (tastes, products) => {
    if (!tastes) return products;
    if (tastes === "За замовчуванням") return products;
    return products.filter((item) => item.taste === tastes);
  }
);

export const getProductRangePrice = createSelector(
  [getTastesWithProducts, getRangePrice],
  (products, range) => {
    if (Number(range) === 0) return products;
    return products.filter((item) => item.price <= range);
  }
);
