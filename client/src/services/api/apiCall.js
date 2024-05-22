import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCall = createApi({
  reducerPath: "api",
  tagTypes: ["API"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.42.0.1:3000/api/v1",
  }),
  endpoints: (builder) => ({
    // get all bookings
    getAllBookings: builder.query({
      query: () => "/",
      providesTags: ["API"],
    }),
    // get single booking details
    getSingleBookingDetails: builder.query({
      query: (id) => `/booking/details/${id}`,
    }),
    // add booking
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/add/booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["API"],
    }),
  }),
});

export const {
  useGetAllBookingsQuery,
  useGetSingleBookingDetailsQuery,
  useAddBookingMutation,
} = apiCall;
