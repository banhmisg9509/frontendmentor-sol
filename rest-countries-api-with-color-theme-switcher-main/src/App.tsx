import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Countries from "./pages/Countries";
import CountryDetail from "./pages/CountryDetail";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_BASE_NAME}>
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
