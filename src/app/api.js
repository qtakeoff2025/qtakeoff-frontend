// src/app/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // replace with your store slice
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // ✅ correct format
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
