import { useState, useContext } from "react";
import Header from "./components/Header";
import CartList from "./components/CartList";
import { Cart } from "./components/CartContext";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const { cart, addToCart } = useContext(Cart);

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow} />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="store" element={showCart ? <CartList /> : <Store />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
