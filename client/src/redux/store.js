import { configureStore } from "@reduxjs/toolkit";
import busSlice from "./bus";
import { apiCall } from "../services/api/apiCall";

export const store = configureStore({
  reducer: {
    bus: busSlice.reducer,
    [apiCall.reducerPath]: apiCall.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCall.middleware),
});
