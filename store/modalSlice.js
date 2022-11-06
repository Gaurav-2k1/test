import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
  currencyOpen: false,
  signUpOpen: false,
  loginOpen: false,
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
    setSignUpToggle(state, action) {
      state.signUpOpen = action.payload;
    },
    setLoginToggle(state, action) {
      state.loginOpen = action.payload;
    },
  },
});

export const {
  setMenuToggle,
  setCurrencyToggle,
  setSignUpToggle,
  setLoginToggle,
} = modalSlice.actions;

export const getMenuToggle = (state) => state.modal.menuOpen;
export const getCurrencyToggle = (state) => state.modal.currencyOpen;
export const getSignupToggle = (state) => state.modal.signUpOpen;
export const getLoginToggle = (state) => state.modal.loginOpen;
export default modalSlice.reducer;
