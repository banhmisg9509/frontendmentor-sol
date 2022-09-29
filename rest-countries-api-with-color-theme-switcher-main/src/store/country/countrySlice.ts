import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../models/Country";
import { getBorderCountries, getCountryByCode } from "./thunks";

export interface CountryState {
  country: Country | null;
  borders: Country[];
}

const initialState: CountryState = {
  country: null,
  borders: [],
};

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountryByCode.fulfilled, (state, action) => {
      state.country = action.payload[0];
    });

    builder.addCase(getBorderCountries.fulfilled, (state, action) => {
      state.borders = action.payload;
    });
  },
});

export default countrySlice.reducer;
