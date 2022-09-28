import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Country } from "../../models/Country";
import { getAllCountries } from "./thunks";

export interface CountriesState {
  countries: Country[];
  filterByRegion: string;
  filterByName: string;
}

const initialState: CountriesState = {
  countries: [],
  filterByRegion: "",
  filterByName: "",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    filterByName(state, action: PayloadAction<string>) {
      state.filterByName = action.payload;
    },
    filterByRegion(state, action: PayloadAction<string>) {
      if (action.payload === "All") {
        state.filterByRegion = "";
        return;
      }
      state.filterByRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { filterByName, filterByRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
