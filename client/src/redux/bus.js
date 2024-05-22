import { createSlice } from "@reduxjs/toolkit";
import { apiCall } from "../services/api/apiCall";

const busSlice = createSlice({
  name: " bus",
  initialState: {
    transports: [],
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      apiCall.endpoints.getAllBookings.matchFulfilled,
      (state, action) => {
        return { ...state, transports: action.payload };
      }
    );
  },
});

export default busSlice;
