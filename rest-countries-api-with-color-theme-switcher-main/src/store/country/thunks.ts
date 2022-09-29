import { createAsyncThunk } from "@reduxjs/toolkit";
import { CountriesAPI } from "../../api/CountriesAPI";

export const getCountryByCode = createAsyncThunk(
  "country/code",
  async (code: string, { dispatch }) => {
    const data = await CountriesAPI.getByCode(code);
    if (data[0].borders) {
      dispatch(getBorderCountries(data[0].borders));
    }
    return data;
  }
);

export const getBorderCountries = createAsyncThunk(
  "country/borders",
  async (codes: string[]) => {
    return await CountriesAPI.getBorderCountries(codes);
  }
);
