import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
    logout(state, action) {
      state.token = "";
    },
  },
});

export const { setToken, logout } = authSlice.actions;

export const getToken = (state) => state.auth.token;

export default authSlice.reducer;
