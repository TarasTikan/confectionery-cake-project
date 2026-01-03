import { useDispatch, useSelector } from "react-redux";
import { getCartId, getMode, openCartItems } from "../redux/cart/selectors";
import { addCart, toggleCart } from "../redux/cart/cartSlice";
import { addItemToCartAuth } from "../redux/cart/operations";
import { useCallback } from "react";

export const useCartActions = () => {
  const dispatch = useDispatch();
  const modeCart = useSelector(getMode);
  const isOpenCart = useSelector(openCartItems);
  const cartId = useSelector(getCartId);

  const toggleCartModal = useCallback(() => {
    dispatch(toggleCart(!isOpenCart));
  }, [dispatch, isOpenCart]);

  const addToCart = useCallback(
    (product) => {
      if (!product) return;

      if (modeCart === "guest") {
        dispatch(addCart(product));
        return;
      }

      if (cartId) {
        dispatch(addItemToCartAuth({ cartId, product }));
      }
    },
    [dispatch, modeCart, cartId]
  );

  const addToCartAndOpen = useCallback(
    (product) => {
      addToCart(product);
      toggleCartModal();
    },
    [addToCart, toggleCartModal]
  );

  return { addToCart, addToCartAndOpen, toggleCartModal };
};
