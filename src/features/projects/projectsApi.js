// src/features/projects/projectsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/projects/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("access"); // <-- fetch token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // <-- include in request
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Projects"],
  // Add refetchOnMountOrArgChange to ensure fresh data
  refetchOnMountOrArgChange: 30, // Refetch if data is older than 30 seconds
  endpoints: (builder) => ({
    createProject: builder.mutation({
      query: (data) => ({
        url: "create/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Projects"], // this will refresh project list
      // Cache invalidation happens automatically via invalidatesTags
    }),
    getProjects: builder.query({
      query: () => "list/?bypass_cache=true", // Force bypass cache for debugging
      providesTags: ["Projects"],
      // Add cache timeout to prevent stale data
      keepUnusedDataFor: 60, // Keep data for 60 seconds
    }),
    getProjectDetail:builder.query({
      query:(projectId)=>`detail/${projectId}/`,
      providesTags:["Projects"]
    }),
    deleteProject:builder.mutation({
      query:(projectId)=>({
        url:`delete/${projectId}/`,
        method:"DELETE"
      }),
      invalidatesTags:["Projects"]
    }),
    updateProject: builder.mutation({
      query: ({ projectId, ...data }) => ({
        url: `update/${projectId}/`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Projects"],
    }),

  }),
});

export const { useCreateProjectMutation,useGetProjectsQuery, useGetProjectDetailQuery,useDeleteProjectMutation,useUpdateProjectMutation  } = projectsApi;
