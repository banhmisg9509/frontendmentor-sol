import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ToggleDesign from "./components/ToggleDesign";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";
import DesignPage from "./pages/DesignPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/country/:id" element={<CountryDetail />} />
          <Route path="/design" element={<DesignPage />} />
        </Routes>
        <ToggleDesign />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
