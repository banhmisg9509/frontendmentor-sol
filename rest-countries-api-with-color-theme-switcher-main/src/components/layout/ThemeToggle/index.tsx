import { IoMoonOutline } from "react-icons/io5";

export default function ThemeToggle() {
  return (
    <button className="flex gap-3">
      <IoMoonOutline />
      <span className="font-semibold text-sm">Dark Mode</span>
    </button>
  );
}
