import { createAsyncThunk } from "@reduxjs/toolkit";
import { CountriesAPI } from "../../api/CountriesAPI";

export const getAllCountries = createAsyncThunk("countries/all", async () => {
  return await CountriesAPI.all();
});
