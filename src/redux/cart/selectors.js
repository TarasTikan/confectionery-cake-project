import { createSelector } from "@reduxjs/toolkit";

export const getCartItems = (state) => state.cart.cartItem;
export const openCartItems = (state) => state.cart.isOpenCart;
export const getMode = (state) => state.cart.mode;
export const getCartId = (state) => state.cart.cartId;

export const getCartSumItems = createSelector([getCartItems], (cart) => {
    
    return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )
})