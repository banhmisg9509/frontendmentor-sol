import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ToggleDesign() {
  const location = useLocation();
  const navigate = useNavigate();

  const [currentState, setCurrentState] = useState("");

  useEffect(() => {
    if (location.pathname !== "/design") {
      setCurrentState(location.pathname);
    }
  }, [location.pathname]);

  return (
    <button
      className="fixed right-0 top-0 bg-green-500 w-10 h-10 text-white font-bold rounded-full"
      onClick={() => {
        if (location.pathname === currentState) {
          navigate("/design");
        } else {
          navigate(currentState);
        }
      }}
    >
      D
    </button>
  );
}
