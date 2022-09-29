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
    <div className="mt-10 flex flex-col items-center gap-11">
      {countries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
}
