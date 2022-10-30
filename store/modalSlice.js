import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  currencyOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMenuToggle(state, action) {
      state.menuOpen = action.payload;
    },
    setCurrencyToggle(state, action) {
      state.currencyOpen = action.payload;
    },
  },
});

export const { setMenuToggle, setCurrencyToggle } = modalSlice.actions;

export const getMenuToggle = (state) => state.modal.menuOpen;
export const getCurrencyToggle = (state) => state.modal.currencyOpen;

export default modalSlice.reducer;
