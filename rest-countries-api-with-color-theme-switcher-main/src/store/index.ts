import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./countries/countriesSlice";
import countryReducer from "./country/countrySlice";
import themeReducer from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    country: countryReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
