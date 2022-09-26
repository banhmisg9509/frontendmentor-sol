import { useDesignContext } from "../../context/DesignContext";

export default function ToggleDesign() {
  const { toggleDesign } = useDesignContext();
  return (
    <button
      className="fixed right-0 top-0 bg-green-500 w-10 h-10 text-white font-bold rounded-full"
      onClick={() => toggleDesign()}
    >
      D
    </button>
  );
}
