import { configureStore } from "@reduxjs/toolkit";
import { addBooking } from "../services/api/addBooking";
import user from "./user";

const store = configureStore({
  reducer: {
    user,
    [addBooking.reducerPath]: addBooking.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(addBooking.middleware),
});

export default store;
