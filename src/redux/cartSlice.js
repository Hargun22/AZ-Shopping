import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
      state.products.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;
export const selectQuantity = (state) => state.cart.quantity;
export const selectTotal = (state) => state.cart.total;
export const selectProducts = (state) => state.cart.products;

export default cartSlice.reducer;
