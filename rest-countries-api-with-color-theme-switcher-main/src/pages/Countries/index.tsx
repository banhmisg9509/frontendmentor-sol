import CountriesList from "./components/CountriesList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

export default function Countries() {
  return (
    <div className="py-6 min-h-screen">
      <div className="container mx-auto flex flex-col gap-[42px] px-4 sm:px-0 sm:flex-row sm:justify-between sm:items-center">
        <SearchBar />
        <FilterBar />
      </div>
      <CountriesList />
    </div>
  );
}
