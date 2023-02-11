import React,{useState} from "react";
import NavBar, {CartButton} from "./components/Cart/NavBar";
import AvailableItem from "./components/Body/AvailableItem";
import Cart from "./components/Cart/Cart";
import { productsArr} from "./components/Cart/CartItem";
import Header from "./components/LayOut/Header";



const App = (props) => {
  const [showcart, setshowcart] = useState(false);

  const showcartHandler = () => {
    setshowcart(true);
  };
  const deleteHandler = () => {
    setshowcart(false);
  };

  return (
    <div>
       <NavBar />
      <Header />
      
      <CartButton onClick = {showcartHandler}/>
      <AvailableItem products={productsArr} />
      {showcart && <Cart onClick={deleteHandler} />}
    </div>
  );
}
export default App;
