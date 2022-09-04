import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";

const reducers = combineReducers({
  modal: modalReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
