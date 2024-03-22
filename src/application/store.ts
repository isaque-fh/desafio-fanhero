import { userApi } from './services/userAPi';
import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
    ...options
  });

export const store = createStore();
