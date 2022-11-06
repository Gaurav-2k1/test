import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "./storage";
import { persistReducer, persistStore } from "redux-persist";
import modalReducer from "./modalSlice";
import currencyReducer from "./currencySlice";
import authReducer from "./authSlice";

const reducers = combineReducers({
  modal: modalReducer,
  currency: currencyReducer,
  auth: authReducer,
});

const persistedReducers = persistReducer(
  { key: "infodal-store", storage },
  reducers
);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    });
  },
});

export const persistor = persistStore(store);
export default store;
