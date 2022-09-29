import { useEffect } from "react";
import CountryCard from "../../../../components/CountryCard";
import { filterCountries } from "../../../../store/countries/selector";
import { getAllCountries } from "../../../../store/countries/thunks";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

export default function CountriesList() {
  const dispatch = useAppDispatch();
  const countries = useAppSelector(filterCountries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <div className="xl:max-w-[1580px] container mx-auto mt-10 flex flex-col items-center gap-11 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-20 sm:place-items-center">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
