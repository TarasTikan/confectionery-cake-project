import { createAsyncThunk } from "@reduxjs/toolkit";
import { superbase } from "../../lib/supabaseClient";

export const initModeCart = createAsyncThunk(
  "cart/initModeCart",
  async (_, thunkAPI) => {
    try {
      const { data: authData, error: authError } =
        await superbase.auth.getUser();
      if (authError) throw new Error("Failed to get user");
      const userId = authData?.user?.id;
      return userId ? "auth" : "guest";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOrCreateCart = createAsyncThunk(
  "cart/getOrCreateCart",
  async (_, thunkAPI) => {
    try {
      const { data: authData, error: authError } =
        await superbase.auth.getUser();

      if (authError) throw new Error("User not found");
      const userId = authData?.user?.id;
      if (!userId) throw new Error("No authenticated user");

      const { data: cartData, error: cartError } = await superbase
        .from("carts")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();
      if (cartError) throw new Error("Cart not found");
      if (cartData) return cartData;

      const { data: newCartData, error: newCartError } = await superbase
        .from("carts")
        .insert({ user_id: userId })
        .select()
        .single();
      if (newCartError) throw new Error("Failed to create cart");
      return newCartData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (cartId, thunkAPI) => {
    try {
      const { data: cartItemsData, error: cartItemsError } = await superbase
        .from("cart_items")
        .select("*")
        .eq("cart_id", cartId);
      if (cartItemsError) throw new Error("Failed to fetch cart items");
      return cartItemsData ?? [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItemToCartGuest = createAsyncThunk(
  "cart/addItemToCartGuest",
  async (product, thunkAPI) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];

    const idx = cart.findIndex((i) => i.id === product.id);
    if (idx !== -1) cart[idx].quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));

    return cart;
  }
);
export const addItemToCartAuth = createAsyncThunk(
  "cart/addItemToCartAuth",
  async ({ cartId, product }, thunkAPI) => {
    try {
      if (!cartId) throw new Error("Cart ID is required");
      if (!product || !product.id) throw new Error("Product is required");

      const { data: productData, error: productError } = await superbase
        .from("cart_items")
        .select("*")
        .eq("cart_id", cartId)
        .eq("product_id", product.id)
        .maybeSingle();
      if (productError) throw new Error("Failed to fetch product in cart");

      if (productData) {
        const { data: updatedProductData, error: updateError } = await superbase
          .from("cart_items")
          .update({ quantity: productData.quantity + 1 })
          .eq("id", productData.id)
          .select()
          .single();
        if (updateError) throw new Error("Failed to update product quantity");
        return updatedProductData;
      }

      const payload = {
        cart_id: cartId,
        product_id: String(product.id),
        title: product.title ?? "",
        image_url: product.image_url ?? "",
        price: product.price ?? 0,
        quantity: 1,
      };

      const { data: newProductData, error: newProductError } = await superbase
        .from("cart_items")
        .insert(payload)
        .select(
          "id, created_at, cart_id, product_id, title, image_url, price, quantity"
        )
        .single();
      if (newProductError) throw new Error("Failed to add product to cart");
      return newProductData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItemFromCartGuest = createAsyncThunk(
  "cart/removeItemFromCartGuest",
  async (productId, thunkAPI) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const deleteInCartItems = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(deleteInCartItems));
    return deleteInCartItems;
  }
);

export const removeItemFromCartAuth = createAsyncThunk(
  "cart/removeItemFromCartAuth",
  async (productId, thunkAPI) => {
    try {
      if (!productId) throw new Error("itemId is required");

      const { error } = await superbase
        .from("cart_items")
        .delete()
        .eq("id", productId);
      if (error) throw error;

      return { productId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const incrementQuantityGuest = createAsyncThunk(
  "cart/incrementQuantityGuest",
  async (product, thunkAPI) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
      
    const findIndexProduct = cart.findIndex((item) => item.id === product.id);
    if (findIndexProduct !== -1) {
      cart[findIndexProduct].quantity += 1;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  }
);

export const decrementQuantityGuest = createAsyncThunk(
  "cart/decrementQuantityGuest",
   (product, thunkAPI) => {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const findProductIndex = cart.findIndex((item) => item.id === product.id);
    if (findProductIndex !== -1) {
      cart[findProductIndex].quantity -= 1;
    }
    if (cart[findProductIndex].quantity <= 0) {
      cart.splice(findProductIndex, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    return cart;
  }
);
export const updateCartItemQtyAuth = createAsyncThunk(
  "cart/updateCartItemQty",
  async ({ itemId, quantity }, thunkAPI) => {
    if (!itemId) throw new Error("itemId is required");
    const qty = Number(quantity);
    const { data: productData, error: productError } = await superbase
      .from("cart_items")
      .update({ quantity: qty })
      .eq("id", itemId)
      .select(
        "id, created_at, cart_id, product_id, title, image_url, price, quantity"
      )
      .single();

    if (productError) throw productError;
    return productData;
  }
);

export const clearCartGuest = createAsyncThunk(
  "cart/clearCartGuest",
  async (id) => {
    return [];
  }
);
export const clearCartAuth = createAsyncThunk(
  "cart/clearCart",
  async ({ cartId }, thunkAPI) => {
    try {
      if (!cartId) throw new Error("cartId is required");

      const { error } = await superbase
        .from("cart_items")
        .delete()
        .eq("cart_id", cartId);
      if (error) throw error;

      return { cartId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCart = createAsyncThunk(
  "cart/toggleCart",
  async (bool, thunkAPI) => {
    return bool;
  }
);
