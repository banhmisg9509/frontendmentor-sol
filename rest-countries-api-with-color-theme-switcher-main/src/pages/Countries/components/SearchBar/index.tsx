import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useDebounce from "../../../../hooks/useDebounce";
import { filterByName } from "../../../../store/countries/countriesSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

export default function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { filterByName: name } = useAppSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState(name);

  const debouncedSearchTerm = useDebounce(searchTerm, 100);

  useEffect(() => {
    if (document.activeElement === ref.current) {
      dispatch(filterByName(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="w-full h-[52px] rounded-lg shadow-[rgba(99,99,99,0.2)_0px_1px_5px_0px] relative">
      <AiOutlineSearch
        color="#858585"
        className="absolute text-xl top-1/2 translate-x-[150%] -translate-y-1/2"
      />
      <input
        ref={ref}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
        type="text"
        placeholder="Search for a country..."
        className="w-full h-full py-5 px-3 pl-[20%] rounded-lg focus:outline-none text-sm text-[#858585]"
      />
    </div>
  );
}
