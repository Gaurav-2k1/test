import { createSlice } from "@reduxjs/toolkit";
import { isEmpty } from "lodash";

const initialState = {
  token: "",
  userDetails: {},
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
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
  },
});

export const { setToken, logout, setUserDetails } = authSlice.actions;

export const getToken = (state) => state.auth.token;
export const getUserDetails = (state) => state.auth.userDetails;
export default authSlice.reducer;
