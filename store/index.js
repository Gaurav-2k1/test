import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import currencyReducer from "./currencySlice";

const reducers = combineReducers({
  modal: modalReducer,
  currency: currencyReducer,
});

const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
