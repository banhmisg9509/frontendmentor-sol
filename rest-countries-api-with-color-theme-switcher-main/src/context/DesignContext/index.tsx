import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";

const DesignContext = React.createContext({
  design: false,
  toggleDesign: () => {},
});

export default function DesignContextProvider({ children }: PropsWithChildren) {
  const [design, setDesign] = useState(false);

  const toggleDesign = useCallback(() => {
    setDesign((value) => !value);
  }, []);
  return (
    <DesignContext.Provider value={{ design, toggleDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export const useDesignContext = () => useContext(DesignContext);
