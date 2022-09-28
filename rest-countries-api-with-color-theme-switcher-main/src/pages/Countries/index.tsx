import CountriesList from "./components/CountriesList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";

export default function Countries() {
  return (
    <div className="py-6 px-5 min-h-screen">
      <SearchBar />
      <FilterBar />
      <CountriesList />
    </div>
  );
}
