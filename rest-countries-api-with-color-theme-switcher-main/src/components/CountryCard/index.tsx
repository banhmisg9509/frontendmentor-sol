import { Country } from "../../models/Country";

interface Props {
  country: Country;
}

export default function CountryCard({ country }: Props) {
  return (
    <div
      key={country.name.common}
      className="w-[290px] min-h-[365px] shadow-lg rounded-lg cursor-pointer"
    >
      <div className="w-full flex-shrink-0">
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
            <span className="font-semibold">Population:</span>{" "}
            {country.population}
          </p>
          <p>
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}
