import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "USD",
  updatedCurrencyValue: undefined,
  validatedCouponCode: undefined,
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.currency = action.payload;
    },
    setUpdatedCurrencyValue(state, action) {
      state.updatedCurrencyValue = action.payload;
    },
    setValidatedCouponCode(state, action) {
      state.validatedCouponCode = action.payload;
    },
  },
});

export const { setCurrency, setUpdatedCurrencyValue, setValidatedCouponCode } =
  currencySlice.actions;

export const getCurrency = (state) => state.currency.currency;
export const getUpdatedCurrencyValue = (state) =>
  state.currency.updatedCurrencyValue;
export const getValidatedCouponCode = (state) =>
  state.currency.validatedCouponCode;

export default currencySlice.reducer;
