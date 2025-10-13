// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import { projectsApi } from "../features/projects/projectsApi";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer, // <--- RTK Query reducer
    [projectsApi.reducerPath]: projectsApi.reducer, // add your projects reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          // Ignore these action types
          'persist/PERSIST',
          'persist/REHYDRATE',
        ],
      },
    }).concat(authApi.middleware, projectsApi.middleware), // <--- RTK Query middleware
});
