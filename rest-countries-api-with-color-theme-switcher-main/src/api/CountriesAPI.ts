import { Country } from "../models/Country";
import httpClient from "./httpClient";

export const CountriesAPI = {
  all: async (): Promise<Country[]> => {
    return await httpClient.get("/all");
  },
};
