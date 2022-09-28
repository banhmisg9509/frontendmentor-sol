import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ToggleDesign from "./components/ToggleDesign";
import DesignContextProvider from "./context/DesignContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DesignContextProvider>
        <App />
        <ToggleDesign />
        <ReactQueryDevtools initialIsOpen={false} />
      </DesignContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
