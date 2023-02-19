import { useState} from "react";
import Header from "./components/Header";
import CartList from "./components/CartList";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import About from "./components/pages/About";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/pages/ContectUs";
import ProductDetails from "./components/pages/ProductDetails";





const App = () => {
  const [showCart, setShowCart] = useState(false);

  const handleShow = (value) => {
    setShowCart(value);
  }; 

  return (
    <>
      
      <Header handleShow={handleShow} />

      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="store" element={showCart ? <CartList /> : <Store />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs/>}/>
        <Route path="/product/:id" element={<ProductDetails/>} /> 

      
      </Routes>
      
    </>
  );
};

export default App;
