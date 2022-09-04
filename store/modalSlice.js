import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setMenuToggle(state, action) {
      state.menuOpen = action.payload;
    },
  },
});

export const { setMenuToggle } = modalSlice.actions;

export const getMenuToggle = (state) => state.modal.menuOpen;

export default modalSlice.reducer;
