import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/molecules/Navbar";

import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import PandeProject from "./pages/PandeProject";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="pande-project" element={<PandeProject />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
