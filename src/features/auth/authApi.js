// src/features/auth/authApi.js
import { apiSlice } from "../../app/api"; // your base RTK Query api

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Register endpoint
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "users/register/", // <-- append to baseUrl
        method: "POST",
        body: userData,
      }),
    }),
    
    // Login endpoint
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "users/login/",
        method: "POST",
        body: userData,
      }),
    }),

    
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation
} = authApi;
