import ThemeToggle from "../ThemeToggle";

interface Props {}

export default function Header({}: Props) {
  return (
    <div className="flex justify-between items-center h-[90px] px-4 shadow-sm">
      <h1 className="font-bold text-base">Where in the world?</h1>
      <ThemeToggle />
    </div>
  );
}
