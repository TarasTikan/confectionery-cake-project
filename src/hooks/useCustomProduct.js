import { useDispatch, useSelector } from "react-redux";
import {
  clearCustomProduct,
  setComment,
  setDesignElements,
  setForm,
  setSize,
  setTaste,
  setTitleCustom,
} from "../redux/customProduct/customProductSlice";
import {
  getComment,
  getDesignElements,
  getForm,
  getSize,
  getTaste,
  getTitle,
} from "../redux/customProduct/selectors";
import { addCart } from "../redux/cart/cartSlice";
import { nanoid } from "nanoid";
import { getCartId, getMode } from "../redux/cart/selectors";
import { addItemToCartAuth } from "../redux/cart/operations";

export const useCustomProduct = () => {
  const dispatch = useDispatch();

  const handleFormChange = (e) => {
    dispatch(setForm(e.target.value));
  };
  const handleSizeChange = (e) => {
    dispatch(setSize(e.target.value));
  };

  const handleTasteChange = (e) => {
    dispatch(setTaste(e.target.value));
  };

  const handleDesignChange = (e) => {
    dispatch(setDesignElements(e.target.value));
  };

  const handleCommentChange = (e) => {
    dispatch(setComment(e.target.value));
  };

  const handleTitleChange = (e) => {
    dispatch(setTitleCustom(e.target.value));
  };
  return {
    handleFormChange,
    handleSizeChange,
    handleTasteChange,
    handleDesignChange,
    handleCommentChange,
    handleTitleChange,
  };
};

export const useAddCustomProductInCart = () => {
  const form = useSelector(getForm);
  const size = useSelector(getSize);
  const taste = useSelector(getTaste);
  const designElements = useSelector(getDesignElements);
  const comment = useSelector(getComment);
  const title = useSelector(getTitle);
  const dispatch = useDispatch();

  const modeCart = useSelector(getMode);
  const cartId = useSelector(getCartId);
  const handleAddCustomProduct = (e) => {
    if (!form) {
      return alert("Оберіть будь ласка форми");
    }
    if (!size) {
      return alert("Оберіть будь ласка розмір");
    }
    if (!taste) {
      return alert("Оберіть будь ласка смак");
    }

    if (!title) {
      return alert("Вкажіть назву вашого десерту");
    }
    const product = {
      category: "Кастомний десерт",
      description: comment,
      image_url:
        "https://cgqujdwdsgcvzfqrsgmu.supabase.co/storage/v1/object/public/products/pageImages/customProduct.jpg",
      title: title,
      type: "cake",
      weight: size,
      price: 0,
      quantity: 1,
      form: form,
      taste: taste,
      design: designElements,
      id: nanoid(),
    };
    if (modeCart === "guest") {
      dispatch(addCart(product));
    }

    if (cartId) {
      dispatch(addItemToCartAuth({ cartId, product: product }));
    }

    dispatch(clearCustomProduct());
  };
  return handleAddCustomProduct;
};
