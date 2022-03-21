import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/molecules/Navbar";

import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import PandeProjects from "./pages/PandeProjects";
import Home from "./pages/Home";
import Footer from "./components/molecules/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="pande-projects" element={<PandeProjects />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
