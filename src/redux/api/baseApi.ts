import type { IBooks } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-five-drab.vercel.app/api",
  }),
  tagTypes: ["Book", "Borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["Book"],
    }),
    createBook: builder.mutation<IBooks, Partial<IBooks>>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    updateBook: builder.mutation<IBooks, Partial<IBooks>>({
      query: (book) => ({
        url: `/books/${book._id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Book"],
    }),
    borrowBook: builder.mutation({
      query: (borrowData) => ({
        url: `/borrow`,
        method: "POST",
        body: borrowData,
      }),
      invalidatesTags: ["Borrow"],
    }),
    getBorrowedBooks: builder.query({
      query: () => "/borrow",
      providesTags: ["Borrow"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useBorrowBookMutation,
  useGetBorrowedBooksQuery,
} = baseApi;
