import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "INR",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export const getCurrency = (state) => state.currency.currency;

export default currencySlice.reducer;
