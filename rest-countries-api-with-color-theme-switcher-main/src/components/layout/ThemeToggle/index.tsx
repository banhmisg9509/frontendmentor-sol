import { useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleTheme } from "../../../store/theme/themeSlice";

export default function ThemeToggle() {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.theme);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [mode]);

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <button className="flex gap-3" onClick={() => handleChangeTheme()}>
      <IoMoonOutline />
      <span className="font-semibold text-sm">Dark Mode</span>
    </button>
  );
}
