import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    sort: "",
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  },
  reducers: {
    sortByPrice: (state, action) => {
      state.sort = action.payload;
      console.log(state.sort);
    },
    sortByStar: (state, action) => {
      state.byRating = action.payload;
    },
    sortByDelivery: (state, action) => {
      state.byFastDelivery = !state.byFastDelivery;
    },
    sortByStock: (state, action) => {
      state.byStock = !state.byStock;
    },
    searchByQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    clearAll: (state, action) => {
      state.sort = "";
      state.byStock = false;
      state.byFastDelivery = false;
      state.byRating = 0;
      state.searchQuery = "";
    },
  },
});

export const {
  sortByPrice,
  sortByStar,
  clearAll,
  sortByDelivery,
  sortByStock,
  searchByQuery,
} = filterSlice.actions;

export default filterSlice.reducer;
