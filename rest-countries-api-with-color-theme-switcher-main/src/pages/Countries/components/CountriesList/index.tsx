import CountryCard from "../../../../components/CountryCard";
import { useGetAllCountries } from "../../../../hooks/queries/useGetAllCountries";

export default function CountriesList() {
  const { data, error, isLoading } = useGetAllCountries();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error {error.toString()}</p>;
  }
  return (
    <>
      {data?.length && (
        <div className="mt-10 flex flex-col items-center gap-11">
          {data.map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
        </div>
      )}
    </>
  );
}
