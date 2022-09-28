import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { useDesignContext } from "./context/DesignContext";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  const { design } = useDesignContext();

  if (design) {
    return (
      <div className="min-h-screen bg-blue1 flex justify-center">
        <div className="max-w-[412px]">
          <img
            src="/design/mobile-design-home-light.jpg"
            alt="mobile-design-home-light"
            className="w-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
