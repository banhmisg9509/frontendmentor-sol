import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "./countries/countriesSlice";
import { countrySlice } from "./country/countrySlice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    country: countrySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
