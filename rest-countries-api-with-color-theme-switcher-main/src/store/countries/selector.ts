import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const filterCountries = createSelector(
  (state: RootState) => state.countries.countries,
  (state: RootState) => state.countries.filterByName,
  (state: RootState) => state.countries.filterByRegion,
  (countries, name, region) => {
    return countries
      .filter((country) => {
        return country.name.official.toLowerCase().includes(name.toLowerCase());
      })
      .filter((country) => {
        return country.region.includes(region);
      });
  }
);
