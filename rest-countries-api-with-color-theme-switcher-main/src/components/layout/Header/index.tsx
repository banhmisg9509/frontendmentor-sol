import ThemeToggle from "../ThemeToggle";

interface Props {}

export default function Header({}: Props) {
  return (
    <div className="shadow-sm">
      <div className="flex justify-between items-center h-[90px] px-4 sm:px-0 container mx-auto">
        <h1 className="font-bold text-base">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}
