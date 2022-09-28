import { useQuery } from "@tanstack/react-query";
import { CountriesAPI } from "../../api/CountriesAPI";

export const useGetAllCountries = () => {
  return useQuery(["getAllCountries"], CountriesAPI.all, {
    staleTime: 5 * 60 * 1000,
  });
};
