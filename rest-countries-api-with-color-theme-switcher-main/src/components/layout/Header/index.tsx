import ThemeToggle from "../ThemeToggle";

interface Props {}

export default function Header({}: Props) {
  return (
    <div className="shadow-sm dark:bg-blue1">
      <div className="flex justify-between items-center h-[90px] px-8 sm:px-0 container mx-auto">
        <h1 className="font-bold text-base sm:text-2xl">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </div>
  );
}
