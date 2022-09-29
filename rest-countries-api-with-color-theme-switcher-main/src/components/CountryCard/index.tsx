import { Link } from "react-router-dom";
import { Country } from "../../models/Country";

interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <Link
      to={`/country/${country.cioc ? country.cioc : country.cca3}`}
      key={country.name.common}
      className="w-[290px] min-h-[365px] sm:min-h-[385px] shadow-lg rounded-lg cursor-pointer dark:bg-blue1"
    >
      <div className="w-full h-[170px]">
        <img
          src={country.flags.svg}
          alt={country.name.common}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-[30px]">
        <p className="text-lg font-bold">{country.name.official}</p>
        <div className="mt-[25px]">
          <p>
            <span className="font-semibold">Population: </span>
            {country.population.toLocaleString("en", { useGrouping: true })}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country.capital?.toString()}
          </p>
        </div>
      </div>
    </Link>
  );
}
