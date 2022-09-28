import { useLocation, useNavigate } from "react-router-dom";

export default function ToggleDesign() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <button
      className="fixed right-0 top-0 bg-green-500 w-10 h-10 text-white font-bold rounded-full"
      onClick={() => {
        if (location.pathname === "/") {
          navigate("/design");
        } else {
          navigate("/");
        }
      }}
    >
      D
    </button>
  );
}
