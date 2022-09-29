import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCountryByCode } from "../../store/country/thunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface Props {}

export default function CountryDetail({}: Props) {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { country, borders } = useAppSelector((state) => state.country);

  useEffect(() => {
    if (id) {
      dispatch(getCountryByCode(id));
    }
  }, [id]);

  return (
    <div className="py-10 px-8 sm:px-0 container mx-auto">
      <Link
        to="/"
        className="flex items-center justify-center w-[112px] h-[35px] rounded-sm shadow-[#00000059_0px_0px_10px] dark:bg-blue1"
      >
        <BsArrowLeft />
        <span>Back</span>
      </Link>
      {country && (
        <div className="mt-12 flex flex-col lg:flex-row lg:items-center gap-20 lg:justify-between">
          <div className="w-full lg:max-w-[50%]">
            <img src={country.flags.svg} alt={country.name.common} />
          </div>
          <div className="xl:ml-auto">
            <h1 className="text-[22px] md:text-3xl font-bold mt-5">
              {country.name.official}
            </h1>
            <div className="flex flex-col md:flex-row xl:gap-32 gap-10 mt-8">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">Native Name: </span>
                  {Object.values(country.name.nativeName)[0].official}
                </p>
                <p>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString("en", {
                    useGrouping: true,
                  })}
                </p>
                <p>
                  <span className="font-semibold">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Subregion: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {country.capital}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">Top Level Domain: </span>
                  {country.tld.join(', ')}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {Object.values(country.currencies)
                    .map(({ name }) => name)
                    .join(", ")}
                </p>
                <p>
                  <span className="font-semibold">Languages: </span>
                  {Object.values(country.languages).join(', ')}
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-lg font-semibold">Border Countries:</h2>
            <div className="flex items-center gap-3 flex-wrap mt-5">
              {borders.map((country) => (
                <Link
                  key={country.cioc}
                  to={`/country/${country.cioc}`}
                  className="px-4 py-1 rounded-sm shadow-[#00000059_0px_0px_8px] dark:bg-blue1"
                >
                  {country.name.common}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
