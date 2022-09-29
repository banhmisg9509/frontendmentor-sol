import { Country } from "../models/Country";
import httpClient from "./httpClient";

export const CountriesAPI = {
  all: async (): Promise<Country[]> => {
    return await httpClient.get(
      "/all?fields=name,region,capital,population,flags,cioc"
    );
  },
  getByCode: async (code: string): Promise<Country[]> => {
    return await httpClient.get(`/alpha/${code}`);
  },
  getBorderCountries: async (codes: string[]): Promise<Country[]> => {
    return await httpClient.get(`/alpha?codes=${codes}&fields=name,cioc`);
  },
};
