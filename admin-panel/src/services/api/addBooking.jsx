import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const addBooking = createApi({
  reducerPath: "addBopoking",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://10.42.0.1:3000/api/v1",
  }),
  tagTypes: ["Bookings"],
  endpoints: (builder) => ({
    addBookingDetails: builder.mutation({
      query: (data) => ({
        url: "/add/booking",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bookings"],
    }),
    // bookings
    getAvaliableBooking: builder.query({
      query: () => "/",
      providesTags: ["Bookings"],
    }),
    getAllBookingDetails: builder.query({
      query: () => "/booking/details/",
      providesTags: ["Bookings"],
    }),
    getEditBooking: builder.query({
      query: (id) => `/booking/edit/${id}`,
    }),
  }),
});

export const {
  useAddBookingDetailsMutation,
  useGetAvaliableBookingQuery,
  useGetAllBookingDetailsQuery,
  useGetEditBookingQuery,
} = addBooking;
