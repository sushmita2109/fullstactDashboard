import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import ProductList from "./Components/ProductList";
import Charts from "./Components/Charts";
import Country from "./Components/Country";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/chart" element={<Charts />} />
      <Route path="/country" element={<Country />} />
    </Routes>
  );
}

export default App;
