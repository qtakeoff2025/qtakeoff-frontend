import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/" }),
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "projects/",
    }),
    getEstimate: builder.query({
      query: (id) => `estimates/${id}/`,
    }),
  }),
});

export const { useGetProjectsQuery, useGetEstimateQuery } = apiSlice;
