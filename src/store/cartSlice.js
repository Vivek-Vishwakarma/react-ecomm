import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addtocart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += parseInt(action.payload.price);
      const localCart = JSON.stringify(state);
      localStorage.setItem("Redux Cart", localCart);
    },
    removeCart: (state, action) => {
      state.quantity -= 1;
      const prod = state.products.filter(
        (element) => element.id !== action.payload.id
      );
      state.products = prod;
      let bill = 0;
      prod.forEach((e) => {
        bill = bill + parseInt(e.price);
      });
      state.total = bill;
    },
  },
});

export const { addtocart, removeCart, loadFromLocal } = cartSlice.actions;

export default cartSlice.reducer;
