import { useEffect } from "react";
import CountryCard from "../../../../components/CountryCard";
import { getAllCountries } from "../../../../store/countries/thunks";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

export default function CountriesList() {
  const dispatch = useAppDispatch();
  const { countries, filterByName, filterByRegion } = useAppSelector(
    (state) => state.countries
  );

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center gap-11">
      {countries
        .filter((country) => {
          return country.name.official
            .toLowerCase()
            .includes(filterByName.toLowerCase());
        })
        .filter((country) => {
          return country.region.includes(filterByRegion);
        })
        .map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
    </div>
  );
}
