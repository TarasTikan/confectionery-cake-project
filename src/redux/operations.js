import axios from "axios";

axios.defaults.baseURL = "<https://69401cb9993d68afba6b04c1.mockapi.io>"


export const fetchCart = createAsyncThunk("cart/fetchAll", async () => {
  const response = await axios.get("/cart");
  return response.data;
});


// export const fetchCartItems = createAsyncThunk("cart/fetchAll", async () => {
//   const response = await axios.get("/cart");
//   return response.data;
// });