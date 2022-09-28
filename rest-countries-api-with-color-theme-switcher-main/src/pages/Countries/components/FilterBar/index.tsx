import { useMemo, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

export default function FilterBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const regions = useMemo(
    () => ["Africa", "America", "Asia", "Europe", "Oceania"],
    []
  );

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };

  return (
    <div
      onClick={() => setShowMenu((value) => !value)}
      className="relative flex items-center justify-between w-[220px] h-[54px] mt-[42px] p-5 rounded-lg shadow-[rgba(99,99,99,0.2)_0px_1px_5px_0px]"
    >
      <p className="text-sm font-semibold select-none">{selectedRegion}</p>
      {showMenu ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      {showMenu && (
        <ul className="absolute flex flex-col text-sm font-semibold w-full rounded-lg top-[108%] py-2 left-0 shadow-[rgba(99,99,99,0.2)_0px_1px_5px_0px] bg-white">
          {regions &&
            regions.map((region) => (
              <li
                key={region}
                onClick={() => handleSelectRegion(region)}
                className="hover:bg-slate-100 cursor-pointer px-5 py-1 select-none"
              >
                <span>{region}</span>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
