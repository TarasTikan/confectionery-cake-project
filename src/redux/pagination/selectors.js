import { createSelector } from "@reduxjs/toolkit";
import { getProductRangePrice } from "../filter/selectors";
export const getProducts = (state) => state.products.productItem;
export const getCategory = (state) => state.filters.category; 
export const getPage = (state) => state.pagination.page;
export const getPerPage = (state) => state.pagination.perPage;


export const getPaginatedProducts = createSelector(
  [getProductRangePrice, getPage, getPerPage],
  (products, page, perPage) => {
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return products.slice(start, end);
  }
);

export const getPageCount = createSelector(
  [getProductRangePrice, getPerPage],
  (products, perPage) => Math.ceil(products.length / perPage)
);